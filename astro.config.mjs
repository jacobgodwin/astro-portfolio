// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

import icon from 'astro-icon'

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jacobgodwin.dev/',
  integrations: [tailwind({ applyBaseStyles: false }), icon(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})