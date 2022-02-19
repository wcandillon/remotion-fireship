import React from "react";
import { AbsoluteFill } from "remotion";

import { Clouds } from "./Clouds";
import { France } from "./France";
import { WeatherTitle } from "./WeatherTitle";

export const CloudyMap: React.FC = () => {
  return (
    <AbsoluteFill>
      <France />
      <Clouds />
      <WeatherTitle type="clouds" />
    </AbsoluteFill>
  );
};
