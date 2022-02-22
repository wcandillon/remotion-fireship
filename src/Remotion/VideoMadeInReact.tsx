import { useCurrentFrame } from "remotion";

import { Intro } from "./Intro";

export const VideoMadeInReact = () => {
  const frame = useCurrentFrame();
  return <Intro frame={frame} />;
};
