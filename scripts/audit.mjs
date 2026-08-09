// Two Playwright tabs: "desktop" (1440×900) and "test mobile" (390×844).
// Sweeps every page, takes full-page screenshots, collects console/layout errors.
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const BASE = 'http://127.0.0.1:4321';
const OUT = new URL('../.audit', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const routes = [
  ['home', '/'],
  ['about', '/about-us'],
  ['services', '/dich-vu'],
  ['projects', '/du-an'],
  ['blog', '/blog'],
  ['post-chois', '/blog/bat-mi-cong-thuc-glow-up-choi-s-pilates'],
  ['post-brief', '/blog/tu-brief-den-thanh-qua-hanh-trinh-mot-y-tuong-tai-g12'],
  ['contact', '/lien-he'],
  ['en-home', '/en/'],
  ['en-blog', '/en/blog'],
];

const browser = await chromium.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-gpu'],
});

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
});

const tabs = [
  { name: 'desktop', page: await desktop.newPage() },
  { name: 'mobile', page: await mobile.newPage() },
];

const report = [];
for (const { name, page } of tabs) {
  const consoleErrs = [];
  page.on('console', (m) => m.type() === 'error' && consoleErrs.push(m.text().slice(0, 160)));
  page.on('pageerror', (e) => consoleErrs.push('PAGEERROR ' + String(e).slice(0, 160)));

  for (const [key, path] of routes) {
    consoleErrs.length = 0;
    const resp = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(600);
    // scroll through the whole page so scroll-reveal completes, then back to top
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);

    const audit = await page.evaluate(() => {
      const issues = [];
      const de = document.documentElement;
      // horizontal overflow
      if (de.scrollWidth > de.clientWidth + 1)
        issues.push(`hscroll: scrollWidth ${de.scrollWidth} > viewport ${de.clientWidth}`);
      // elements spilling past the right edge of the viewport
      document.querySelectorAll('body *').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > de.clientWidth + 8 && getComputedStyle(el).position !== 'fixed') {
          const cls = (el.className + '').slice(0, 50);
          const tag = el.tagName.toLowerCase();
          if (!issues.some((i) => i.includes(tag + '.' + cls)))
            issues.push(`overflow-right: ${tag}.${cls} right=${Math.round(r.right)}`);
        }
      });
      // broken images
      document.querySelectorAll('img').forEach((img) => {
        if (img.complete && img.naturalWidth === 0)
          issues.push(`broken-img: ${img.getAttribute('src')?.slice(0, 80)}`);
      });
      // glued heading text (two words run together with no space) — a bug we've hit before
      document.querySelectorAll('h1,h2,h3').forEach((h) => {
        const t = h.textContent || '';
        const m = t.match(/[a-zàáạãảâăậ][A-ZĐ]|[?!.][A-ZĐ]/);
        if (m) issues.push(`glued-heading: "${t.trim().slice(0, 60)}" tại "${m[0]}"`);
      });
      return { issues: issues.slice(0, 12), title: document.title };
    });

    await page.screenshot({ path: `${OUT}/${name}-${key}.png`, fullPage: true });
    report.push({
      tab: name,
      page: key,
      status: resp?.status(),
      console: [...consoleErrs],
      issues: audit.issues,
    });
  }
}

// quick interaction test on the mobile tab: drawer + theme + blog filter
const mp = tabs[1].page;
await mp.goto(BASE + '/', { waitUntil: 'networkidle' });
await mp.click('[data-drawer-open]');
await mp.waitForTimeout(500);
const drawerVisible = await mp.evaluate(() => {
  const d = document.querySelector('[data-drawer]');
  return d && !d.classList.contains('invisible');
});
await mp.click('[data-drawer-panel] [data-drawer-close]');
await mp.waitForTimeout(400);
await mp.click('[data-theme-toggle]');
const theme = await mp.evaluate(() => document.documentElement.dataset.theme);
await mp.goto(BASE + '/blog', { waitUntil: 'networkidle' });
await mp.click('[data-filter="casestudy"]');
const visibleCards = await mp.evaluate(
  () => document.querySelectorAll('.post-card:not([hidden])').length,
);
report.push({
  tab: 'mobile-interact',
  page: 'drawer/theme/filter',
  status: 200,
  console: [],
  issues: [
    drawerVisible ? null : 'drawer không mở',
    theme === 'dark' ? null : 'theme toggle không ăn',
    visibleCards === 2 ? null : `filter casestudy ra ${visibleCards} bài (kỳ vọng 2)`,
  ].filter(Boolean),
});

console.log(JSON.stringify(report, null, 1));
await browser.close();
