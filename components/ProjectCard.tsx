"use client";

import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const imageHeight = compact ? "h-40 md:h-52" : "h-48";

  return (
    <motion.article
      id={project.slug}
      className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-sky-400/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: compact ? 0 : -4 }}
    >
      <div className={`relative overflow-hidden ${imageHeight}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={compact ? "(min-width: 768px) 48rem, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
          <span className="rounded border border-white/10 bg-black/45 px-2 py-1 text-xs text-slate-300 backdrop-blur">
            {project.status}
          </span>
          <span className="text-sm text-slate-300">{project.year}</span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="mb-1 text-xl font-medium tracking-normal text-white transition-colors group-hover:text-sky-300 md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-3 text-xs tracking-[0.18em] text-slate-400">{project.role}</p>
        <p className="text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>

        <div className="mb-5 mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 px-2 py-1 text-xs text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects#${project.slug}`}
          className="group/link inline-flex items-center gap-2 text-sm tracking-[0.18em] text-slate-300 transition-all hover:gap-3 hover:text-white"
        >
          {compact ? "VIEW" : "VIEW DETAILS"}
          {compact ? (
            <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
          ) : (
            <ExternalLink size={14} />
          )}
        </Link>
      </div>
    </motion.article>
  );
}
