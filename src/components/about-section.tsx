import Image from 'next/image';
import { User, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm">
               <div className="absolute inset-0 bg-primary rounded-full transform -rotate-6"></div>
               <Image
                src="https://placehold.co/600x600.png"
                alt="A portrait of Tashmiya Naz"
                width={600}
                height={600}
                className="relative rounded-full object-cover shadow-2xl shadow-primary/30"
                data-ai-hint="portrait woman"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">
                About Me
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start text-lg">
                <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Tashmiya Naz</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Madhya Pradesh, India</span>
                </div>
            </div>
            <p className="text-foreground/80 leading-relaxed text-center md:text-left">
              I’m Tashmiya Naz, a dedicated Software Engineering student with a passion for technology and innovation. I love creating digital solutions that are both creative and user-friendly. I’m always eager to learn new skills and grow in the world of software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
