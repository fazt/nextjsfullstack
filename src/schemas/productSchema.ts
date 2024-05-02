import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(255),
  description: z
    .string({
      invalid_type_error: "La descripción debe ser un texto",
    })
    .optional(),
  price: z.string().refine(
    (value) => {
      return !isNaN(parseFloat(value));
    },
    { message: "El precio debe ser un número" }
  ),
  // nodelist instance
  image: z.instanceof(FileList).optional(),
  slug: z
    .string()
    .min(1, {
      message: "El slug debe tener al menos 1 caracter",
    })
    .max(255),
  categories: z.array(z.number()).optional(),
  // categoryId
  // authord
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
