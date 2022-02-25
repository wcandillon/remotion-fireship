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

export const ToCodeEditor: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const zoomOut = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const height = interpolate(zoomOut, [0, 1], [100, 60]);
  const firstLeft = interpolate(zoomOut, [0, 1], [0, -50]);
  const secondLeft = interpolate(zoomOut, [0, 1], [0, 50]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          style={{
            height: height + "%",
            marginLeft: `${secondLeft}%`,
          }}
          src={staticFile("images/code-editor.png")}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          style={{
            height: height + "%",
            marginLeft: `${firstLeft}%`,
          }}
          src={staticFile("images/boardroom-zoomout.png")}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
