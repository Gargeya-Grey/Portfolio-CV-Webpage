import Image from "next/image";
import { logo, type LogoVariant } from "@/lib/logo";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Visual variant. Site chrome is light; use "light" by default. */
  variant?: LogoVariant;
  /** Prefer SVG for UI; PNG for contexts that need raster (rare in components). */
  format?: "svg" | "png" | "png960";
  /** CSS size of the square mark (width & height). */
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

/**
 * Brand mark. Square tile with the G + green accent.
 * Defaults to the light-mode asset (for the site's light UI).
 */
export default function Logo({
  variant = "light",
  format = "svg",
  size = 32,
  className,
  priority = false,
  alt = "SGargeya",
}: LogoProps) {
  const asset = logo[variant];
  const src =
    format === "png" ? asset.png : format === "png960" ? asset.png960 : asset.svg;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-lg object-cover select-none", className)}
      sizes={`${size}px`}
    />
  );
}
