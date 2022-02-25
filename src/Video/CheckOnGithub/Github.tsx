import React from "react";
import {
  AbsoluteFill,
  Series,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { BG_COLOR2 } from "../helpers/colors";
import { typeWriter } from "../Reactive";

export const CheckOnGithub: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });
  return (
    <AbsoluteFill
      style={{
        color: "white",
        fontSize: 70,
        backgroundColor: BG_COLOR2,
      }}
    >
      <Series>
        <Series.Sequence durationInFrames={15}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Menlo",
              fontSize: 160,
            }}
          >
            $ git {typeWriter("checkout", progress)}
          </AbsoluteFill>
        </Series.Sequence>
        <Series.Sequence durationInFrames={40}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ marginTop: 40, marginBottom: 40, color: "purple" }}>
              clone and EDIT this video on GitHub!
            </h1>
            <h1 style={{ marginTop: 40, marginBottom: 40 }}>
              github.com/wcandillon/remotion-fireship
            </h1>
          </AbsoluteFill>
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
