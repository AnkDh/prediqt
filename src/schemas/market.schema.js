import { z } from "zod";

export const createMarketSchema = z.object({
  title: z.string().trim().min(1).max(200),
});
