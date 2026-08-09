import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Bài blog nằm ở src/content/blog/<lang>/<slug>.md — id dạng "vi/choi-s-pilates".
 * Ảnh dùng chung để trong src/content/blog/_assets/ và tham chiếu tương đối.
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
