import { User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
            About Me
          </h2>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl bg-card/50 shadow-2xl shadow-primary/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-headline">Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6 text-lg">
                <div>
                  <p className="text-primary font-semibold">Name:</p>
                  <p className="text-foreground/90">Tashmiya Naz</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">Location:</p>
                  <p className="text-foreground/90">Madhya Pradesh, India</p>
                </div>
              </div>
              <p className="text-center text-foreground/80 leading-relaxed">
                I'm a computer science student with a passion for turning
                complex problems into elegant, user-centric digital
                experiences. My journey in tech is driven by a relentless
                curiosity and a love for creating beautiful, functional products.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
