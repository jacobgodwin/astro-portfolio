import { defineCollection, z } from 'astro:content'
import { Client } from '@notionhq/client'
import { format, isToday, isYesterday } from 'date-fns'

const brews = defineCollection({
  loader: async () => {
    const notion = new Client({ auth: import.meta.env.NOTION_TOKEN })

    const data = await notion.databases.query({
      database_id: import.meta.env.BREWS_DATABASE_ID,
    })

    return data.results.slice(0, 10).map((page: any) => {
      return {
        id: page.id,
        date: format(page.properties.Date.title[0].plain_text, 'EE, MMM d'),
        time: format(page.properties.Date.title[0].plain_text, 'h:mm aa'),
        roaster: page.properties.Roaster_API.formula.string,
        beans: page.properties.Beans_API.formula.string,
      }
    })
  },
  schema: z.object({
    id: z.string(),
    date: z.string(),
    time: z.string(),
    roaster: z.string(),
    beans: z.string(),
  }),
})

export const collections = { brews }
