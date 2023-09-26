import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import UnoCSS from 'unocss/astro';
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  integrations: [
    UnoCSS(),
    react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  })],
  adapter: vercel(),
  output: "server"
});