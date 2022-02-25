import React, { useMemo } from "react";
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

  const noise = useMemo(() => {
    return new Array(rows)
      .fill(true)
      .map((_, i) => {
        const amount = Math.round(interpolate(i, [0, rows], [10, 30]));
        return new Array(amount).fill(true).map((__, j) => {
          const noiseX = new SimplexNoise(`x${i}${j}`);
          const noiseY = new SimplexNoise(`y${i}${j}`);
          const size = random(`y${i}${j}`) * 150;
          return {
            noiseX,
            noiseY,
            i,
            j,
            size,
          };
        });
      })
      .flat(1);
  }, []);

  return (
    <AbsoluteFill>
      {noise.map(({ i, j, noiseX, noiseY, size }) => {
        const xPosNoise = noiseX.noise2D(frame / 40, 0) * 50;
        const yPosNoise = noiseY.noise2D(frame / 40, 0) * 50;
        const center = 0.5;
        const position = interpolate(i, [0, rows], [0, 1]);
        const sinOffset = Math.sin(position * Math.PI * 2 + frame / 2) * 100;
        const spread = interpolate(i, [0, rows], [0.2, 1]);
        const centerX =
          center +
          interpolate(random(`xOffset${j}${i}`), [0, 1], [-0.5, 0.5]) * spread;
        const color = interpolateColors(
          random(`color${i}${j}`),
          [0, 1],
          ["white", "#eee"]
        );
        return (
          <div
            style={{
              height: size,
              width: size,
              borderRadius: 50,
              backgroundColor: color,
              position: "absolute",
              bottom: i + "%",
              left: centerX * 100 + "%",
              marginLeft: -(size / 2) + sinOffset,
              transform: `translateX(${xPosNoise}px) translateY(${yPosNoise}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
