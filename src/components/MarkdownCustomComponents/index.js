import React from 'react'
import { renderToString } from 'react-dom/server'
import { parseDocument } from 'htmlparser2'
import Markdown from '../Markdown/Markdown'
import * as components from './components'

const ucFirst = text =>
  text.charAt(0).toUpperCase() + text.toLowerCase().slice(1)

function injectCustomMarkdownComponents(rawMarkdownBody) {
  if (rawMarkdownBody.length < 1) return
  const rawTags = Array.from(
    rawMarkdownBody.matchAll(
      /(<[A-Z]{1}[a-zA-z]*?.*?>){1}[\s\S]*?(<\/[A-Z]{1}[a-zA-z]*?>){1}/g
    ),
    m => m[0]
  )
  if (rawTags.length === 0) return rawMarkdownBody
  rawTags.map(rawTag => {
    const parsedHtml = parseDocument(rawTag)
    if (!parsedHtml.children || !parsedHtml.children[0]) return
    const parsedElement = parsedHtml.children[0]
    const DynamicComponent = components[ucFirst(parsedElement.tagName)]
    if (!DynamicComponent) return
    if (!parsedElement.children || !parsedElement.children[0] || !parsedElement.children[0].data) return
    rawMarkdownBody = rawMarkdownBody.replace(
      rawTag,
      renderToString(
        <DynamicComponent {...parsedElement.attribs}>
          <Markdown markdown={parsedElement.children[0].data.trim()} />
        </DynamicComponent>
      )
    )
  })
  return rawMarkdownBody
}

export default injectCustomMarkdownComponents
