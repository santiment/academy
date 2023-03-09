import React from "react"
import { renderToString } from "react-dom/server"
import Markdown from "../Markdown/Markdown"
import * as components from "./components"
import { parseMarkdown } from "./parser"

function renderJSX(node) {
  return node.children.map((node, i) => {
    const { type, name, data, attributes } = node

    if (type == "text") {
      return <Markdown key={i} markdown={data.trim()} />
    }

    const Component = components[name]
    if (!Component) return `⚠️[INCORRECT MARKUP]: \<${name} /\>⚠️`

    return (
      <Component key={i} {...attributes}>
        {renderJSX(node)}
      </Component>
    )
  })
}

function injectCustomMarkdownComponents(rawMarkdown) {
  if (rawMarkdown.length < 1) return rawMarkdown

  const ast = parseMarkdown(rawMarkdown, {
    validTags: Object.keys(components),
  })

  return renderToString(renderJSX(ast))
}

export default injectCustomMarkdownComponents
