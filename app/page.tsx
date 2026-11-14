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
import { faqs } from '@/lib/content';

/* Las dudas, marcadas para que Google pueda mostrarlas en los resultados. */
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
