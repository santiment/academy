import React from 'react'

const Products = ({ withColor }) => (
  <svg width="64" height="64" fill="none">
    <path
      fill={withColor ? 'var(--jungle-green-light)' : 'var(--athens)'}
      d="M16.5 36.9a4.93 4.93 0 014.36-5.45l26.41-2.92a4.93 4.93 0 015.45 4.36l.93 8.44a4.93 4.93 0 01-4.36 5.45L22.9 49.7a4.93 4.93 0 01-5.45-4.36l-.94-8.44z"
    />
    <path
      fill={withColor ? 'var(--dodger-blue)' : 'var(--casper)'}
      fillRule="evenodd"
      d="M37.14 26.55c1.88 0 3.21 0 4.23.14.99.13 1.56.38 1.97.8.42.41.67.98.8 1.97.14 1.02.14 2.35.14 4.23v11.09c0 1.88 0 3.22-.14 4.23-.13 1-.38 1.56-.8 1.98-.41.41-.98.66-1.97.8-1.02.13-2.35.13-4.23.13H17.38c-1.88 0-3.22 0-4.23-.13-1-.14-1.56-.39-1.98-.8-.41-.42-.66-.99-.8-1.98a35.51 35.51 0 01-.13-4.23V27.34a.75.75 0 10-1.5 0v17.5c0 1.8 0 3.25.15 4.37.15 1.16.48 2.1 1.22 2.84a4.66 4.66 0 002.84 1.22c1.12.15 2.56.15 4.37.15H37.2c1.81 0 3.25 0 4.38-.15a4.66 4.66 0 002.83-1.22 4.66 4.66 0 001.23-2.84c.15-1.12.15-2.56.15-4.37V33.64c0-1.82 0-3.25-.15-4.38a4.66 4.66 0 00-1.23-2.83 4.66 4.66 0 00-2.83-1.23c-1.13-.15-2.57-.15-4.38-.15H17.34a.75.75 0 000 1.5h19.8z"
    />
    <path
      fill={withColor ? 'var(--texas-rose-hover)' : 'var(--fiord)'}
      fillRule="evenodd"
      d="M55.75 12.42c.17.38 0 .83-.38 1L46.3 17.4a.75.75 0 01-.6-1.38l9.06-3.98c.38-.17.82 0 1 .38zm2 6.44a.75.75 0 01-.64.85l-9.8 1.42a.75.75 0 01-.21-1.48l9.8-1.42c.4-.06.79.22.85.63zm-.89 6.92a.75.75 0 10.11-1.5l-9.87-.74a.75.75 0 10-.11 1.5l9.87.74z"
    />
    <path
      fill={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
      fillRule="evenodd"
      d="M10.68 15.9l28.59-7.67.71-.18a2.45 2.45 0 012.69 1.56l.2.7.18.71a2.45 2.45 0 01-1.55 2.7l-.7.2-18.51 4.95-5.65 1.51-5.65 1.52c-.9.24-1.83-.3-2.07-1.2l-.32-1.2a9.25 9.25 0 01-.18-.72 2.45 2.45 0 011.55-2.69l.7-.2zm-3.53 3.98a9.92 9.92 0 01-.21-.85 3.95 3.95 0 012.5-4.34c.19-.07.4-.13.85-.24l28.6-7.67c.43-.11.65-.17.85-.2 1.85-.31 3.67.74 4.33 2.5.07.18.13.4.25.84.12.45.18.67.2.86a3.95 3.95 0 01-2.5 4.34l-.84.24-18.5 4.96-5.65 1.51-5.65 1.52a3.19 3.19 0 01-3.9-2.26l-.33-1.2z"
    />
    <path
      fill={withColor ? 'var(--jungle-green)' : 'var(--fiord)'}
      fillRule="evenodd"
      d="M27.87 33.64l-.57 1.66a2.49 2.49 0 01-2.35 1.68H23.3l1.22.84c.92.63 1.3 1.8.94 2.85l-.5 1.47 1.5-1.03a2.49 2.49 0 012.82 0l1.5 1.03-.5-1.47a2.49 2.49 0 01.93-2.85l1.23-.84h-1.65c-1.07 0-2.01-.68-2.36-1.68l-.56-1.66zm.93-1.91a.99.99 0 00-1.87 0l-1.05 3.08a.99.99 0 01-.93.67h-3.3a.99.99 0 00-.56 1.8l2.58 1.78c.36.25.51.7.37 1.13l-1 2.94a.99.99 0 001.49 1.13l2.78-1.92a.99.99 0 011.12 0l2.77 1.92a.99.99 0 001.5-1.13l-1-2.94a.99.99 0 01.37-1.13l2.58-1.78c.8-.55.4-1.8-.57-1.8h-3.3a.99.99 0 01-.93-.67l-1.05-3.08z"
    />
  </svg>
)

export default Products
