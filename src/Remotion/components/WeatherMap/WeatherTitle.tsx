import React from "react";
import { AbsoluteFill } from "remotion";

import { getFont } from "../../helpers/load-font";

getFont();

export const WeatherTitle: React.FC<{
  type: "clouds" | "rain";
}> = ({ type }) => {
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
          color: "white",
          textAlign: "center",
          fontSize: 150,
          marginTop: 50,
        }}
      >
        {type === "clouds" ? "CLOUDS" : "RAIN"}
      </h1>
    </AbsoluteFill>
  );
};
