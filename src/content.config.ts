import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reading = z.object({
  /** Stable, globally-unique id — used as the localStorage key for progress. */
  id: z.string(),
  author: z.string().optional(),
  title: z.string(),
  /** Extra context: edition, the contents of a packet, a "with supplements" note, etc. */
  note: z.string().optional(),
});

const weeks = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/weeks' }),
  schema: z.object({
    week: z.number().int().min(1),
    /** Section id this week belongs to — matches `sections[].id` in course.ts. */
    section: z.enum(['I', 'II', 'III', 'IV']),
    theme: z.string(),
    /** Assignment milestones due this week, if any. */
    due: z.array(z.string()).optional(),
    readings: z.object({
      primary: z.array(reading).default([]),
      secondary: z.array(reading).default([]),
      optional: z.array(reading).default([]),
    }),
  }),
});

export const collections = { weeks };
