import { waLink } from '@/lib/config';

/** Ícono de chat para los botones que abren WhatsApp. */
export function ChatIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 0 1-13.3 7.9L3 21l1.2-4.5A9 9 0 1 1 21 12z" />
    </svg>
  );
}

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  /** Muestra debajo "Se abre WhatsApp con tu mensaje listo." */
  note?: boolean;
};

/** Botón que abre WhatsApp con un mensaje ya escrito. */
export default function WaButton({ message, children, className = 'btn btn--dark', note = true }: Props) {
  const btn = (
    <a className={className} href={waLink(message)} target="_blank" rel="noopener noreferrer">
      <ChatIcon />
      <span>{children}</span>
    </a>
  );
  if (!note) return btn;
  return (
    <div className="wa">
      {btn}
      <p className="wa__note">Se abre WhatsApp con tu mensaje listo.</p>
    </div>
  );
}
