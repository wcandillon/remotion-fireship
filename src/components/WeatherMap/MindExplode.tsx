import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import { Code } from "../../Video/components/Code";

import { Container } from "./Container";
import { ThunderstormMap } from "./ThunderstormMap";

export const MindExplode: React.FC = () => {
  const frame = useCurrentFrame();
  const yOffset = interpolate(frame, [0, 70], [1200, -1200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Container>
        <ThunderstormMap />
        <Code
          yOffset={yOffset}
          minWidth={1800}
          fontSize={60}
          source={`const Thunderstorm: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {new Array(100).fill(true).map((_, i) => {
        const amount =
          Math.round(interpolate(i, [0, 100], [10, 30]));
        return new Array(amount).fill(true).map((__, j) => {
          const noiseY =
            new SimplexNoise(\`y$\{i}$\{j}\`);
          const size =
            random(\`y$\{i}$\{j}\`) * 150;
          const xPosNoise =
            new SimplexNoise(\`x$\{i}$\{j}\`)
            .noise2D(frame / 40, 0) * 50;
          const yPosNoise =
            noiseY
            .noise2D(frame / 40, 0) * 50;
          const position =
            interpolate(i, [0, 100], [0, 1]);
          const sinOffset =
            Math.sin(position * Math.PI * 2 + frame / 2)
              * 100;
          const spread =
            interpolate(i, [0, 100], [0.2, 1]);
          const centerX =
            0.5 +
            interpolate(
              random(\`xOffset$\{j}$\{i}\`),
              [0, 1],
              [-0.5, 0.5]) *
              spread;
          const color = interpolateColors(
            random(\`color$\{i}$\{j}\`),
            [0, 1],
            ["white", "#eee"]
          );

          return (
            <Dot
              centerX={centerX}
              color={color}
              i={i}
              sinOffset={sinOffset}
              xPosNoise={xPosNoise}
              yPosNoise={yPosNoise}
              size={size}
            />
          );
        });
      }).flat(1)}
    </AbsoluteFill>
  );
};`}
        />
      </Container>
    </AbsoluteFill>
  );
};
