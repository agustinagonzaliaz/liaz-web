import Link from 'next/link';
import { site, waLink } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="footer" data-hide-float>
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Link className="logo" href="/">liaz</Link>
          <p>Diseño y desarrollo web · Argentina</p>
        </div>
        <nav className="footer__col" aria-label="Secciones">
          <Link className="link" href="/proyectos">Proyectos</Link>
          <Link className="link" href="/tienda-online">Tienda online</Link>
          <Link className="link" href="/web-profesional">Web profesional</Link>
          <Link className="link" href="/#dudas">Dudas</Link>
        </nav>
        <div className="footer__col">
          <a className="link" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">Instagram @{site.instagram}</a>
          <a className="link" href={waLink('Hola liaz!')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="wrap footer__legal">
        <Link className="link" href="/privacidad">Política de privacidad</Link>
        <Link className="link" href="/terminos">Términos y condiciones</Link>
        <span>© {new Date().getFullYear()} liaz</span>
      </div>
    </footer>
  );
}
