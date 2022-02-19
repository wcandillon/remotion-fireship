import React from "react";
import {
  AbsoluteFill,
  interpolate,
  interpolateColors,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
const size = 50;

export const Explosion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      {new Array(300).fill(true).map((_, i) => {
        const anim = spring({
          fps,
          frame: frame - random("delay" + i) * 120,
          config: {
            mass: 0.1,
          },
        });
        const radius = random(`radius${i}`) * anim * 2000;
        const opacity = interpolate(anim, [0.9, 1], [1, 0]);
        const x = (random(`x${i}`) - 0.5) * radius;
        const y = (random(`y${i}`) - 0.5) * radius;
        const color = interpolateColors(
          random("color" + i),
          [0, 1],
          ["orange", "red"]
        );
        const scale = random(`scale${i}`);
        return (
          <div
            style={{
              height: size,
              width: size,
              borderRadius: size / 2,
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -(size / 2),
              marginTop: -(size / 2),
              backgroundColor: color,
              transform: ` translateX(${x}px) translateY(${y}px) scale(${scale})`,
              opacity,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
