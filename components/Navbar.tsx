"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Instagram, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { site } from "@/lib/site";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const containerVariants = useMemo(() => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }), []);

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.innerHeight * 0.35;
      let nextSection = navItems[0]?.id ?? "about";

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= marker && rect.bottom > marker) {
          nextSection = item.id;
          break;
        }

        if (rect.top < marker) {
          nextSection = item.id;
        }
      }

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center px-10 py-12 lg:sticky lg:top-0 lg:h-screen lg:px-16 lg:py-0 lg:items-start lg:justify-center">
      <motion.div
        className="w-full lg:w-auto max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        {/* NAME */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <h1 className="pt-10 lg:pt-28 text-4xl font-semibold leading-tight text-white transition-colors sm:text-5xl lg:text-6xl hover:text-sky-300">
              Renz Rendel <br /> De Arroz
            </h1>
          </Link>

          <p className="mt-5 text-slate-300 leading-7 text-sm md:text-base">
            I build reliable systems and intuitive interfaces that solve real problems.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-sky-400/50 px-4 py-2 text-sm text-sky-300 transition-all hover:border-sky-400 hover:bg-sky-400/10"
          >
            View Resume
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* NAV */}
        <motion.div className="mt-14 space-y-4" variants={itemVariants}>
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              aria-current={activeSection === item.id ? "page" : undefined}
              className={`group flex items-center gap-3 text-sm uppercase tracking-[0.2em] transition-colors ${
                activeSection === item.id
                  ? "text-sky-300"
                  : "text-slate-400"
              }`}
            >
              <span
                className={`h-px transition-all ${
                  activeSection === item.id
                    ? "w-10 bg-sky-300"
                    : "w-6 bg-slate-700 group-hover:w-10 group-hover:bg-sky-300"
                }`}
              />
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="mt-16 flex gap-4 text-slate-400"
          variants={itemVariants}
        >
          <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-white">
            <Github size={18} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook profile" className="transition-colors hover:text-white">
            <Facebook size={18} />
          </a>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram profile" className="transition-colors hover:text-white">
            <Instagram size={18} />
          </a>
        </motion.div>

        {/* CREDITS */}
        <motion.div
          className="mt-16 text-sm text-slate-500"
          variants={itemVariants}
        >
          <p>Design Inspired by <strong><a href="https://brittanychiang.com" target="_blank" rel="noreferrer" className="hover:text-sky-300">Brittany Chiang</a></strong></p>
        </motion.div>
      </motion.div>
    </nav>
  );
}
