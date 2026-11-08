import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { legal } from '@/lib/legal';
import { site } from '@/lib/config';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/privacidad', 'Política de privacidad · liaz', 'Cómo liaz trata los datos personales que recibe a través de su sitio web.');

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad">
      <p>
        En liaz cuido los datos que me compartís. Esta política explica qué datos recibo a través de este sitio, para
        qué los uso y cómo podés ejercer tus derechos, de acuerdo con la Ley 25.326 de Protección de Datos Personales.
      </p>

      <h2>1. Quién es responsable de tus datos</h2>
      <p>
        El responsable es {legal.responsable} (CUIT {legal.cuit}), con domicilio en {legal.ciudad}, que opera bajo el nombre
        liaz. Podés escribirme a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>2. Qué datos recibo</h2>
      <p>Solo los que me enviás de forma voluntaria a través del formulario de contacto:</p>
      <ul>
        <li>tu nombre;</li>
        <li>el nombre de tu negocio o emprendimiento;</li>
        <li>tu Instagram o sitio web, si lo indicás;</li>
        <li>tu número de WhatsApp o tu mail, según cómo prefieras que te contacte;</li>
        <li>el tipo de web que te interesa y el mensaje que me escribas.</li>
      </ul>
      <p>
        Si me escribís por WhatsApp desde los botones del sitio, la conversación se rige además por las políticas de
        WhatsApp.
      </p>

      <h2>3. Para qué los uso</h2>
      <p>
        Uso tus datos únicamente para responder tu consulta, enviarte una propuesta y, si trabajamos juntos, llevar
        adelante el proyecto. No los vendo, no los cedo a terceros con fines comerciales y no te envío publicidad
        sin tu consentimiento.
      </p>

      <h2>4. Servicios que uso para que el sitio funcione</h2>
      <p>
        Este sitio está alojado en Vercel, y los mensajes del formulario se envían por mail a través de Resend. Estos
        proveedores pueden procesar los datos en servidores ubicados fuera de Argentina, solo para prestarme su servicio.
      </p>
      <p>
        Este sitio no usa cookies de publicidad ni herramientas para rastrear tu actividad. Si en el futuro sumo
        herramientas de estadísticas, voy a actualizar esta política.
      </p>

      <h2>5. Cuánto tiempo los guardo</h2>
      <p>
        Conservo tus datos mientras sean necesarios para responder tu consulta o para el proyecto que hagamos juntos.
        Después los elimino, salvo que la ley me obligue a conservarlos.
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Podés pedirme en cualquier momento acceder a tus datos, corregirlos, actualizarlos o eliminarlos. Escribime a{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> y te respondo dentro de los plazos que establece la ley. El
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
        Puedo actualizar esta política. La fecha de la última versión figura al comienzo de esta página. Para más
        información, consultá también los <Link href="/terminos">Términos y condiciones</Link>.
      </p>
    </LegalPage>
  );
}
