import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts live at src/content/blog/<lang>/<slug>.md — ids look like "vi/choi-s-pilates".
 * Shared images go in src/content/blog/_assets/ and are referenced relatively.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['casestudy', 'noibo', 'vanhoa', 'daotao', 'life', 'ketnoi', 'news']),
      date: z.coerce.date(),
      cover: image(),
      excerpt: z.string(),
    }),
});

export const collections = { blog };
