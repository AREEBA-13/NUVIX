"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "./Button";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
        >
            {isSubmitted ? (
                <div className="text-center py-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <Send size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                        Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-gray-400">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formState.name}
                                onChange={(e) =>
                                    setFormState({ ...formState, name: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formState.email}
                                onChange={(e) =>
                                    setFormState({ ...formState, email: e.target.value })
                                }
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={(e) =>
                                setFormState({ ...formState, message: e.target.value })
                            }
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>
                    <Button
                        variant="primary"
                        className="w-full justify-center"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </>
            )}
        </motion.form>
    );
}
