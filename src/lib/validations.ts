import { z } from "zod";

export const pageSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9-]+$/, "Slug must be lowercase alphanumeric with hyphens"),
  published: z.boolean().default(false),
});

export const siteConfigSchema = z.object({
  fonts: z.record(z.string(), z.string()).optional(),
  colors: z.record(z.string(), z.string()).optional(),
  spacing: z.record(z.string(), z.string()).optional(),
});

export type PageInput = z.infer<typeof pageSchema>;
export type SiteConfigInput = z.infer<typeof siteConfigSchema>;
