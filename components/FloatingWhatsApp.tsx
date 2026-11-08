'use client';

import { useEffect, useState } from 'react';
import { waLink } from '@/lib/config';
import { ChatIcon } from './WaButton';

/**
 * Botón flotante de WhatsApp.
 * Aparece recién después de la portada y se oculta cuando están a la vista
 * el formulario, los bloques de contacto o el pie de página (marcados con data-hide-float),
 * para no tapar textos ni botones.
 */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const blockers = new Set<Element>();
    let pastTop = false;
    const update = () => setShow(pastTop && blockers.size === 0);
    const onScroll = () => {
      pastTop = window.scrollY > window.innerHeight * 0.6;
      update();
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? blockers.add(e.target) : blockers.delete(e.target)));
        update();
      },
      { rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('[data-hide-float]').forEach((el) => io.observe(el));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <a
      className={`float-wa btn btn--dark${show ? ' is-shown' : ''}`}
      href={waLink('Hola liaz! Quiero saber más sobre tener mi web.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <ChatIcon />
      <span>Hablemos</span>
    </a>
  );
}
