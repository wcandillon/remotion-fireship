import React from "react";
import { AbsoluteFill } from "remotion";

import { Explosion } from "./Explosion";
import { France } from "./France";
import { Thunderstorm } from "./Thunderstorm";
import { WeatherTitle } from "./WeatherTitle";

export const ThunderstormMap: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#13001e",
      }}
    >
      <France />
      <Explosion />
      <Thunderstorm />
      <WeatherTitle type="thunderstorm" />
    </AbsoluteFill>
  );
};
