import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Přidáme konfiguraci pro content collections
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