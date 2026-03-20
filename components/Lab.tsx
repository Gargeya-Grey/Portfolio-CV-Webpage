"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/data";

export default function Lab() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: scrollRef
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="lab" className="w-full bg-zinc-50 py-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative">
                <div className="mb-12">
                    <h2 className="text-sm font-medium text-teal-500/80 tracking-widest uppercase mb-4">The Lab</h2>
                    <p className="text-2xl text-zinc-800 font-light max-w-xl">
                        Experimental code, research papers, and deep dives into the mechanics of intelligence.
                    </p>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory -mx-6 px-6 lg:-mx-12 lg:px-12"
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
            className="w-[350px] md:w-[450px] h-[500px]"
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
                    className="group relative w-full h-full bg-white rounded-3xl shadow-sm border border-zinc-100 p-10 flex flex-col justify-between transition-shadow duration-500 hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
                >
                    {/* Content Layer */}
                    <div style={{ transform: "translateZ(50px)" }} className="space-y-6">
                        <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300">
                            <Code2 className="w-6 h-6" />
                        </div>

                        <h3 className="text-3xl font-semibold text-zinc-900 tracking-tight group-hover:text-teal-900 transition-colors">
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
