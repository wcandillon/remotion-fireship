import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

import type { WeatherType } from "./WeatherType";

export const WeatherTitle: React.FC<{
  type: WeatherType;
  temperature?: number;
}> = ({ type, temperature }) => {
  const frame = useCurrentFrame();
  const label = useMemo(() => {
    if (type === "clouds") {
      return "CLOUDS";
    }
    if (type === "rain") {
      return "RAIN";
    }
    if (type === "thunderstorm") {
      return "TOTAL\nDESTRUCTION";
    }
    return "";
  }, [type]);
  const size = useMemo(() => {
    if (type === "thunderstorm") {
      return 150;
    }
    return 150;
  }, [type]);
  const color = useMemo(() => {
    if (type === "thunderstorm") {
      return "red";
    }
    return "white";
  }, [type]);
  const opacity = useMemo(() => {
    if (type === "thunderstorm") {
      return Math.round(frame / 12) % 2 === 0 ? 1 : 0;
    }
    return 1;
  }, [frame, type]);
  return (
    <AbsoluteFill>
      <h1
        style={{
          fontFamily: "Cubano",
          color: color,
          textAlign: "center",
          fontSize: 60,
          marginTop: 100,
          lineHeight: 1,
        }}
      >
        Forecast:
      </h1>
      <h1
        style={{
          fontFamily: "Cubano",
          color,
          textAlign: "center",
          fontSize: size,
          marginTop: 0,
          lineHeight: 1,
          opacity,
        }}
      >
        {label}
      </h1>
      {temperature && (
        <h4
          style={{
            fontFamily: "Cubano",
            color,
            textAlign: "center",
            fontSize: 50,
            lineHeight: 1.3,
            position: "absolute",
            bottom: 0,
            opacity,
            margin: 75,
          }}
        >
          {`Temperature: ${temperature}°C`}
        </h4>
      )}
    </AbsoluteFill>
  );
};
