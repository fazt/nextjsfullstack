import { z } from "zod";

export const createCategorySchema = z.object({
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
  published: z.boolean({
    invalid_type_error: "El campo publicado debe ser un booleano",
  }),
});
