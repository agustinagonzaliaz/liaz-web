'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';

export type Screen = { label: string; desktop?: string; mobile?: string };

/**
 * Vitrina animada de un proyecto: compu + celular con capturas reales.
 * Las capturas largas (página entera) se recorren solas de arriba a abajo.
 * Cambia de pantalla sola cada unos segundos, o al tocar las pestañas (o con las flechas).
 */
export default function Showcase({ name, screens, interval = 6000 }: { name: string; screens: Screen[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  useEffect(() => {
    if (paused || screens.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % screens.length), interval);
    return () => clearTimeout(t);
  }, [active, paused, screens.length, interval]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = screens.length - 1;
    let next = -1;
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1;
    if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const s = screens[active];

  return (
    <div
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="showcase__stage" role="tabpanel" id={`${id}-panel`} aria-label={`${name}: ${s.label}`}>
        {s.desktop && (
          <div className="showcase__browser" key={`b-${active}`}>
            <div className="duo__bar" aria-hidden="true"><span /><span /><span /></div>
            <div className="showcase__screen">
              <Image src={s.desktop} alt={`${name}: ${s.label}, en computadora`} fill sizes="(max-width: 1000px) 80vw, 800px" className="showcase__img" priority={active === 0} />
            </div>
          </div>
        )}
        {s.mobile && (
          <div className={`showcase__phone${s.desktop ? '' : ' showcase__phone--solo'}`} key={`m-${active}`}>
            <div className="showcase__screen">
              <Image src={s.mobile} alt={`${name}: ${s.label}, en el celular`} fill sizes="(max-width: 700px) 48vw, 240px" className="showcase__img" />
            </div>
          </div>
        )}
      </div>
      {screens.length > 1 && (
        <div className="showcase__tabs" role="tablist" aria-label={`Pantallas de ${name}`}>
          {screens.map((sc, i) => (
            <button
              key={sc.label}
              ref={(el) => { tabs.current[i] = el; }}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              className="showcase__tab"
              onClick={() => setActive(i)}
              onKeyDown={onKey}
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
