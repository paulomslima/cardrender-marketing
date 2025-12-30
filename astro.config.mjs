// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://cardrender.com",
  output: "server",
  adapter: cloudflare(),
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt", "fr", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});
