import React from "react";
import { AbsoluteFill } from "remotion";

import { France } from "./France";
import { Thunderstorm } from "./Thunderstorm";
import { WeatherTitle } from "./WeatherTitle";

export const ThunderstormMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <France />
      <Thunderstorm />
      <WeatherTitle type="thunderstorm" />
    </AbsoluteFill>
  );
};
