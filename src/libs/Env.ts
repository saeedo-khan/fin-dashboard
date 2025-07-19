import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";


export const Env = createEnv({
    shared: {
        NODE_ENV: z.enum(['development', 'production']).default('development'),
    },
    client: {
        NEXT_PUBLIC_API_URL: z.string().optional(),
    },
    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    }
})