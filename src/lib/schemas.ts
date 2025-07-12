import { z } from 'zod';

export const contactFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  mobile: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }).max(500, { message: 'Message cannot exceed 500 characters.' }),
});
