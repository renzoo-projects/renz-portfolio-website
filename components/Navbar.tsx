"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { Github, Linkedin, Facebook, Instagram, ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { label: "GitHub profile", href: site.socials.github, Icon: Github },
  { label: "LinkedIn profile", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Facebook profile", href: site.socials.facebook, Icon: Facebook },
  { label: "Instagram profile", href: site.socials.instagram, Icon: Instagram },
];

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.innerHeight * 0.35;
      let nextSection = navItems[0].id;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= marker) nextSection = item.id;
      }

      // The last section is too short to reach the marker, so select it at the bottom of the page.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        nextSection = navItems[navItems.length - 1].id;
      }

      setActiveSection(nextSection);
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
    <header className="flex items-center px-6 pb-4 pt-16 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:items-start lg:justify-center lg:px-16 lg:py-0">
      <div className="w-full max-w-sm lg:w-auto">
        {/* NAME */}
        <div className="fade-in">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:pt-28 lg:text-6xl">
            <Link href="/" className="transition-colors hover:text-sky-300">
              Renz Rendel <br /> De Arroz
            </Link>
          </h1>

          <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
            I build reliable systems and intuitive interfaces that solve real problems.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-sky-400/50 px-4 py-2 text-sm text-sky-300 transition-colors hover:border-sky-400 hover:bg-sky-400/10"
          >
            View Resume
            <ExternalLink size={14} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        {/* NAV */}
        <nav aria-label="Sections" className="fade-in mt-14 hidden lg:block" style={delay(100)}>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`group flex items-center gap-3 py-1.5 text-sm uppercase tracking-[0.2em] transition-colors hover:text-sky-300 ${
                      active ? "text-sky-300" : "text-slate-400"
                    }`}
                  >
                    <span
                      className={`h-px transition-all group-hover:w-10 group-hover:bg-sky-300 ${
                        active ? "w-10 bg-sky-300" : "w-6 bg-slate-700"
                      }`}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* SOCIALS */}
        <ul className="fade-in -ml-3 mt-8 flex text-slate-400 lg:mt-12" style={delay(200)}>
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex size-11 items-center justify-center transition-colors hover:text-white"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
