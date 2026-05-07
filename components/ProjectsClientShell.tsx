"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CursorFollower } from "@/components/CursorFollower";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export function ProjectsClientShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <CursorFollower />

      <main className="px-6 pb-20 pt-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Link href="/" className="group mb-6 flex items-center gap-3 text-sky-300/80 transition-transform hover:-translate-x-1">
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm tracking-[0.24em]">BACK TO PORTFOLIO</span>
            </Link>
            <h1 className="mb-6 text-4xl font-semibold tracking-normal text-white md:text-6xl">Full Archive</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
