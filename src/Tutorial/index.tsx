import { Composition } from "remotion";

import { Story } from "./Story";

export const Tutorial = () => (
  <Composition
    id="Main"
    component={Story}
    durationInFrames={60}
    fps={30}
    width={1080}
    height={1920}
  />
);
