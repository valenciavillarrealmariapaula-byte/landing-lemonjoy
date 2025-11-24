import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const locations = [
    { key: 'miami', icon: MapPin },
    { key: 'mexicoCity', icon: MapPin },
    { key: 'bogota', icon: MapPin },
  ];

  const socials = [
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
{/* Brand */}
<div>
  {/* Logo solamente */}
  <img 
    src="/lemonjoy-logo.png" 
    alt="Lemonjoy Logo"
    className="w-32 h-auto mb-4"
  />

  <p className="text-secondary-foreground/80">
    Experiential Events Agency
  </p>
</div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.locations')}</h4>
            <ul className="space-y-2">
              {locations.map(({ key, icon: Icon }) => (
                <li key={key} className="flex items-center gap-2 text-secondary-foreground/80">
                  <Icon className="w-4 h-4" />
                  {t(footer.${key})}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <a 
              href="mailto:hello@lemonjoyevents.com"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@lemonjoyevents.com
            </a>
              {/* ← Nuevo texto debajo */}
  <p className="mt-2 text-secondary-foreground/60 text-sm">
    https://lemonjoyevents.com/es/
  </p>
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-secondary-foreground/60 text-sm">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};