import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

import { EASE_CLAMP, mix } from "./components/Animations";

export const RemotionLogo = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 20], [0, 1], EASE_CLAMP);
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: fadeIn,
          transform: `translateY(${mix(fadeIn, 200, 0)}px)`,
        }}
      >
        <Img src={staticFile("/images/remotion.png")} width={3000} />
      </div>
    </div>
  );
};
