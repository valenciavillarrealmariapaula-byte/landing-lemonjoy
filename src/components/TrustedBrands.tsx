import { useLanguage } from '@/contexts/LanguageContext';
import case5 from '@/assets/case-5.jpg';
import case6 from '@/assets/case-6.jpg';
import case7 from '@/assets/case-7.jpg';
import case8 from '@/assets/case-8.jpg';

export const TrustedBrands = () => {
  const { t } = useLanguage();

  const events = [
    { name: 'LVMH Gala 2024', img: case5, date: 'Jan 2024', location: 'Paris' },
    { name: 'Dior Launch Event', img: case6, date: 'Feb 2024', location: 'NYC' },
    { name: "Gucci Fashion Week", img: case7, date: 'Mar 2024', location: 'London' },
    { name: 'FIFA Corporate Summit', img: case8, date: 'May 2024', location: 'Chicago' },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          {t('trusted.headline')}
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in">
          {t('trusted.text')}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, index) => (
            <div
              key={event.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, width: '220px' }}
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3 text-center">
                <h3 className="text-md font-semibold mb-1">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.date} — {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};