import React from 'react'
import {Link} from 'gatsby'

const LinkRenderer = ({href, children}) => {
  // const isInternal = !href.includes('http')
  const isInternal = false
  return isInternal ?
  <Link to={href}>{children}</Link> :
  <a href={href}>{children}</a>
}

export default LinkRenderer
