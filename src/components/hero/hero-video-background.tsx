"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroVideoBackground() {
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
    if (!video || reduceMotion) return;
    video.play().catch(() => {
      /* autoplay blocked — gradient fallback remains visible */
    });
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Static fallback when motion is reduced or video unavailable */}
      <div
        className={cn(
          "absolute inset-0 hero-gradient engraving-pattern",
          !reduceMotion && "opacity-0",
        )}
      />

      {!reduceMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Readability overlays — keeps typography legible over motion */}
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/25 to-blood/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      <div className="absolute inset-0 engraving-pattern opacity-40 mix-blend-overlay" />
    </div>
  );
}
