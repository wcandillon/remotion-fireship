import React from "react";
import { AbsoluteFill } from "remotion";

import { getFont } from "../../helpers/load-font";

getFont();

export const WeatherTitle: React.FC = () => {
  return (
    <AbsoluteFill>
      <h1
        style={{
          fontFamily: "PressStart",
          color: "white",
          textAlign: "center",
          marginTop: 100,
          fontSize: 50,
        }}
      >
        The forecast for{" "}
      </h1>
      <h1
        style={{
          fontFamily: "PressStart",
          color: "white",
          textAlign: "center",
          fontSize: 50,
        }}
      >
        February 30th:
      </h1>
    </AbsoluteFill>
  );
};
