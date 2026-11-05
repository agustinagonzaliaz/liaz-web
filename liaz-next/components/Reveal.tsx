'use client';

import { createElement, useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'h2' | 'p';
  delay?: number;
};

/** Hace aparecer el contenido suavemente cuando entra en pantalla. */
export default function Reveal({ children, className = '', as = 'div', delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.9;
    if (reduced || inView || !('IntersectionObserver' in window)) return;
    setState('hidden');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `${className} reveal reveal--${state}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
