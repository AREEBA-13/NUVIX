"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI", "Design"];

const projects = [
    {
        title: "Neon Finance",
        category: "Web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "A next-gen DeFi dashboard with real-time analytics.",
    },
    {
        title: "Aura Health",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        description: "Meditation and wellness app with biometric tracking.",
    },
    {
        title: "Nexus AI",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        description: "Enterprise-grade natural language processing platform.",
    },
    {
        title: "Urban E-Comm",
        category: "Web",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
        description: "High-conversion fashion e-commerce experience.",
    },
    {
        title: "Flow State",
        category: "Design",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        description: "Brand identity and UI kit for a productivity tool.",
    },
    {
        title: "Cyber Guard",
        category: "Mobile",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        description: "Mobile security suite for enterprise communication.",
    },
];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Our Work"
                    subtitle="Portfolio"
                    center
                    className="mb-12"
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-purple-400 text-sm font-medium mb-2 block">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-4">
                                            <button className="p-2 bg-white/10 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </button>
                                            <button className="p-2 bg-white/10 rounded-full hover:bg-purple-500 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
