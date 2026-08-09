import { defaultLang, ui, type Lang, type UIKey } from './ui';

/** Base path khi deploy dưới thư mục con (GitHub Pages: '/g12'). Rỗng ở gốc. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) return pathname.slice(BASE.length) || '/';
  return pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = stripBase(url.pathname).split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Dựng đường dẫn theo ngôn ngữ, kèm base path nếu có.
 * Tiếng Việt ở gốc (`/du-an`), tiếng Anh có tiền tố (`/en/du-an`).
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`;
  const suffix = clean === '/' ? '' : clean;
  const localized = lang === defaultLang ? suffix || '/' : `/${lang}${suffix}`;
  return `${BASE}${localized}` || '/';
}

/** Đường dẫn tương đương ở ngôn ngữ kia — dùng cho nút chuyển ngôn ngữ. */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const noBase = stripBase(url.pathname);
  const stripped = noBase.replace(new RegExp(`^/${current}(?=/|$)`), '');
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
