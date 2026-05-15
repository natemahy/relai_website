"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ASSETS } from "@/lib/site-config";

export function DemoVideo() {
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

  const openEnlarged = () => setEnlarged(true);
  const closeEnlarged = () => setEnlarged(false);

  return (
    <>
      <div
        className="glass-card overflow-hidden p-1.5 sm:p-2"
        aria-label="Relai product demo video"
        role="region"
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Product demo video. Click to enlarge."
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-surface outline-none ring-primary/40 focus-visible:ring-2"
          onClick={openEnlarged}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openEnlarged();
            }
          }}
        >
          {reduceMotion ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="text-sm font-medium text-foreground">Product demo</p>
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
              aria-hidden
            >
              <source src={ASSETS.demoVideo} type="video/mp4" />
            </video>
          )}
        </div>

        <button
          type="button"
          onClick={openEnlarged}
          className="mt-1.5 w-full text-center text-[10px] font-medium tracking-wide text-muted-foreground underline decoration-border/80 underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground/40"
        >
          Click to enlarge
        </button>
      </div>

      {enlarged ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--bg-overlay,rgb(17_24_39/0.55))] backdrop-blur-sm"
            aria-label="Close enlarged video"
            onClick={closeEnlarged}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="glass-card relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden border-border/80 shadow-2xl xl:max-w-6xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 sm:px-5">
              <h2 id={titleId} className="text-sm font-semibold tracking-tight text-foreground">
                Product demo
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeEnlarged}
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
                  <div className="flex min-h-[12rem] flex-col items-center justify-center gap-2 px-6 py-12 text-center">
                    <p className="text-sm text-muted-foreground">
                      Video not shown enlarged — motion reduced per your system settings.
                    </p>
                  </div>
                ) : (
                  <video
                    ref={modalVideoRef}
                    className="absolute inset-0 h-full w-full object-contain"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls
                    aria-label="Relai product demo"
                  >
                    <source src={ASSETS.demoVideo} type="video/mp4" />
                  </video>
                )}
              </div>
            </div>

            <div className="border-t border-border/60 px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={closeEnlarged}
                className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-hover"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
