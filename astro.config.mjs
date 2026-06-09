// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: served from https://yoojungchun.github.io/dhsitrauma/
export default defineConfig({
  site: 'https://yoojungchun.github.io',
  base: '/dhsitrauma/',
  vite: {
    plugins: [tailwindcss()],
  },
});
