import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Proyectos from '@/components/Proyectos';
import Diagnostico from '@/components/Diagnostico';
import Servicios from '@/components/Servicios';
import SobreLiaz from '@/components/SobreLiaz';
import Proceso from '@/components/Proceso';
import PorQue from '@/components/PorQue';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Proyectos />
        <Diagnostico />
        <Servicios />
        <SobreLiaz />
        <Proceso />
        <PorQue />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
