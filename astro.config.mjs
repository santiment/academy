import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import path from 'path'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import remarkMath from 'remark-math'
import { fileURLToPath } from 'url'

import astroExpressiveCode from 'astro-expressive-code'
import { defineConfig, mergeConfig } from 'astro/config'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'

import { expressiveCodeExplorer } from './plugins/ec-explorer-outside.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const viteBase = await createAstroConfig()

const viteConfig = mergeConfig(viteBase, {
  define: {
    __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
  },
  alias: {
    $components: path.resolve(__dirname, './src/components'),
    $layouts: path.resolve(__dirname, './src/layouts'),
    $modules: path.resolve(__dirname, './src/modules'),
    $config: path.resolve(__dirname, './src/config'),
  },
  ssr: {
    noExternal: ['san-webkit-next'],
  },
})

export default defineConfig({
  site: 'https://academy.santiment.net',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  redirects: {
    '/metrics/mvrv-ratio/': '/metrics/mvrv/',
    '/metrics/holders-distribution/': '/metrics/supply-distribution/',
    '/education-and-use-cases/understaning-daily-active-addresses/':
      '/education-and-use-cases/understanding-daily-active-addresses/',
  },
  integrations: [
    svelte({
      extensions: ['.svelte'],
    }),
    astroExpressiveCode({
      theme: 'min-light',
      plugins: [pluginLineNumbers(), expressiveCodeExplorer()],
      removeUnusedThemes: true,
      styleOverrides: {
        codePaddingBlock: '10px',
        borderWidth: '1px',
        borderColor: 'var(--porcelain)',
        codeFontSize: '16px',
        codeFontFamily:
          'Fira Code, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        frames: {
          inlineButtonBorder: 'none',
          inlineButtonBackground: 'none',
          inlineButtonForeground: 'var(--casper)',
          inlineButtonBackgroundHoverOrFocusOpacity: 'var(--rhino)',
          frameBoxShadowCssValue: 'none',
          tooltipSuccessBackground: 'var(--rhino)',
          tooltipSuccessForeground: 'var(--white)',
        },
        lineNumbers: {
          foreground: 'var(--casper)',
        },
      },
    }),
    mdx(),
    tailwind(),
    sitemap(),
  ],
  vite: viteConfig,
  base: '/',
  markdown: {
    shikiConfig: {
      langAlias: {
        SQL: 'sql',
      },
    },
    remarkPlugins: [remarkMath, remarkGemoji],
    rehypePlugins: [rehypeKatex, rehypeSlug],
  },
  publicDir: './static',
  outDir: './public',
  server: {
    port: 3000,
  },
})
