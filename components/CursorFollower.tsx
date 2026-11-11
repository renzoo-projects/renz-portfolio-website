"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
        el.style.opacity = "0.85";
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[50rem] w-[50rem] rounded-full opacity-0 transition-opacity duration-500 will-change-transform md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.15) 40%, rgba(15,23,42,0.05) 70%, transparent 90%)",
      }}
    />
  );
}
