import { Composition } from "remotion";

import { Remotion } from "./Remotion";
import { CANVAS } from "./Remotion/components/Canvas";
import { CloudyMap } from "./Remotion/components/WeatherMap/CloudyMap";
import { Explosion } from "./Remotion/components/WeatherMap/Explosion";
import { RainMap } from "./Remotion/components/WeatherMap/RainMap";
import { Thunderstorm } from "./Remotion/components/WeatherMap/Thunderstorm";
import { ThunderstormMap } from "./Remotion/components/WeatherMap/ThunderstormMap";
import { WeatherMap } from "./Remotion/components/WeatherMap/WeatherMap";
import { DataDriven } from "./Remotion/DataDriven";
import { StorifyData } from "./Remotion/StorifyData";

const { width, height } = CANVAS;
const fps = 30;
// the audio duration is 58seconds + 4 frames
const durationInFrames = fps * 58 + 4;

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Remotion}
        durationInFrames={durationInFrames}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="CloudyMap"
        component={CloudyMap}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="RainMap"
        component={RainMap}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="ThunderstormMap"
        component={ThunderstormMap}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="Thunderstorm"
        component={Thunderstorm}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="Explosion"
        component={Explosion}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1080}
        height={1920}
      />
      <Composition
        id="WeatherMap"
        component={WeatherMap}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1920}
        height={1080}
      />
      <Composition
        id="Storify"
        component={StorifyData}
        durationInFrames={durationInFrames}
        fps={fps}
        width={1920}
        height={1080}
      />
      <Composition
        id="DataDriven"
        component={DataDriven}
        durationInFrames={200}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
