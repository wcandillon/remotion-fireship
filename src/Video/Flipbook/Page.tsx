import { mix } from "../components/Animations";
import { CANVAS } from "../components/Canvas";
import { BG_COLOR2 } from "../helpers/colors";

import { Cube } from "./Cube";

const ROWS = 2;
const COLS = 4;
export const PAGES = ROWS * COLS;
const STROKE_WIDTH = 15;

interface PageProps {
  index: number;
  overlay: number;
  offset: number;
  frame: number;
}

export const Page = ({ index, overlay, offset, frame }: PageProps) => {
  const PADDING = mix(overlay, 75, 0);
  const VERTICAL_TOTAL_PADDING = (ROWS + 1) * PADDING;
  const HORIZONTAL_TOTAL_PADDING = (COLS + 1) * PADDING;
  const startHeight = (CANVAS.height - VERTICAL_TOTAL_PADDING) / ROWS;
  const startWidth = (CANVAS.width - HORIZONTAL_TOTAL_PADDING) / COLS;
  const startX = (index % COLS) * startWidth + PADDING * ((index % COLS) + 1);
  const startY =
    Math.floor(index / COLS) * startHeight +
    (Math.floor(index / COLS) + 1) * PADDING;
  const progress = 0.3 + index / PAGES + offset / 4;
  const x = mix(overlay, startX, 0);
  const y = mix(overlay, startY, 0);
  const width = mix(overlay, startWidth, CANVAS.width);
  const height = mix(overlay, startHeight, CANVAS.height);
  const size = mix(overlay, 300, 900);
  const center = { x: width / 2, y: height / 2 };
  const textX = mix(overlay, 720, 720 * 4);
  const textY = mix(overlay, 170, 600);
  const fontSize = mix(overlay, 150, 600);
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={BG_COLOR2}
        rx={25}
      />
      <Cube
        strokeWidth={mix(overlay, STROKE_WIDTH, STROKE_WIDTH * 2)}
        center={center}
        size={size}
        transform={[
          { rotateX: (progress * -Math.PI) / 4 },
          { rotateY: (progress * -Math.PI) / 4 },
        ]}
      />
      <text
        fontFamily="Rubik"
        fontWeight="500"
        fill="white"
        fontSize={fontSize}
        y={textY}
        x={textX}
      >
        {frame}
      </text>
    </g>
  );
};
