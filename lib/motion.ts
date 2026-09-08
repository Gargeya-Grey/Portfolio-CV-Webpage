export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export const DURATION = {
  press: 0.14,
  hover: 0.18,
  ui: 0.22,
  enter: 0.28,
} as const;

export const SPRING_UI = { type: "spring" as const, duration: 0.4, bounce: 0 };

export const STAGGER = 0.05;
