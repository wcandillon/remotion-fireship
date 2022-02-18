import { mix } from "../components/Animations";
import { CANVAS } from "../components/Canvas";

import { Cube, STROKE_WIDTH } from "./Cube";

const ROWS = 2;
const COLS = 4;
export const PAGES = ROWS * COLS;
const width = CANVAS.width / COLS;
const height = CANVAS.height / ROWS;
const PADDING = 75;

interface PageProps {
  index: number;
  overlay: number;
}

export const Page = ({ index, overlay }: PageProps) => {
  const startX = (index % COLS) * width + PADDING;
  const startY = Math.floor(index / COLS) * height + PADDING;
  const progress = 0.3 + index / PAGES;
  const center = { x: width / 2 - PADDING, y: height / 2 - PADDING };
  const x = mix(overlay, startX, 0);
  const y = mix(overlay, startY, 0);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        width={width - 2 * PADDING}
        height={height - 2 * PADDING}
        fill="white"
        stroke="black"
        strokeWidth={STROKE_WIDTH}
        strokeLinejoin="round"
      />
      <Cube
        center={center}
        size={300}
        transform={[
          { rotateX: (progress * -Math.PI) / 4 },
          { rotateY: (progress * -Math.PI) / 4 },
        ]}
      />
    </g>
  );
};
