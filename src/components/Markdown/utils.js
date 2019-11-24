import React from 'react'

export const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}


export const sluggify = text => text
		.toString()
		.toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w]+/g, '-') // Remove all non-word chars
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
