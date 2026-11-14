import Link from 'next/link';
import { site, waLink } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="footer" data-hide-float>
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__lead">
            <p className="footer__say">Diseño y desarrollo web en Córdoba, Argentina.</p>
            <Link className="btn btn--dark btn--sm" href="/#contacto">Contame sobre tu negocio</Link>
          </div>
          <nav className="footer__col" aria-label="Secciones">
            <p className="footer__h">Secciones</p>
            <Link className="link" href="/proyectos">Proyectos</Link>
            <Link className="link" href="/tienda-online">Tienda online</Link>
            <Link className="link" href="/web-profesional">Web profesional</Link>
            <Link className="link" href="/#dudas">Dudas</Link>
          </nav>
          <div className="footer__col">
            <p className="footer__h">Contacto</p>
            <a className="link" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">Instagram @{site.instagram}</a>
            <a className="link" href={waLink('Hola liaz!')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <Link className="footer__mark" href="/" aria-label="liaz, volver al inicio">liaz</Link>
        <div className="footer__legal">
          <Link className="link" href="/privacidad">Política de privacidad</Link>
          <Link className="link" href="/terminos">Términos y condiciones</Link>
          <Link className="link" href="/cookies">Política de cookies</Link>
          <span>© {new Date().getFullYear()} liaz</span>
        </div>
      </div>
    </footer>
  );
}
