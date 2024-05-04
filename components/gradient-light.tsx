"use client";

import { useEffect, useRef } from "react";

export default function GradientLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!lightRef.current) return;
      const { clientX, clientY } = event;
      lightRef.current.style.setProperty("--x", `${clientX}px`);
      lightRef.current.style.setProperty("--y", `${clientY}px`);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousedown", updateMousePosition);
    };
  }, []);
  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background:
          "radial-gradient(600px at var(--x, 100px) var(--y, 100px), rgba(255, 255, 255, 0.10), transparent 80%)",
      }}
    ></div>
  );
}

// 29, 78, 216, 0.15
// 255, 255, 255, 0.10
