import { z } from "zod";
export const createOrderSchema = z.object({
  marketId: z.string().trim().min(1),
  side: z.enum(["YES", "NO"]),
  type: z.enum(["buy", "sell"]),
  price: z.number().int().min(1).max(99),
  quantity: z.number().int().min(1),
});
