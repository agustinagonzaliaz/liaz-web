'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#dudas', label: 'Dudas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap header__in">
        <a className="logo" href="#inicio" aria-label="liaz, inicio">liaz</a>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
        <nav id="menu" className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} className="link" href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a className="btn btn--dark btn--sm" href="#contacto" onClick={close}>Hablemos</a>
        </nav>
      </div>
    </header>
  );
}
