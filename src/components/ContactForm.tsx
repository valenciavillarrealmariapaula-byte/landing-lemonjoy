import { useEffect } from 'react';

export const ContactForm = () => {
  useEffect(() => {
    // Carga el script externo de MarceloCRM cuando el componente se monta
    const script = document.createElement('script');
    script.src = 'https://tools.marcelocrm.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpieza del script cuando se desmonta el componente
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Déjanos tus datos y nos pondremos en contacto contigo pronto.
          </p>
        </div>

        <div className="animate-scale-in">
          <iframe
            src="https://tools.marcelocrm.com/widget/form/RQQ4B0grOqabo6u7j3cI"
            style={{
              width: '100%',
              height: '601px',
              border: 'none',
              borderRadius: '0px',
            }}
            id="inline-RQQ4B0grOqabo6u7j3cI"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="FORMULARIO POP OP EMBEBID"
            data-layout-iframe-id="inline-RQQ4B0grOqabo6u7j3cI"
            data-form-id="RQQ4B0grOqabo6u7j3cI"
            title="FORMULARIO POP OP EMBEBID"
          ></iframe>
        </div>
      </div>
    </section>
  );
};