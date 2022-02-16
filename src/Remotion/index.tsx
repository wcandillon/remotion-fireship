import { Audio, Series, staticFile, Video } from "remotion";

import { RemotionLogo } from "./RemotionLogo";
import { UsingJavaScript } from "./UsingJavaScript";

const audio = staticFile("/audio.wav");
const video = staticFile("/videos/video.mov");
const usingJS = staticFile("/videos/using-javascript.mov");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={100}>
          <Video src={video} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={170}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={50}>
          <RemotionLogo />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Video src={usingJS} startFrom={160} />
        </Series.Sequence>
      </Series>
      <Audio src={audio} />
    </>
  );
};
