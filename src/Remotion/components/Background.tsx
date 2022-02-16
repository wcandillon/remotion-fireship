import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import SimplexNoise from "simplex-noise";

const xNoise = new SimplexNoise("x");
const yNoise = new SimplexNoise("y");
const opacityNoise = new SimplexNoise("opacity");
const margin = 100;

export const Background = () => {
  const config = useVideoConfig();
  const width = config.width + margin;
  const height = config.height + margin;
  const frame = useCurrentFrame();
  const SIZE = 120;
  const ROWS = Math.round(height / SIZE);
  const COLS = Math.round(width / SIZE);
  const F = 0.004;
  // "radial-gradient(#fdfdfd, #f0f0f0)"
  return (
    <g>
      <defs>
        <radialGradient id="bg">
          <stop offset="0%" stop-color="#fdfdfd" />
          <stop offset="100%" stop-color="#f0f0f0" />
        </radialGradient>
      </defs>
      <rect x={0} y={0} width={width} height={height} fill="url(#bg)" />
      {new Array(COLS).fill(0).map((_i, i) =>
        new Array(ROWS).fill(0).map((_j, j) => {
          const x = i * SIZE;
          const y = j * SIZE;
          const px = i / COLS;
          const py = j / ROWS;
          const dx = xNoise.noise3D(px, py, frame * F) * SIZE;
          const dy = yNoise.noise3D(px, py, frame * F) * SIZE;
          const opacity = interpolate(
            opacityNoise.noise3D(px, py, frame * F),
            [-1, 1],
            [0.5, 1]
          );
          return (
            <circle
              cx={x + dx}
              cy={y + dy}
              r={5}
              fill={`rgba(200, 200, 200, ${opacity})`}
              key={`${i}-${j}`}
            />
          );
        })
      )}
    </g>
  );
};
