import path from 'path'
import { fileURLToPath } from 'url';

import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { defineConfig, mergeConfig } from 'astro/config'
import remarkGemoji from 'remark-gemoji'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import { createAstroConfig } from 'san-webkit-next/vite.config.js'
import { expressiveCodeExplorer } from './plugins/ec-explorer-outside.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    '$layouts': path.resolve(__dirname, './src/layouts'),
    '$assets': path.resolve(__dirname, './src/assets'),
  },
  ssr: {
    noExternal: ['san-webkit-next'],
  },
})

const legacySections = {
  // Getting started
  '/santiment-introduction': '/getting-started/santiment-introduction',
  '/for-traders': '/getting-started/for-traders',
  '/for-developers': '/getting-started/for-developers',
  // Guides
  '/education-and-use-cases': '/guides/education-and-use-cases',
  '/glossary': '/guides/glossary',
  '/products-and-plans': '/guides/products-and-plans',
  '/san-tokens': '/guides/san-tokens',
  '/sanapi': '/guides/sanapi',
  '/sanbase': '/guides/sanbase',
  '/sansheets': '/guides/sansheets',
  '/santiment-queries': '/guides/santiment-queries',
  '/youtube-videos': '/guides/youtube-videos',
  // Resources
  '/changelog': '/resources/changelog',
  '/data-anomaly': '/resources/data-anomaly',
  '/labels': '/resources/labels',
  '/metrics': '/resources/metrics',
}

const mappedRedirects = Object.entries(legacySections).reduce((acc, [oldPath, newPath]) => {
  acc[oldPath] = newPath
  acc[`${oldPath}/[...slug]`] = `${newPath}/[...slug]`

  return acc;
}, {});

export default defineConfig({
  site: 'https://academy.santiment.net',
  redirects: mappedRedirects,
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
        codeFontFamily: 'Fira Code, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        frames: {
          inlineButtonBorder: 'none',
          inlineButtonBackground: 'none',
          inlineButtonForeground: 'var(--casper)',
          inlineButtonBackgroundHoverOrFocusOpacity: 'var(--rhino)',
          frameBoxShadowCssValue: 'none',
          tooltipSuccessBackground: 'var(--rhino)',
          tooltipSuccessForeground: 'var(--white)'
        },
        lineNumbers: {
          foreground: 'var(--casper)',
        },
      }
    }),
    mdx(),
    tailwind(),
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
