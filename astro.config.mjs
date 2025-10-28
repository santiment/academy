import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig, mergeConfig } from 'astro/config'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'

export default (async () => {
  const viteBase = await createAstroConfig()

  const viteConfig = mergeConfig(viteBase, {
    define: {
      __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
      __SVELTEKIT_PATHS_BASE__: JSON.stringify(''),
      __SVELTEKIT_PATHS_ASSETS__: JSON.stringify(''),
      __SVELTEKIT_APP_DIR__: JSON.stringify(''),
      __SVELTEKIT_PATHS_RELATIVE__: JSON.stringify(''),
    },
  })

  return defineConfig({
    integrations: [svelte(), tailwind()],
    vite: viteConfig,
    ssr: {
      noExternal: ['san-webkit-next'],
    },
    base: '/',
    publicDir: './static',
    outDir: './public',
    server: {
      port: 3000,
    },
  })
})()
