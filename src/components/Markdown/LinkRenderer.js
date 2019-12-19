import React from 'react'
import {Link} from 'gatsby'

const LinkRenderer = ({href, children}) => {
  let link = href.toString().toLowerCase()
  const isLinkComponent = (!href.includes('http') || href.includes('academy.santiment.net')) && !href.startsWith('#')
  if (isLinkComponent) {
  	link = href.replace(/https:\/\/academy.santiment.net/g, '')
  	if (!link.includes('#') && !link.endsWith('/')) {
  		link+= '/'
  	}

  	if (!link.startsWith('/')) {
  		link = '/' + link
  	}
  }

  return isLinkComponent ? <Link to={link}>{children}</Link> : <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default LinkRenderer
