import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { remapSpeed } from "../../DataDriven/remap-speed";

export const ThrowOut: React.FC = () => {
  const { fps } = useVideoConfig();
  const startFrom = 50;
  const frame = useCurrentFrame();
  const map = remapSpeed({
    frame,
    speed: (f) =>
      interpolate(f, [45, 70, 100], [1, 0.3, 0.1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
  });
  const throwOut1 = spring({
    fps,
    frame: map - startFrom,
    config: {
      damping: 1000,
      mass: 4,
    },
  });
  const throwOut2 = spring({
    fps,
    frame: map - 3 - startFrom,
    config: {
      damping: 1000,
      mass: 4,
    },
  });
  const rotate1 = interpolate(throwOut1, [0, 1], [0, Math.PI * 2]);

  const top1 = Math.sin(throwOut1 * Math.PI) * -25;

  const toRight1 = interpolate(throwOut1, [0, 1], [0, 250]);
  const rotate2 = interpolate(throwOut2, [0, 1], [0, Math.PI * 1.5]);

  const top2 = Math.sin(throwOut2 * Math.PI) * -25;

  const toRight2 = interpolate(throwOut2, [0, 1], [0, 250]);

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Img src={staticFile("images/throw-out.png")} />
      </AbsoluteFill>
      <AbsoluteFill>
        <Img
          style={{
            height: 60,
            position: "absolute",
            left: 800,
            top: 200 + top1,
            transform: `translateX(${toRight1}px) rotate(${rotate1}rad)`,
            filter: "blur(0.5px)",
          }}
          src={staticFile("images/after-effects.png")}
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <Img
          style={{
            height: 60,
            position: "absolute",
            left: 850,
            top: 260 + top2,
            transform: `translateX(${toRight2}px) rotate(${rotate2}rad)`,
            filter: "blur(0.5px)",
          }}
          src={staticFile("images/premiere.png")}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
