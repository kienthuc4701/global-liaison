import { defineConfig, squooshImageService  } from "astro/config";
import unocss from "unocss/vite";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  vite: {
    plugins: [unocss()]
  },
  integrations: [react({
    experimentalReactChildren: true
  })]
});