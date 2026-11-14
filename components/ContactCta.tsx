import Link from 'next/link';
import WaButton from './WaButton';

/** Cierre de las páginas internas: lleva al formulario o a WhatsApp. */
export default function ContactCta({ message = 'Hola liaz! Quiero consultar por una web.' }: { message?: string }) {
  return (
    <section className="section on-dark" data-hide-float>
      <div className="wrap cta">
        <h2 className="display display--page">Contame sobre tu negocio.</h2>
        <div className="cta__actions">
          <Link className="btn btn--crema" href="/#contacto">Completar el formulario</Link>
          <WaButton message={message} className="btn btn--ghost">Escribime por WhatsApp</WaButton>
        </div>
      </div>
    </section>
  );
}
