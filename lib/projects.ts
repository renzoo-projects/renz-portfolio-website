import type { StaticImageData } from "next/image";
import lucky8Image from "@/public/images/Lucky8-Coffee-POS.webp";
import cogssyImage from "@/public/images/Cogssy.webp";
import laundryImage from "@/public/images/Laundry-Management-System.webp";
import pondStatImage from "@/public/images/PondStat.webp";
import pathfindingImage from "@/public/images/Pathfinding-Visualizer.webp";
import portfolioImage from "@/public/images/Personal-Portfolio-Website.webp";

export type Project = {
  title: string;
  slug: string;
  description: string;
  year: string;
  tags: string[];
  featured?: boolean;
  image: StaticImageData;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Point of Sale System",
    slug: "lucky-8-coffee-pos",
    description:
      "A point-of-sale system and owners' dashboard built for a cafe. The till keeps taking orders even when the internet goes down, then syncs everything to the cloud once it reconnects. Owners get sales reports and full control of the menu from any browser.",
    year: "2026",
    tags: ["Tauri", "Next.js", "React", "TypeScript", "Supabase", "SQLite", "Docker", "Tailwind CSS"],
    featured: true,
    image: lucky8Image,
  },
  {
    title: "Cogssy",
    slug: "cogssy",
    description:
      "A COGS calculator for makers and small businesses. Define ingredients with unit conversion, add overheads, compose products, and get a target selling price from your desired margin.",
    year: "2026",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    href: "https://cogssy.vercel.app/",
    image: cogssyImage,
  },
  {
    title: "Laundry Management System",
    slug: "laundry-management-system",
    description:
      "A web application that helps small laundry businesses manage orders, track customers, and streamline daily operations.",
    year: "2026",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    href: "https://github.com/renzoupv/Laundry-Management-System",
    image: laundryImage,
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
    image: pondStatImage,
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
    image: pathfindingImage,
  },
  {
    title: "renzdearroz.com",
    slug: "personal-portfolio-website",
    description:
      "A personal portfolio website built with Next.js, showcasing projects and experiences. Designed inspired by the aesthetics of Brittany Chiang's portfolio website.",
    year: "2024",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: false,
    image: portfolioImage,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
