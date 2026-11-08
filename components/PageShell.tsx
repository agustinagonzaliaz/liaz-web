import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import ContactBlock from './ContactBlock';

/** Estructura común de las páginas internas: encabezado, contenido, bloque de contacto y pie. */
export default function PageShell({ children, message }: { children: ReactNode; message?: string }) {
  return (
    <>
      <Header />
      <main id="contenido">
        {children}
        <ContactBlock message={message} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
