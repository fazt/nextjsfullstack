import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  lastname: z.string().min(1, {
    message: "Please enter your lastname",
  }),
  email: z.string().email().min(1, {
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
});
