import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useVideoConfig,
} from "remotion";

import { BG_COLOR2 } from "../helpers/colors";

import { remapSpeed } from "./remap-speed";

const files = [
  staticFile("images/react.png"),
  staticFile("images/js.png"),
  staticFile("images/remotion-logo.png"),
  staticFile("images/file.png"),
];

export const DataDriven: React.FC<{
  frame: number;
}> = ({ frame }) => {
  const { fps } = useVideoConfig();
  const remappedFrame = remapSpeed({
    frame,
    speed: (fr) =>
      interpolate(fr, [0, 70, 110], [0, 0, 4], {
        extrapolateRight: "clamp",
      }),
  });

  const rotation = interpolate(remappedFrame, [0, 100], [0, Math.PI * 7]);
  const radius = interpolate(remappedFrame, [0, 150], [700, 0], {
    extrapolateRight: "clamp",
  });
  const blur = interpolate(remappedFrame, [0, 150], [0, 30]);
  const scale = interpolate(remappedFrame, [0, 150], [1, 0], {
    extrapolateRight: "clamp",
  });

  const iconScale = spring({
    fps,
    frame: frame - 120,
    config: {
      damping: 200,
    },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
      }}
    >
      {files.map((file, i) => {
        if (frame < i * 12) {
          return null;
        }
        const x =
          radius *
          Math.sin((i / files.length) * Math.PI * 2 + Math.PI * 1.5 + rotation);
        const y =
          radius *
          Math.cos((i / files.length) * Math.PI * 2 + Math.PI * 1.5 + rotation);
        return (
          <AbsoluteFill
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Img
              src={file}
              style={{
                position: "absolute",
                height: 600,
                filter: `blur(${blur}px)`,
                transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
              }}
            />
          </AbsoluteFill>
        );
      })}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          src={staticFile("images/video.svg")}
          style={{
            transform: `scale(${iconScale})`,
            height: 800,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
