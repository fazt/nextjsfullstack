import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, {
      message: "Email is required",
    }),
  password: z
    .string({
      invalid_type_error: "La descripción debe ser un texto",
    })
    .min(6, {
      message: "El campo de la contraseña debe tener al menos 6 caracteres",
    })
    .max(20),
    confirmed: z
    .boolean()
});