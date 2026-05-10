export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  tags: string[];
  featured?: boolean;
  image: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Laundry Management System",
    slug: "laundry-management-system",
    description:
      "A web application that helps small laundry businesses manage orders, track customers, and streamline daily operations.",
    year: "2026",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    href: "https://github.com/renzoupv/Laundry-Management-System",
    image:
      "/images/Laundry-Management-System.png",
  },
  {
    title: "PondStat",
    slug: "pondstat",
    description:
      "A monitoring tool built to help UPV Fisheries students record pond conditions, track growth, monitor water quality, and analyze pond data.",
    year: "2025",
    tags: ["Flutter", "Dart", "Firebase"],
    featured: true,
    href: "https://github.com/PondStat/PondStat-Mobile-App",  
    image:
      "/images/PondStat.png",
  },
  {
    title: "Pathfinding Visualizer",
    slug: "pathfinding-visualizer",
    description:
      "A web application for visualizing and understanding various pathfinding algorithms in real-time, compiled with WebAssembly.",
    year: "2024",
    tags: ["WASM", "C", "HTML", "CSS", "JavaScript"],
    featured: true,
    href: "https://github.com/renzoupv/Pathfinding-Visualizer",
    image:
      "/images/Pathfinding-Visualizer.png",
  },
  {
    title: "renzdearroz.vercel.app",
    slug: "personal-portfolio-website",
    description:
      "A personal portfolio website built with Next.js, showcasing projects and experiences. Designed inspired by the aesthetics of Brittany Chiang's portfolio website.",
    year: "2024",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    image:
      "/images/Personal-Portfolio-Website.png",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
