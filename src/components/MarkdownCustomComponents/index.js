import React from 'react'
import { renderToString } from 'react-dom/server'
import parse from 'html-react-parser'
import Markdown from '../Markdown/Markdown'
import * as components from './components'

const ucFirst = text =>
  text.charAt(0).toUpperCase() + text.toLowerCase().slice(1)

const injectCustomMarkdownComponents = rawMarkdownBody => {
  if (rawMarkdownBody.length < 1) return
  const rawTags = Array.from(
    rawMarkdownBody.matchAll(
      /(!<[a-zA-z]*?.*?>){1}[\s\S]*?(<\/[a-zA-z]*?>!){1}/g
    ),
    m => m[0]
  )
  if (rawTags.length === 0) return rawMarkdownBody
  rawTags.map(rawTag => {
    const tagString = rawTag.replaceAll('!', '')
    const parsedHtml = new DOMParser().parseFromString(tagString, 'text/html')
    const parsedTag = parsedHtml.body.firstChild
    const DynamicComponent = components[ucFirst(parsedTag.tagName)]
    if (!DynamicComponent) return
    const children = parse(
      renderToString(<Markdown markdown={parsedTag.innerHTML.trim()} />)
    )
    const props = {}
    parsedTag
      .getAttributeNames()
      .map(key => (props[key] = parsedTag.getAttribute(key)))
    rawMarkdownBody = rawMarkdownBody.replace(
      rawTag,
      renderToString(<DynamicComponent {...props}>{children}</DynamicComponent>)
    )
  })
  return rawMarkdownBody
}

export default injectCustomMarkdownComponents
