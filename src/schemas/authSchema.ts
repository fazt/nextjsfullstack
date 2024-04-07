import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  lastname: z.string().min(1, {
    message: "Lastname is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
