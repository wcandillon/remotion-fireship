import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { BG_COLOR2 } from "./helpers/colors";

const barWidth = 2500;

export const EndOfThisVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    fps,
    frame,
  });

  const width = interpolate(progress, [0, 1], [0, 100]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
        color: "white",
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: 35,
            backgroundColor: "#ccc",
            width: barWidth,
            borderRadius: 100,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${width}%`,
              backgroundColor: "#ff0000",
            }}
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: 35,
            width: barWidth,
            borderRadius: 100,
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              marginTop: -(100 - 35) / 2,
              marginLeft: -(100 - 35) / 2 + progress * barWidth,

              backgroundColor: "#ff0000",
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
