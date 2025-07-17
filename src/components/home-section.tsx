'use client';
import { useState, useEffect } from 'react';
import AnimatedBackground from './animated-background';
import { Button } from './ui/button';
import Link from 'next/link';

const services = [
  'making websites 💻',
  'doing 🖥️coding',
  'making app 📱',
  'developing software',
];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (index === services.length) {
      setIndex(0);
      return;
    }

    const currentService = services[index];

    if (isDeleting) {
      if (subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % services.length);
        const holdTimeout = setTimeout(() => {}, 2000);
        return () => clearTimeout(holdTimeout);
      }
      const timeout = setTimeout(() => {
        setText(currentService.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, 30);
      return () => clearTimeout(timeout);
    }

    if (subIndex === currentService.length) {
      const delay = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(delay);
    }

    const timeout = setTimeout(() => {
      setText(currentService.substring(0, subIndex + 1));
      setSubIndex((prev) => prev + 1);
    }, 75);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <div className="flex flex-col items-center justify-center text-xl md:text-2xl font-medium mb-8 h-14">
      <div className="flex items-center h-8">
        <span>i am&nbsp;</span>
        <span className="text-primary">{text}</span>
        <span className="animate-blink border-r-2 border-primary ml-1" />
      </div>
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
        <Link href="#contact" passHref>
          <Button size="lg" className="font-bold">
              Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
