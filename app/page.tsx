import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { ProjectSection } from '@/features/project/ProjectSection';
import { EducationSection } from '@/features/education/EducationSection';
import { CertificationsSection } from '@/features/certifications/CertificationsSection';
import { ContactSection } from '@/features/contact/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
