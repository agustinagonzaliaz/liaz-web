'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export type Screen = { label: string; desktop?: string; mobile?: string };

/**
 * Vitrina animada de un proyecto: compu + celular con capturas reales.
 * Las capturas largas (página entera) se recorren solas de arriba a abajo.
 * Cambia de pantalla sola cada unos segundos, o al tocar las pestañas.
 */
export default function Showcase({ name, screens, interval = 6000 }: { name: string; screens: Screen[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || screens.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setActive((n) => (n + 1) % screens.length), interval);
    return () => clearTimeout(id);
  }, [active, paused, screens.length, interval]);

  const s = screens[active];

  return (
    <div
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="showcase__stage">
        {s.desktop && (
          <div className="showcase__browser" key={`b-${active}`}>
            <div className="showcase__bar" aria-hidden="true"><span /><span /><span /></div>
            <div className="showcase__screen">
              <Image src={s.desktop} alt={`${name}: ${s.label}, en computadora`} fill sizes="(max-width: 1000px) 90vw, 55vw" className="showcase__img" />
            </div>
          </div>
        )}
        {s.mobile && (
          <div className={`showcase__phone${s.desktop ? '' : ' showcase__phone--solo'}`} key={`m-${active}`}>
            <div className="showcase__screen">
              <Image src={s.mobile} alt={`${name}: ${s.label}, en el celular`} fill sizes="160px" className="showcase__img" />
            </div>
          </div>
        )}
      </div>
      {screens.length > 1 && (
        <div className="showcase__tabs" role="tablist" aria-label={`Pantallas de ${name}`}>
          {screens.map((sc, i) => (
            <button
              key={sc.label}
              type="button"
              role="tab"
              aria-selected={i === active}
              className="showcase__tab"
              onClick={() => setActive(i)}
            >
              <span>{sc.label}</span>
              {i === active && !paused && <i className="showcase__progress" style={{ animationDuration: `${interval}ms` }} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
