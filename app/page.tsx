import type { Metadata } from "next";
import Script from "next/script";
import { AboutSection } from "@/components/AboutSection";
import { CursorFollower } from "@/components/CursorFollower";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Full-stack Developer",
  description: site.description,
  knowsAbout: ["React", "Next.js", "Node.js", "Firebase", "SQL"],
  mainEntityOfPage: site.url,
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${site.url}/projects#${project.slug}`,
    dateCreated: project.year,
    keywords: project.tags.join(", "),
  })),
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <CursorFollower />

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Content  */}
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:translate-x-70 lg:-translate-y-25">
          <Navbar />
        </aside>

        {/* Right Content  */}
        <main id="content" className="max-w-3xl px-10 lg:px-16">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>
      </div>
    </div>
  );
}
