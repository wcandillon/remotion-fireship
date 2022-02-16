import { continueRender, delayRender, staticFile } from "remotion";

if (typeof window !== "undefined" && "FontFace" in window) {
  const font = new FontFace(
    "PressStart",
    "url(" + staticFile("/fonts/PressStart.woff") + ") format('woff')"
  );
  const handle = delayRender();
  font.load().then(() => {
    document.fonts.add(font);
    continueRender(handle);
  });
}

export const getFont = () => null;
