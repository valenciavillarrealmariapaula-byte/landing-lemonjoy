import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Lightbulb, Settings, Rocket, MessageSquare } from 'lucide-react';

export const Promise = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, key: 'step1', color: 'secondary-foreground' },
    { icon: Lightbulb, key: 'step2', color: 'text-primary' },
    { icon: Settings, key: 'step3', color: 'secondary-foreground' },
    { icon: Rocket, key: 'step4', color: 'text-primary' },
    { icon: MessageSquare, key: 'step5', color: 'secondary-foreground' },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('promise.headline')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t('promise.text')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
           <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-foreground to-primary hidden md:block -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative ">
            {steps.map(({ icon: Icon, key, color }, index) => (
              <div 
                key={key}
                className="flex flex-col items-center text-center animate-fade-in-up "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-card shadow-lg flex items-center justify-center border-4 border-background relative z-10">
                    <Icon className={`w-10 h-10 ${color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">
                  {t(`promise.${key}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
