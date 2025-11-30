"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { Code, Smartphone, Globe, Cloud, Shield, Cpu } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description:
            "Custom, high-performance websites built with modern frameworks like Next.js and React. We create digital experiences that captivate and convert.",
        icon: Globe,
    },
    {
        title: "Mobile Solutions",
        description:
            "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices.",
        icon: Smartphone,
    },
    {
        title: "Cloud Infrastructure",
        description:
            "Scalable, secure, and efficient cloud architecture design and management using AWS, Azure, and Google Cloud.",
        icon: Cloud,
    },
    {
        title: "Cybersecurity",
        description:
            "Comprehensive security audits and implementation to protect your digital assets from evolving threats.",
        icon: Shield,
    },
    {
        title: "AI & Machine Learning",
        description:
            "Intelligent solutions that automate processes, analyze data, and provide predictive insights for your business.",
        icon: Cpu,
    },
    {
        title: "Custom Software",
        description:
            "Tailor-made software solutions designed to address your specific business challenges and operational needs.",
        icon: Code,
    },
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We dive deep into your business goals, target audience, and requirements to build a solid foundation.",
    },
    {
        step: "02",
        title: "Strategy",
        description:
            "We craft a comprehensive roadmap, selecting the right technologies and design approach for your project.",
    },
    {
        step: "03",
        title: "Development",
        description:
            "Our expert developers bring the vision to life, writing clean, efficient, and scalable code.",
    },
    {
        step: "04",
        title: "Launch",
        description:
            "We ensure a smooth deployment and provide ongoing support to keep your solution running at peak performance.",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeading
                        title="Our Expertise"
                        subtitle="Services"
                        center
                        className="mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300"
                    >
                        We deliver a full spectrum of digital services, from concept to code.
                        Our multidisciplinary team combines creativity with technical excellence.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        title="How We Work"
                        subtitle="Process"
                        center
                        className="mb-16"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="text-6xl font-bold text-white/5 mb-4 absolute -top-10 -left-4 z-0">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent transform translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
