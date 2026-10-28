import Image from "next/image";

/**
 * Responsive image for case study media. Goes through the Next.js image
 * optimiser (resized, modern formats, cached on the CDN) and shows a soft
 * placeholder background while loading.
 */
export default function CaseImage({
  src,
  alt,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1000}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className="v3-case-image"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
