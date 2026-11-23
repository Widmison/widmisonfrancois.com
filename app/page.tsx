import { JsonLd } from '@/components/JsonLd';
import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { AiGrowthSection } from '@/components/AiGrowthSection';
import { JourneySection } from '@/components/JourneySection';
import { BeyondCodeSection } from '@/components/BeyondCodeSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WorkSection />
      <AiGrowthSection />
      <JourneySection />
      <BeyondCodeSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
