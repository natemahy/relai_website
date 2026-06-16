"use client";

import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/site-config";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) {
      video?.pause();
      return;
    }

    video.muted = true;
    video.volume = 0;

    const play = () => {
      video.muted = true;
      video.volume = 0;
      void video.play();
    };

    const enforceMuted = () => {
      if (!video.muted || video.volume > 0) {
        video.muted = true;
        video.volume = 0;
      }
    };

    play();
    video.addEventListener("volumechange", enforceMuted);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) play();
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("volumechange", enforceMuted);
      video.pause();
    };
  }, [reduceMotion]);

  return (
    <div
      className="glass-card mx-auto w-full max-w-5xl overflow-hidden p-1.5 sm:p-2"
      aria-hidden
    >
      <div className="relative aspect-video max-h-[min(65vh,720px)] w-full overflow-hidden rounded-xl bg-surface">
        {reduceMotion ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={ASSETS.heroVideoPoster}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
            controlsList="nodownload nofullscreen noremoteplayback"
            preload="auto"
            poster={ASSETS.heroVideoPoster}
            tabIndex={-1}
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
