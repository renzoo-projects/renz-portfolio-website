"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Neural Vision",
    role: "AI Research",
    description: "Computer vision system for real-time object detection and classification using deep learning.",
    year: "2026",
    tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    image:
      "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Nzc5ODg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Adaptive Learning",
    role: "Machine Learning",
    description: "Personalized education platform using reinforcement learning algorithms.",
    year: "2025",
    tags: ["TensorFlow", "RL", "NLP"],
    image:
      "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Nzc5ODg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Quantum Insights",
    role: "Data Science",
    description: "Predictive analytics engine for complex financial modeling and forecasting.",
    year: "2025",
    tags: ["Python", "Analytics", "ML"],
    image:
      "https://images.unsplash.com/photo-1717501219604-cc1902b5d845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Nzc5ODg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Cognitive Interface",
    role: "AI Development",
    description: "Natural language processing system for human-computer interaction.",
    year: "2024",
    tags: ["NLP", "React", "AI"],
    image:
      "https://images.unsplash.com/photo-1717501219526-5cef0a447f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Nzc5ODg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

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
          <motion.div
            key={index}
            className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur transition-colors hover:border-sky-400/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-40 overflow-hidden md:h-52">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute right-4 top-4 text-xs tracking-wider text-slate-300">{project.year}</span>
            </div>
            <div className="p-5 md:p-6">
              <div>
                <h3 className="mb-1 text-xl font-medium tracking-normal transition-colors group-hover:text-sky-300 md:text-2xl">{project.title}</h3>
                <p className="mb-3 text-xs tracking-[0.18em] text-slate-400">{project.role}</p>
                <p className="text-sm leading-7 text-slate-300 md:text-base">{project.description}</p>
              </div>
              <div>
                <div className="mb-4 mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="rounded-full border border-white/10 px-2 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="group/btn flex items-center gap-2 text-sm tracking-[0.18em] text-slate-300 transition-all duration-300 hover:gap-3 hover:text-white">
                  VIEW
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
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
