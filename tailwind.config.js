import tailwindConfig from 'san-webkit-next/tailwind.config.js'

export default {
  presets: [tailwindConfig],
  content: [
    ...tailwindConfig.content,
    './node_modules/san-webkit-next/dist/**/*.{js,svelte}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
      screens: {
        xl: '1172px',
      },
    },
    screens: {
      xl: { max: '1199px' },
      ...tailwindConfig.theme.screens,
    },
  },
  plugins: [],
}
