import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  presetAttributify,
  transformerVariantGroup,
  presetWebFonts
} from "unocss";
export default defineConfig({
  rules: [
    ['bg-primary', {"background-color":'#30A2FF'}],
    ['text-gray-light', {"color":'#DDE6ED'}],

      ['bg-gray-light', {"background-color":'rgba(246, 231, 231, 0.2)'}],
      ['service-shadow', {
        "box-shadow":'0 15px 30px -10px rgba(0, 0, 0, 0.2)'}
       ,],
      ['bg-header', {'background': 'radial-gradient(circle, hsla(206, 97%, 49%, 1) 0%, hsla(201, 87%, 76%, 1) 100%)'}],
      ['bg-blue-light', {"background-color":'#75C2F6'}],
 
    ],
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800",
  },
  ],
  transformers: [transformerDirectives(),
    transformerVariantGroup(),
  ],
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
      `,
    },
  ],
});
