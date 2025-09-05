import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { createConfig } from "san-webkit-next/vite.config.js"
import path from "node:path"
import { viteStaticCopy } from "vite-plugin-static-copy"

const baseConfig = createConfig({ sveltekit: () => {} })

const ICONS = [
  "thumb-up-filled.svg",
  "thumb-up.svg",
  "thumb-down-filled.svg",
  "thumb-down.svg",
  "turtoshi.svg",
  "close.svg",
  "back-to-top.svg",
]

export default defineConfig({
  plugins: [
    ...baseConfig.plugins,
    svelte({ compilerOptions: { customElement: true } }),
    viteStaticCopy({
      targets: [
        {
          src: ICONS.map(name => `static/webkit/icons/${name}`),
          dest: "webkit/icons",
        },
        {
          src: "static/webkit/illus/turtle.svg",
          dest: "webkit/illus",
        },
      ],
    }),
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
