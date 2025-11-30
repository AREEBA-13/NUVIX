"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    center?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    className = "",
    center = false,
}: SectionHeadingProps) {
    return (
        <div
            className={`mb-12 ${center ? "text-center" : "text-left"} ${className}`}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-2 text-sm font-medium tracking-wider text-purple-400 uppercase"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 ${center ? "mx-auto" : ""
                    }`}
            />
        </div>
    );
}
