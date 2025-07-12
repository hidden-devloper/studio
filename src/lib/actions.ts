'use server';

import { z } from 'zod';
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
      message: 'Invalid form data. Please check the fields and try again.',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const googleSheetUrl = process.env.GOOGLE_SHEET_WEB_APP_URL;

  if (!googleSheetUrl) {
    console.error('Google Sheet Web App URL is not configured.');
    return {
      message: 'Server configuration error. Could not submit form.',
      issues: ['Configuration error.'],
    };
  }

  try {
    const response = await fetch(googleSheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      console.error('Failed to send data to Google Sheet');
      return { message: 'Failed to send message. Please try again later.' };
    }

    return { message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return { message: 'An unexpected error occurred. Please try again.' };
  }
}
