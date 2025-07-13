'use client';
import { useState, useEffect } from 'react';
import AnimatedBackground from './animated-background';
import { Button } from './ui/button';
import { ArrowDown, MapPin } from 'lucide-react';
import Link from 'next/link';

const locations = ['Madhya Pradesh, India'];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (index === locations.length) {
      setIndex(0);
      return;
    }

    const currentLocation = locations[index];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % locations.length);
        const holdTimeout = setTimeout(() => {}, 2000);
        return () => clearTimeout(holdTimeout);
      }
      const timeout = setTimeout(() => {
        setText(currentLocation.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (subIndex === currentLocation.length) {
      const delay = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(delay);
    }

    const timeout = setTimeout(() => {
      setText(currentLocation.substring(0, subIndex + 1));
      setSubIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <div className="flex items-center justify-center text-xl md:text-2xl text-primary font-medium mb-8 h-8">
      <MapPin className="mr-2 h-6 w-6" />
      <span>{text}</span>
      <span className="animate-blink border-r-2 border-primary ml-1" />
    </div>
  );
};

export default function HomeSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center overflow-hidden px-4">
      <AnimatedBackground />
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 animate-fade-in-down">
          <span className="tracking-widest">Tashmiya</span>
          <span className="block tracking-tighter text-primary -mt-2">Naz</span>
        </h1>
        <TypingEffect />
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
