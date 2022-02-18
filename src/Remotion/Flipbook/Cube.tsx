import { CANVAS } from "../components/Canvas";

const ROWS = 2;
const COLS = 4;
export const CUBES = ROWS * COLS;
const width = CANVAS.width / COLS;
const height = CANVAS.height / ROWS;

interface CubeProps {
  index: number;
}

export const Cube = ({ index }: CubeProps) => {
  return (
    <rect
      x={(index % COLS) * width}
      y={0}
      width={width}
      height={height}
      fill="red"
    />
  );
};
