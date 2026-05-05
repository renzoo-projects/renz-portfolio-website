"use client";

import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function Projects() {
  const allProjects = [
    {
      title: "Neural Vision",
      role: "AI Research",
      description: "Computer vision system for real-time object detection and classification using deep learning architectures.",
      year: "2026",
      tags: ["PyTorch", "Computer Vision", "Deep Learning"],
      status: "In Progress",
      image:
        "https://images.unsplash.com/photo-1675557009285-b55f562641b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Adaptive Learning",
      role: "Machine Learning",
      description: "Personalized education platform using reinforcement learning algorithms to optimize learning paths.",
      year: "2025",
      tags: ["TensorFlow", "RL", "NLP"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1675557009317-bb59e35aba82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Quantum Insights",
      role: "Data Science",
      description: "Predictive analytics engine for complex financial modeling and market forecasting.",
      year: "2025",
      tags: ["Python", "Analytics", "ML"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1775185172785-4bbd6b0fc8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Cognitive Interface",
      role: "AI Development",
      description: "Natural language processing system for seamless human-computer interaction.",
      year: "2024",
      tags: ["NLP", "React", "AI"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Sentiment Analyzer",
      role: "NLP Research",
      description: "Advanced sentiment analysis tool for social media monitoring and brand perception tracking.",
      year: "2024",
      tags: ["BERT", "NLP", "Python"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1675557009875-436f71457475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Autonomous Navigator",
      role: "Robotics & AI",
      description: "Path planning and obstacle avoidance system for autonomous vehicles.",
      year: "2024",
      tags: ["ROS", "Python", "Computer Vision"],
      status: "Research",
      image:
        "https://images.unsplash.com/photo-1675557010061-315772f6efef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Generative Art AI",
      role: "Creative AI",
      description: "Neural network-based system for generating original artwork using GANs.",
      year: "2023",
      tags: ["GANs", "PyTorch", "Art"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1564707944519-7a116ef3841c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Voice Assistant",
      role: "Speech Recognition",
      description: "Custom voice assistant with natural language understanding and speech synthesis.",
      year: "2023",
      tags: ["ASR", "TTS", "NLP"],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1775185173284-36c5287cf82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Medical Diagnostics AI",
      role: "Healthcare AI",
      description: "Deep learning model for early disease detection from medical imaging.",
      year: "2023",
      tags: ["Healthcare", "CNN", "TensorFlow"],
      status: "Research",
      image:
        "https://images.unsplash.com/photo-1770745778460-9d9f1a7e8632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHx0ZWNobm9sb2d5JTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc3OTg4NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider">BACK TO HOME</span>
          </Link>
          <h1 className="text-xl tracking-tight">All Projects</h1>
        </div>
      </header>

      <main className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm tracking-widest text-gray-400 mb-6">PORTFOLIO</p>
            <h2 className="text-5xl md:text-7xl mb-6">Complete Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              A comprehensive collection of AI research, machine learning projects, and innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="text-xs px-2 py-1 bg-black/50 backdrop-blur-sm border border-gray-700 rounded text-gray-300">
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-300">{project.year}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-xs text-gray-400 tracking-wider mb-4">{project.role}</p>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800/50 rounded text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white group-hover:gap-3 transition-all">
                    View Details
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 Renz Rendel De Arroz</p>
          <p>Designed with purpose</p>
        </div>
      </footer>
    </div>
  );
}