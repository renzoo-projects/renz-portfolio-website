"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { featuredProjects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-8 max-w-3xl"
      >
        <p className="mb-4 text-sm tracking-[0.24em] text-sky-300/80">PROJECTS</p>
      </motion.div>

      <ul className="group/list flex max-w-3xl flex-col gap-12">
        {featuredProjects.map((project, index) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

            <div className="z-10 sm:order-2 sm:col-span-6">
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

      <Link
        href="/projects"
        className="group mt-5 inline-flex items-center gap-3 text-sky-400 transition-all hover:text-sky-300"
      >
        <span className="text-sm tracking-[0.24em] text-sky-300/80 transition-transform group-hover:translate-x-1 py-5">
          VIEW MORE PROJECTS
        </span>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
