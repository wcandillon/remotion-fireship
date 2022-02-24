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
  color?: string;
}

export const Canvas = ({ children, color }: CanvasProps) => {
  return (
    <svg width={CANVAS.width} height={CANVAS.height}>
      <linearGradient
        id="s1"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#47A5EB" />
        <stop offset="100%" stopColor="#89DEBB" />
      </linearGradient>
      {color ?? (
        <rect
          x={0}
          y={0}
          width={width}
          stroke="none"
          height={height}
          fill={color}
        />
      )}
      {children}
    </svg>
  );
};
