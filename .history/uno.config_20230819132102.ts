// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind(),
    /* more presets */
  ],
});
