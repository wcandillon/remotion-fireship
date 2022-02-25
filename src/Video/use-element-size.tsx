import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

export type Size = {
  width: number;
  height: number;
  left: number;
  top: number;
};

export const useElementSize = (
  ref: React.RefObject<HTMLElement>
): DOMRect | null => {
  const [size, setSize] = useState<DOMRect | null>(null);
  const observer = useMemo(() => {
    if (typeof ResizeObserver === "undefined") {
      return null;
    }

    return new ResizeObserver((entries) => {
      const newSize = entries[0].target.getClientRects();
      if (!newSize || !newSize[0]) {
        setSize(null);
        return;
      }

      setSize(newSize[0]);
    });
  }, []);
  const updateSize = useCallback(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getClientRects();
    if (!rect[0]) {
      setSize(null);
      return;
    }

    setSize(rect[0]);
  }, [ref]);

  useEffect(() => {
    if (!observer) {
      return;
    }

    updateSize();
    const { current } = ref;
    if (ref.current) {
      observer.observe(ref.current);
    }

    return (): void => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [observer, ref, updateSize]);

  return size;
};
