import { definePlugin } from 'astro-expressive-code'
import { h } from 'astro-expressive-code/hast'

export function expressiveCodeExplorer() {
  return definePlugin({
    name: 'api-santiment-explorer',

    baseStyles: `
      .ec-explorer-link { all: unset; color: var(--green); font-size: 18px; cursor: pointer; font-family: 'Proxima Nova', sans-serif; font-weight: bolder; }
      .ec-explorer-actions { margin-top: 10px; }
    `,

    hooks: {
      postprocessRenderedBlock: ({ codeBlock, renderData }) => {
        if (codeBlock.language !== 'graphql') return
        if (!codeBlock.meta?.includes('explorer')) return

        const url = new URL('https://api.santiment.net/graphiql')
        url.searchParams.set('query', codeBlock.code)

        const link = h('a.ec-explorer-link', {
          href: url.toString(),
          target: '_blank',
          rel: 'noopener noreferrer',
        }, 'Run in Explorer')

        renderData.blockAst.children.push(h('div.ec-explorer-actions', [link]))
      },
    }
  })
}
