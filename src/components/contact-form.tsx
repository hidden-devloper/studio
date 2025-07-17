"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { onContactSubmit } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';

const initialState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full font-bold" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(onContactSubmit, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Success',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="bg-card/50">
        <CardContent className="p-6">
            <form action={formAction} className="space-y-4">
                <div>
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="you@example.com" required className="mt-1"/>
                </div>
                <div>
                    <Label htmlFor="mobile" className="font-semibold">Mobile Number (Optional)</Label>
                    <Input type="tel" id="mobile" name="mobile" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
                <div>
                    <Label htmlFor="message" className="font-semibold">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." required className="mt-1" />
                </div>
                <SubmitButton />
            </form>
        </CardContent>
    </Card>
  );
}
