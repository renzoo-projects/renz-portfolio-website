import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
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
  jobTitle: "Software Engineer",
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
    <div className="relative isolate min-h-screen bg-black text-white">
      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <CursorFollower />

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Content  */}
        <div className="lg:sticky lg:top-0 lg:h-screen">
          <Navbar />
        </div>

        {/* Right Content  */}
        <main id="content" className="max-w-3xl px-6 sm:px-10 lg:px-16">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
