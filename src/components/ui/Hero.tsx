"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-nuvix-dark">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-nuvix-dark/30 via-nuvix-dark/60 to-nuvix-dark z-10" />
                <div
                    className="w-full h-full bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                    }}
                />
            </motion.div>

            {/* Animated Particles/Overlay (CSS based for performance) */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black)]" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-nuvix-accent"
                    >
                        Redefining Digital Excellence
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight text-white">
                        Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nuvix-primary via-nuvix-accent to-nuvix-primary bg-[length:200%_auto] animate-gradient">Future</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We craft immersive digital experiences and enterprise-grade software solutions that propel your business forward.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="min-w-[180px] shadow-lg shadow-nuvix-primary/25">
                                Start Project
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg" className="min-w-[180px] backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
                                View Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 100] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/50"
                    />
                </div>
            </motion.div>
        </div>
    );
}
