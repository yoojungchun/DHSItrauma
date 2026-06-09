// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: served from https://yoojungchun.github.io/DHSItrauma/
// NOTE: base must match the repository name's casing exactly — GitHub Pages
// serves paths case-sensitively, so a lowercase base would 404 all assets.
export default defineConfig({
  site: 'https://yoojungchun.github.io',
  base: '/DHSItrauma/',
  vite: {
    plugins: [tailwindcss()],
  },
});
