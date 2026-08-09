// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Netlify/domain thật: build không env → phục vụ ở gốc.
  // GitHub Pages: workflow đặt SITE=https://hungpv868.github.io BASE=/g12
  site: process.env.SITE ?? 'https://g12media.vn',
  base: process.env.BASE,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    routing: {
      // Tiếng Việt phục vụ ở gốc (/), tiếng Anh ở /en/
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
