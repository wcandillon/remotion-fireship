import { View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";
const aspectRatio = 21 / 23;
const width = 1080;
const height = width * aspectRatio;

interface LogoProps {
  color: string;
}

export const Logo = ({ color }: LogoProps) => {
  const frame = useCurrentFrame();
  const rotate = interpolate(frame, [0, 100], [0, Math.PI]);
  return (
    <View style={{ transform: [{ rotate: `${rotate}rad` }] }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_117_2)">
          <path
            d="M11.5002 12.2818C12.6324 12.2818 13.5502 11.3639 13.5502 10.2318C13.5502 9.09958 12.6324 8.18176 11.5002 8.18176C10.368 8.18176 9.4502 9.09958 9.4502 10.2318C9.4502 11.3639 10.368 12.2818 11.5002 12.2818Z"
            fill={color}
          />
          <path
            d="M11.5 14.4317C17.5751 14.4317 22.5 12.5513 22.5 10.2317C22.5 7.91214 17.5751 6.03174 11.5 6.03174C5.42487 6.03174 0.5 7.91214 0.5 10.2317C0.5 12.5513 5.42487 14.4317 11.5 14.4317Z"
            stroke={color}
          />
          <path
            d="M7.86259 12.3317C10.9002 17.593 14.9911 20.9178 16.9999 19.758C19.0087 18.5982 18.1748 13.393 15.1372 8.13175C12.0996 2.87053 8.00873 -0.454329 5.9999 0.705469C3.99107 1.86527 4.82503 7.07053 7.86259 12.3317Z"
            stroke={color}
          />
          <path
            d="M7.86259 8.13176C4.82503 13.393 3.99107 18.5982 5.9999 19.758C8.00873 20.9178 12.0996 17.593 15.1372 12.3318C18.1748 7.07054 19.0087 1.86528 16.9999 0.705481C14.9911 -0.454317 10.9002 2.87054 7.86259 8.13176Z"
            stroke={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_117_2">
            <rect width="23" height="20.4635" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </View>
  );
};
