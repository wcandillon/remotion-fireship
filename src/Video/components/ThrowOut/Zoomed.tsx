import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { ThrowOut } from "./index";

export const ThrowOutZoomed: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const initialScale = 6;
  const initialX = 400;
  const initialY = 100;

  const suggestionGuy = spring({
    fps,
    frame: frame - 20,
    config: {
      damping: 200,
      mass: 3,
    },
  });

  const throwOut = spring({
    fps,
    frame: frame - 50,
    config: {
      damping: 200,
      mass: 3,
    },
  });

  const moveX = interpolate(suggestionGuy, [0, 1], [0, -250]);
  const moveY = interpolate(suggestionGuy, [0, 1], [0, -200]);

  const throwX = interpolate(throwOut, [0, 1], [0, -500]);
  const throwY = interpolate(throwOut, [0, 1], [0, 100]);

  const x = initialX + moveX + throwX;
  const y = initialY + moveY + throwY;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: 1246,
          height: 528,
          transform: `scale(${initialScale}) translateX(${x}px) translateY(${y}px)`,
          position: "relative",
        }}
      >
        <ThrowOut />
      </div>
    </AbsoluteFill>
  );
};
