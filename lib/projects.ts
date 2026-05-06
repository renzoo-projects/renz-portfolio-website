export type Project = {
  title: string;
  slug: string;
  role: string;
  description: string;
  year: string;
  tags: string[];
  status: "Completed" | "In Progress" | "Research";
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Laundry Management System",
    slug: "laundry-management-system",
    role: "Full-stack Development",
    description:
      "A workflow-focused system for tracking laundry orders, customer records, service status, and operational updates.",
    year: "2026",
    tags: ["React", "Node.js", "SQL"],
    status: "Completed",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1080",
  },
  {
    title: "PondStat",
    slug: "pondstat",
    role: "Application Development",
    description:
      "A monitoring tool built to help users track pond conditions and turn collected data into clearer decisions.",
    year: "2025",
    tags: ["React", "Firebase", "Data Tracking"],
    status: "Completed",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1080",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    role: "Frontend Development",
    description:
      "A personal portfolio designed around concise presentation, responsive layout, and easy project discovery.",
    year: "2026",
    tags: ["Next.js", "React", "Tailwind CSS"],
    status: "In Progress",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1080",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
