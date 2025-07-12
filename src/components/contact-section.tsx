import ContactForm from './contact-form';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">Contact Me</h2>
          <p className="mt-4 text-lg text-foreground/80">Let's build something amazing together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-headline">Get in touch</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions. Fill out the form, or email me directly.
            </p>
            <div className="space-y-4">
              <a href="mailto:tashmiyanaz@gmail.com" className="inline-flex items-center gap-4 group rounded-lg p-2 -m-2 transition-colors hover:bg-card">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg group-hover:text-primary transition-colors">tashmiyanaz@gmail.com</span>
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
