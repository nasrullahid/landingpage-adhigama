"use client";

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
type PixelEvent = {
  pixelId: string;
  pixelEvent: string;
  pixelOptions?: object;
}

export const FacebookPixelEvents: React.FC<PixelEvent> = ({ pixelId, pixelEvent, pixelOptions }) => {
  const router = useRouter()

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId); //don't forget to change this
        ReactPixel.pageView();
        ReactPixel.track(pixelEvent, pixelOptions)
      });
  }, [router, pixelId, pixelEvent, pixelOptions]);

  return null;
};