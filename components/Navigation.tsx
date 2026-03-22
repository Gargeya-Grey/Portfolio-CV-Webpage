"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { name: "Bio", href: "#bio" },
    { name: "Ventures", href: "#ventures" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "mailto:hello@example.com" }, // Placeholder, can be updated later
];

export default function Navigation() {
    return (
        <div className="fixed bottom-6 sm:bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pointer-events-auto flex items-center gap-0.5 sm:gap-1 rounded-full bg-white/70 px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-lg shadow-zinc-500/5 backdrop-blur-xl border border-white/20"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group relative px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute inset-0 -z-0 scale-75 rounded-full bg-zinc-200/50 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100" />
                    </Link>
                ))}
            </motion.nav>
        </div>
    );
}
