"use client";

import React, { useRef, useState } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, Network, BrainCircuit, Coffee, Cpu } from "lucide-react";

const experiences = [
    {
        id: "edudojo",
        role: "Founder & Lead AI Architect",
        company: "Edudojo.ai",
        date: "May 2026 – Present",
        description: "Leading the AI revolution in Evaluation & Education. Architecting advanced Socratic AI systems localized in English, Hindi, Japanese, and Spanish for a unified global market. Orchestrating an active pilot program serving 2,000+ students at Parishkar College (Autonomous), bridging technical innovation with scalable pedagogical design.",
        tags: ["EdTech", "GenAI", "AI Architecture", "Education Strategy", "Leadership"],
        icon: BrainCircuit,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        link: "https://edudojo.ai"
    },
    {
        id: "evolve",
        role: "Founding AI Engineer / Member",
        company: "Evvolv",
        date: "Nov 2025 – May 2026",
        description: "Co-founded and engineered a core multi-agent system, creating autonomous AI workers designed to automate complex business workflows and operations for Small and Medium Enterprises (SMEs).",
        tags: ["AI Workers", "n8n", "Multi-Agent Systems", "SME Automation"],
        icon: Cpu,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        link: null
    },
    {
        id: "rvs",
        role: "Data Scientist & Automation Specialist",
        company: "RVS Consensus+",
        date: "Jul 2024 – Nov 2025",
        description: "Built end-to-end data pipelines and real-time dashboards (Dash/Plotly) processing 10M+ rows of transaction data from SIX, Reuters, and 15+ global Tier-1 banks (including JPMorgan, Goldman Sachs, and HSBC). Engineered a Python-powered automation toolset that saved 5+ hours daily and accelerated new product development by 20x.",
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

const colorMap: Record<string, { border: string; shadow: string; hoverBorder: string; hoverShadow: string }> = {
    edudojo: {
        border: "rgba(20, 184, 166, 0.4)",
        shadow: "0 25px 50px -12px rgba(20, 184, 166, 0.12)",
        hoverBorder: "rgba(20, 184, 166, 0.65)",
        hoverShadow: "0 30px 60px -15px rgba(20, 184, 166, 0.2)"
    },
    evolve: {
        border: "rgba(168, 85, 247, 0.4)",
        shadow: "0 25px 50px -12px rgba(168, 85, 247, 0.12)",
        hoverBorder: "rgba(168, 85, 247, 0.65)",
        hoverShadow: "0 30px 60px -15px rgba(168, 85, 247, 0.2)"
    },
    rvs: {
        border: "rgba(99, 102, 241, 0.4)",
        shadow: "0 25px 50px -12px rgba(99, 102, 241, 0.12)",
        hoverBorder: "rgba(99, 102, 241, 0.65)",
        hoverShadow: "0 30px 60px -15px rgba(99, 102, 241, 0.2)"
    },
    imperial: {
        border: "rgba(59, 130, 246, 0.4)",
        shadow: "0 25px 50px -12px rgba(59, 130, 246, 0.12)",
        hoverBorder: "rgba(59, 130, 246, 0.65)",
        hoverShadow: "0 30px 60px -15px rgba(59, 130, 246, 0.2)"
    },
    mitchells: {
        border: "rgba(245, 158, 11, 0.4)",
        shadow: "0 25px 50px -12px rgba(245, 158, 11, 0.12)",
        hoverBorder: "rgba(245, 158, 11, 0.65)",
        hoverShadow: "0 30px 60px -15px rgba(245, 158, 11, 0.2)"
    }
};

const getCardVariants = (id: string) => {
    const colors = colorMap[id] || {
        border: "rgba(20, 184, 166, 0.4)",
        shadow: "0 25px 50px -12px rgba(20, 184, 166, 0.12)",
    };
    return {
        inactive: {
            borderColor: "rgba(228, 228, 231, 0.9)", // zinc-200/90
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)",
            scale: 1.0,
        },
        active: {
            borderColor: colors.border,
            boxShadow: `${colors.shadow}, 0 1px 3px rgba(0, 0, 0, 0.02)`,
            scale: 1.015,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };
};

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
        <section 
            id="ventures" 
            className="w-full bg-transparent py-32 relative z-10 overflow-hidden scroll-mt-20" 
            ref={containerRef}
            style={{ contentVisibility: "auto", containIntrinsicSize: "0 1200px" }}
        >
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <m.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 max-w-3xl"
                >
                    <h2 className="text-sm font-medium text-teal-500/80 tracking-widest uppercase mb-4">Experience & Evolution</h2>
                    <h3 className="text-4xl md:text-5xl font-light text-zinc-900 tracking-tight mb-6">
                        The extraordinary perspective: bridging technical depth (IQ) with human intuition (EQ).
                    </h3>
                    <p className="text-[1.15rem] leading-[1.7] text-zinc-600 font-normal font-body">
                        A timeline of leadership in AI architecture, deep-tech research, and the foundational social calibration forged in high-pressure environments.
                    </p>
                </m.div>

                <div id="ventures" className="relative max-w-6xl mx-auto scroll-mt-32">
                    {/* The Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 -translate-x-1/2" />
                    <m.div
                        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-teal-500 -translate-x-1/2 origin-top will-change-transform"
                        style={{ scaleY }}
                    />

                    {/* Timeline Items */}
                    <div className="space-y-24">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;
                            const Icon = exp.icon;
                            const colors = colorMap[exp.id] || {
                                hoverBorder: "rgba(20, 184, 166, 0.65)",
                                hoverShadow: "0 30px 60px -15px rgba(20, 184, 166, 0.2)"
                            };
                            const variants = getCardVariants(exp.id);

                            return (
                                <m.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Center Node */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-zinc-100 shadow-sm z-10 transition-colors duration-300 group-hover:border-teal-100">
                                        <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-zinc-300 transition-colors duration-300 group-hover:bg-teal-500`} />
                                    </div>

                                    <div className={`ml-14 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'}`}>
                                        <m.div 
                                            variants={variants}
                                            initial="inactive"
                                            whileInView="active"
                                            viewport={{ once: false, amount: 0.6 }}
                                            whileHover={{ 
                                                y: -8,
                                                scale: 1.025,
                                                borderColor: colors.hoverBorder,
                                                boxShadow: colors.hoverShadow
                                            }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                            className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl border cursor-default will-change-transform"
                                        >

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
                                                <Link href={exp.link} target="_blank" className="inline-flex items-center gap-1 text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200 mb-4 group/link">
                                                    {exp.company}
                                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                                </Link>
                                            ) : (
                                                <p className="text-zinc-600 font-medium mb-4">{exp.company}</p>
                                            )}

                                            <p className="text-[1.05rem] leading-[1.7] text-zinc-700 font-normal font-body mb-6">
                                                {exp.description}
                                            </p>

                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                                                {exp.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/50 border border-zinc-200/60 text-xs font-medium text-zinc-600 tracking-wide shadow-sm font-body">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </m.div>
                                    </div>

                                    {/* Empty space for opposite side on md+ screens */}
                                    <div className="hidden md:block md:w-[45%]" />
                                </m.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
