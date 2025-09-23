import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { createConfig } from "san-webkit-next/vite.config.js"
import {
  SPRITES_OPTIONS,
  ILLUS_OPTIONS,
  processSvgWithOutput,
} from "san-webkit-next/scripts/svg.js"

import path from "node:path"

const baseConfig = createConfig({ sveltekit: () => {} })

const ICONS = [
  "thumb-up-filled.svg",
  "thumb-up.svg",
  "thumb-down-filled.svg",
  "thumb-down.svg",
  "turtoshi.svg",
  "close.svg",
  "back-to-top.svg",
  "reset.svg",
  "user.svg",
  "external-link.svg",
]

function processListedIcons() {
  return {
    name: "process-specific-icons",
    async buildStart() {
      console.log("[web-components]: Processing specific SVG assets...")

      const iconsPromises = ICONS.map(name => {
        const sourcePath = `static/webkit/icons/${name}`
        const destDir = "../static/webkit/sprites/icons/"
        return processSvgWithOutput(
          sourcePath,
          "static/webkit/sprites/icons/",
          destDir,
          SPRITES_OPTIONS,
          "static/webkit/icons/"
        )
      })

      const illusPromise = processSvgWithOutput(
        "static/webkit/illus/turtle.svg",
        "static/webkit/sprites/illus/",
        "../static/webkit/sprites/illus/",
        ILLUS_OPTIONS,
        "static/webkit/illus/"
      )

      await Promise.all([...iconsPromises, illusPromise])
      console.log("[web-components]: New SVG assets are ready")
    },
  }
}

export default defineConfig({
  plugins: [
    ...baseConfig.plugins,
    svelte({ compilerOptions: { customElement: true } }),
    processListedIcons(),
  ],
  resolve: {
    alias: {
      "$app/state": path.resolve(__dirname, "mocks/app-state.js"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.js",
      name: "SvelteWidgets",
      fileName: "widgets",
      formats: ["iife"],
    },
    outDir: "../static",
    emptyOutDir: false,
  },
  define: baseConfig.define,
})
