<script lang="ts">
  type TProps = {
    withColor?: boolean
  }

  const { withColor }: TProps = $props()
</script>

<svg width="160" height="120" fill="none">
  <path
    fill={withColor ? 'var(--dodger-blue-light)' : 'var(--porcelain)'}
    fill-rule="evenodd"
    d="M109.09 11.21A14 14 0 01123 25.3l-.34 55.8a14 14 0 01-14.08 13.9l-35.66-.2A14 14 0 0159 80.7l.34-55.8A14 14 0 0173.42 11l35.67.21zm-39 16.29c0-.83.67-1.5 1.5-1.5h27a1.5 1.5 0 110 3h-27a1.5 1.5 0 01-1.5-1.5zm33.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  />
  <path
    fill={withColor ? 'var(--malibu-light)' : 'var(--athens)'}
    d="M19.86 47.66L34.4 93.6A5.43 5.43 0 0045 91.97V35.5c0-.33.11-.64.32-.88.88-1.06-.16-2.6-1.47-2.2l-19.25 6.1a7.28 7.28 0 00-4.74 9.14z"
  />
  <path
    fill={withColor ? 'var(--jungle-green)' : 'var(--casper)'}
    fill-rule="evenodd"
    d="M18.62 33.33a7.76 7.76 0 00-5.29 9.7L30.1 98.5a7.74 7.74 0 009.66 5.17l6.15-1.87a.75.75 0 00-.44-1.44l-6.14 1.87c-3.3 1-6.8-.86-7.8-4.17L14.78 42.6a6.26 6.26 0 014.26-7.82L55 24.44A.75.75 0 0054.6 23L18.62 33.33zm22.62 9.32c.13.4-.08.82-.48.95L25.5 48.7a.75.75 0 01-.47-1.43l15.27-5.1c.4-.13.82.08.95.48zm-1.67 5.83a.75.75 0 10-.45-1.43l-11.8 3.75a.75.75 0 10.46 1.43l11.8-3.75z"
  />
  <path
    fill={withColor ? 'var(--jungle-green)' : 'var(--casper)'}
    fill-rule="evenodd"
    d="M113.03 25.54c.11-.4.53-.63.93-.51l27.5 7.95a7.7 7.7 0 015.21 9.62l-16.5 54.94a7.62 7.62 0 01-9.52 5.13l-.02-.01-7.37-2.45a.75.75 0 11.48-1.42l7.36 2.44a6.12 6.12 0 007.64-4.12l16.5-54.94c.99-3.31-.9-6.8-4.2-7.75l-27.5-7.95a.75.75 0 01-.51-.93zm6.16 16.67c-.13.4.08.82.47.95l15.03 5.06a.75.75 0 10.48-1.43l-15.03-5.05a.75.75 0 00-.95.47zm1.64 5.8a.75.75 0 11.46-1.44l11.6 3.72a.75.75 0 11-.45 1.43L120.84 48z"
  />
  <path
    stroke={withColor ? 'var(--dodger-blue)' : 'var(--casper)'}
    stroke-linecap="round"
    stroke-width="1.5"
    d="M57.16 83.24l8.68-16.95a2 2 0 013.15-.54l11.15 10.47a2 2 0 003.04-.35l20.26-30.81"
  />
  <path
    fill={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
    stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--fiord)'}
    stroke-miterlimit="10"
    stroke-width="1.5"
    d="M67.22 67.57a2 2 0 100-4 2 2 0 000 4z"
  />
  <path
    fill={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
    stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--fiord)'}
    stroke-miterlimit="10"
    stroke-width="1.5"
    d="M82.03 79.22a2 2 0 100-4 2 2 0 000 4z"
  />
  <path
    fill={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
    stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--fiord)'}
    stroke-miterlimit="10"
    stroke-width="1.5"
    d="M103.68 47.23a2 2 0 100-4 2 2 0 000 4z"
  />
  <path
    fill={withColor ? 'var(--dodger-blue-light)' : 'var(--athens)'}
    stroke={withColor ? 'var(--texas-rose-hover)' : 'var(--fiord)'}
    stroke-miterlimit="10"
    stroke-width="1.5"
    d="M57 85a2 2 0 100-4 2 2 0 000 4z"
  />
  <path
    stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
    stroke-width="1.5"
    d="M51 108.25h57c2.9 0 5.25-2.35 5.25-5.25V25c0-2.9-2.35-5.25-5.25-5.25H61.52c-1.37 0-2.7.54-3.67 1.5L47.32 31.58a5.25 5.25 0 00-1.57 3.75V103c0 2.9 2.35 5.25 5.25 5.25z"
  />
  <path
    stroke={withColor ? 'var(--dodger-blue)' : 'var(--fiord)'}
    stroke-linecap="round"
    stroke-width="1.5"
    d="M63.88 23.18l.79 10.93a4 4 0 01-4.22 4.28l-10.94-.63"
  />
</svg>
