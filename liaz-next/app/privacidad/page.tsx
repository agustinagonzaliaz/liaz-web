import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/lib/legal';
import { site } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Política de privacidad · liaz',
  description: 'Cómo liaz trata los datos personales que recibe a través de su sitio web.',
  alternates: { canonical: '/privacidad' },
};

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        En liaz cuidamos los datos que nos compartís. Esta política explica qué datos recibimos a través de este sitio, para
        qué los usamos y cómo podés ejercer tus derechos, de acuerdo con la Ley 25.326 de Protección de Datos Personales.
      </p>

      <h2>1. Quién es responsable de tus datos</h2>
      <p>
        El responsable es {legal.responsable} (CUIT {legal.cuit}), con domicilio en {legal.ciudad}, que opera bajo el nombre
        liaz. Podés escribirnos a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Qué datos recibimos</h2>
      <p>Solo los que nos enviás de forma voluntaria a través del formulario de contacto:</p>
      <ul>
        <li>tu nombre;</li>
        <li>el nombre de tu negocio o emprendimiento;</li>
        <li>tu Instagram o sitio web, si lo indicás;</li>
        <li>tu número de WhatsApp o tu mail, según cómo prefieras que te contactemos;</li>
        <li>el tipo de web que te interesa y el mensaje que nos escribas.</li>
      </ul>
      <p>
        Si nos escribís por WhatsApp desde los botones del sitio, la conversación se rige además por las políticas de
        WhatsApp.
      </p>

      <h2>3. Para qué los usamos</h2>
      <p>
        Usamos tus datos únicamente para responder tu consulta, enviarte una propuesta y, si trabajamos juntos, llevar
        adelante el proyecto. No los vendemos, no los cedemos a terceros con fines comerciales y no te enviamos publicidad
        sin tu consentimiento.
      </p>

      <h2>4. Servicios que usamos para funcionar</h2>
      <p>
        Este sitio está alojado en Vercel, y los mensajes del formulario se envían por mail a través de Resend. Estos
        proveedores pueden procesar los datos en servidores ubicados fuera de Argentina, solo para prestarnos su servicio.
      </p>
      <p>
        Este sitio no usa cookies de publicidad ni herramientas para rastrear tu actividad. Si en el futuro sumamos
        herramientas de estadísticas, vamos a actualizar esta política.
      </p>

      <h2>5. Cuánto tiempo los guardamos</h2>
      <p>
        Conservamos tus datos mientras sean necesarios para responder tu consulta o para el proyecto que hagamos juntos.
        Después los eliminamos, salvo que la ley nos obligue a conservarlos.
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Podés pedirnos en cualquier momento acceder a tus datos, corregirlos, actualizarlos o eliminarlos. Escribinos a{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> y te respondemos dentro de los plazos que establece la ley. El
        derecho de acceso es gratuito y puede ejercerse en intervalos no menores a seis meses, salvo que acredites un
        interés legítimo.
      </p>
      <p className="legal__note">
        La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la
        atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por
        incumplimiento de las normas vigentes en materia de protección de datos personales.
      </p>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política. La fecha de la última versión figura al comienzo de esta página. Para más
        información, consultá también nuestros <Link href="/terminos">Términos y condiciones</Link>.
      </p>
    </LegalPage>
  );
}
