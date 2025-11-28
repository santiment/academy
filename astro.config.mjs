import path from 'path'
import { fileURLToPath } from 'url';

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { defineConfig, mergeConfig } from 'astro/config'

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { createAstroConfig } from 'san-webkit-next/vite.config.js'
import { remarkCodeAttributes } from './plugins/remark-code-attributes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const codeAttributesTransformer = {
  name: 'code-attributes',
  pre(node) {
    this.node.properties['data-code'] = encodeURIComponent(this.source);

    this.node.properties['data-language'] = this.options.lang;
  }
};

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
      mdx({
        syntaxHighlight: 'shiki',
        extensions: ['.mdx', '.md'],
        remarkPlugins: [remarkMath, remarkCodeAttributes],
        rehypePlugins: [rehypeKatex],
      }),
      tailwind(),
    ],
    vite: viteConfig,
    ssr: {
      noExternal: ['san-webkit-next'],
    },
    markdown: {
      shikiConfig: {
        theme: 'min-light',
        langAlias: {
          'graphql-explorer': 'graphql',
        },
      },
    },
    base: '/',
    publicDir: './static',
    outDir: './public',
    server: {
      port: 3000,
    },
  })
})()
