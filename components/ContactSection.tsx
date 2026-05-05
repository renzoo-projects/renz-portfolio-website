"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="flex min-h-[70vh] flex-col justify-center px-6 py-20 md:px-10 lg:px-12 lg:py-24">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-sm tracking-[0.24em] text-sky-300/80">GET IN TOUCH</p>
          <h2 className="mb-10 max-w-2xl text-3xl font-semibold leading-tight tracking-normal text-white md:text-5xl">Let&apos;s create something useful</h2>
          <div className="flex flex-wrap gap-5 md:gap-8">
            <motion.a
              href="mailto:renz@example.com"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>renz@example.com</span>
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
