import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CursorFollower } from "@/components/CursorFollower";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Full-stack Developer",
    description: site.description,
    knowsAbout: ["React", "Next.js", "Node.js", "Firebase", "SQL", "Full-stack development"],
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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CursorFollower />
      <div
        className="relative z-10 lg:grid lg:h-screen lg:grid-cols-2 lg:overflow-hidden lg:overscroll-none lg:px-10 xl:px-16"
        style={
          {
            ["--intro-offset" as string]: "-8rem",
            ["--about-intro-offset" as string]: "-7rem",
          } as CSSProperties
        }
      >
        <Navbar />
        <main
          id="content"
          className="min-h-screen lg:h-screen lg:overflow-y-auto lg:overscroll-contain"
        >
          <AboutSection />
          <FeaturedWorkSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
