import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renz Rendel De Arroz | AI Researcher & Developer",
  description: "Building intelligent systems at the intersection of artificial intelligence and human experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}