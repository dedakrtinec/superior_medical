import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://superiormedical.netlify.app/', //TODO: změnit na správný url
  integrations: [tailwind(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  }),],
  content: {
    collections: {
      blog: {
        schema: {
          type: 'content',
          fields: {
            title: 'string',
            excerpt: 'string',
            author: 'string',
            authorRole: 'string',
            publishDate: 'date',
            image: 'string',
            tags: ['string']
          }
        }
      }
    }
  }
});