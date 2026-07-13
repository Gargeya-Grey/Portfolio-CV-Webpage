"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, PenTool, FolderOpen } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function Lab() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    // Track the vertical scroll over the section container
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Dynamic translate bounds to center active cards on all screens
    const [translations, setTranslations] = useState({ start: 0, end: 0 });

    useEffect(() => {
        const calculate = () => {
            const width = window.innerWidth;
            let w = 400;
            let gap = 32;
            if (width < 768) {
                w = 280;
                gap = 24;
            } else if (width < 1024) {
                w = 340;
                gap = 24;
            }
            const offset = w + gap;
            // Align card index 0 (First Project A) in the center of the viewport
            const start = (width - w) / 2;
            // Align card index 6 (Last Project G) in the center of the viewport
            const end = (width - w) / 2 - (6 * offset);
            
            setTranslations({ start, end });
        };

        // Run immediately on mount
        calculate();

        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(calculate, 100);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Translate horizontally with a dead-zone at start and end
    const xValue = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [translations.start, translations.start, translations.end, translations.end]
    );
    const springX = useSpring(xValue, { stiffness: 45, damping: 15, mass: 0.8 });

    // Progress bar fills only while the cards are actively sliding (from 20% to 80% scroll)
    const progressScale = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
    const progressScaleClamped = useSpring(progressScale, { stiffness: 100, damping: 30 });

    return (
        <section 
            id="lab" 
            ref={sectionRef}
            className="relative h-[350vh] w-full bg-transparent"
        >
            {/* Sticky Viewport Container */}
            <div className="sticky top-20 md:top-36 h-[calc(100vh-80px)] md:h-[calc(100vh-144px)] w-full flex flex-col justify-center overflow-hidden">
                
                {/* Fixed Title Section */}
                <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center w-full max-w-4xl px-6 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                            <Code2 className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-sm font-bold text-teal-700 tracking-wildest uppercase">The Lab</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1]">
                        Experimental code, research papers, and <span className="font-semibold text-teal-700">mechanics of intelligence</span>.
                    </h3>
                </div>

                {/* Left Glass Faded Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-64 bg-gradient-to-r from-zinc-50 via-zinc-50/70 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />
                
                {/* Right Glass Faded Overlay */}
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-64 bg-gradient-to-l from-zinc-50 via-zinc-50/70 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />

                {/* Horizontal Sliding Editorial Canvas */}
                <m.div 
                    ref={trackRef}
                    style={{ x: springX, willChange: "transform" }} 
                    className="flex gap-6 lg:gap-8 items-center relative z-10 w-max"
                >
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="shrink-0"
                        >
                            <LabCard project={project} cardWidthClass="w-[280px] md:w-[340px] lg:w-[400px]" />
                        </div>
                    ))}
                </m.div>

                {/* Fixed Scrolling Progress Timeline Indicator directly below cards */}
                <div className="absolute top-[calc(50%+240px+48px)] md:top-[calc(50%+240px+80px)] left-10 md:left-24 right-10 md:right-24 z-30 flex items-center justify-center">
                    <div className="flex items-center gap-8 w-full max-w-xl">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest w-12">Start</span>
                        <div className="relative flex-1 h-[4px] bg-zinc-200/60 rounded-full shadow-inner">
                            <m.div 
                                className="absolute top-0 left-0 bottom-0 bg-teal-500 rounded-full origin-left"
                                style={{ scaleX: progressScaleClamped }}
                            />
                            
                            {/* Dynamic Index Ticks */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
                                    <LabIndexTick key={idx} index={idx} scrollProgress={scrollYProgress} />
                                ))}
                            </div>

                            {/* Floating indicator handle */}
                            <m.div 
                                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-teal-500 shadow-md flex items-center justify-center -ml-3 z-10"
                                style={{ left: useTransform(progressScaleClamped, [0, 1], ["0%", "100%"]) }}
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                            </m.div>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest w-12 text-right">End</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

const LabCard = React.memo(function LabCard({ project, cardWidthClass }: { project: typeof projects[0]; cardWidthClass: string }) {
    // Dynamically assign icons based on the asset type
    const getProjectIcon = () => {
        switch (project.type) {
            case "writing":
                return PenTool;
            case "academic":
                return FolderOpen;
            default:
                return Code2;
        }
    };

    const Icon = getProjectIcon();

    return (
        <m.div
            style={{ perspective: 1000 }}
            className={`${cardWidthClass} h-[480px] mx-auto`}
        >
            <Link href={project.href} target="_blank" className="block h-full group">
                <m.div
                    layout
                    whileHover={{ 
                        y: -8,
                        scale: 1.01,
                        boxShadow: project.isLatest 
                            ? "0 20px 30px -5px rgba(20, 184, 166, 0.12)" 
                            : "0 15px 20px -5px rgba(20, 184, 166, 0.08)"
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`relative w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] p-6 sm:p-10 flex flex-col justify-between cursor-pointer overflow-hidden border transition-colors duration-300 ${
                        project.isLatest 
                            ? "border-teal-500/40 bg-teal-50/[0.02] shadow-[0_20px_40px_rgba(13,148,136,0.04)]" 
                            : "border-zinc-200/90"
                    }`}
                >
                    {/* Content Layer */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center justify-between">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:scale-110 ${
                                project.isLatest 
                                    ? "bg-teal-50 border-teal-100 text-teal-600 group-hover:bg-teal-100" 
                                    : "bg-zinc-50 border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50"
                            }`}>
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            <div className="flex items-center gap-2">
                                {project.isLatest && (
                                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/40 text-[9px] font-black text-teal-700 tracking-widest uppercase">
                                        Latest
                                    </span>
                                )}
                            </div>
                        </div>

                        <h3 className={`text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-200 ${
                            project.isLatest ? "text-zinc-900 group-hover:text-teal-800" : "text-zinc-900 group-hover:text-teal-900"
                        }`}>
                            {project.title}
                        </h3>

                        <p className="text-zinc-500 leading-relaxed font-body">
                            {project.description}
                        </p>
                    </div>

                    {/* Bottom Layer */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/50 border border-zinc-200/60 text-zinc-600 shadow-sm group-hover:border-teal-200 group-hover:text-teal-700 transition-colors duration-200 font-body">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-teal-600 transition-colors duration-200">
                            {project.type === "writing" ? "Read Article" : "View Code"} <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Shine Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                            background: project.isLatest 
                                ? "radial-gradient(circle at center, rgba(20, 184, 166, 0.08) 0%, rgba(255,255,255,0) 80%)" 
                                : "radial-gradient(circle at center, rgba(20, 184, 166, 0.05) 0%, rgba(255,255,255,0) 80%)",
                            mixBlendMode: "overlay",
                        }}
                    />
                </m.div>
            </Link>
        </m.div>
    );
});
LabCard.displayName = "LabCard";

const LabIndexTick = React.memo(function LabIndexTick({ index, scrollProgress }: { index: number; scrollProgress: any }) {
    const checkpoint = 0.2 + index * 0.1;
    
    // Construct strictly increasing keyframe offsets within [0, 1] range to avoid Web Animations API crash
    const range = [];
    const scaleOutput = [];
    const colorOutput = [];
    const opacityOutput = [];

    // Left boundary
    if (checkpoint - 0.08 >= 0) {
        range.push(checkpoint - 0.08);
        scaleOutput.push(0.9);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.5);
    }
    
    // Center point (checkpoint)
    if (range.length === 0 || range[range.length - 1] < checkpoint) {
        range.push(checkpoint);
        scaleOutput.push(1.35);
        colorOutput.push("#0d9488");
        opacityOutput.push(1.0);
    }

    // Right boundary
    if (checkpoint + 0.08 <= 1) {
        range.push(checkpoint + 0.08);
        scaleOutput.push(0.9);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.5);
    }

    const scale = useTransform(scrollProgress, range, scaleOutput);
    const color = useTransform(scrollProgress, range, colorOutput);
    const opacity = useTransform(scrollProgress, range, opacityOutput);
    const leftPercent = `${(index / 6) * 100}%`;

    return (
        <m.div 
            style={{ left: leftPercent, scale, color, opacity }}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2 mt-5"
        >
            <div className="w-1 h-1 rounded-full bg-current mb-1" />
            <span className="text-[10px] font-black tracking-wider font-mono select-none">
                0{index + 1}
            </span>
        </m.div>
    );
});
LabIndexTick.displayName = "LabIndexTick";
