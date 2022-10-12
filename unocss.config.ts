// placed blank file here to make the latest UnoCSS VSCode extension work (v.0.45.26)

import { presetWebFonts, transformerVariantGroup } from "unocss";
import { presetWind } from "@unocss/preset-wind";
import { defineConfig } from "unocss/vite";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: [
          {
            name: "Roboto Flex",
            weights: [300, 400, 700],
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
        mono: [
          {
            name: "Source Code Pro",
            weights: [400, 700],
          },
          {
            name: "monospace",
            provider: "none",
          },
        ],
        poppins: {
          name: "Poppins",
          weights: [400, 600, 700, 800],
        },
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
