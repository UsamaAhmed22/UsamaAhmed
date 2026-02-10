import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
