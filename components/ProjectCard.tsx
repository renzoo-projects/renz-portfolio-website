"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const imageHeight = compact ? "h-48 md:h-64" : "h-56";

  return (
    <motion.article
      id={project.slug}
      className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/40 backdrop-blur-sm transition-colors hover:border-sky-400/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: compact ? 0 : -2 }}
    >
      <div className={`relative overflow-hidden ${imageHeight}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={compact ? "(min-width: 768px) 48rem, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 md:p-5">
        <h3 className="mb-2 text-lg font-medium text-white md:text-xl">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <Link
          href={`/projects#${project.slug}`}
          className="group/link inline-flex items-center gap-2 text-xs tracking-[0.18em] text-slate-500 transition-all hover:gap-3 hover:text-sky-400"
        >
          VIEW
          <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
