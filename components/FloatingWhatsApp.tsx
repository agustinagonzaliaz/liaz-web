import { waLink } from '@/lib/config';

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-wa btn btn--dark"
      href={waLink('Hola liaz! Quiero saber más sobre tener mi web.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.5A9 9 0 1 1 21 12z" />
      </svg>
      <span>Hablemos</span>
    </a>
  );
}
