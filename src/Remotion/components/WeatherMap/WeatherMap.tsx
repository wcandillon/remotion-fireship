import React from "react";
import { AbsoluteFill, Series } from "remotion";

import { Background } from "../Background";
import { Canvas } from "../Canvas";

import { CloudyMap } from "./CloudyMap";
import { RainMap } from "./RainMap";
import { ThunderstormMap } from "./ThunderstormMap";

export const WeatherMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          height: 1920,
          width: 1080,
          overflow: "hidden",
          transform: "scale(0.5)",
          marginTop: -(1920 - 1080) / 2,
          marginLeft: -150,
          backgroundColor: "#23292f",
        }}
      >
        <Series>
          <Series.Sequence durationInFrames={60}>
            <RainMap />
          </Series.Sequence>
          <Series.Sequence durationInFrames={60}>
            <CloudyMap />
          </Series.Sequence>
          <Series.Sequence durationInFrames={90}>
            <ThunderstormMap />
          </Series.Sequence>
        </Series>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
