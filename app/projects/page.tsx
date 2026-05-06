import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const title = "Projects";
const description =
  "Selected full-stack and application development projects by Renz Rendel De Arroz, including Laundry Management System, PondStat, and portfolio work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: "/projects",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} projects preview`,
      },
    ],
  },
  twitter: {
    title: `${title} | ${site.name}`,
    description,
    images: ["/twitter-image"],
  },
};

export default function Projects() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${title} | ${site.name}`,
    description,
    url: `${site.url}/projects`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${site.url}/projects#${project.slug}`,
        name: project.title,
        description: project.description,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider">BACK TO HOME</span>
          </Link>
          <p className="text-sm tracking-[0.18em] text-slate-400">PROJECTS</p>
        </div>
      </header>

      <main className="px-6 pb-20 pt-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-6 text-sm tracking-[0.24em] text-sky-300/80">PORTFOLIO</p>
            <h1 className="mb-6 text-4xl font-semibold tracking-normal text-white md:text-6xl">Selected Projects</h1>
            <p className="text-lg leading-8 text-slate-300 md:text-xl">
              Practical systems built around real workflows, clear interfaces, and maintainable implementation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>&copy; 2026 Renz Rendel De Arroz</p>
          <p>Designed with purpose</p>
        </div>
      </footer>
    </div>
  );
}
