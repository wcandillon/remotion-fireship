import React from "react";
import { AbsoluteFill } from "remotion";

import { ZoomOutEditor } from "../ZoomOutEditor";

export const DevTools: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <ZoomOutEditor />
    </AbsoluteFill>
  );
};
