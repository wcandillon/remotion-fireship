import type { ReactNode } from "react";

const width = 3840;
const height = 2160;
export const CANVAS = {
  width,
  height,
  center: { x: width / 2, y: height / 2 },
};

interface CanvasProps {
  children: ReactNode | ReactNode[];
}

export const Canvas = ({ children }: CanvasProps) => {
  return (
    <svg width={CANVAS.width} height={CANVAS.height}>
      {children}
    </svg>
  );
};
