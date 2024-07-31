import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string().datetime(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})

export const collections = {
  'posts': postCollection,
  'blogs': blogCollection,
};