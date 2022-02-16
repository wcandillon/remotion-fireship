import React from "react";
import { AbsoluteFill } from "remotion";

import { France } from "./France";
import { WeatherTitle } from "./WeatherTitle";

export const ThunderstormMap: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#13001e",
      }}
    >
      <France />
      <WeatherTitle type="thunderstorm" />
    </AbsoluteFill>
  );
};
