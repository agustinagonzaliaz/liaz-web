'use client';

import { useRef, type PointerEvent } from 'react';
import Image from 'next/image';

type Props = {
  desktop: string;
  mobile?: string;
  altDesktop: string;
  altMobile?: string;
  /** Color del fondo del marco. 'none' lo deja transparente. */
  tone?: 'celeste' | 'lila' | 'crema' | 'none';
  /** Recorre sola las capturas largas de arriba a abajo. */
  scroll?: boolean;
  priority?: boolean;
  sizes?: string;
};

/** Una web en compu y celular, dentro de un marco de color. */
export default function DeviceDuo({ desktop, mobile, altDesktop, altMobile, tone = 'celeste', scroll = false, priority = false, sizes = '(max-width: 700px) 90vw, 45vw' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  /* Con el mouse, la compu y el celular se inclinan apenas, con profundidad. En pantallas táctiles no hace nada. */
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--tx', x.toFixed(3));
      el.style.setProperty('--ty', y.toFixed(3));
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    ref.current?.style.setProperty('--tx', '0');
    ref.current?.style.setProperty('--ty', '0');
  };

  return (
    <div ref={ref} className={`frame frame--${tone} duo${scroll ? ' duo--scroll' : ''}${mobile ? '' : ' duo--solo'}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="duo__browser">
        <div className="duo__bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="duo__screen">
          <Image src={desktop} alt={altDesktop} fill sizes={sizes} className="duo__img" priority={priority} />
        </div>
      </div>
      {mobile && (
        <div className="duo__phone">
          <div className="duo__screen">
            <Image src={mobile} alt={altMobile ?? ''} fill sizes="(max-width: 700px) 24vw, 160px" className="duo__img" />
          </div>
        </div>
      )}
    </div>
  );
}
