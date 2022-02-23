import { AbsoluteFill } from "remotion";

import { Clouds } from "../components/WeatherMap/Clouds";
import { France } from "../components/WeatherMap/France";
import { Rain } from "../components/WeatherMap/Rain";
import { WeatherTitle } from "../components/WeatherMap/WeatherTitle";
import type { WeatherType } from "../components/WeatherMap/WeatherType";
import { Thunderstorm } from "../components/WeatherMap/Thunderstorm";

interface WeatherMapProps {
  type: WeatherType;
  temperature: number;
}

export const WeatherMap = ({ type }: WeatherMapProps) => {
  return (
    <AbsoluteFill style={{ background: "#0F0E18" }}>
      <France />
      {type === "rain" && <Rain />}
      {type === "clouds" && <Clouds />}
      {type === "thunderstorm" && <Thunderstorm />}
      <WeatherTitle type={type} />
    </AbsoluteFill>
  );
};
