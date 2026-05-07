import type { Metadata } from "next";
import Script from "next/script";
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
        <aside className="sticky translate-x-70 -translate-y-25 top-0 h-screen">
          <Navbar />
        </aside>

        {/* Right Content  */}
        <main id="content" className="px-6 -translate-y-25 lg:px-2">
          <AboutSection />
          <FeaturedWorkSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}