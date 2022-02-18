import { Audio, Sequence, Series, staticFile, Video } from "remotion";

import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";
import { Reactive } from "./Reactive";
import { StorifyData } from "./StorifyData";
import { WeatherAPI } from "./WeatherAPI";
import { Component } from "./WeatherAPI/Component";
import { VideoInReact } from "./VideoInReact";
import { IntroducingRemotion } from "./IntroducingRemotion";

const audio = staticFile("/audio.wav");
const video = staticFile("/videos/video.mov");
const usingJS = staticFile("/videos/using-javascript.mov");
const flipbook = staticFile("/videos/flipbook.mov");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <Video src={video} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={170 + 80}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={110}>
          <Video src={usingJS} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Video src={flipbook} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180}>
          <Flipbook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Reactive />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <VideoInReact />
        </Series.Sequence>
        <Series.Sequence durationInFrames={42}>
          <IntroducingRemotion />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <HdTo4k>
            <StorifyData />
          </HdTo4k>
        </Series.Sequence>
      </Series>
      <Sequence from={1070} durationInFrames={90}>
        <WeatherAPI />
      </Sequence>
      <Sequence from={1160} durationInFrames={90}>
        <Component />
      </Sequence>
      <Sequence from={1250} durationInFrames={200}>
        <HdTo4k>
          <WeatherMap />
        </HdTo4k>
      </Sequence>
      <Audio src={audio} />
    </>
  );
};
