import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  presetAttributify,
} from "unocss";
export default defineConfig({
  rules: [
      ['service-shadow', {
        "box-shadow":'0 15px 30px -10px rgba(0, 0, 0, 0.2)'}]
  ],
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800",
  },
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
      body {
        background:#fff;
      }
      .nav-links {
        display:none;
      }
      .expanded {
        display:unset!important;
      }
      `,
    },
  ],
});
