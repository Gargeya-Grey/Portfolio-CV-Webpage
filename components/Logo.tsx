import { logo } from "@/lib/logo";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** `auto` follows the theme (html.dark); `onDark` is for the inverted contact band. */
  variant?: "auto" | "onLight" | "onDark";
  /** CSS size of the square mark (width & height). */
  size?: number;
  className?: string;
  alt?: string;
};

/** The transparent SGargeya mark for page chrome, as in the personal website's header. */
export default function Logo({ variant = "auto", size = 32, className, alt = "SGargeya" }: LogoProps) {
  const mark = (src: string, extra?: string) => (
    // A plain img: the SVG is tiny, and `auto` swaps two of them with the theme class in CSS.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={size} height={size} className={cn("brand-mark select-none", extra, className)} decoding="async" />
  );
  if (variant === "onDark") return mark(logo.mark.onDark);
  if (variant === "onLight") return mark(logo.mark.onLight);
  return <>{mark(logo.mark.onLight, "brand-mark-light")}{mark(logo.mark.onDark, "brand-mark-dark")}</>;
}
