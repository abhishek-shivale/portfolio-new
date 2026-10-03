"use client";

import { useEffect, useRef, useState } from "react";

// Autoplaying video that only downloads once it nears the viewport.
export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // autoPlay doesn't fire when src is added after mount, so start it here.
  useEffect(() => {
    if (visible) ref.current?.play().catch(() => {});
  }, [visible]);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
}
