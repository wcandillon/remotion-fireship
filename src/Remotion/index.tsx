import { Audio, Sequence, Series, staticFile, Video } from "remotion";

import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";
import { Reactive } from "./Reactive";
import { StorifyData } from "./StorifyData";
import { WeatherAPI } from "./WeatherAPI";
import { Component } from "./WeatherAPI/Component";
import { DataDriven } from "./DataDriven";
import { VideoInReact } from "./VideoInReact";
import { IntroducingRemotion } from "./IntroducingRemotion";
import { LikeAndSubscribe } from "./LikeAndSubscribe";
import { CheckOnGithub } from "./CheckOnGithub/Github";

const audio = staticFile("/audio.wav");
const video = staticFile("/videos/video.mov");
const flipbook = staticFile("/videos/flipbook.mov");
const usingRemotion = staticFile("/videos/using-remotion.mp4");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <Video src={video} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={250}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={110}>
          <Video src={usingRemotion} />
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
      <Sequence from={1450} durationInFrames={200}>
        <DataDriven />
      </Sequence>
      <Sequence from={1650} durationInFrames={50}>
        <LikeAndSubscribe />
      </Sequence>
      <Sequence from={1700} durationInFrames={50}>
        <CheckOnGithub />
      </Sequence>
      <Audio src={audio} />
    </>
  );
};
