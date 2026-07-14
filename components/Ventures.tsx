"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, Network, BrainCircuit, Coffee, Cpu, Briefcase } from "lucide-react";

const experiences = [
    {
        id: "edudojo",
        role: "Founder & Lead AI Architect",
        company: "Edudojo.ai",
        date: "May 2026 – Present",
        location: "Fluid",
        description: "Leading the AI revolution in Evaluation & Education. Architecting advanced Socratic AI systems localized in English, Hindi, Japanese, and Spanish for a unified global market. Orchestrating an active pilot program serving 2,000+ students at Parishkar College (Autonomous), bridging technical innovation with scalable pedagogical design.",
        tags: ["EdTech", "GenAI", "AI Architecture", "Education Strategy", "Leadership"],
        icon: BrainCircuit,
        color: "text-teal-600",
        bg: "bg-teal-50",
        borderGlow: "group-hover:border-teal-200",
        shadowGlow: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)]",
        link: "https://edudojo.ai"
    },
    {
        id: "evolve",
        role: "Founding AI Engineer / Member",
        company: "Evvolv",
        date: "Nov 2025 – May 2026",
        location: "London, UK",
        description: "Co-founded and engineered a core multi-agent system, creating autonomous AI workers designed to automate complex business workflows and operations for Small and Medium Enterprises (SMEs).",
        tags: ["AI Workers", "n8n", "Multi-Agent Systems", "SME Automation"],
        icon: Cpu,
        color: "text-violet-600",
        bg: "bg-violet-50",
        borderGlow: "group-hover:border-violet-200",
        shadowGlow: "hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)]",
        link: null
    },
    {
        id: "rvs",
        role: "Data Scientist & Automation Specialist",
        company: "RVS Consensus+",
        date: "Jul 2024 – Nov 2025",
        location: "London, UK",
        description: "Built end-to-end data pipelines and real-time dashboards (Dash/Plotly) processing 10M+ rows of transaction data from SIX, Reuters, and 15+ global Tier-1 banks. Engineered a Python-powered automation toolset that saved 5+ hours daily and accelerated new product development by 20x.",
        tags: ["Data Science", "Python", "Dash", "SQL", "Fintech Automation"],
        icon: Code2,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        borderGlow: "group-hover:border-indigo-200",
        shadowGlow: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)]",
        link: null
    },
    {
        id: "imperial",
        role: "Machine Learning Consultant",
        company: "Imperial College London",
        date: "Jul 2023 – Oct 2023",
        location: "London, UK",
        description: "Consulted at the Flapping Wing MAV Lab. Developed a modeless, data-driven control approach for bionic flapping-wing micro-aerial vehicles, pushing the boundaries of applied physical AI methodologies.",
        tags: ["Machine Learning", "Robotics", "Research", "Control Systems"],
        icon: Network,
        color: "text-blue-600",
        bg: "bg-blue-50",
        borderGlow: "group-hover:border-blue-200",
        shadowGlow: "hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]",
        link: null
    },
    {
        id: "mitchells",
        role: "VIP Bartender",
        company: "Mitchells & Butlers / Compass Group",
        date: "Dec 2022 – Nov 2025",
        location: "London, UK",
        description: "Worked at AllBarOne Leicester Square, one of London's busiest bars, while pursuing a Master's degree. Honed exceptional social calibration (EQ), high-pressure teamwork dynamics, and rapid problem-solving skills.",
        tags: ["High EQ", "Team Leadership", "Pressure Management", "Social Dynamics"],
        icon: Coffee,
        color: "text-amber-600",
        bg: "bg-amber-50",
        borderGlow: "group-hover:border-amber-200",
        shadowGlow: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
        link: null
    }
];

export default function Ventures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: cardsContainerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    const nowColor = useTransform(scrollYProgress, [0, 0.15], ["#0d9488", "#a1a1aa"]);
    const startColor = useTransform(scrollYProgress, [0.85, 1], ["#a1a1aa", "#0d9488"]);

    return (
        <section 
            id="ventures" 
            className="w-full py-16 sm:py-24 md:py-32 lg:py-48 relative z-10 scroll-mt-16 sm:scroll-mt-10" 
            ref={containerRef}
        >
            {/*
              Two-column only from xl (1280+). At lg/iPad 1024, col-span-5 + gap-24
              crushed the cards and caused right-edge clipping with scroll X offset.
            */}
            <div className="container mx-auto px-page xl:px-12 relative z-10 max-w-7xl overflow-x-clip">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 sm:gap-12 md:gap-14 xl:gap-16 2xl:gap-24 items-start">
                    
                    {/* Left Sticky Column */}
                    <div className="xl:col-span-5 xl:sticky xl:top-[min(30vh,12rem)] self-start min-w-0">
                        <m.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <m.div 
                                style={{ y: bgY }}
                                className="absolute -left-10 -top-10 w-40 sm:w-64 h-40 sm:h-64 bg-teal-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"
                            />
                            
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                                </div>
                                <h2 className="text-xs sm:text-sm font-semibold text-teal-600 tracking-widest uppercase">Experience & Evolution</h2>
                            </div>
                            
                            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-zinc-900 tracking-tight leading-[1.1] mb-5 sm:mb-8 break-balance">
                                Bridging <span className="font-medium text-teal-600">technical depth</span> with human intuition.
                            </h3>
                            
                            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-body mb-6 sm:mb-10 max-w-md">
                                A timeline of leadership in AI architecture, deep-tech research, and the foundational social calibration forged in high-pressure environments.
                            </p>

                            <div className="hidden xl:flex items-center gap-4">
                                <m.div style={{ color: nowColor }} className="text-xs font-bold tracking-widest uppercase w-12">Now</m.div>
                                <div className="relative flex-1 h-1 bg-zinc-200/60 rounded-full overflow-hidden max-w-[200px]">
                                    <m.div 
                                        className="absolute top-0 left-0 bottom-0 w-full bg-teal-500 rounded-full origin-left"
                                        style={{ scaleX: scaleY }}
                                    />
                                </div>
                                <m.div style={{ color: startColor }} className="text-xs font-bold tracking-widest uppercase w-12 text-right">Start</m.div>
                            </div>
                        </m.div>
                    </div>

                    {/* Right Scrolling Column */}
                    <div className="xl:col-span-7 relative min-w-0">
                        {/* Connecting line until two-column kicks in */}
                        <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-zinc-200 xl:hidden -z-10" />

                        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16" ref={cardsContainerRef}>
                            {experiences.map((exp) => (
                                <VentureCard key={exp.id} exp={exp} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function VentureCard({ exp }: { exp: typeof experiences[0] }) {
    const Icon = exp.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    /** "soft" = phone/tablet; full cinematic X offset only on wide desktop */
    const [motionMode, setMotionMode] = useState<"soft" | "full">("soft");

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1280px)");
        const update = () => setMotionMode(mq.matches ? "full" : "soft");
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 100%", "end 0%"]
    });

    const soft = motionMode === "soft";

    // Soft mode (≤1279px incl. iPad): no X shove that clips cards past the viewport edge
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.4, 0.6, 0.7, 1],
        soft ? [0.55, 0.85, 1, 1, 0.85, 0.55] : [0.2, 0.5, 1, 1, 0.5, 0.2]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.4, 0.6, 0.7, 1],
        soft ? [0.98, 0.99, 1, 1, 0.99, 0.98] : [0.85, 0.95, 1, 1, 0.95, 0.85]
    );
    const x = useTransform(
        scrollYProgress,
        [0, 0.3, 0.4, 0.6, 0.7, 1],
        soft ? [0, 0, 0, 0, 0, 0] : [40, 12, 0, 0, 12, 40]
    );
    const rotate = useTransform(
        scrollYProgress,
        [0, 0.4, 0.6, 1],
        soft ? [0, 0, 0, 0] : [-3, 0, 0, 3]
    );

    return (
        <m.div
            ref={cardRef}
            style={{ opacity, scale, x, rotate }}
            className={`group relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-5 sm:p-6 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] transition-colors duration-500 hover:bg-white/50 ${exp.shadowGlow} ${exp.borderGlow} will-change-transform min-w-0 max-w-full`}
        >
            {/* Timeline node until two-column layout */}
            <div className="absolute left-3 sm:left-6 -translate-x-1/2 top-8 sm:top-10 flex xl:hidden items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-zinc-200 shadow-sm transition-colors duration-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-300 group-hover:bg-teal-500 transition-colors" />
            </div>

            {/* Icon Container */}
            <div className="flex-shrink-0 ml-8 sm:ml-12 xl:ml-0">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${exp.bg}`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${exp.color}`} />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 ml-8 sm:ml-12 xl:ml-0 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4 gap-2 min-w-0">
                    <div className="min-w-0 flex-1">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight break-balance">
                            {exp.role}
                        </h4>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 self-start sm:self-auto flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-zinc-100/80 text-xs sm:text-sm font-medium text-zinc-500 whitespace-nowrap font-body border border-zinc-200/50">
                            {exp.date}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest block font-body px-1">
                            {exp.location}
                        </span>
                    </div>
                </div>

                {exp.link ? (
                    <Link href={exp.link} target="_blank" className={`inline-flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity duration-200 mb-4 sm:mb-6 text-base sm:text-lg group/link ${exp.color}`}>
                        {exp.company}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </Link>
                ) : (
                    <p className="text-base sm:text-lg font-medium text-zinc-500 mb-4 sm:mb-6">{exp.company}</p>
                )}

                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.7] sm:leading-[1.8] text-zinc-600 font-normal font-body mb-5 sm:mb-8">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-auto">
                    {exp.tags.map(tag => (
                        <span key={tag} className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/50 border border-white/60 text-[11px] sm:text-xs font-medium text-zinc-600 tracking-wide transition-colors duration-300 group-hover:bg-white group-hover:border-zinc-300 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </m.div>
    );
}
