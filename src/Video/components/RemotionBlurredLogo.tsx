import React from "react";
import {
  AbsoluteFill,
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const RemotionBlurredLogo: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const enterLogo = spring({
    fps,
    frame: frame,
    config: {
      damping: 200,
    },
  });
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, " + enterLogo * 0.6 + ")",
        backdropFilter: "blur(" + 20 * enterLogo + "px)",
      }}
    >
      <Img
        style={{
          height: 1500,
          transform: `scale(${enterLogo})`,
        }}
        src={staticFile("images/logowithtitle.png")}
      />
    </AbsoluteFill>
  );
};
