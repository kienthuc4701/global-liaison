import { defineConfig, sharpImageService } from "astro/config";
import unocss from "unocss/vite";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [unocss()],
  },
  experimental: {
    viewTransitions: true,
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  integrations: [preact()],
});
