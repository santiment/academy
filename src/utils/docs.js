export const titleToSlug = title =>
  title
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('/')
    .join('-')

export const customCrumbLabel = location =>
  location.pathname.toLowerCase().replace('-', ' ')
