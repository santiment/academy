import React from "react"
import { renderToString } from "react-dom/server"
import * as components from "./components"
import { parseMarkdown } from "./parser"
import Markdown from "../Markdown/Markdown"

function renderJSX(node) {
  return node.children.reduce((acc, child) => {
    const { type, name, data, attributes } = child

    if (type === "text") {
      const text =
        node.type !== "tag"
          ? data
          : renderToString(<Markdown markdown={data.trim()} />)
      return acc + text
    }

    const Component = components[name]
    if (!Component) return `\n⚠️[INCORRECT MARKUP]: \<${name} /\>⚠️\n`

    const inject = "__CHILDREN__"
    const parent = renderToString(
      <Component {...attributes}>{inject}</Component>
    )

    return acc + parent.replace(inject, renderJSX(child))
  }, "")
}

function injectCustomMarkdownComponents(rawMarkdown) {
  if (rawMarkdown.length < 1) return rawMarkdown

  const ast = parseMarkdown(rawMarkdown, {
    validTags: Object.keys(components),
  })

  return renderJSX(ast)
}

export default injectCustomMarkdownComponents
