import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jevaughnnewman.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [tailwind()],
});



