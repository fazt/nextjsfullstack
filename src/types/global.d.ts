/* eslint-disable no-unused-vars */
import { z } from "zod";

const envSchema = z.object({
  NEXTAUTH_URL: z.string(),
  DATABASE_URL: z.string(),
});

namespace NodeJS {
  interface ProcessEnv extends z.infer<typeof envSchema> {}
}
