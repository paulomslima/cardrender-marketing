// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://cardrender.com",
  output: "server",
  adapter: cloudflare(),
  trailingSlash: "never",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
