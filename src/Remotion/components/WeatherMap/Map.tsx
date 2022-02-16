import React from "react";
import { AbsoluteFill } from "remotion";

import { Clouds } from "./Clouds";
import { France } from "./France";
import { WeatherTitle } from "./WeatherTitle";

export const Map: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#13001e",
      }}
    >
      <France />
      <Clouds />
      <WeatherTitle />
    </AbsoluteFill>
  );
};
