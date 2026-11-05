import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/lib/legal';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Términos y condiciones · liaz',
  description: 'Condiciones de uso del sitio web de liaz.',
  alternates: { canonical: '/terminos' },
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>
        Estos términos explican las condiciones para usar este sitio web. Al navegarlo, aceptás estas condiciones. Si
        tenés dudas, escribinos a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>1. Quiénes somos</h2>
      <p>
        liaz es un estudio creativo de diseño y desarrollo web, a cargo de {legal.responsable} (CUIT {legal.cuit}), con
        domicilio en {legal.ciudad}.
      </p>

      <h2>2. Para qué sirve este sitio</h2>
      <p>
        Este sitio presenta los servicios de liaz y permite enviar consultas. La información publicada es orientativa: no
        constituye una oferta de venta ni un presupuesto. Desde este sitio no se venden productos ni se contratan servicios
        en línea.
      </p>

      <h2>3. Cómo se contratan los servicios</h2>
      <p>
        Cada proyecto se define a medida. Después de la consulta, enviamos una propuesta con el alcance, los plazos, el
        precio y las condiciones de pago. El trabajo comienza solo cuando ambas partes aceptan esa propuesta, que es la que
        rige la relación para ese proyecto.
      </p>
      <p>
        Los costos de servicios de terceros que pueda necesitar tu web, como el dominio o el alojamiento, se informan en la
        propuesta antes de empezar.
      </p>

      <h2>4. Proyectos y ejemplos que mostramos</h2>
      <p>
        Los proyectos reales que mostramos pertenecen a sus respectivos titulares. Las piezas identificadas como
        &quot;ejemplo de diseño&quot; son demostraciones creadas por liaz para marcas ficticias y no representan clientes reales.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        El diseño, los textos, las ilustraciones y la marca liaz son de nuestra autoría. No está permitido copiarlos ni
        reproducirlos sin autorización. Los derechos sobre cada web desarrollada para un cliente se definen en la
        propuesta de ese proyecto.
      </p>

      <h2>6. Uso del sitio</h2>
      <p>
        Te pedimos que uses el sitio y el formulario de buena fe, con datos reales y sin enviar contenido ofensivo, ilegal
        o publicidad no solicitada.
      </p>

      <h2>7. Enlaces a otros sitios</h2>
      <p>
        El sitio incluye enlaces a servicios de terceros, como WhatsApp e Instagram. No somos responsables por el
        contenido ni por las políticas de esos sitios.
      </p>

      <h2>8. Responsabilidad</h2>
      <p>
        Hacemos todo lo posible para que la información del sitio sea correcta y esté disponible, pero puede haber
        interrupciones o errores puntuales. Si encontrás algo que no funciona, avisanos.
      </p>

      <h2>9. Datos personales</h2>
      <p>
        El tratamiento de los datos que nos enviás está explicado en nuestra{' '}
        <Link href="/privacidad">Política de privacidad</Link>.
      </p>

      <h2>10. Cambios y ley aplicable</h2>
      <p>
        Podemos actualizar estos términos. La fecha de la última versión figura al comienzo de esta página. Estos términos
        se rigen por las leyes de la República Argentina.
      </p>
    </LegalPage>
  );
}
