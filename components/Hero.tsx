'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import RotatingWord from './RotatingWord';
import { heroWords } from '@/lib/content';

/* Cada palabra tiñe la "a" de fondo y la pastilla con un color de la paleta. */
const accents = ['#B9D9E9', '#E9B7A5', '#D6C5E8', '#B9D9E9'];

export default function Hero() {
  const [i, setI] = useState(0);
  const onChange = useCallback((n: number) => setI(n), []);
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

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
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  };
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return (
    <section
      id="inicio"
      ref={ref}
      className="hero"
      style={{ ['--accent' as string]: accents[i] }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow" />
        <span className="hero__a">a</span>
      </div>
      <div className="wrap hero__inner">
        <p className="eyebrow up">liaz · estudio creativo de diseño web</p>
        <h1 className="hero__title up">
          <span className="hero__line1">Tu negocio merece un lugar propio en internet.</span>
          <span className="hero__line2">Para <RotatingWord words={heroWords} onChange={onChange} /></span>
        </h1>
        <p className="hero__lead up">
          Diseñamos tiendas online y páginas web profesionales a medida, pensadas para lo que tu negocio necesita.
        </p>
        <div className="actions up">
          <a className="btn btn--dark btn--lg btn--shine" href="#contacto">Consultar por mi web</a>
          <a className="btn btn--outline btn--lg" href="#diagnostico">¿Es para mí?</a>
        </div>
      </div>
    </section>
  );
}
