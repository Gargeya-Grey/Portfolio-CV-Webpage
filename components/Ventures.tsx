"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, Network, BrainCircuit, Coffee } from "lucide-react";

const experiences = [
    {
        id: "evvolv",
        role: "Founding Member & Lead AI Architect",
        company: "evvolv.ai",
        date: "Nov 2025 – Present",
        description: "Leading the development of advanced AI Worker technology using Python and n8n. Directing creative strategy, video editing, and marketing design while representing the venture at events like the IIT Delhi Alumni Meet 2025.",
        tags: ["GenAI", "Python", "n8n", "AI Architecture", "Leadership"],
        icon: BrainCircuit,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        link: "https://evvolv.ai"
    },
    {
        id: "rvs",
        role: "Data Scientist & Automation Specialist",
        company: "RVS Consensus+",
        date: "Jul 2024 – Nov 2025",
        description: "Built end-to-end data pipelines and real-time analytics dashboards using Dash (Plotly), SQL, and Python. Designed a unified Python-powered UI toolset to automate complex Excel-based workflows for the fintech sector.",
        tags: ["Data Science", "Python", "Dash", "SQL", "Fintech Automation"],
        icon: Code2,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        link: null
    },
    {
        id: "imperial",
        role: "Machine Learning Consultant",
        company: "Imperial College London",
        date: "Jul 2023 – Oct 2023",
        description: "Consulted at the Flapping Wing MAV Lab. Developed a modeless, data-driven control approach for bionic flapping-wing micro-aerial vehicles, pushing the boundaries of applied physical AI methodologies.",
        tags: ["Machine Learning", "Robotics", "Research", "Control Systems"],
        icon: Network,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        link: null
    },
    {
        id: "mitchells",
        role: "VIP Bartender",
        company: "Mitchells & Butlers / Compass Group",
        date: "Dec 2022 – Nov 2025",
        description: "Worked at AllBarOne Leicester Square, one of London's busiest bars, while pursuing a Master's degree. Honed exceptional social calibration (EQ), high-pressure teamwork dynamics, and rapid problem-solving skills.",
        tags: ["High EQ", "Team Leadership", "Pressure Management", "Social Dynamics"],
        icon: Coffee,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        link: null
    }
];

export default function Ventures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="ventures" className="w-full bg-transparent py-32 relative z-10" ref={containerRef}>
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-sm font-medium text-teal-500/80 tracking-widest uppercase mb-4">Experience & Evolution</h2>
                    <h3 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight mb-6">
                        The extraordinary perspective: bridging technical depth (IQ) with human intuition (EQ).
                    </h3>
                    <p className="text-[1.15rem] leading-[1.7] text-zinc-600 font-normal">
                        A timeline of leadership in AI architecture, deep-tech research, and the foundational social calibration forged in high-pressure environments.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* The Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 -translate-x-1/2" />
                    <motion.div
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-teal-500 -translate-x-1/2 origin-top"
                        style={{ scaleY }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-24">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = exp.icon;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Center Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-zinc-100 shadow-sm z-10 transition-colors duration-500 group-hover:border-teal-100">
                                        <div className={`w-3 h-3 rounded-full bg-zinc-300 transition-colors duration-500 group-hover:bg-teal-500`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}>
                                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-200/80 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-500">

                                            <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                <div className={`p-3 rounded-2xl ${exp.bg} ${exp.color}`}>
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-sm font-medium text-zinc-400 tracking-wider">
                                                    {exp.date}
                                                </span>
                                            </div>

                                            <h4 className="text-2xl font-semibold text-zinc-900 mb-1">{exp.role}</h4>

                                            {exp.link ? (
                                                <Link href={exp.link} target="_blank" className="inline-flex items-center gap-1 text-teal-600 font-medium hover:text-teal-700 transition-colors mb-4 group/link">
                                                    {exp.company}
                                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                                </Link>
                                            ) : (
                                                <p className="text-zinc-600 font-medium mb-4">{exp.company}</p>
                                            )}

                                            <p className="text-[1.05rem] leading-[1.7] text-zinc-700 font-normal mb-6">
                                                {exp.description}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-[2px] border border-zinc-200/60 text-xs font-medium text-zinc-600 tracking-wide shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty space for opposite side on md+ screens */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
