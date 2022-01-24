import React from 'react'
import { Link } from 'gatsby'

const LinkRenderer = ({ href, children }) => {
  let link = href.toString().toLowerCase()
  const isLinkComponent =
    (!href.includes('http') || href.includes('academy.santiment.net')) &&
    !href.startsWith('#') &&
    !href.includes('mailto')
  if (isLinkComponent) {
    link = href.replace(/https:\/\/academy.santiment.net/g, '')
    if (!link.includes('#') && !link.endsWith('/')) {
      link += '/'
    }

    if (!link.startsWith('/')) {
      link = '/' + link
    }
  }

  let props

  if (!isLinkComponent && !href.startsWith('#')) {
    props = { target: '_blank', rel: 'noopener noreferrer' }
  }

  return isLinkComponent ? (
    <Link to={link}>{children}</Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default LinkRenderer
