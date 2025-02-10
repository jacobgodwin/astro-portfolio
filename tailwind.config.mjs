/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      // https://github.com/system-fonts/modern-font-stacks
      oldstyle: [
        'Iowan Old Style',
        'Palatino Linotype',
        'URW Palladio L',
        'P052',
        'serif',
      ],
    },
  },
  plugins: [],
}
