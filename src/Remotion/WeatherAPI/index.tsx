import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const WeatherAPI: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#221d28",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        style={{ transform: "scale(3)" }}
        src={staticFile("images/weatherapi.png")}
      />
    </AbsoluteFill>
  );
};
