import React from 'react'

const Signals = ({ withColor }) => (
  <svg width="160" height="120" fill="none">
    <circle
      cx="77"
      cy="60"
      r="55"
      stroke={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
      strokeWidth="4"
    />
    <circle
      cx="80"
      cy="52"
      r="39"
      fill={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
    />
    <rect
      width="2.73"
      height="11.07"
      fill="#fff"
      rx="1.37"
      transform="matrix(-.963 -.26953 -.26628 .9639 80.52 41.9)"
    />
    <path
      fill="var(--white)"
      d="M63.83 39.9c1.15-3.7-3.45-7.8-7.33-8.9L16.79 19.3c-3.89-1.1-7.96 1-9.1 4.7L4.3 34.93c-1.14 3.7 1.08 7.58 4.96 8.68l42.09 11.92c3.88 1.1 7.96-1.01 9.1-4.71l3.38-10.93z"
    />
    <path
      fill={withColor ? 'var(--malibu-light)' : 'var(--porcelain)'}
      d="M58.5 45.84a7 7 0 00-4.7-8.69l-40-11.91a6.95 6.95 0 00-8.64 4.7L1.94 40.88a7 7 0 004.72 8.7l39.99 11.9c3.68 1.1 7.56-1 8.64-4.7l3.22-10.93z"
    />
    <path
      fill="var(--white)"
      d="M99.34 51.13c1.05-3.72 6-5.9 9.83-4.88l41.53 11.07c3.83 1.02 9.09 4.86 8.05 8.57l-3.1 10.98c-1.04 3.72-7.99 5.9-11.82 4.88L102.3 70.68c-3.83-1.02-7.09-4.86-6.04-8.57l3.08-10.98z"
    />
    <path
      fill={withColor ? 'var(--malibu-light)' : 'var(--porcelain)'}
      d="M101.04 57.09a6.95 6.95 0 018.55-4.89l40.23 11.08a7 7 0 014.89 8.6l-3 10.98a6.95 6.95 0 01-8.55 4.89l-40.22-11.08a7 7 0 01-4.89-8.6l3-10.98z"
    />
    <path
      fill={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
      fillRule="evenodd"
      d="M63.04 44.65a.75.75 0 00-.42 1.44l6.67 1.96a.75.75 0 10.42-1.44l-6.67-1.96zm-.92 3.17a.75.75 0 00-.42 1.44l6.67 1.96a.75.75 0 00.42-1.44l-6.67-1.96zm27.2 7.68c.11-.4.52-.63.92-.52l6.7 1.87a.75.75 0 11-.4 1.45l-6.7-1.87a.75.75 0 01-.52-.93zm1.8-3.7a.75.75 0 10-.4 1.45l6.69 1.87a.75.75 0 00.4-1.45l-6.69-1.87z"
    />
    <path
      stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
      strokeWidth="1.5"
      d="M74.05 69.68a10.72 10.72 0 0013.32-7.31l4.77-16.47a10.47 10.47 0 00-7.1-12.96 10.38 10.38 0 00-12.92 7.18l-4.8 17.16a11.24 11.24 0 003.35 11.42"
    />
    <path
      fill={withColor ? 'var(--jungle-green)' : 'var(--fiord)'}
      fillRule="evenodd"
      d="M89.95 41.4a14.08 14.08 0 00-13.4-3.6.75.75 0 00.37 1.45c4.34-1.1 8.9.13 11.97 3.2a.75.75 0 101.06-1.06zm-6.3 21.73a14.08 14.08 0 00-13.4-3.6.75.75 0 00.37 1.46c4.34-1.1 8.9.13 11.97 3.2a.75.75 0 101.06-1.06z"
    />
    <path
      stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
      strokeWidth="1.5"
      d="M98.1 52.7c1.5-5.44 7.1-8.63 12.53-7.12l40.12 11.15a10.26 10.26 0 017.13 12.59l-1.54 5.62a10.17 10.17 0 01-12.53 7.12L103.7 70.91a10.26 10.26 0 01-7.13-12.59l1.54-5.61z"
    />
    <path
      stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
      strokeWidth="1.5"
      d="M56.38 30.97c5.4 1.6 8.5 7.29 6.92 12.71l-1.63 5.59a10.17 10.17 0 01-12.64 6.92L9.09 44.39c-5.4-1.6-8.5-7.3-6.93-12.71l1.63-5.6a10.17 10.17 0 0112.65-6.91l39.94 11.8z"
    />
    <path
      stroke={withColor ? 'var(--jungle-green)' : 'var(--casper)'}
      strokeWidth="1.5"
      d="M67.29 73.51l5.59-7.26c.6-.77 1.7-.91 2.47-.31.77.6.92 1.7.32 2.48l-6.29 8.17"
    />
    <path
      stroke={withColor ? 'var(--jungle-green)' : 'var(--casper)'}
      strokeWidth="1.5"
      d="M69.17 75.35a15.86 15.86 0 01-3.09 20c-.82.71-2.15.47-2.81-.64L49.39 71.47c-.66-1.1-.24-2.41.78-2.8a15.7 15.7 0 0119 6.68z"
    />
    <path
      stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--casper)'}
      strokeWidth="1.5"
      d="M49.01 87.18a1.75 1.75 0 11.98-3.36 1.75 1.75 0 01-.98 3.36z"
    />
    <path
      stroke="var(--white)"
      strokeLinecap="round"
      strokeWidth="3"
      d="M58.1 74.94c3.87.35 6.68 4.25 6.27 8.7"
    />
  </svg>
)

export default Signals
