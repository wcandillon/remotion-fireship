import type { Matrix4, Transforms3d } from "./Matrix4";
import { matrixVecMul4 } from "./Matrix4";

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export const vec3 = (x = 0, y?: number, z?: number) => ({
  x,
  y: y ?? x,
  z: z ?? y ?? x,
});

export const neg3 = (a: Vector3) => vec3(-a.x, -a.y, -a.z);

export const project3dPoint = (p: Vector3, transform: Matrix4): Vector3 => {
  "worklet";
  const pr = matrixVecMul4(transform, [p.x, p.y, p.z, 1]);
  return {
    x: pr[0] / pr[3],
    y: pr[1] / pr[3],
    z: pr[2] / pr[3],
  };
};

export const translate3d = (a: Vector3) => [
  { translateX: a.x },
  { translateY: a.y },
  { translateZ: a.z },
];

export const transformOrigin3d = (origin: Vector3, transform: Transforms3d) => [
  ...translate3d(origin),
  ...transform,
  ...translate3d(neg3(origin)),
];
