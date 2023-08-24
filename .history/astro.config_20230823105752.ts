import { defineConfig } from "astro/config";
import unocss from "unocss/vite";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [unocss()],
  },
  experimental: {
    viewTransitions: true,
    assets: true,
  },
  integrations: [preact(), react({ experimentalReactChildren: true })],
});
