/**
 * SGargeya brand assets, copied from the personal website (W:\Personal-Brand-Website\public\brand).
 * Regenerate them there with scripts/build-brand-mark.mjs, then copy; never hand-edit a cut.
 *
 * - mark: the transparent G for page chrome. onLight = ink mark, onDark = light mark.
 * - light / dark: the full tile (social, app icons). public/logo/icon-*.png are resized from these.
 */
export const logo = {
  mark: {
    onLight: "/logo/sgargeya-mark-on-light.svg",
    onDark: "/logo/sgargeya-mark-on-dark.svg",
  },
  light: {
    svg: "/logo/sgargeya-logo-light.svg",
    png960: "/logo/sgargeya-logo-light-960.png",
    png: "/logo/sgargeya-logo-light.png",
  },
  dark: {
    svg: "/logo/sgargeya-logo-dark.svg",
    png960: "/logo/sgargeya-logo-dark-960.png",
    png: "/logo/sgargeya-logo-dark.png",
  },
} as const;
