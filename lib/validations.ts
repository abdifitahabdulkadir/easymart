import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Please provide Valid email address" }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  password: z
    .string()
    .min(6, "Password field is required Minimum of 6 characters")
    .max(20, "Password field cannot exceed 20 characters")
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    }),
});

export const SignInSchema = SignUpSchema.pick({ email: true, password: true });
