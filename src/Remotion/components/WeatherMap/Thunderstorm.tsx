import React from "react";
import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  random,
  useCurrentFrame,
} from "remotion";
import SimplexNoise from "simplex-noise";

const rows = 100;
export const Thunderstorm: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {new Array(rows).fill(true).map((_, i) => {
        const amount = Math.round(interpolate(i, [0, rows], [4, 20]));
        return new Array(amount).fill(true).map((__, j) => {
          const noise = new SimplexNoise(`${i}${j}`);
          const noiseY = new SimplexNoise(`y${i}${j}`);
          const xPosNoise = noise.noise2D(frame / 20, 0) * 50;
          const yPosNoise = noiseY.noise2D(frame / 20, 0) * 50;
          const center = 0.5;
          const position = interpolate(i, [0, rows], [0, 1]);
          const sinOffset = Math.sin(position * Math.PI * 2 + frame / 2) * 200;
          const spread = interpolate(i, [0, rows], [0.2, 1]);
          const centerX =
            center +
            interpolate(random(`xOffset${j}${i}`), [0, 1], [-0.5, 0.5]) *
              spread;
          const color = interpolateColors(
            random(`color${i}${j}`),
            [0, 1],
            ["white", "gray"]
          );
          return (
            <div
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                backgroundColor: color,
                position: "absolute",
                bottom: i + "%",
                left: centerX * 100 + "%",
                marginLeft: -50 + sinOffset,
                transform: `translateX(${xPosNoise}px) translateY(${yPosNoise}px)`,
              }}
            />
          );
        });
      })}
    </AbsoluteFill>
  );
};
