import { vitePreprocess } from '@astrojs/svelte'
import { componentStyleSelector } from 'san-webkit-next/svelte.config.js'
import preprocess from 'svelte-preprocess'
import cssModules from 'svelte-preprocess-cssmodules'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      typescript: false,
      scss: {
        //prependData: `@import '~san-webkit/lib/styles/fn.scss';`,
      },
      postcss: false,
    }),
    vitePreprocess(),

    componentStyleSelector(),
    cssModules(),
  ],
}

export default config
