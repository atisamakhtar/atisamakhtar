import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  honeypot: z
    .string()
    .optional()
    .refine((val) => !val || val.length === 0, { message: "Bot detected" }),
  turnstileToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
