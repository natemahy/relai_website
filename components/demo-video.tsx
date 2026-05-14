"use client";

import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/site-config";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduceMotion(mq.matches);
      if (mq.matches) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play();
      }
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="glass-card overflow-hidden p-2 sm:p-3"
      aria-label="Relai product demo video"
      role="region"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface sm:aspect-video lg:aspect-[5/6] lg:min-h-[22rem] xl:min-h-[26rem]">
        {reduceMotion ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-sm font-medium text-foreground">Product demo</p>
            <p className="text-xs text-muted-foreground">
              Video paused — motion reduced per your system settings.
            </p>
          </div>
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src={ASSETS.demoVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
