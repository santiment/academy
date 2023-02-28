import React from "react"
import { renderToString } from "react-dom/server"
import { parseDocument } from "htmlparser2"
import Markdown from "../Markdown/Markdown"
import * as components from "./components"

function renderJSX(node) {
  return node.children.map(node => {
    const { type, name, data, parent, attribs } = node

    if (type !== "tag") {
      if (parent.type !== "tag") {
        return data
      }

      return <Markdown markdown={data.trim()} />
    }

    const Component = components[name]
    if (!Component) return `⚠️[INCORRECT MARKUP]: \<${name} /\>⚠️`

    return <Component {...attribs}>{renderJSX(node)}</Component>
  })
}

function injectCustomMarkdownComponents(rawMarkdown) {
  if (rawMarkdown.length < 1) return rawMarkdown

  // NOTE: Normalizing same-text-link shorthand [@vanguard | 28 Feb, 2023]
  rawMarkdown = rawMarkdown.replaceAll(
    /(<http?s:\/\/)(.*)(>)/g,
    "[https://$2](https://$2)"
  )

  const ast = parseDocument(rawMarkdown, {
    lowerCaseTags: false,
  })

  return renderToString(renderJSX(ast))
}

export default injectCustomMarkdownComponents
