import { Easing } from "remotion";

export const CLAMP = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;

export const EASE_CLAMP = {
  ...CLAMP,
  Easing: Easing.bezier(0.5, 1, 0.89, 1),
};

export const mix = (value: number, x: number, y: number) =>
  x * (1 - value) + y * value;
