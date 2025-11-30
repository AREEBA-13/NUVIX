"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Users, Target, Zap } from "lucide-react";

const stats = [
    { label: "Years of Innovation", value: "2+" },
    { label: "Global Clients", value: "20+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Team Members", value: "10+" },
];

const values = [
    {
        icon: Target,
        title: "Visionary Thinking",
        description:
            "We don't just follow trends; we set them. Our approach is rooted in forward-thinking strategies that future-proof your business.",
    },
    {
        icon: Zap,
        title: "Rapid Execution",
        description:
            "Speed matters. We deliver high-quality solutions with unmatched efficiency, ensuring you stay ahead of the competition.",
    },
    {
        icon: Users,
        title: "Client-Centric",
        description:
            "Your success is our obsession. We partner with you to understand your unique challenges and craft tailored solutions.",
    },
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="min-h-screen pt-24 pb-20 overflow-hidden" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/90" />
                    <motion.div style={{ y }} className="w-full h-full">
                        {/* Placeholder for a background image or 3D element */}
                        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white/60"
                    >
                        We Are NUVIX
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Architecting the digital future with precision, passion, and cutting-edge technology.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading
                                title="Our Story"
                                subtitle="The Journey"
                            />
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6 text-gray-300 leading-relaxed"
                            >
                                <p>
                                    Founded in 2025, NUVIX emerged from a simple yet powerful idea: that technology should not just solve problems but inspire possibilities. What started as a small collective of passionate developers has grown into a global powerhouse of digital innovation.
                                </p>
                                <p>
                                    We believe in the transformative power of code. Every line we write, every pixel we place, is a step towards a more connected, efficient, and beautiful digital world. Our mission is to empower businesses to transcend their limits through bespoke software solutions.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square rounded-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="Our Core Values"
                        subtitle="Philosophy"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                    <value.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
