"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
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
    const content = document.getElementById("content");

    const handleScroll = () => {
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom > window.innerHeight * 0.35
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    content?.addEventListener("scroll", handleScroll);

    return () => {
      content?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 h-screen flex items-center px-10 lg:px-16">
      <motion.div
        className="w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >

        {/* NAME */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <h1 className="text-6xl font-semibold leading-tight text-white hover:text-sky-300 transition-colors">
              Renz Rendel <br /> De Arroz
            </h1>
          </Link>

          <p className="mt-5 text-slate-300 leading-7 text-sm md:text-base">
            I build reliable systems and intuitive interfaces that solve real problems.
          </p>
        </motion.div>

        {/* NAV */}
        <motion.div className="mt-14 space-y-4" variants={itemVariants}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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
          <Github size={18} />
          <Linkedin size={18} />
          <Facebook size={18} />
          <Instagram size={18} />
        </motion.div>
      </motion.div>
    </nav>
  );
}