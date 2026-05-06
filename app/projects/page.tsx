import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ProjectsClientShell } from "@/components/ProjectsClientShell";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${title} | ${site.name}`,
            description,
            url: `${site.url}/projects`,
          }),
        }}
      />
      <ProjectsClientShell />
    </>
  );
}
