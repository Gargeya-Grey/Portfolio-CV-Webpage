"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <motion.div
            className={`
        bg-white/50 backdrop-blur-sm 
        rounded-3xl 
        border border-teal-100/50 
        p-6 
        hover:border-teal-200 
        hover:bg-teal-50/30
        transition-all duration-500 ease-out
        ${className || ""}
      `}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
