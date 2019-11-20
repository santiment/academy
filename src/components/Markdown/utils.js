import React from 'react'

export const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}


export const sluggify = text => text.replace(/\W/g, "-").toLowerCase()
