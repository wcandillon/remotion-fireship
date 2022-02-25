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

import { BG_COLOR2 } from "../helpers/colors";

const initialScale = 1.83;
const initialTranslateX = -278;
const initialTranslateY = 205;

export const ZoomOutEditor: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const zoomOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const scale = interpolate(zoomOut, [0, 1], [initialScale, 1]);
  const translateX = interpolate(zoomOut, [0, 1], [initialTranslateX, 0]);
  const translateY = interpolate(zoomOut, [0, 1], [initialTranslateY, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BG_COLOR2,
      }}
    >
      <Img
        style={{
          height: "100%",
          transform: `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px)`,
        }}
        src={staticFile("images/boardroom-zoomout.png")}
      />
    </AbsoluteFill>
  );
};
