import Header from '@/components/header';
import Footer from '@/components/footer';
import HomeSection from '@/components/home-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
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
