"use client";

import { useEffect, useId, useRef, useState } from "react";

type LoopVideoProps = {
  src: string;
  label: string;
  className?: string;
  /** Allow click-to-enlarge lightbox */
  enlargeable?: boolean;
};

export function LoopVideo({
  src,
  label,
  className = "",
  enlargeable = true,
}: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      videoRef.current?.pause();
      modalVideoRef.current?.pause();
      return;
    }
    if (!enlarged) void videoRef.current?.play();
  }, [reduceMotion, enlarged]);

  useEffect(() => {
    if (!enlarged) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnlarged(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    if (!reduceMotion) {
      videoRef.current?.pause();
      void modalVideoRef.current?.play();
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      modalVideoRef.current?.pause();
      if (!reduceMotion) void videoRef.current?.play();
    };
  }, [enlarged, reduceMotion]);

  const videoBody = reduceMotion ? (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">
        Video paused — motion reduced per your system settings.
      </p>
    </div>
  ) : (
    <video
      ref={videoRef}
      className="pointer-events-none absolute inset-0 h-full w-full object-contain"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );

  const videoShell = enlargeable ? (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${label}. Click to enlarge.`}
      className="relative mx-auto aspect-video w-full max-w-2xl cursor-pointer overflow-hidden rounded-xl bg-surface outline-none ring-primary/40 focus-visible:ring-2"
      onClick={() => setEnlarged(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setEnlarged(true);
        }
      }}
    >
      {videoBody}
    </div>
  ) : (
    <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-xl bg-surface">
      {videoBody}
    </div>
  );

  return (
    <>
      <div className={`glass-card overflow-hidden p-1.5 sm:p-2 ${className}`} role="region">
        {videoShell}
        {enlargeable && !reduceMotion ? (
          <button
            type="button"
            onClick={() => setEnlarged(true)}
            className="mt-1.5 w-full text-center text-[10px] font-medium tracking-wide text-muted-foreground underline decoration-border/80 underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground/40"
          >
            Click to enlarge
          </button>
        ) : null}
      </div>

      {enlarged && enlargeable ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--bg-overlay,rgb(17_24_39/0.55))] backdrop-blur-sm"
            aria-label="Close enlarged video"
            onClick={() => setEnlarged(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="glass-card relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-3xl flex-col overflow-hidden border-border/80 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 sm:px-5">
              <h2 id={titleId} className="text-sm font-semibold tracking-tight text-foreground">
                {label}
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setEnlarged(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                aria-label="Close"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>
            <div className="bg-surface p-2 sm:p-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/20">
                {reduceMotion ? (
                  <p className="flex min-h-[12rem] items-center justify-center px-6 text-sm text-muted-foreground">
                    Video not shown — motion reduced per your system settings.
                  </p>
                ) : (
                  <video
                    ref={modalVideoRef}
                    className="absolute inset-0 h-full w-full object-contain"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    aria-label={label}
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
