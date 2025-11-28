import path from 'path'
import { fileURLToPath } from 'url';

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { defineConfig, mergeConfig } from 'astro/config'
import astroExpressiveCode from 'astro-expressive-code'
import remarkGemoji from 'remark-gemoji'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { createAstroConfig } from 'san-webkit-next/vite.config.js'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    alias: {
      '$components': path.resolve(__dirname, './src/components'),
    }
  })

  return defineConfig({
    integrations: [
      svelte({
        extensions: ['.svelte'],
      }),
      astroExpressiveCode({
        plugins: [pluginLineNumbers()],
        themes: ['min-light'],
        shiki: {
          langAlias: {
            'graphql-explorer': 'graphql',
          },
        },
        frames: {
          showCopyToClipboardButton: true,
          frameBoxShadowCssValue: 'none',
        },
      }),
      mdx({
        syntaxHighlight: 'shiki',
        syntaxHighlight: false,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      }),
      tailwind(),
    ],
    vite: viteConfig,
    ssr: {
      noExternal: ['san-webkit-next'],
    },
    markdown: {
      remarkPlugins: [remarkGemoji],
      rehypePlugins: [rehypeSlug]
    },
    base: '/',
    publicDir: './static',
    outDir: './public',
    server: {
      port: 3000,
    },
  })
})()
