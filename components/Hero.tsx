'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type PointerEvent } from 'react';

/* La "a" va cambiando despacio entre los colores de la paleta. */
const accents = ['#B9D9E9', '#E9B7A5', '#D6C5E8'];

const index = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/tienda-online', label: 'Tienda online' },
  { href: '/web-profesional', label: 'Web profesional' },
  { href: '#dudas', label: 'Dudas' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % accents.length), 3600);
    return () => {
      clearInterval(id);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  /* La luz y la "a" siguen suavemente al mouse (solo con mouse, no en celulares). */
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
      el.style.setProperty('--px', (x - 0.5).toFixed(3));
      el.style.setProperty('--py', (y - 0.5).toFixed(3));
    });
  };
  const onLeave = () => {
    ref.current?.style.setProperty('--px', '0');
    ref.current?.style.setProperty('--py', '0');
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="hero"
      style={{ ['--accent' as string]: accents[i] }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="biga" aria-hidden="true">
        <span className="biga__glow" />
        <span className="biga__letter">
          <span className="biga__a biga__a--depth">a</span>
          <span className="biga__a">a</span>
        </span>
      </div>
      <div className="wrap hero__inner">
        <div className="hero__text">
          <h1 className="display hero__title rise">Tu negocio merece un lugar propio en internet.</h1>
          <p className="lead rise rise--2">
            Diseño tiendas online y webs profesionales a medida, pensadas para lo que tu negocio necesita.
          </p>
          <div className="actions rise rise--3">
            <a className="btn btn--dark" href="#contacto">Contame sobre tu negocio</a>
            <a className="btn btn--outline" href="#diagnostico">¿Es para mí?</a>
          </div>
        </div>
        <div className="hero__foot rise rise--4">
          <p className="hero__place">Estudio de diseño web en Córdoba, Argentina</p>
          <p className="hero__from">Presupuesto a medida y sin compromiso</p>
          <nav className="hero__index" aria-label="Explorá">
            {index.map((l) =>
              l.href.startsWith('#') ? (
                <a key={l.href} className="link" href={l.href}>{l.label}</a>
              ) : (
                <Link key={l.href} className="link" href={l.href}>{l.label}</Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
