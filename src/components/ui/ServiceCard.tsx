"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index?: number;
    delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, index = 0, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={120} />
            </div>

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nuvix-primary to-nuvix-accent flex items-center justify-center mb-6 shadow-lg shadow-nuvix-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-nuvix-accent transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                    {description}
                </p>
            </div>

            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
}
