import React from "react";
import { AbsoluteFill } from "remotion";

import { Canvas, CANVAS } from "../components/Canvas";
import { WeatherMap } from "../components/WeatherMap/WeatherMap";

export const HdTo4k: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          transform: `scale(2) translateX(${
            (CANVAS.width - 1920) / 2
          }px) translateY(${(CANVAS.height - 1080) / 2}px)`,
        }}
      >
        <WeatherMap />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
