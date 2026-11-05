import Link from 'next/link';
import { site, waLink } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <Link className="logo" href="/">liaz</Link>
        <span className="footer__links">
          <a className="link" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">@{site.instagram}</a>
          <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="link" href={waLink('Hola liaz!')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </span>
        <span>Diseño y desarrollo web · Argentina</span>
      </div>
      <div className="wrap footer__legal">
        <Link className="link" href="/privacidad">Política de privacidad</Link>
        <Link className="link" href="/terminos">Términos y condiciones</Link>
        <span>© {new Date().getFullYear()} liaz</span>
      </div>
    </footer>
  );
}
