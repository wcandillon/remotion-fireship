import React from "react";
import {
  AbsoluteFill,
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const JsonData: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale =
    spring({
      fps,
      frame: frame - 20,
      config: { damping: 200, mass: 0.3 },
    }) * 0.98;

  const imgScale = 1 - scale * 0.3;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
      }}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          style={{
            transform: `scale(${imgScale})`,
          }}
          src={staticFile("images/file.png")}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            color: "#eee",
            fontFamily: "monospace",
            fontSize: 36,
            whiteSpace: "pre",
            backgroundColor: "#23292f",
            display: "inline-block",
            borderRadius: 20,
            padding: "40px 20px",
            boxShadow: "0 0 10px black",
          }}
        >
          <span>
            <div>
              <span style={{ color: "#DCDCAA" }}>{"{"}</span>
            </div>
            <div>
              <span style={{ color: "#DCDCAA" }}>{'  "headline": '}</span>
              <span style={{ color: "#CE9178" }}>
                "us-east-1 hit by Meteor"
              </span>
              ,
            </div>
            <div>
              <span style={{ color: "#DCDCAA" }}>{'  "tagline": '}</span>
              <span style={{ color: "#CE9178" }}>"Data irrevocably lost"</span>,
            </div>
            <div>
              <span style={{ color: "#DCDCAA" }}>{'  "cover": '}</span>
              <br />
              <span style={{ color: "#CE9178", marginLeft: 50 }}>
                {'  "https://cdn.fireship.io/cover.jpeg"'}
              </span>
            </div>
            <div>
              <span style={{ color: "#DCDCAA" }}>{"}"}</span>
            </div>
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
