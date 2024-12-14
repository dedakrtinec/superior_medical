import { z, defineCollection, type ImageFunction } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string(),
    publishDate: z.string().or(z.date()),
    image: z.string().or(z.custom<ImageFunction>()),
    tags: z.array(z.string())
  })
});

export const collections = {
  blog: blogCollection
};