"use client";

import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CursorFollower } from "@/components/CursorFollower";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <CursorFollower />
      <div className="relative z-10 lg:grid lg:h-screen lg:grid-cols-2 lg:overflow-hidden lg:overscroll-none lg:px-10 xl:px-16">
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
