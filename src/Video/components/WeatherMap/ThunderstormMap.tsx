import React from "react";
import { AbsoluteFill } from "remotion";

import { Explosion } from "./Explosion";
import { France } from "./France";
import { Thunderstorm } from "./Thunderstorm";
import { WeatherTitle } from "./WeatherTitle";

export const ThunderstormMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <France />
      <Explosion />
      <Thunderstorm />
      <WeatherTitle type="thunderstorm" />
    </AbsoluteFill>
  );
};
