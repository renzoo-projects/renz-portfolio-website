"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/lib/projects";

export function FeaturedWorkSection() {
  return (
    <section id="projects" className="px-6 py-20 md:px-10 lg:px-12 lg:py-24">
      <div className="mb-8 max-w-3xl">
        <p className="mb-4 text-sm tracking-[0.24em] text-sky-300/80">SELECTED WORK</p>
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-white md:text-4xl">
          Projects shaped around practical problems
        </h2>
      </div>

      <div className="flex max-w-3xl flex-col gap-5">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} compact />
        ))}

        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 text-sky-400 transition-all hover:text-sky-300"
        >
          <span className="text-sm tracking-[0.24em] text-sky-300/80 transition-transform group-hover:translate-x-1">VIEW MORE PROJECTS</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}