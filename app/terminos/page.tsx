import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/lib/legal';
import { site } from '@/lib/config';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/terminos', 'Términos y condiciones · liaz', 'Condiciones de uso del sitio web de liaz.');

export default function Terminos() {
  return (
    <LegalPage title="Términos y condiciones">
      <p>
        Estos términos explican las condiciones para usar este sitio web. Al navegarlo, y al marcar la casilla de aceptación del formulario, aceptás estas condiciones. Si
        tenés dudas, escribime a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>1. Quién está a cargo</h2>
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
        Cada proyecto se define a medida. Después de la consulta, envío una propuesta con el alcance, los plazos, el
        precio y las condiciones de pago. El trabajo comienza solo cuando ambas partes aceptan esa propuesta, que es la que
        rige la relación para ese proyecto.
      </p>
      <p>
        Los costos de servicios de terceros que pueda necesitar tu web, como el dominio o el alojamiento, se informan en la
        propuesta antes de empezar.
      </p>

      <h2>4. Cancelaciones, reembolsos y arrepentimiento</h2>
      <p>
        Desde este sitio no se cobra ni se contrata nada, así que no hay compras para devolver. Las condiciones de
        cancelación y de devolución de pagos de cada proyecto, incluida la seña, figuran por escrito en la propuesta, antes
        de empezar.
      </p>
      <p>
        Si contratás a distancia como consumidora o consumidor final, tenés derecho a arrepentirte dentro de los 10 días
        corridos desde que se celebró el contrato, sin costo, según el artículo 34 de la Ley 24.240 y el artículo 1110 del
        Código Civil y Comercial, con las excepciones del artículo 1116 de ese Código. Para ejercerlo, escribime a{' '}
        <a href={`mailto:${site.email}?subject=Arrepentimiento%20de%20contrataci%C3%B3n`}>{site.email}</a>: te confirmo la recepción
        con un número de gestión dentro de las 24 horas.
      </p>

      <h2>5. Proyectos y ejemplos que muestro</h2>
      <p>
        Los proyectos reales que muestro pertenecen a sus respectivos titulares. Las piezas identificadas como
        &quot;ejemplo de diseño&quot; son demostraciones creadas por liaz para marcas ficticias y no representan clientes reales.
      </p>

      <h2>6. Propiedad intelectual</h2>
      <p>
        El diseño, los textos, las ilustraciones y la marca liaz son de mi autoría. No está permitido copiarlos ni
        reproducirlos sin autorización. Los derechos sobre cada web desarrollada para un cliente se definen en la
        propuesta de ese proyecto.
      </p>

      <h2>7. Uso del sitio</h2>
      <p>
        Te pido que uses el sitio y el formulario de buena fe, con datos reales y sin enviar contenido ofensivo, ilegal
        o publicidad no solicitada.
      </p>

      <h2>8. Enlaces a otros sitios</h2>
      <p>
        El sitio incluye enlaces a servicios de terceros, como WhatsApp e Instagram. No soy responsable por el
        contenido ni por las políticas de esos sitios.
      </p>

      <h2>9. Responsabilidad</h2>
      <p>
        Hago todo lo posible para que la información del sitio sea correcta y esté disponible, pero puede haber
        interrupciones o errores puntuales. Si encontrás algo que no funciona, avisame.
      </p>

      <h2>10. Datos personales y cookies</h2>
      <p>
        El tratamiento de los datos que me enviás está explicado en la{' '}
        <Link href="/privacidad">Política de privacidad</Link>. El uso de cookies, en la{' '}
        <Link href="/cookies">Política de cookies</Link>.
      </p>

      <h2>11. Cambios y ley aplicable</h2>
      <p>
        Puedo actualizar estos términos. La fecha de la última versión figura al comienzo de esta página. Estos términos
        se rigen por las leyes de la República Argentina.
      </p>
    </LegalPage>
  );
}
