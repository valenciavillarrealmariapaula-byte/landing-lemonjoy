import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, MessageCircle, Repeat, Target, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const WhyLemonjoy = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Zap, key: 'resourcefulness' },
    { icon: MessageCircle, key: 'communication' },
    { icon: Repeat, key: 'flexibility' },
    { icon: Target, key: 'precision' },
    { icon: Heart, key: 'commitment' },
  ];

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('why.headline')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map(({ icon: Icon, key }, index) => (
            <Card 
              key={key}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">
                {t(`why.${key}`)}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
