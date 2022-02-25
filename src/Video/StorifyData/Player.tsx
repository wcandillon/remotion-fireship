import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { Stoplights } from "./Stoplights";

export const Player: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const upper = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });
  const lower = spring({
    fps,
    frame: frame - 10,
    config: {
      damping: 200,
    },
  });
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          border: "10px solid #000",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Stoplights />
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 60,
              backgroundColor: "#000",
              color: "white",
              fontFamily: "Helvetica",
              fontSize: 27,
              lineHeight: "1em",
            }}
          >
            news.mp4
          </div>
        </div>
        <div
          style={{
            height: 600,
            width: 800,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Img
            style={{
              position: "absolute",
              transform: `scale(${interpolate(frame, [0, 100], [1, 1.4])})`,
            }}
            src={staticFile("images/us-east-1.png")}
          />
          <div
            style={{
              padding: 40,
              position: "absolute",
              height: 600,
              width: 800,
            }}
          >
            <h1
              style={{
                backgroundColor: "red",
                color: "white",
                display: "inline-block",
                fontFamily: "sans-serif",
                padding: 10,
                marginTop: 0,
              }}
            >
              BREAKING NEWS
            </h1>
            <div
              style={{
                backgroundColor: "red",
                position: "absolute",
                color: "white",
                bottom: 140,
                padding: 20,
                fontSize: 50,
                fontWeight: "bold",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                transform: `translateY(${interpolate(
                  upper,
                  [0, 1],
                  [1000, 0]
                )}px)`,
              }}
            >
              us-east-1 hit by Meteor
            </div>
            <div
              style={{
                backgroundColor: "black",
                position: "absolute",
                color: "white",
                bottom: 55,
                padding: 14,
                fontSize: 30,
                fontWeight: "bold",
                fontFamily: "sans-serif",
                textTransform: "uppercase",
                transform: `translateY(${interpolate(
                  lower,
                  [0, 1],
                  [200, 0]
                )}px)`,
              }}
            >
              R.I.P. The Internet
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
