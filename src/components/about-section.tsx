import Image from 'next/image';
import { Card, CardContent } from './ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">About Me</h2>
          <p className="mt-4 text-lg text-foreground/80">A brief introduction to who I am and what I do.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-2xl shadow-primary/10">
                <CardContent className="p-0">
                    <Image
                        src="https://placehold.co/600x600.png"
                        alt="A portrait of Tashmiya Naz"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                        data-ai-hint="portrait woman"
                    />
                </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hello! I'm Tashmiya Naz, a passionate and driven Software Engineering student with a keen interest in creating elegant and efficient solutions to complex problems. My journey into the world of technology began with a curiosity for how things work, which quickly blossomed into a love for coding and development.
            </p>
            <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
              I thrive in collaborative environments and am always eager to learn new technologies and methodologies. From crafting intuitive user interfaces to building robust backend systems, I enjoy every aspect of the development lifecycle. I'm currently expanding my skills in Android development and exploring the creative realms of logo design and video editing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
