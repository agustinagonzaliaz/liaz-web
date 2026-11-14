import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { site } from '@/lib/config';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta('/cookies', 'Política de cookies · liaz', 'Qué cookies usa el sitio web de liaz y por qué no hace falta que aceptes ninguna.');

export default function Cookies() {
  return (
    <LegalPage title="Política de cookies">
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información sobre tu visita.
        Esta página explica cuáles usa este sitio.
      </p>

      <h2>1. Este sitio no usa cookies</h2>
      <p>
        El sitio de liaz no instala cookies propias ni de terceros, y tampoco guarda información en tu navegador por otros
        medios. No uso herramientas de estadísticas, de publicidad ni de seguimiento, y las tipografías se cargan desde
        el propio sitio.
      </p>
      <p>Por eso no vas a ver un aviso para aceptar cookies: no hay nada que aceptar.</p>

      <h2>2. Enlaces a otros servicios</h2>
      <p>
        Los botones de WhatsApp y los enlaces a Instagram te llevan a esos servicios. Una vez ahí, se aplican sus propias
        políticas de cookies y de privacidad, que no dependen de liaz.
      </p>

      <h2>3. Datos técnicos del alojamiento</h2>
      <p>
        El sitio está alojado en Vercel. Como cualquier servidor web, puede registrar datos técnicos de cada visita, como
        la dirección IP, para funcionar y protegerse de abusos. Yo no uso esos registros para identificarte ni para seguir
        tu actividad.
      </p>

      <h2>4. Si esto cambia</h2>
      <p>
        Si en el futuro sumo estadísticas u otras herramientas que usen cookies no esenciales, voy a actualizar esta
        política y a pedirte tu consentimiento antes de activarlas.
      </p>
      <p>
        Para saber cómo trato tus datos personales, leé la <Link href="/privacidad">Política de privacidad</Link>. Si tenés
        dudas, escribime a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
