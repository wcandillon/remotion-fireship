import { Audio, Sequence, Series, staticFile, Video } from "remotion";

import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";

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
      </Series>
      <Sequence from={1250} durationInFrames={200}>
        <HdTo4k>
          <WeatherMap />
        </HdTo4k>
      </Sequence>
      <Audio src={audio} />
    </>
  );
};
