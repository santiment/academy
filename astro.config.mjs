import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { mdsvex } from 'mdsvex'
import { defineConfig, mergeConfig } from 'astro/config'
import mdSvexConfig from './mdsvex.config'

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
      __SVELTEKIT_PAYLOAD__: JSON.stringify(''),
    },
  })

  return defineConfig({
    integrations: [
      svelte({
        extensions: ['.svelte', '.svx'],
        preprocess: mdsvex(mdSvexConfig),
      }),
      mdx(),
      tailwind(),
    ],
    markdown: {
      shikiConfig: {
        langAliases: {
          svx: 'svelte',
        },
      },
    },
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
