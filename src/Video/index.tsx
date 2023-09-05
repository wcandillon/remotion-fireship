import { Audio, Sequence, Series, staticFile } from "remotion";

import { WeatherMap } from "../components/WeatherMap/WeatherMap";

import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";
import { Reactive } from "./Reactive";
import { StorifyData } from "./StorifyData";
import { WeatherAPI } from "./WeatherAPI";
import { Component } from "./WeatherAPI/Component";
import { VideoInReact } from "./VideoInReact";
import { LikeAndSubscribe } from "./LikeAndSubscribe";
import { CheckOnGithub } from "./CheckOnGithub/Github";
import { MadeDifferent } from "./components/MadeDifferent";
import { DevTools } from "./components/DevTools";
import { VideoMadeInReact } from "./VideoMadeInReact";
import { FlipVideo } from "./Flipbook/FlipVideo";
import { ForwardsDataDriven } from "./DataDriven/ForwardsDataDriven";

const audio = staticFile("/audio.wav");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={70}>
          <MadeDifferent />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={130}>
          <DevTools />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <VideoMadeInReact />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <FlipVideo />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180}>
          <Flipbook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Reactive />
        </Series.Sequence>
        <Series.Sequence durationInFrames={132}>
          <VideoInReact />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <HdTo4k>
            <StorifyData />
          </HdTo4k>
        </Series.Sequence>
      </Series>
      <Sequence from={1080} durationInFrames={80}>
        <WeatherAPI />
      </Sequence>
      <Sequence from={1160} durationInFrames={120}>
        <Component />
      </Sequence>
      <Sequence from={1250} durationInFrames={230}>
        <WeatherMap />
      </Sequence>
      <Sequence from={1480} durationInFrames={170}>
        <ForwardsDataDriven />
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
