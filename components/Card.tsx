"use client";

import { m } from "framer-motion";

export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <m.div
            className={`
                bg-white/50 backdrop-blur-sm 
                rounded-3xl 
                border border-teal-100/50 
                p-6 
                hover:border-teal-200 
                hover:bg-teal-50/30
                cursor-default
                ${className || ""}
            `}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
                y: -8,
                scale: 1.01,
                boxShadow: "0 20px 25px -5px rgba(20, 184, 166, 0.1), 0 10px 10px -5px rgba(20, 184, 166, 0.04)"
            }}
            transition={{ 
                layout: { type: "spring", stiffness: 260, damping: 20 },
                y: { type: "spring", stiffness: 260, damping: 20 },
                default: { duration: 0.5, ease: "easeOut" }
            }}
            viewport={{ once: true }}
        >
            {children}
        </m.div>
    );
}

