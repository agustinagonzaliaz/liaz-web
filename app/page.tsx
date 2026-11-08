import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Diagnostico from '@/components/Diagnostico';
import ServiciosResumen from '@/components/ServiciosResumen';
import KalosResumen from '@/components/KalosResumen';
import Contacto from '@/components/Contacto';
import Proceso from '@/components/Proceso';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Diagnostico />
        <ServiciosResumen />
        <KalosResumen />
        <Contacto />
        <Proceso />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
