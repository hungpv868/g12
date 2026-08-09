import { defaultLang, ui, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Dựng đường dẫn theo ngôn ngữ. Tiếng Việt ở gốc (`/du-an`),
 * tiếng Anh có tiền tố (`/en/du-an`).
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`;
  const base = clean === '/' ? '' : clean;
  return lang === defaultLang ? base || '/' : `/${lang}${base}`;
}

/** Đường dẫn tương đương ở ngôn ngữ kia — dùng cho nút chuyển ngôn ngữ. */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const stripped = url.pathname.replace(new RegExp(`^/${current}(?=/|$)`), '');
  return localizePath(stripped || '/', target);
}

/** Slug điều hướng dùng chung cho cả 2 ngôn ngữ (giữ tiếng Việt cho SEO nội địa). */
export const routes = {
  home: '/',
  about: '/about-us',
  projects: '/du-an',
  services: '/dich-vu',
  blog: '/blog',
  contact: '/lien-he',
} as const;
