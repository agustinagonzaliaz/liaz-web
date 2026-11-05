type Props = {
  variant: 'tienda' | 'pro';
  label: string;
  accent?: string;
  className?: string;
};

/** Boceto ilustrativo de una web, dibujado con CSS. No es una captura real. */
export default function MiniSite({ variant, label, accent = 'var(--celeste)', className = '' }: Props) {
  return (
    <div className={`mini ${className}`} role="img" aria-label={label} style={{ ['--mini-accent' as string]: accent }}>
      <div className="mini__bar" aria-hidden="true"><span /><span /><span /></div>
      <div className="mini__body" aria-hidden="true">
        <div className="mini__nav"><i className="mini__logo" /><i /><i /><i /></div>
        {variant === 'tienda' ? (
          <>
            <div className="mini__banner"><i className="mini__line mini__line--lg" /><i className="mini__line" /><i className="mini__pill" /></div>
            <div className="mini__grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div className="mini__product" key={i}><i className="mini__img" /><i className="mini__line" /><i className="mini__line mini__line--sm" /></div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mini__intro">
              <i className="mini__avatar" />
              <div className="mini__intro-text"><i className="mini__line mini__line--lg" /><i className="mini__line" /><i className="mini__line mini__line--sm" /><i className="mini__pill" /></div>
            </div>
            <div className="mini__rows">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="mini__row" key={i}><i className="mini__dot" /><i className="mini__line" /></div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
