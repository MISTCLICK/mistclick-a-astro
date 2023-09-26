import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [prefetch(), tailwind(), sitemap({
    lastmod: new Date()
  })],
  site: 'https://mistclick.me',
  markdown: {
    shikiConfig: {
      theme: "min-light"
    }
  }
});