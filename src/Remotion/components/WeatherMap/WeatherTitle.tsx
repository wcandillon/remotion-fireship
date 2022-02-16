import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

import { getFont } from "../../helpers/load-font";

getFont();

export const WeatherTitle: React.FC<{
  type: "clouds" | "rain" | "thunderstorm";
}> = ({ type }) => {
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
      return 90;
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
    return 0;
  }, [frame, type]);
  return (
    <AbsoluteFill>
      <h1
        style={{
          fontFamily: "PressStart",
          color: "white",
          textAlign: "center",
          marginTop: 50,
          fontSize: 50,
        }}
      />
      <h1
        style={{
          fontFamily: "PressStart",
          color: "white",
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Forecast:
      </h1>
      <h1
        style={{
          fontFamily: "PressStart",
          color,
          textAlign: "center",
          fontSize: size,
          marginTop: 50,
          lineHeight: 1.3,
          opacity,
        }}
      >
        {label}
      </h1>
    </AbsoluteFill>
  );
};
