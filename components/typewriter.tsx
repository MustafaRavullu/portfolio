"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter() {
  const [text, count] = useTypewriter({
    words: [
      "Hi.👋",
      "I build web applications.",
      "You dream it, I make it real.",
    ],
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
