"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";
import { CursorFollower } from "./CursorFollower";

const sortedProjects = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

export function ProjectsClientShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <CursorFollower />

      <main className="px-6 pb-20 pt-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14">
            <Link href="/" className="group mb-6 flex items-center gap-3 text-sky-300/80 transition-transform hover:-translate-x-1">
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm tracking-[0.24em]">BACK TO PORTFOLIO</span>
            </Link>
            <h1 className="mb-6 text-4xl font-semibold tracking-normal text-white md:text-6xl">Full Archive</h1>
          </div>

          <ul className="group/list flex flex-col gap-12">
            {sortedProjects.map((project, index) => (
              <motion.li
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <div className="z-10 sm:order-2 sm:col-span-6 sm:mt-5">
                  <h3>
                    {project.href ? (
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4" />
                        <span>{project.title}</span>
                        <ExternalLink
                          size={14}
                          className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1"
                        />
                      </Link>
                    ) : (
                      <span className="font-medium leading-tight text-slate-200">
                        {project.title}
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-sky-400/10 px-2 py-0.5 text-xs text-sky-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:order-1 sm:col-span-2 sm:translate-y-1">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {project.year}
                  </p>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={112}
                    className="aspect-video rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
