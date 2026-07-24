/**
 * SGargeya brand assets.
 *
 * - light: light tile + dark mark — use on light / glass UI
 * - dark: dark tile + light mark — use on dark UI or dark system chrome
 *
 * Sizes:
 * - svg: crisp UI (nav, footer)
 * - 960 png: icons / medium density
 * - full png (1920): high-res / social
 */
export const logo = {
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

export type LogoVariant = keyof typeof logo;
