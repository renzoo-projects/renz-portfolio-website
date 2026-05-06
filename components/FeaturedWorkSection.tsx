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
          className="group flex h-28 w-full flex-col items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 p-6 transition-all hover:border-sky-300/50 hover:bg-sky-400/15"
        >
          <h3 className="mb-2 text-center text-lg font-medium tracking-normal">View All Projects</h3>
          <div className="flex items-center gap-2 text-sm tracking-[0.18em] text-slate-300 transition-all duration-300 group-hover:gap-3">
            SEE MORE
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>
    </section>
  );
}
