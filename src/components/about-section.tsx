import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-2xl shadow-primary/10">
                <CardContent className="p-0">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/genkit-llm-78335.appspot.com/o/1b122f8a-c60f-4886-ab47-862d88c9f357?alt=media&token=e8c95a02-5c81-42cb-b75d-3d443fd65cfb"
                        alt="A person in a hijab working on a laptop"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        data-ai-hint="woman laptop"
                    />
                </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I'm Tashmiya Naz, a Software Engineering student with a deep-seated passion for turning complex problems into elegant, user-centric digital experiences. My journey in tech is driven by a relentless curiosity and a love for building things that are both beautiful and functional.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              I excel in collaborative settings, constantly seeking to learn and adapt to new technologies. Whether I'm designing a responsive interface or architecting a backend, I am committed to quality and craftsmanship throughout the entire development lifecycle. My current focus is on mastering web and Android development, while also exploring my creative side through logo design and video editing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}