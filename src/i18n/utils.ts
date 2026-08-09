import { defaultLang, ui, type Lang, type UIKey } from './ui';

/** Base path when deployed under a subdirectory (GitHub Pages: '/g12'). Empty at the root. */
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
 * Builds a language-aware path, including the base path if any.
 * Vietnamese lives at the root (`/du-an`), English is prefixed (`/en/du-an`).
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+|\/+$/g, '')}`;
  const suffix = clean === '/' ? '' : clean;
  const localized = lang === defaultLang ? suffix || '/' : `/${lang}${suffix}`;
  return `${BASE}${localized}` || '/';
}

/** Equivalent path in the other language — used by the language switcher. */
export function alternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const noBase = stripBase(url.pathname);
  const stripped = noBase.replace(new RegExp(`^/${current}(?=/|$)`), '');
  return localizePath(stripped || '/', target);
}

/** Navigation slugs shared by both languages (kept in Vietnamese for local SEO). */
export const routes = {
  home: '/',
  about: '/about-us',
  projects: '/du-an',
  services: '/dich-vu',
  blog: '/blog',
  contact: '/lien-he',
} as const;
