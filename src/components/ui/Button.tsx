"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    onClick,
    disabled,
    type = "button",
}: ButtonProps) {
    const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]",
        outline: "border border-[#06b6d4]/50 text-[#06b6d4] hover:bg-[#06b6d4]/10",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
}
