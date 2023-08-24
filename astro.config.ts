import { defineConfig, sharpImageService } from "astro/config";
import unocss from "unocss/vite";
import react from "@astrojs/react";

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
  integrations: [react(
    {experimentalReactChildren: true,}
  )],
});
