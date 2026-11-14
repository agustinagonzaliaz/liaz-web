'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/tienda-online', label: 'Tienda online' },
  { href: '/web-profesional', label: 'Web profesional' },
  { href: '/#dudas', label: 'Dudas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Menú del celular: bloquea el scroll de fondo, se cierra con Escape y al agrandar la ventana. */
  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btn.current?.focus();
      }
    };
    const mq = window.matchMedia('(min-width: 1001px)');
    const onWide = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
      document.body.classList.remove('is-locked');
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap header__in">
        <Link className="logo" href="/" aria-label="liaz, inicio" onClick={close}>liaz</Link>
        <button
          ref={btn}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span>{open ? 'Cerrar' : 'Menú'}</span>
          <span className="menu-btn__icon" aria-hidden="true" />
        </button>
        <nav id="menu" className={`nav${open ? ' is-open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <Link key={l.href} className="link" href={l.href} aria-current={pathname === l.href ? 'page' : undefined} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link className="btn btn--dark btn--sm nav__cta" href="/#contacto" onClick={close}>Hablemos</Link>
        </nav>
      </div>
    </header>
  );
}
