"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "motion/react";

export function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden h-[50rem] w-[50rem] rounded-full opacity-85 mix-blend-screen blur-2xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.15) 40%, rgba(15,23,42,0.05) 70%, transparent 90%)",
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
