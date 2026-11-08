import Link from 'next/link';
import WaButton from './WaButton';

/** Cierre de las páginas internas: lleva al formulario o a WhatsApp. */
export default function ContactBlock({ message = 'Hola liaz! Quiero consultar por una web.' }: { message?: string }) {
  return (
    <section className="section section--choco" data-hide-float>
      <div className="wrap cblock">
        <div className="cblock__text">
          <p className="eyebrow">hablemos</p>
          <h2 className="h2 h2--xl">Contame sobre tu negocio.</h2>
        </div>
        <div className="cblock__actions">
          <Link className="btn btn--crema btn--lg" href="/#contacto">Completar el formulario</Link>
          <WaButton message={message} className="btn btn--celeste btn--lg">Escribime por WhatsApp</WaButton>
        </div>
      </div>
    </section>
  );
}
