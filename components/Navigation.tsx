"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";

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
            <m.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pointer-events-auto flex items-center gap-1 sm:gap-3 rounded-full bg-white/70 backdrop-blur-lg px-2.5 sm:px-6 py-2 sm:py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-zinc-200/50"
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
                <div className="w-px h-5 sm:h-7 bg-zinc-200" />

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
                                        <m.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full bg-teal-500/10 border border-teal-500/20 shadow-sm z-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 35 }}
                                        />
                                    )}
                                    
                                    {/* Hover State (Light Gray Glow) */}
                                    {isHovered && !isActive && (
                                        <m.span
                                            layoutId="hover-pill"
                                            className="absolute inset-0 rounded-full bg-zinc-100 border border-zinc-200/50 shadow-sm z-0"
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
            </m.nav>
        </div>
    );
}

