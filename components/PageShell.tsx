import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import ContactCta from './ContactCta';

/** Estructura común de las páginas internas: encabezado, contenido, cierre de contacto y pie. */
export default function PageShell({ children, message, cta = true }: { children: ReactNode; message?: string; cta?: boolean }) {
  return (
    <>
      <Header />
      <main id="contenido">
        {children}
        {cta && <ContactCta message={message} />}
      </main>
      <Footer />
      {cta && <FloatingWhatsApp />}
    </>
  );
}
