"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] hidden h-[50rem] w-[50rem] rounded-full opacity-85 mix-blend-screen blur-2xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(37,99,235,0.15) 40%, rgba(15,23,42,0.05) 70%, transparent 90%)",
        left: mousePosition.x, 
        top: mousePosition.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}