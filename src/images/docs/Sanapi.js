import React from 'react'

const Sanapi = ({ withColor }) => (
  <svg width="64" height="64" fill="none">
    <path
      fill={withColor ? 'var(--jungle-green-light)' : 'var(--athens)'}
      d="M10.02 22.62a8.13 8.13 0 017.04-9.1l27.65-3.5a8.13 8.13 0 019.09 7.04l2.9 22.83a8.13 8.13 0 01-7.05 9.09L22 52.48a8.13 8.13 0 01-9.08-7.03l-2.9-22.83z"
    />
    <path
      fill={withColor ? 'var(--dodger-blue-light)' : 'var(--porcelain)'}
      d="M40.77 26.32a2.44 2.44 0 011.5 3.1l-9.8 28.31a2.44 2.44 0 11-4.61-1.6l9.8-28.3a2.44 2.44 0 013.11-1.5z"
    />
    <path
      fill={withColor ? 'var(--dodger-blue)' : 'var(--casper)'}
      d="M6.54 29.77a1.9 1.9 0 00.08 3.25l16.99 9.53a.73.73 0 00.72-1.27L7.34 31.74a.43.43 0 01-.02-.73L23.8 20.6a.73.73 0 10-.78-1.23L6.54 29.77zm50.86 0a1.9 1.9 0 01-.09 3.25l-16.98 9.53a.73.73 0 01-.72-1.27l16.99-9.54c.28-.16.29-.56.01-.73L40.14 20.6a.73.73 0 01.78-1.23L57.4 29.77z"
    />
    <path
      fill={withColor ? 'var(--texas-rose-hover)' : 'var(--waterloo)'}
      d="M36.52 18.27a.74.74 0 01-.45-.95l2.87-8.19a.72.72 0 01.93-.44c.38.14.58.56.45.94l-2.87 8.2a.72.72 0 01-.93.44z"
    />
    <path
      fill={withColor ? 'var(--jungle-green)' : 'var(--casper)'}
      d="M23.8 54.67a.74.74 0 01-.46-.94l11.14-31.85a.72.72 0 01.93-.45c.38.14.58.56.45.94L24.72 54.23a.72.72 0 01-.93.44z"
    />
  </svg>
)

export default Sanapi
