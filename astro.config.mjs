import { unified } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
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

import { AstroSvelteCtx } from 'san-webkit-next/plugins/astro.js'
import { createAstroConfig } from 'san-webkit-next/vite.config.js'

import { expressiveCodeExplorer } from './plugins/ec-explorer-outside.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const viteBase = await createAstroConfig()

// Astro 7 emits the `before-hydration` script (san-webkit's AstroSvelteCtx svelte-root) as an
// extra entry in every server-consumer Vite environment, including the build-time image service
// one. Astro then imports the first entry chunk of that build as the image service, which runs
// the browser-only svelte-root in Node and fails with "Could not load the image service".
// Keep the image service build to its own entry.
const BEFORE_HYDRATION_SCRIPT_ID = 'astro:scripts/before-hydration.js'
const imageServiceSkipBeforeHydration = {
  name: 'academy:image-service-skip-before-hydration',
  enforce: 'pre',
  applyToEnvironment: (environment) => environment.name === 'astroImageService',
  load: {
    filter: { id: new RegExp(`^${BEFORE_HYDRATION_SCRIPT_ID}$`) },
    handler: () => ({ code: '' }),
  },
  generateBundle(_, bundle) {
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (
        chunk.type === 'chunk' &&
        chunk.facadeModuleId === BEFORE_HYDRATION_SCRIPT_ID
      ) {
        delete bundle[fileName]
      }
    }
  },
}

const viteConfig = mergeConfig(viteBase, {
  define: {
    __SVELTEKIT_APP_VERSION_POLL_INTERVAL__: '0',
    __SVELTEKIT_PATHS_BASE__: '""',
    __SVELTEKIT_ASSETS__: '""',
    __SVELTEKIT_APP_VERSION__: '""',
    __SVELTEKIT_PATHS_ASSETS__: '""',
    __SVELTEKIT_PAYLOAD__: '""',
    __SVELTEKIT_APP_DIR__: '""',
    __SVELTEKIT_PATHS_RELATIVE__: '""',
  },
  resolve: {
    alias: [{ find: '@sentry/sveltekit', replacement: '@sentry/astro' }],
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

  optimizeDeps: {
    exclude: ['svelte', '@astrojs/svelte'],
  },

  plugins: [imageServiceSkipBeforeHydration],
})

const siteUrl = process.env.SITE_URL || 'https://academy.santiment.net'

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  // Astro 7 changed the default to 'jsx', which drops whitespace between inline elements
  compressHTML: true,
  build: {
    format: 'directory',
  },
  redirects: {
    '/metrics/mvrv-ratio/': '/metrics/mvrv/',
    '/metrics/holders-distribution/': '/metrics/supply-distribution/',
    '/education-and-use-cases/understaning-daily-active-addresses/':
      '/education-and-use-cases/understanding-daily-active-addresses/',
    '/education-and-use-cases/santiment-pro-reports-samples/':
      '/education-and-use-cases/santiment-research-hub-samples/',
  },
  integrations: [
    AstroSvelteCtx(path.resolve(__dirname, './src/svelte-root.js')),
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
  ],
  vite: viteConfig,
  base: '/',
  markdown: {
    shikiConfig: {
      langAlias: {
        SQL: 'sql',
      },
    },
    // Astro 7 defaults to the Sätteri processor; keep remark/rehype for our plugins (MDX inherits it)
    processor: unified({
      remarkPlugins: [remarkMath, remarkGemoji],
      rehypePlugins: [rehypeKatex, rehypeSlug],
    }),
  },
  publicDir: './static',
  outDir: './public',
  server: {
    port: 3000,
  },
})
