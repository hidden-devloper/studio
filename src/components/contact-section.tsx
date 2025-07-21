import ContactForm from './contact-form';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl inline-block px-4 py-2 rounded-lg shadow-2xl shadow-primary/40">Contact Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-headline">Get in touch</h3>
            <p className="text-foreground/80 leading-relaxed">
              Need a modern website, a custom app, or another digital solution? Let's connect! I'm ready to bring your ideas to life. Fill out the form below or email me to get started.
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
