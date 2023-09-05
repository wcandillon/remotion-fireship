import React from "react";
import { AbsoluteFill, Series } from "remotion";

import { Code } from "../../Video/components/Code";
import { BG_COLOR2 } from "../../Video/helpers/colors";

import { CloudyMap } from "./CloudyMap";
import { Container } from "./Container";
import { MindExplode } from "./MindExplode";
import { RainMap } from "./RainMap";

export const WeatherMap: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR2 }}>
      <Series>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <RainMap />
            <Code
              yOffset={0}
              minWidth={1800}
              fontSize={80}
              source={`const Rain = () => {
  return (
    <AbsoluteFill>
      {new Array(300)
        .fill(true)
        .map((_, i) => (
          <RainDrop
            x={random(\`x-$\{i}\`)}
            delay={random(\`d-$\{i}\`)}
            size={random(\`s-$\{i}\`)}
          />
        ))}
    </AbsoluteFill>
  );
};`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <Container>
            <CloudyMap />
            <Code
              yOffset={0}
              minWidth={1800}
              fontSize={80}
              source={`const Clouds = () => {
  return (
    <AbsoluteFill>
      <Cloud delay={0} x={700} y={650} />
      <Cloud delay={3} x={200} y={800} />
      <Cloud delay={6} x={600} y={1000} />
      <Cloud delay={10} x={300} y={1300} />
      <Cloud delay={14} x={750} y={1450} />
    </AbsoluteFill>
  );
};
`}
            />
          </Container>
        </Series.Sequence>
        <Series.Sequence durationInFrames={150}>
          <MindExplode />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
