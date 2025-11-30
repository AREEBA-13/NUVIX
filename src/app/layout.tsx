import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NUVIX | Empowering Businesses Through Technology",
  description: "Nuvix builds intelligent, reliable, and future-ready software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-nuvix-dark text-white selection:bg-nuvix-primary selection:text-white`}>
        <Navbar />
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
