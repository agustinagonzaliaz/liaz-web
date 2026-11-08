/** La "a" gigante con luz y brillo, siempre de fondo (no ocupa lugar ni tapa contenido). */
export default function BigA({ className = '' }: { className?: string }) {
  return (
    <div className={`biga ${className}`} aria-hidden="true">
      <span className="biga__glow" />
      <span className="biga__a">a</span>
    </div>
  );
}
