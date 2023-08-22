import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  presetAttributify,
} from "unocss";
export default defineConfig({
  rules: [
      ['bg-gray-light', {"background-color":'rgba(246, 231, 231, 0.2)'}],
      ['service-shadow', {
        "box-shadow":'0 15px 30px -10px rgba(0, 0, 0, 0.2)'}
       ,],
      ['bg-header', {'background': 'radial-gradient(circle, hsla(206, 97%, 49%, 1) 0%, hsla(201, 87%, 76%, 1) 100%)'}]
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
      html.dark {
        background-color: #0d0950;
        color: #fff;
      }
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
