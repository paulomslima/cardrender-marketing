import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    readTime: z.string(),
    author: z.string().default('Cardrender Team'),
    category: z.string().default('Product'),
    keywords: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    lang: z.enum(['en', 'es', 'pt', 'fr', 'de']).default('en'),
    translationKey: z.string().optional(), // Links translations together
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().optional(),
    lastUpdated: z.string(),
    keywords: z.array(z.string()).default([]),
    proficiencyLevel: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
    relatedDocs: z.array(z.object({
      title: z.string(),
      url: z.string(),
    })).default([]),
    lang: z.enum(['en', 'es', 'pt', 'fr', 'de']).default('en'),
    translationKey: z.string().optional(), // Links translations together
  }),
});

export const collections = {
  blog,
  docs,
};
