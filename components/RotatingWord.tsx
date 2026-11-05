'use client';

import { useEffect, useState } from 'react';

type Props = { words: string[]; interval?: number; onChange?: (index: number) => void };

/**
 * Palabra animada sin saltos de layout.
 * Todas las palabras se dibujan apiladas en la misma celda de una grilla:
 * el contenedor toma el ancho de la más larga y el alto de una línea,
 * así que cambiar de palabra nunca modifica el tamaño del título.
 */
export default function RotatingWord({ words, interval = 2800, onChange }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  useEffect(() => { onChange?.(active); }, [active, onChange]);

  return (
    <span className="rotator">
      <span className="sr-only">{words.join(', ')}</span>
      <span className="rotator__stack" aria-hidden="true">
        {words.map((w, i) => (
          <span key={w} className={`rotator__word${i === active ? ' is-active' : ''}${i === (active - 1 + words.length) % words.length ? ' is-leaving' : ''}`}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
