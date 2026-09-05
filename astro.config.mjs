// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ajustar al dominio final antes de producción (usado por SEO / Open Graph / sitemap).
  site: 'https://cuerdabajo.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
