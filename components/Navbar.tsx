"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("about");
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  useEffect(() => {
    const content = document.getElementById("content");
    const nav = navRef.current;

    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.35) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!content || window.innerWidth < 1024) {
        return;
      }

      event.preventDefault();
      content.scrollTop += event.deltaY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    content?.addEventListener("scroll", handleScroll);
    nav?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      content?.removeEventListener("scroll", handleScroll);
      nav?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="relative flex h-screen touch-none items-center justify-center overscroll-none px-6 py-8 md:px-10 lg:sticky lg:top-0 lg:px-12 lg:py-12"
    >
      <motion.div
        className="w-full max-w-lg -translate-y-12 text-left lg:translate-y-[var(--intro-offset)]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <Link href="/" className="block">
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-normal text-white transition-colors hover:text-sky-300 md:text-5xl">
              Renz Rendel<br />De Arroz
            </h1>
          </Link>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Computer Science student building practical, user-centered systems across frontend and backend.
          </p>
        </motion.div>

        <motion.div className="mt-12" variants={itemVariants}>
          <div className="mb-6 flex flex-wrap gap-3 lg:flex-col">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                variants={itemVariants}
                className={`group flex w-fit items-center gap-3 text-left text-sm uppercase tracking-[0.22em] transition-colors hover:text-sky-300 ${
                  activeSection === item.id ? "text-sky-300" : "text-slate-400"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                  activeSection === item.id ? "w-10 bg-sky-300" : "w-6 bg-slate-700 group-hover:w-10 group-hover:bg-sky-300"
                  }`}
                />
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-4 text-sm text-slate-400">
            <motion.a
              href="mailto:renz@example.com"
              className="transition-colors hover:text-white"
              variants={itemVariants}
            >
              Email
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              variants={itemVariants}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              variants={itemVariants}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
