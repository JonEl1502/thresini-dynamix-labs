import Image from "next/image";
import s from "./demo.module.css";

/**
 * Every photograph on a demo goes through here, so optimisation, sizing and the
 * tinted placeholder behind a slow load are decided in one place. Fills its
 * parent — the parent owns the aspect ratio and the corner radius.
 */
export function Photo({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <span className={`${s.ph} ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </span>
  );
}

export default Photo;
