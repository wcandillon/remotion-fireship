import React from "react";
import { AbsoluteFill } from "remotion";

import { BG_COLOR } from "../helpers/colors";

export const CheckOnGithub: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 70,
        fontFamily: "Cubano",
        backgroundColor: BG_COLOR,
      }}
    >
      <h1 style={{ marginTop: 40, marginBottom: 40 }}>
        Fork, clone and change this video on GitHub!
      </h1>
      <h1 style={{ marginTop: 40, marginBottom: 40 }}>Link in Description!</h1>
    </AbsoluteFill>
  );
};
