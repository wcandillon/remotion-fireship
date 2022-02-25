import React from "react";
import { AbsoluteFill, Series } from "remotion";

import { ZoomOutEditor } from "../ZoomOutEditor";
import { ToCodeEditor } from "../ZoomOutEditor/ToCodeEditor";

export const DevTools: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <Series>
        <Series.Sequence durationInFrames={30}>
          <ZoomOutEditor />
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <ToCodeEditor />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
