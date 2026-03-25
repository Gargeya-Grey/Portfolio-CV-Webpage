"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Bio", href: "#bio" },
    { name: "Ventures", href: "#ventures" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "mailto:gargeya.sharma@gmail.com" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState<string>("");
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 300) {
                setActiveSection("");
                return;
            }

            const sections = navItems.filter(item => item.href.startsWith("#")).map(item => item.href.replace("#", ""));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Increased buffer for more reliable detection on different screen heights
                    return rect.top <= 200 && rect.bottom >= 200;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-4 sm:top-7 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pointer-events-auto flex items-center gap-1 sm:gap-3 rounded-full bg-white/15 backdrop-blur-2xl px-2.5 sm:px-6 py-2 sm:py-3.5 shadow-xl shadow-zinc-500/5 border border-white/20"
            >
                {/* Brand Name */}
                <Link
                    href="#"
                    onClick={() => setActiveSection("")}
                    className="px-2 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-base font-bold text-teal-600 tracking-tight whitespace-nowrap transition-colors duration-200 hover:text-teal-500"
                >
                    Gargeya Sharma
                </Link>

                {/* Divider */}
                <div className="w-px h-5 sm:h-7 bg-white/20" />

                {/* Nav Items */}
                <div className="relative flex items-center gap-0.5 sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href;
                        const isHovered = hoveredSection === item.name;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onMouseEnter={() => setHoveredSection(item.name)}
                                onMouseLeave={() => setHoveredSection(null)}
                                className={`group relative px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-medium transition-colors duration-200 z-10 ${isActive ? 'text-teal-900' : 'text-zinc-500 hover:text-zinc-800'}`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <AnimatePresence>
                                    {/* Selected State (Teal Tint) */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full bg-teal-500/10 border border-teal-500/20 shadow-sm z-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 35 }}
                                        />
                                    )}
                                    
                                    {/* Hover State (White Glow) */}
                                    {isHovered && !isActive && (
                                        <motion.span
                                            layoutId="hover-pill"
                                            className="absolute inset-0 rounded-full bg-white/40 border border-white/30 shadow-sm z-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </Link>
                        );
                    })}
                </div>
            </motion.nav>
        </div>
    );
}
