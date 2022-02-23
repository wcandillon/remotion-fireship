import { AbsoluteFill } from "remotion";
import type { ReactNode } from "react";

import { Clouds } from "../components/WeatherMap/Clouds";
import { Rain } from "../components/WeatherMap/Rain";
import { WeatherTitle } from "../components/WeatherMap/WeatherTitle";
import type { WeatherType } from "../components/WeatherMap/WeatherType";
import { Thunderstorm } from "../components/WeatherMap/Thunderstorm";

interface WeatherMapProps {
  type: WeatherType;
  temperature: number;
  children: ReactNode;
}

export const WeatherMap = ({
  children,
  type,
  temperature,
}: WeatherMapProps) => {
  return (
    <AbsoluteFill style={{ background: "#0F0E18" }}>
      {children}
      {type === "rain" && <Rain />}
      {type === "clouds" && <Clouds />}
      {type === "thunderstorm" && <Thunderstorm />}
      <WeatherTitle type={type} temperature={temperature} />
    </AbsoluteFill>
  );
};
