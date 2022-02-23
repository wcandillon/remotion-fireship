import { Composition } from "remotion";

import { Story } from "./Story";

const durationInFrames = 200;
// https://bit.ly/weather-api-france
// https://bit.ly/weather-api-switzerland
export const Tutorial = () => (
  <>
    <Composition
      id="France"
      component={Story}
      durationInFrames={durationInFrames}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ url: "/api/france.json" }}
    />
    <Composition
      id="Switzerland"
      component={Story}
      durationInFrames={durationInFrames}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ url: "/api/switzerland.json" }}
    />
  </>
);
