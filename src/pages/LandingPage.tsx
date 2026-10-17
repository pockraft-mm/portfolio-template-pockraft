import { useLandingPage } from '../context/LandingPageContext';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ProcessSection } from './sections/ProcessSection';
import { PricingSection } from './sections/PricingSection';
import { CtaSection } from './sections/CtaSection';

export function LandingPage() {
  const landingPage = useLandingPage();
  return (
    <>
      <HeroSection />
      {landingPage.showSections.features && <FeaturesSection />}
      {landingPage.showSections.steps && <ProcessSection />}
      {landingPage.showSections.pricing && <PricingSection />}
      {landingPage.showSections.callToAction && <CtaSection />}
    </>
  );
}
