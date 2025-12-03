export const titleToSlug = (title: string) =>
  title
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('/')
    .join('-')
