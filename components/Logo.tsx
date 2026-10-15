import { logo } from "@/lib/logo";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** `auto` follows the colour scheme; `onDark` is for the inverted contact band. */
  variant?: "auto" | "onLight" | "onDark";
  /** CSS size of the square mark (width & height). */
  size?: number;
  className?: string;
  alt?: string;
};

/** The transparent SGargeya mark for page chrome, as in the personal website's header. */
export default function Logo({ variant = "auto", size = 32, className, alt = "SGargeya" }: LogoProps) {
  const src = variant === "onDark" ? logo.mark.onDark : logo.mark.onLight;
  // A plain img inside <picture>: next/image cannot switch sources by colour scheme, and the SVG is tiny.
  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src={src} alt={alt} width={size} height={size} className={cn("brand-mark select-none", className)} decoding="async" />;
  if (variant !== "auto") return img;
  return (
    <picture>
      <source srcSet={logo.mark.onDark} media="(prefers-color-scheme: dark)" />
      {img}
    </picture>
  );
}
