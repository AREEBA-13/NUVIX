"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const clients = [
  "TechCorp", "InnovateX", "FutureScale", "DataFlow", "CloudNine", "SecureNet"
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div className="bg-nuvix-dark min-h-screen" ref={containerRef}>
      <Hero />

      {/* Trust/Clients Section */}
      <section className="py-12 border-b border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, i) => (
              <span key={i} className="text-xl font-bold text-white/40 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction / Value Prop */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
            >
              We bridge the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">visionary ideas</span> and reality.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              NUVIX is a premium software consultancy specializing in high-performance web applications, cloud architecture, and digital transformation. We don't just write code; we engineer success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black/40 relative">
        <div className="container mx-auto px-6">
          <SectionHeading title="Client Stories" subtitle="What People Say" center />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                quote: "NUVIX transformed our digital infrastructure. Their expertise and professionalism are unmatched.",
                author: "Sarah Chen",
                role: "CTO, TechFlow Inc."
              },
              {
                quote: "Working with NUVIX was a game-changer. They delivered beyond our expectations.",
                author: "Marcus Rodriguez",
                role: "Founder, StartupX"
              },
              {
                quote: "The team's technical depth and commitment to quality set them apart from everyone else.",
                author: "Emily Watson",
                role: "VP Engineering, DataCorp"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group hover:bg-white/10 transition-colors"
              >
                <div className="absolute top-6 right-6 text-nuvix-primary/20 group-hover:text-nuvix-primary/40 transition-colors text-6xl font-serif leading-none">"</div>
                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nuvix-primary to-nuvix-accent flex items-center justify-center text-white font-bold text-sm mr-4">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-nuvix-dark to-nuvix-primary/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to elevate your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nuvix-accent to-nuvix-primary">digital presence?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's discuss how we can help you achieve your business goals with our tailored software solutions.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="px-12 py-6 text-lg shadow-2xl shadow-nuvix-primary/30">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
