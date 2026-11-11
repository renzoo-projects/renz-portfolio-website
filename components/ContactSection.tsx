import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { label: "Message me on LinkedIn", href: site.socials.linkedin },
  { label: "See my code on GitHub", href: site.socials.github },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 py-8 pb-24 lg:py-16 lg:pb-32">
      <div className="reveal max-w-2xl">
        <h2 className="mb-4 text-sm font-normal tracking-[0.24em] text-sky-300/80">CONTACT</h2>
        <p className="text-base leading-8 text-slate-300 md:text-lg">
          Want to work together, or just say hi? LinkedIn is the fastest way to reach me.
        </p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-sky-400/50 px-4 py-2 text-sm text-sky-300 transition-colors hover:border-sky-400 hover:bg-sky-400/10"
              >
                {link.label}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
