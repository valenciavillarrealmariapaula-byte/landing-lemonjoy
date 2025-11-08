import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    'hero.headline': 'We make you shine with unforgettable corporate experiences.',
    'hero.subheadline': 'Our job is to make your event the one everyone talks about  and to make you the hero behind it.',
    'hero.cta': "Let's Build Your Next Event",
    
    // Pain Point
    'pain.headline': 'We know your real challenge.',
    'pain.text': 'Behind every great event is someone under pressure to deliver perfection. We know you want innovation, recognition, and a smooth process  without chaos. That\'s where we come in.',
    
    // Promise
    'promise.headline': 'You focus on the applause, We handle the rest.',
    'promise.text': 'We take full control of your event  from concept to execution  so you can focus on results, visibility, and impact.',
    'promise.step1': 'Discovery',
    'promise.step2': 'Concept',
    'promise.step3': 'Production',
    'promise.step4': 'Execution',
    'promise.step5': 'Post-Event Feedback',
    
    // Why Lemonjoy
    'why.headline': 'Your strategic event partner.',
    'why.resourcefulness': 'Resourcefulness',
    'why.communication': 'Communication',
    'why.flexibility': 'Flexibility',
    'why.precision': 'Precision',
    'why.commitment': 'Commitment',
    
    // Trusted
    'trusted.headline': 'Trusted by iconic brands',
    'trusted.text': 'Global leaders in luxury, beauty, and technology rely on Lemonjoy to elevate their experiences and strengthen brand prestige.',
    
    // Cases
    'cases.headline': 'Unforgettable experiences',
    'case1.title': 'A product launch that became a benchmark.',
    'case2.title': 'Technology showcase that redefined innovation.',
    'case3.title': 'Exclusive gala that elevated brand prestige.',
    
    // Contact
    'contact.headline': "Let's build your next unforgettable experience.",
    'contact.text': 'Lemonjoy works with a select group of brands per year. Let us know about your vision.',
    'contact.name': 'Name',
    'contact.company': 'Company',
    'contact.role': 'Role',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.eventType': 'Event Type',
    'contact.budget': 'Budget',
    'contact.Contact time': 'Contact time',
    'contact.message': 'Message',
    'contact.submit': 'Send Request',
    
    // Footer
    'footer.locations': 'Locations',
    'footer.miami': 'Miami',
    'footer.mexicoCity': 'Mexico City',
    'footer.bogota': 'Bogotá',
    'footer.contact': 'Contact',
    'footer.rights': '© 2025 Lemonjoy Events. All rights reserved.',
  },
  es: {
    // Hero
    'hero.headline': 'Te hacemos brillar con experiencias corporativas inolvidables.',
    'hero.subheadline': 'Nuestro trabajo es que tu evento sea del que todos hablen  y que tú seas el héroe detrás de él.',
    'hero.cta': 'Construyamos Tu Próximo Evento',
    
    // Pain Point
    'pain.headline': 'Conocemos tu verdadero desafío.',
    'pain.text': 'Detrás de cada gran evento hay alguien bajo presión para entregar perfección. Sabemos que deseas innovación, reconocimiento y un proceso fluido sin caos. Ahí es donde entramos nosotros.',
    
    // Promise
    'promise.headline': 'Tú enfócate en el aplauso, nosotros manejamos el resto.',
    'promise.text': 'Tomamos control total de tu evento desde el concepto hasta la ejecución  para que puedas enfocarte en resultados, visibilidad e impacto.',
    'promise.step1': 'Descubrimiento',
    'promise.step2': 'Concepto',
    'promise.step3': 'Producción',
    'promise.step4': 'Ejecución',
    'promise.step5': 'Retroalimentación Post-Evento',
    
    // Why Lemonjoy
    'why.headline': 'Tu socio estratégico en eventos.',
    'why.resourcefulness': 'Ingenio',
    'why.communication': 'Comunicación',
    'why.flexibility': 'Flexibilidad',
    'why.precision': 'Precisión',
    'why.commitment': 'Compromiso',
    
    // Trusted
    'trusted.headline': 'Confianza de marcas icónicas',
    'trusted.text': 'Líderes globales en lujo, belleza y tecnología confían en Lemonjoy para elevar sus experiencias y fortalecer su prestigio de marca.',
    
    // Cases
    'cases.headline': 'Experiencias inolvidables',
    'case1.title': 'Un lanzamiento de producto que marcó tendencia.',
    'case2.title': 'Showcase tecnológico que redefinió la innovación.',
    'case3.title': 'Gala exclusiva que elevó el prestigio de marca.',
    
    // Contact
    'contact.headline': 'Construyamos tu próxima experiencia inolvidable.',
    'contact.text': 'Lemonjoy trabaja con un grupo selecto de marcas por año. Cuéntanos sobre tu visión.',
    'contact.name': 'Nombre',
    'contact.company': 'Empresa',
    'contact.role': 'Cargo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.eventType': 'Tipo de Evento',
    'contact.budget': 'Presupuesto',
    'contact.Contact time': 'Horario contacto',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Solicitud',
    
    // Footer
    'footer.locations': 'Ubicaciones',
    'footer.miami': 'Miami',
    'footer.mexicoCity': 'Ciudad de México',
    'footer.bogota': 'Bogotá',
    'footer.contact': 'Contacto',
    'footer.rights': '© 2025 Lemonjoy Events. Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
