import React from "react";
import { AbsoluteFill } from "remotion";

import { Code } from "../components/Code";
import { BG_COLOR2 } from "../helpers/colors";

export const WeatherAPI: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG_COLOR2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Code
        fontSize={110}
        source={`const res = fetch("thebestweatherapi.com/v1");
const weather = await res.json();
setWeather(weather);`}
      />
    </AbsoluteFill>
  );
};
