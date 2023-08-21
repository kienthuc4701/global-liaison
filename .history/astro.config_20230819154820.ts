import { defineConfig } from "astro/config";
import unocss from "unocss/vite";

export default defineConfig({
  vite: {
    plugins: [unocss()],
  },
});
