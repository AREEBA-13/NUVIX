"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        details: "nuvixai25@gmail.com",
    },
    {
        icon: Phone,
        title: "Call Us",
        details: "+1 (555) 123-4567",
        subDetails: "Mon-Fri, 9am-6pm",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        details: "University of Gujrat",
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Contact"
                    center
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Let's Build Something Extraordinary
                        </h3>
                        <p className="text-gray-300 mb-12 leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-8">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                    className="flex items-start gap-6"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 shrink-0 border border-white/10">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300">{item.details}</p>
                                        <p className="text-gray-500 text-sm">{item.subDetails}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 h-64 rounded-2xl overflow-hidden relative bg-white/5 border border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                <div className="text-center">
                                    <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                                    <span className="text-sm">Interactive Map Integration</span>
                                </div>
                            </div>
                            {/* In a real app, you would embed a Google Map or Mapbox here */}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
