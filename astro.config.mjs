import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  base: '/portfolio',  // Add this line
  integrations: [tailwind()]
});

