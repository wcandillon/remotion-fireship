import React from "react";
import { AbsoluteFill } from "remotion";

import { France } from "./France";
import { Rain } from "./Rain";
import { WeatherTitle } from "./WeatherTitle";

export const RainMap: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#13001e",
      }}
    >
      <France />
      <Rain />
      <WeatherTitle type="rain" />
    </AbsoluteFill>
  );
};
