import React from "react";
import { AbsoluteFill } from "remotion";

import { France } from "./France";
import { Rain } from "./Rain";
import { WeatherTitle } from "./WeatherTitle";

export const RainMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <France />
      <Rain />
      <WeatherTitle type="rain" />
    </AbsoluteFill>
  );
};
