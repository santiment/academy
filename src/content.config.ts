import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    headline: z.string().optional(),
    description: z.string().optional(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    author: z.string().nullable().optional(),

    sidebar: z
      .object({
        label: z.string().optional(),
        order: z.number().default(999),
        hidden: z.boolean().default(false),
      })
      .default({}),
  }),
})

export const collections = { docs }
