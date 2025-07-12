import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">About Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/genkit-llm-78335.appspot.com/o/4f80a4a6-7d65-4d7a-b9c1-8b9a25b39976?alt=media&token=f69c585c-6b3a-4424-9b6f-7d1a52e97672"
                alt="A person in a hijab working on a laptop"
                width={400}
                height={400}
                className="object-cover rounded-full shadow-2xl shadow-primary/40 w-full h-full"
                data-ai-hint="woman laptop"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm Tashmiya Naz, a Software Engineering student passionate about
              turning complex problems into elegant, user-centric digital
              experiences. My journey in tech is driven by a relentless
              curiosity and a love for creating beautiful, functional products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
