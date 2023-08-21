import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  presetAttributify,
} from "unocss";

export default defineConfig({
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800" },
  ],
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
      .nav-links {
        display:none;
        display: unset;
      }
      .expanded {
        display:unset!important;
      }
      `,
    },
  ],
});
