"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Like many kids, I was introduced to computers through video games. At
          that age, the colorful world of games is very captivating. Over time,
          my interest shifted from the games themselves to the machines we
          played them on: computers. That's why I chose to study computer
          engineering at university.
        </p>
        <p className="mb-4">
          These days, my focus is on developing web applications. What excites
          and motivates me most about this work is seeing people use and enjoy
          the applications I create.
        </p>
        <p>
          When I'm not at the computer, you can usually find me either
          exercising, reading, spending time with family or friends.
        </p>
      </div>
    </section>
  );
}
