import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-nuvix-dark border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gradient">NUVIX</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses through intelligent, reliable, and future-ready software solutions.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-nuvix-accent transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-nuvix-accent transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-nuvix-accent transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-nuvix-accent transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-nuvix-accent transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-nuvix-accent transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-nuvix-accent transition-colors">Contact</Link></li>
                            <li><Link href="/blog" className="hover:text-nuvix-accent transition-colors">Insights</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/nuvix_25?igsh=MWhyZHhteTdya3p4" className="p-2 bg-white/5 rounded-full hover:bg-nuvix-primary transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-nuvix-primary transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:nuvixai25@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-nuvix-primary transition-colors text-white">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NUVIX. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
