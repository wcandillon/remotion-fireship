import { Img, staticFile } from "remotion";

import { mix } from "./components/Animations";

interface RemotionLogoProps {
  progress: number;
}

export const RemotionLogo = ({ progress }: RemotionLogoProps) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: progress,
          transform: `translateY(${mix(progress, 200, 0)}px)`,
        }}
      >
        <Img src={staticFile("/images/remotion.png")} width={3000} />
      </div>
    </div>
  );
};
