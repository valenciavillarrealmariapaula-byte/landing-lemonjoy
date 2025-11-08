import { useLanguage } from '@/contexts/LanguageContext';
import case1 from '@/assets/case-1.jpg';
import case2 from '@/assets/case-2.jpg';
import case3 from '@/assets/case-3.jpg';

export const CaseHighlights = () => {
  const { t } = useLanguage();

  const cases = [
    { image: case1, titleKey: 'case1.title' },
    { image: case2, titleKey: 'case2.title' },
    { image: case3, titleKey: 'case3.title' },
  ];

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('cases.headline')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map(({ image, titleKey }, index) => (
            <div 
              key={titleKey}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={image} 
                alt={t(titleKey)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-background text-lg font-semibold leading-snug">
                    {t(titleKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
