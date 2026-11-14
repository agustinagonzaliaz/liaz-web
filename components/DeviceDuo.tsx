import Image from 'next/image';

type Props = {
  desktop: string;
  mobile: string;
  altDesktop: string;
  altMobile: string;
  /** Color del fondo del marco. 'none' lo deja transparente. */
  tone?: 'celeste' | 'lila' | 'crema' | 'none';
  /** Recorre sola las capturas largas de arriba a abajo. */
  scroll?: boolean;
  priority?: boolean;
  sizes?: string;
};

/** Una web en compu y celular, dentro de un marco de color. */
export default function DeviceDuo({ desktop, mobile, altDesktop, altMobile, tone = 'celeste', scroll = false, priority = false, sizes = '(max-width: 700px) 90vw, 45vw' }: Props) {
  return (
    <div className={`frame frame--${tone} duo${scroll ? ' duo--scroll' : ''}`}>
      <div className="duo__browser">
        <div className="duo__bar" aria-hidden="true"><span /><span /><span /></div>
        <div className="duo__screen">
          <Image src={desktop} alt={altDesktop} fill sizes={sizes} className="duo__img" priority={priority} />
        </div>
      </div>
      <div className="duo__phone">
        <div className="duo__screen">
          <Image src={mobile} alt={altMobile} fill sizes="(max-width: 700px) 24vw, 160px" className="duo__img" />
        </div>
      </div>
    </div>
  );
}
