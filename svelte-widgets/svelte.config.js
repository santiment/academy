import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { componentStyleSelector } from "san-webkit-next/plugins/svelte.js"
import preprocess from "svelte-preprocess"
import { mergeConfig } from "vite"

/** @type {import('@sveltejs/kit').Config} */
const config = mergeConfig({
  preprocess: [
    preprocess({
      typescript: false,
      postcss: false,
    }),
    vitePreprocess(),
    componentStyleSelector(),
  ],
})

export default config
