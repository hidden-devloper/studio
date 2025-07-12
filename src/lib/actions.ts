"use server";

import { contactFormSchema } from './schemas';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onContactSubmit(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data. Please check the fields and try again.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
  
  // In a real application, you would integrate with a service like Formspree or EmailJS here.
  // For example, by making a fetch request to your service's endpoint.
  //
  // const response = await fetch('YOUR_EMAIL_SERVICE_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(parsed.data),
  // });
  //
  // if (!response.ok) {
  //   return { message: "Failed to send message. Please try again later." };
  // }

  console.log('Form data submitted successfully:');
  console.log(parsed.data);

  return { message: "Your message has been sent successfully!" };
}
