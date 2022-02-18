import { Easing, interpolate } from "remotion";

export interface Vector {
  x: number;
  y: number;
}

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

export const interpolateVector = (
  value: number,
  inputRange: readonly number[],
  outputRange: readonly Vector[]
) => ({
  x: interpolate(
    value,
    inputRange,
    outputRange.map((v) => v.x),
    CLAMP
  ),
  y: interpolate(
    value,
    inputRange,
    outputRange.map((v) => v.y),
    CLAMP
  ),
});

export const mixVector = (value: number, from: Vector, to: Vector) =>
  interpolateVector(value, [0, 1], [from, to]);
