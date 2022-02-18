import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";

export const Component: React.FC = () => {
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
        src={staticFile("images/forecast.png")}
      />
    </AbsoluteFill>
  );
};
