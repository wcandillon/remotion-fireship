import React from "react";
import { Img } from "remotion";

export const YouTubeHeader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Img src="https://avatars.githubusercontent.com/u/46283609?s=280&v=4" />
      <div
        style={{
          color: "#ddd",
          fontSize: 180,
          marginLeft: 40,
          fontFamily: "Rubik",
        }}
      >
        {" "}
        fireship.io{" "}
      </div>
    </div>
  );
};
