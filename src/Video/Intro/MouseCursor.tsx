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

export const MouseCursor: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const moveUp = spring({
    fps,
    frame: frame - 20,
    config: {
      damping: 200,
    },
  });
  const moveLeft = spring({
    fps,
    frame: frame - 40,
    config: {
      damping: 200,
      mass: 4,
    },
  });
  const posX = interpolate(moveLeft, [0, 1], [0, 200]);
  const posY = 70 + interpolate(moveUp, [0, 1], [1000, 0]);
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        transform: `scale(2)  translateX(${posX}px) translateY(${posY}px)`,
      }}
    >
      <Img src={staticFile("images/macos-mouse.png")} />
    </AbsoluteFill>
  );
};
