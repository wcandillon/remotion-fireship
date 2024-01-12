import { Composition } from "remotion";

import { Remotion } from "./Video/index";
import { CheckOnGithub } from "./Video/CheckOnGithub/Github";
import { CANVAS } from "./Video/components/Canvas";
import { MadeDifferent as MadeDifferent } from "./Video/components/MadeDifferent";
import { ThrowOut } from "./Video/components/ThrowOut";
import { ThrowOutZoomed } from "./Video/components/ThrowOut/Zoomed";
import { CloudyMap } from "./components/WeatherMap/CloudyMap";
import { RainMap } from "./components/WeatherMap/RainMap";
import { Thunderstorm } from "./components/WeatherMap/Thunderstorm";
import { ThunderstormMap } from "./components/WeatherMap/ThunderstormMap";
import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { DataDriven } from "./Video/DataDriven";
import { LikeAndSubscribe } from "./Video/LikeAndSubscribe";
import { StorifyData } from "./Video/StorifyData";
import { ZoomOutEditor } from "./Video/ZoomOutEditor";
import { ToCodeEditor } from "./Video/ZoomOutEditor/ToCodeEditor";
import { getFont } from "./Video/helpers/load-font";

const { width, height } = CANVAS;
const fps = 30;
// the audio duration is 58seconds + 4 frames
const durationInFrames = fps * 58 + 4;

getFont();

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
        defaultProps={{
          frame: 0,
        }}
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
      <Composition
        id="BoardRoomZoomOut"
        component={ZoomOutEditor}
        durationInFrames={30}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="ToCodeEditor"
        component={ToCodeEditor}
        durationInFrames={30}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
