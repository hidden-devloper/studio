import AnimatedBackground from './animated-background';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HomeSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center overflow-hidden px-4">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 animate-fade-in-down">
          <span className="tracking-widest">Tashmiya</span>
          <span className="block tracking-tighter text-primary -mt-2">Naz</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-8">
          Software Engineering Student
        </p>
        <Link href="#contact">
          <Button size="lg" className="font-bold">
            Get In Touch
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-foreground/50" />
         </Link>
      </div>
    </section>
  );
}
