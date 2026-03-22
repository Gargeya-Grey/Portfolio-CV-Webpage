"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, LayoutGrid, MoveHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function Lab() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [viewMode, setViewMode] = useState<'scroll' | 'grid'>('scroll');
    const { scrollXProgress } = useScroll({
        container: scrollRef
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const scrollAmount = window.innerWidth > 768 ? 500 : 350;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section id="lab" className="w-full bg-transparent py-32 overflow-hidden relative z-10">
            <div className="container mx-auto px-6 lg:px-12 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-sm font-medium text-teal-500/80 tracking-widest uppercase mb-4">The Lab</h2>
                        <p className="text-2xl text-zinc-800 font-light max-w-xl">
                            Experimental code, research papers, and deep dives into the mechanics of intelligence.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* View Switcher */}
                        <div className="flex bg-zinc-100 p-1 rounded-full items-center">
                            <button
                                onClick={() => setViewMode('scroll')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'scroll' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                            >
                                <MoveHorizontal className="w-4 h-4" /> Scroll
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'}`}
                            >
                                <LayoutGrid className="w-4 h-4" /> Grid
                            </button>
                        </div>

                        {/* Navigation Arrows (Only in Scroll Mode) */}
                        <AnimatePresence>
                            {viewMode === 'scroll' && (
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="hidden md:flex items-center gap-2"
                                >
                                    <button
                                        onClick={() => scroll('left')}
                                        className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-sm bg-white"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => scroll('right')}
                                        className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all shadow-sm bg-white"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative">
                    {viewMode === 'scroll' ? (
                        <>
                            <div
                                ref={scrollRef}
                                className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory -mx-6 px-6 lg:-mx-12 lg:px-12 after:content-[''] after:shrink-0 after:w-6 lg:after:w-12"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {projects.map((project, index) => (
                                    <div key={index} className="snap-center shrink-0">
                                        <LabCard project={project} />
                                    </div>
                                ))}
                            </div>

                            {/* Custom Scroll Indicator */}
                            <div className="w-full h-1 bg-zinc-200 rounded-full mt-4 overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-teal-500 origin-left"
                                    style={{ width: "100%", scaleX }}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    key={index}
                                >
                                    <LabCard project={project} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function LabCard({ project }: { project: typeof projects[0] }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className="w-full max-w-[450px] h-[500px] mx-auto"
        >
            <Link href={project.href} target="_blank">
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="group relative w-[85vw] md:w-[40vw] lg:w-full h-full bg-white rounded-3xl shadow-sm border border-zinc-100 p-6 sm:p-10 flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer shrink-0 md:shrink-0 lg:shrink"
                >
                    {/* Content Layer */}
                    <div style={{ transform: "translateZ(50px)" }} className="space-y-4 sm:space-y-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300">
                            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight group-hover:text-teal-900 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-zinc-500 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Bottom Layer */}
                    <div style={{ transform: "translateZ(40px)" }} className="flex flex-col gap-6">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-50 text-zinc-500 border border-zinc-100 group-hover:border-teal-100 group-hover:text-teal-600 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-teal-600 transition-colors">
                            View Code <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Shine Effect */}
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: "radial-gradient(circle at center, rgba(20, 184, 166, 0.05) 0%, rgba(255,255,255,0) 80%)",
                            mixBlendMode: "overlay",
                        }}
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}
