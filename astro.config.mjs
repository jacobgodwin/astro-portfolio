// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
