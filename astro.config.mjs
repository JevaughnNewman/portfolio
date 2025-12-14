import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Replace with your GitHub username
  site: 'https://JevaughnNewman.github.io',
  // This is the CRITICAL part for subdirectory hosting
  base: '/portfolio', 
  integrations: [tailwind()],
});