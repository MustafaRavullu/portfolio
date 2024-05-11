"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter() {
  const [text, count] = useTypewriter({
    words: ["Hi.👋", "I build soluitons."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <p className="mt-4 max-w-xs leading-normal h-6">
      {text}
      <Cursor />
    </p>
  );
}
