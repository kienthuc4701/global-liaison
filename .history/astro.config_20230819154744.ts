import { defineConfig } from "astro/config";
import unocss from "unocss/vite";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [UnoCSS({ injectReset: true })],
});
