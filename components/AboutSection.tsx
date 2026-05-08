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
            I&apos;m Renz Rendel De Arroz, currently a 3rd-year Computer Science student from the University of the Philippines Visayas, interested in building systems that are practical, reliable, and easy to use. I work across both frontend and backend development, using tools like React, Node.js, Firebase, and SQL to turn ideas into working applications.
          </p>

          <p>
            I&apos;ve worked on web and mobile applications, where I focused on building systems and features that solve actual user needs while learning how to work within real development workflows and team environments.
          </p>

          <p>
            Most of my learning comes from building. I enjoy understanding how systems work behind the scenes — from interfaces and databases to application logic and structure — and continuously improving how I approach development. My goal is to become a developer who creates products that are useful, scalable, and grounded in real problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
