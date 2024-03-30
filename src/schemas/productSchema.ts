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
  image: z.string().url().optional(),
  // categoryId
  // authord
});
