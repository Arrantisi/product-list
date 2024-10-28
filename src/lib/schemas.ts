import { z } from "zod";

export const productScema = z.object({
  name: z.string().min(3).max(100),
  brand: z.string().min(3).max(30),
  catagory: z.string().min(3).max(30),
  description: z.string().min(8),
  price: z.coerce.number(),
});

export type ProductSchema = z.infer<typeof productScema>;
