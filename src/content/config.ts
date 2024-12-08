import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string(),
    publishDate: z.string(),
    image: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  blog: blogCollection
};