import React from "react";
import { AbsoluteFill } from "remotion";

import { CANVAS } from "../components/Canvas";

export const HdTo4k: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          transform: `scale(2) translateX(${
            (CANVAS.width - 1920) / 2
          }px) translateY(${(CANVAS.height - 1080) / 2}px)`,
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
