import { z } from 'zod';

const envSchema = z.object({
  MODE: z.union([z.literal('development'), z.literal('production')]).default('development'),

  // VITE_OMDB_API_KEY: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default env;
