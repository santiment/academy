import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().nullable().optional(),
    date: z.coerce.date().optional(),
    sidebarLabel: z.string().optional(),
    sidebarOrder: z.number().default(999),
  })
});

export const collections = { docs };
