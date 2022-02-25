import React from "react";
import {
  AbsoluteFill,
  Img,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { ZoomOutEditor } from "../ZoomOutEditor";
import { ToCodeEditor } from "../ZoomOutEditor/ToCodeEditor";

export const DevTools: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const enterLogo = spring({
    fps,
    frame: frame - 100,
    config: {
      damping: 200,
    },
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <AbsoluteFill>
        <Series>
          <Series.Sequence durationInFrames={30}>
            <ZoomOutEditor />
          </Series.Sequence>
          <Series.Sequence durationInFrames={100}>
            <ToCodeEditor />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, " + enterLogo * 0.6 + ")",
          backdropFilter: "blur(" + 20 * enterLogo + "px)",
        }}
      >
        <Img
          style={{
            height: 1500,
            transform: `scale(${enterLogo})`,
          }}
          src={staticFile("images/logowithtitle.png")}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
