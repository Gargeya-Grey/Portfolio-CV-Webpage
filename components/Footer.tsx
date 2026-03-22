"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const identities = [
    "Deep Learning Engineer",
    "Theatre Artist",
    "Psychology Enthusiast",
    "Co-Founder"
];

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const [identityIndex, setIdentityIndex] = useState(0);

    // Typewriter/Ticker Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setIdentityIndex((prev) => (prev + 1) % identities.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("gargeya.sharma@gmail.com"); // Replace with actual if known, using placeholder/masked for now
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="w-full bg-transparent pt-32 pb-32 md:pb-12 mt-24 border-t border-zinc-200/20 relative z-10">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-between min-h-[400px]">

                {/* Top Section */}
                <div className="space-y-12">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 leading-tight">
                        Let's Communicate.
                    </h2>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        {/* Email Interaction */}
                        <button
                            onClick={handleCopyEmail}
                            className="group relative flex items-center gap-4 px-6 sm:px-8 py-4 bg-white rounded-full border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg hover:shadow-zinc-200/50 w-full md:w-auto overflow-hidden"
                        >
                            <div className="flex flex-col items-start min-w-0 flex-1">
                                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wilder">Email</span>
                                <span className="text-base sm:text-lg md:text-xl font-medium text-zinc-800 break-all">gargeya.sharma@gmail.com</span>
                            </div>
                            <div className="ml-auto md:ml-4 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-zinc-50 transition-colors">
                                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </div>

                            {/* Copied Tooltip */}
                            <AnimatePresence>
                                {copied && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-zinc-50 text-xs rounded-md whitespace-nowrap"
                                    >
                                        Copied to clipboard!
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <SocialLink href="https://linkedin.com/in/gargeya-sharma" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="https://github.com/Gargeya-Grey" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Ticker & Info */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 pt-24 border-t border-zinc-200/50">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium text-zinc-400">Gargeya Sharma © 2025</span>
                        <span className="text-sm text-zinc-400">London, UK / Remote</span>
                    </div>

                    <div className="flex items-center gap-2 text-xl md:text-2xl font-light text-zinc-400">
                        <span>I am a</span>
                        <div className="relative h-8 w-64 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={identityIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute inset-0 font-medium text-zinc-800"
                                >
                                    {identities[identityIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            className="flex items-center gap-2 px-6 py-4 bg-white rounded-full border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all group"
        >
            {label}
            <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
                {icon}
            </span>
        </Link>
    );
}
