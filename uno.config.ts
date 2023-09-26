import {
  defineConfig,
  presetIcons,
  presetUno,
  presetMini,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  rules: [
    [
      "bg-header",
      {
        background:
          "radial-gradient(circle, hsl(207, 46%, 37%) 0%, hsl(209, 57%, 10%) 100%)",
      },
    ],
  ],
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800" },
    { "text-primary": "text-[#30A2FF]"},
    { "text-description": "text-[#34648b]"},
    { "swiper-wrapper": "flex-col" },
    [/^text-truncate-(.*)$/, ([, c]) => `line-clamp-${c} break-keep`],
    { "bg-body": "bg-slate-50" },

  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetRemToPx(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetMini(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
     
      `,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '12rem',
      },
      
    },
    colors: {
      "blue-light": "#75C2F6",
      primary: "#0880e5",
      secondary: "#0b1a28",
      "gray-light": "#ACACAC"
    },
  },
});
