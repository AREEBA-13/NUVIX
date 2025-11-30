"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
    {
        id: 1,
        title: "The Future of AI in Enterprise Software",
        excerpt:
            "How artificial intelligence is reshaping the landscape of business applications and what it means for your company.",
        date: "Mar 15, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        category: "Technology",
    },
    {
        id: 2,
        title: "Designing for the Spatial Web",
        excerpt:
            "Exploring the principles of user interface design for augmented and virtual reality experiences.",
        date: "Mar 10, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop",
        category: "Design",
    },
    {
        id: 3,
        title: "Scalable Cloud Architecture Patterns",
        excerpt:
            "Best practices for building resilient and scalable cloud-native applications using microservices.",
        date: "Mar 05, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        category: "Engineering",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Insights"
                    subtitle="Blog"
                    center
                    className="mb-16"
                />

                {/* Featured Article */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 relative rounded-3xl overflow-hidden aspect-[21/9] group cursor-pointer"
                >
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                        alt="Featured Article"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <span className="inline-block px-4 py-1 rounded-full bg-purple-600 text-white text-sm font-medium mb-4 w-fit">
                            Featured
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
                            Navigating the Digital Transformation Journey
                        </h2>
                        <div className="flex items-center gap-6 text-gray-300 text-sm mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>Mar 20, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>8 min read</span>
                            </div>
                        </div>
                        <p className="text-gray-300 max-w-2xl text-lg mb-6 line-clamp-2">
                            A comprehensive guide to modernizing your business infrastructure and culture for the digital age.
                        </p>
                        <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                            Read Article <ArrowRight size={20} />
                        </div>
                    </div>
                </motion.div>

                {/* Recent Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar size={14} />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={14} />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                                Read More <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
