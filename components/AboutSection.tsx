"use client";

import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-8 lg:pt-28">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl space-y-5 text-base leading-8 text-slate-300 md:text-lg"
        >
          <p className="mb-4 text-sm tracking-[0.24em] text-sky-300/80">ABOUT</p>
          <p>
            I&apos;m Renz Rendel De Arroz, currently a 4th-year Computer Science student at the University of the Philippines Visayas. I build full-stack web and mobile applications that solve real problems.
          </p>

          <p>
            I focus on systems that are practical, reliable, and easy to use — and I learn best by building.
          </p>

          <p>
            Most of my learning comes from building — I enjoy understanding how systems work behind the scenes, from interfaces and databases to application logic. My goal is to create products that are useful, scalable, and grounded in real problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
