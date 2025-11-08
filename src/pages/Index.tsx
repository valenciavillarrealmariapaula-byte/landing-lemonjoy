import { LanguageProvider } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Hero } from '@/components/Hero';
import { PainPoint } from '@/components/PainPoint';
import { Promise } from '@/components/Promise';
import { WhyLemonjoy } from '@/components/WhyLemonjoy';
import { TrustedBrands } from '@/components/TrustedBrands';
import { CaseHighlights } from '@/components/CaseHighlights';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <LanguageToggle />
        <Hero />
        <PainPoint />
        <Promise />
        <TrustedBrands />
        <WhyLemonjoy />
        <CaseHighlights />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
