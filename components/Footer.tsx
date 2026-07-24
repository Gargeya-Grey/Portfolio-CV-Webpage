"use client";

import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Copy, Check, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

const identities = [
    "AI Engineer",
    "Theatre Artist",
    "Psychology Enthusiast",
    "Founder"
];

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const [identityIndex, setIdentityIndex] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const x = useTransform(scrollYProgress, [0.0, 1.0], ["120%", "-120%"]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdentityIndex((prev) => (prev + 1) % identities.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("gargeya.sharma@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer 
            ref={footerRef} 
            className="w-full bg-transparent pt-16 sm:pt-24 md:pt-32 mt-8 sm:mt-16 md:mt-20 border-t border-zinc-200/20 relative z-20 isolate"
            style={{
                contentVisibility: "auto",
                containIntrinsicSize: "0 500px",
                paddingBottom: "max(6rem, calc(env(safe-area-inset-bottom, 0px) + 5rem))",
            }}
        >
            <div className="container mx-auto px-page lg:px-12 flex flex-col justify-between min-h-0 md:min-h-[400px] gap-12 sm:gap-16">

                {/* Top Section */}
                <div className="space-y-8 sm:space-y-12 relative py-2 sm:py-4">
                    <m.h2 
                        style={{
                            backgroundImage: "linear-gradient(90deg, #18181b 0%, #18181b 38%, #0d9488 45%, #2dd4bf 50%, #a7f3d0 53%, #0d9488 58%, #18181b 68%, #18181b 100%)",
                            backgroundSize: "250% 100%",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            backgroundPositionX: x
                        }}
                        className="text-[clamp(2rem,9vw,6rem)] sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] relative z-10 break-balance"
                    >
                        Let&apos;s Communicate.
                    </m.h2>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 md:gap-8">
                        <button
                            onClick={handleCopyEmail}
                            className="group relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 bg-white rounded-full border border-zinc-200 hover:border-zinc-300 transition-[border-color,box-shadow] duration-200 hover:shadow-lg hover:shadow-zinc-200/50 w-full md:w-auto overflow-hidden min-w-0"
                        >
                            <div className="flex flex-col items-start min-w-0 flex-1">
                                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Email</span>
                                <span className="text-sm sm:text-base md:text-xl font-medium text-zinc-800 break-all font-body">gargeya.sharma@gmail.com</span>
                            </div>
                            <div className="ml-auto md:ml-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-zinc-50 transition-colors duration-200 shrink-0">
                                {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                            </div>

                            <AnimatePresence>
                                {copied && (
                                    <m.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-zinc-50 text-xs rounded-md whitespace-nowrap"
                                    >
                                        Copied to clipboard!
                                    </m.span>
                                )}
                            </AnimatePresence>
                        </button>

                        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                            <SocialLink href="https://linkedin.com/in/gargeya-sharma" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                            <SocialLink href="https://github.com/Gargeya-Grey" icon={<Github className="w-5 h-5" />} label="GitHub" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 pt-10 sm:pt-16 md:pt-24 border-t border-zinc-200/50">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <Logo
                            variant="light"
                            size={40}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-sm ring-1 ring-zinc-200/70 shrink-0"
                        />
                        <div className="flex flex-col gap-1 sm:gap-2">
                            <span className="text-sm font-medium text-zinc-400 font-body">Gargeya Sharma © 2026</span>
                            <span className="text-sm text-zinc-400 font-body">Jaipur, India (Pink City) / Remote</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-zinc-400">
                        <span>I am</span>
                        <AnimatePresence mode="wait">
                            <m.span
                                key={identityIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-zinc-400"
                            >
                                {/^[AEIOUaeiou]/i.test(identities[identityIndex]) ? "an" : "a"}
                            </m.span>
                        </AnimatePresence>
                        <div className="inline-flex items-center min-h-[1.5em] relative" style={{ perspective: "1000px" }}>
                            <AnimatePresence mode="wait">
                                <m.span
                                    key={identityIndex}
                                    initial={{ y: 25, opacity: 0, rotateX: -70 }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                    exit={{ y: -25, opacity: 0, rotateX: 70 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-semibold text-zinc-800 relative pb-1 origin-center"
                                >
                                    {identities[identityIndex]}
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-400 to-emerald-400" />
                                </m.span>
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
            className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-full border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors duration-200 group text-sm sm:text-base"
        >
            {label}
            <span className="text-zinc-400 group-hover:text-zinc-900 transition-colors duration-200">
                {icon}
            </span>
        </Link>
    );
}
