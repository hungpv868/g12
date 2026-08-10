// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Netlify/real domain: build without env → served at the root.
  // GitHub Pages: workflow sets SITE=https://hungpv868.github.io BASE=/g12
  site: process.env.SITE ?? 'https://g12media.vn',
  base: process.env.BASE,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    routing: {
      // Vietnamese is served at the root (/), English at /en/
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
