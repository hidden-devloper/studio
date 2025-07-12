'use client';
import { useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HomeSection from '@/components/home-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          // Optional: unobserve after animation to prevent re-triggering
          obs.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
