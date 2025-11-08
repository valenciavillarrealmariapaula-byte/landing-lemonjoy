import { useLanguage } from '@/contexts/LanguageContext';
import { AlertCircle } from 'lucide-react';

export const PainPoint = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-8 animate-scale-in" >
          <AlertCircle className="w-8 h-8 text-primary-foreground" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          {t('pain.headline')}
        </h2>
        <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
          {t('pain.text')}
        </p>
      </div>
    </section>
  );
};
