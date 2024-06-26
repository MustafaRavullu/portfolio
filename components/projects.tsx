"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { projects } from "@/lib/constants";
import ProjectCard from "./project-card";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4  bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project: TProjectCard) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
