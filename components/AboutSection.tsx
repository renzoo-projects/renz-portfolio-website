"use client";

import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center px-6 py-20 md:px-10 lg:px-12 lg:py-24">
      <div className="w-full max-w-3xl -translate-y-12 lg:-translate-y-35">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl space-y-5 text-base leading-8 text-slate-300 md:text-lg"
        >
          <p>
            I&apos;m Renz De Arroz, a Computer Science student focused on building practical, user-centered systems and turning ideas into working products. I work across both frontend and backend, using technologies like React, Node.js, Firebase, and SQL to create applications that are not just functional, but intuitive and efficient.
          </p>
          <p>
            I&apos;ve worked on projects such as a Laundry Management System and PondStat, where I focused on translating real-world needs into clean, usable solutions while collaborating in team environments.
          </p>
          <p>
            I&apos;m constantly learning, refining my approach, and pushing myself to understand how things actually work under the hood—not just making them run, but making them reliable and scalable.
            My goal is to grow into a developer who builds systems that solve real problems and eventually create products that stand on their own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
