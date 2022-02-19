import _ from "lodash";

import type { Transforms3d } from "./Matrix4";
import { processTransform3d } from "./Matrix4";
import { project3dPoint, transformOrigin3d, vec3 } from "./ThreeD";

const colors = [
  "#47A5EB",
  "#89DEBB",
  "#FE7898",
  "#FFB874",
  "#89DEBB",
  "#47A5EB",
];

const FRONT = 0;
const BACK = 4;
const TOP_LEFT = 0;
const TOP_RIGHT = 1;
const BOTTOM_RIGHT = 2;
const BOTTOM_LEFT = 3;

interface CubeProps {
  size: number;
  transform: Transforms3d;
  center: { x: number; y: number };
  strokeWidth: number;
}

export const Cube = ({ size, transform, center, strokeWidth }: CubeProps) => {
  const size2 = size / 2;
  const vertices = [
    { x: center.x - size2, y: center.y + size2, z: size2 },
    { x: center.x + size2, y: center.y + size2, z: size2 },
    { x: center.x + size2, y: center.y - size2, z: size2 },
    { x: center.x - size2, y: center.y - size2, z: size2 },
    { x: center.x - size2, y: center.y + size2, z: -size2 },
    { x: center.x + size2, y: center.y + size2, z: -size2 },
    { x: center.x + size2, y: center.y - size2, z: -size2 },
    { x: center.x - size2, y: center.y - size2, z: -size2 },
  ].map((vertex) =>
    project3dPoint(
      vertex,
      processTransform3d(
        transformOrigin3d(vec3(center.x, center.y, 0), transform)
      )
    )
  );
  const p1 = [
    vertices[FRONT + TOP_LEFT],
    vertices[FRONT + TOP_RIGHT],
    vertices[FRONT + BOTTOM_RIGHT],
    vertices[FRONT + BOTTOM_LEFT],
  ];
  const p2 = [
    vertices[BACK + TOP_LEFT],
    vertices[BACK + TOP_RIGHT],
    vertices[BACK + BOTTOM_RIGHT],
    vertices[BACK + BOTTOM_LEFT],
  ];
  const p3 = [
    vertices[FRONT + TOP_LEFT],
    vertices[FRONT + BOTTOM_LEFT],
    vertices[BACK + BOTTOM_LEFT],
    vertices[BACK + TOP_LEFT],
  ];
  const p4 = [
    vertices[FRONT + TOP_RIGHT],
    vertices[FRONT + BOTTOM_RIGHT],
    vertices[BACK + BOTTOM_RIGHT],
    vertices[BACK + TOP_RIGHT],
  ];
  const p5 = [
    vertices[FRONT + TOP_LEFT],
    vertices[FRONT + TOP_RIGHT],
    vertices[BACK + TOP_RIGHT],
    vertices[BACK + TOP_LEFT],
  ];
  const p6 = [
    vertices[FRONT + BOTTOM_LEFT],
    vertices[FRONT + BOTTOM_RIGHT],
    vertices[BACK + BOTTOM_RIGHT],
    vertices[BACK + BOTTOM_LEFT],
  ];
  const planes = _.sortBy(
    [p1, p2, p3, p4, p5, p6].map((plane, i) => ({ plane, color: colors[i] })),
    (plane) => _.mean(plane.plane.map(({ z }) => z))
  );
  return (
    <>
      {planes.map(({ plane }, key) => {
        console.log([...plane, plane[0]].map((v) => `${v.x},${v.y}`).join(" "));
        return (
          <polyline
            key={key}
            points={[...plane, plane[0]].map((v) => `${v.x},${v.y}`).join(" ")}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            stroke="#61DAFB"
          />
        );
      })}
    </>
  );
};
