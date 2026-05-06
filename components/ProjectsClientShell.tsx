"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CursorFollower } from "@/components/CursorFollower";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export function ProjectsClientShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0f172a] text-white">
      <CursorFollower />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm tracking-wider">BACK TO HOME</span>
          </Link>
          <p className="text-sm tracking-[0.18em] text-slate-400">PROJECTS</p>
        </div>
      </header>

      <main className="px-6 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-6 text-sm tracking-[0.24em] text-sky-300/80">PORTFOLIO</p>
            <h1 className="mb-6 text-4xl font-semibold tracking-normal text-white md:text-6xl">Selected Projects</h1>
            <p className="text-lg leading-8 text-slate-300 md:text-xl">
              Practical systems built around real workflows, clear interfaces, and maintainable implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>&copy; 2026 Renz Rendel De Arroz</p>
          <p>Designed with purpose</p>
        </div>
      </footer>
    </div>
  );
}
