import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artworks = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/artworks' }),
    schema: ({ image }) =>
        z.object({
        title: z.string().optional(),
        image: image(),
        category: z.string().default('uncategorized'),
        year: z.number(),
        description: z.string().optional(),
    }),
});

const styles = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/styles' }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { artworks, styles };