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
  price: z
    .number({
      invalid_type_error: "El precio debe ser un número",
    })
    .min(1, {
      message: "El precio debe ser mayor a 0",
    }),
  image: z
    .string()
    .url()
    .optional(),
  slug: z
    .string()
    .min(1, {
      message: "El slug debe tener al menos 1 caracter",
    })
    .max(255)
    .optional(),
  // categoryId
  // authord
});
