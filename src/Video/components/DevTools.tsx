import React from "react";
import { AbsoluteFill, Sequence, Series } from "remotion";

import { ZoomOutEditor } from "../ZoomOutEditor";
import { ToCodeEditor } from "../ZoomOutEditor/ToCodeEditor";

import { RemotionBlurredLogo } from "./RemotionBlurredLogo";

export const DevTools: React.FC = () => {
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
      <Sequence from={100}>
        <RemotionBlurredLogo />
      </Sequence>
    </AbsoluteFill>
  );
};
