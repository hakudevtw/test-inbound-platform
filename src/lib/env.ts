import { z } from 'zod';

const envSchema = z.object({
  MODE: z.union([z.literal('development'), z.literal('production')]).default('development'),

  VITE_TMDB_API_KEY: z.string(),
  VITE_TMDB_API_ACCESS_TOKEN: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default env;
