import { Composition } from "remotion";

import { Remotion } from "./Video/index";
import { CheckOnGithub } from "./Video/CheckOnGithub/Github";
import { CANVAS } from "./Video/components/Canvas";
import { MadeDifferent as MadeDifferent } from "./Video/components/MadeDifferent";
import { ThrowOut } from "./Video/components/ThrowOut";
import { ThrowOutZoomed } from "./Video/components/ThrowOut/Zoomed";
import { CloudyMap } from "./Video/components/WeatherMap/CloudyMap";
import { Explosion } from "./Video/components/WeatherMap/Explosion";
import { RainMap } from "./Video/components/WeatherMap/RainMap";
import { Thunderstorm } from "./Video/components/WeatherMap/Thunderstorm";
import { ThunderstormMap } from "./Video/components/WeatherMap/ThunderstormMap";
import { WeatherMap } from "./Video/components/WeatherMap/WeatherMap";
import { DataDriven } from "./Video/DataDriven";
import { LikeAndSubscribe } from "./Video/LikeAndSubscribe";
import { StorifyData } from "./Video/StorifyData";

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
      <Composition
        id="LikeAndSubscribe"
        component={LikeAndSubscribe}
        durationInFrames={200}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="CheckOnGithub"
        component={CheckOnGithub}
        durationInFrames={200}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="MadeDifferent"
        component={MadeDifferent}
        durationInFrames={200}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="ThrowOut"
        component={ThrowOut}
        durationInFrames={200}
        fps={fps}
        width={1246}
        height={528}
      />
      <Composition
        id="ThrowOutZoomed"
        component={ThrowOutZoomed}
        durationInFrames={200}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
