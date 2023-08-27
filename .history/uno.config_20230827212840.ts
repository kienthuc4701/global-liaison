import {
  defineConfig,
  presetIcons,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import { animatedUno } from "animated-unocss";

export default defineConfig({
  rules: [
    // ['bg-primary', {"background-color":'#30A2FF'}],
    // ['text-gray-light', {"color":'#DDE6ED'}],
    // ['bg-gray-light', {"background-color":'rgba(246, 231, 231, 0.2)'}],
    // ['service-shadow', {
    //     "box-shadow":'0 15px 30px -10px rgba(0, 0, 0, 0.2)'}
    // ,],
    [
      "bg-header",
      {
        background:
          "radial-gradient(circle, hsla(206, 97%, 49%, 1) 0%, hsla(201, 87%, 76%, 1) 100%)",
      },
    ],
    // ['bg-blue-light', {"background-color":'#75C2F6'}],
  ],
  shortcuts: [
    { "i-logo": "i-logos-astro w-6em h-6em transform transition-800" },
    { "text-primary": "text-[#30A2FF]", "bg-light-gray": "bg-[#eeeeee]" },
    [/^text-truncate-(.*)$/, ([, c]) => `line-clamp-${c} break-keep`],
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
    animatedUno(),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
      `,
    },
  ],
  theme: {
    colors: {
      "blue-light": "#75C2F6",
      primary: "#30A2FF",
      secondary: "#75C2F6",
      "gray-light": "#rgba(246, 231, 231, 0.2)",
    },
  },
});
