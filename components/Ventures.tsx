"use client";

import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Code2, Network, BrainCircuit, Coffee, Cpu, Briefcase } from "lucide-react";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { SITE } from "@/lib/site";
import { subscribeLayout } from "@/lib/subscribeLayout";

const experiences = [
    {
        id: "edudojo",
        pill: "Edudojo",
        role: "Founder & Lead AI Architect",
        company: "Edudojo.ai",
        date: "May 2026 – Present",
        location: "Fluid",
        description: "Leading the AI revolution in Evaluation & Education. Architecting advanced Socratic AI systems localized in English, Hindi, Japanese, and Spanish for a unified global market. Orchestrating an active pilot program serving 2,000+ students at Parishkar College (Autonomous), bridging technical innovation with scalable pedagogical design.",
        tags: ["EdTech", "GenAI", "AI Architecture", "Education Strategy", "Leadership"],
        icon: BrainCircuit,
        color: "text-teal-600",
        bg: "bg-teal-50",
        link: SITE.edudojo
    },
    {
        id: "evolve",
        pill: "Evvolv",
        role: "Founding AI Engineer / Member",
        company: "Evvolv",
        date: "Nov 2025 – May 2026",
        location: "London, UK",
        description: "Co-founded and engineered a core multi-agent system, creating autonomous AI workers designed to automate complex business workflows and operations for Small and Medium Enterprises (SMEs).",
        tags: ["AI Workers", "n8n", "Multi-Agent Systems", "SME Automation"],
        icon: Cpu,
        color: "text-violet-600",
        bg: "bg-violet-50",
        link: null
    },
    {
        id: "rvs",
        pill: "Consensus+",
        role: "Data Scientist & Automation Specialist",
        company: "RVS Consensus+",
        date: "Jul 2024 – Nov 2025",
        location: "London, UK",
        description: "Built end-to-end data pipelines and real-time dashboards (Dash/Plotly) processing 10M+ rows of transaction data from SIX, Reuters, and 15+ global Tier-1 banks. Engineered a Python-powered automation toolset that saved 5+ hours daily and accelerated new product development by 20x.",
        tags: ["Data Science", "Python", "Dash", "SQL", "Fintech Automation"],
        icon: Code2,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        link: null
    },
    {
        id: "imperial",
        pill: "Imperial",
        role: "Machine Learning Consultant",
        company: "Imperial College London",
        date: "Jul 2023 – Oct 2023",
        location: "London, UK",
        description: "Consulted at the Flapping Wing MAV Lab. Developed a modeless, data-driven control approach for bionic flapping-wing micro-aerial vehicles, pushing the boundaries of applied physical AI methodologies.",
        tags: ["Machine Learning", "Robotics", "Research", "Control Systems"],
        icon: Network,
        color: "text-blue-600",
        bg: "bg-blue-50",
        link: null
    },
    {
        id: "mitchells",
        pill: "Hospitality",
        role: "VIP Bartender",
        company: "Mitchells & Butlers / Compass Group",
        date: "Dec 2022 – Nov 2025",
        location: "London, UK",
        description: "Worked at AllBarOne Leicester Square, one of London's busiest bars, while pursuing a Master's degree. Honed exceptional social calibration (EQ), high-pressure teamwork dynamics, and rapid problem-solving skills.",
        tags: ["High EQ", "Team Leadership", "Pressure Management", "Social Dynamics"],
        icon: Coffee,
        color: "text-amber-600",
        bg: "bg-amber-50",
        link: null
    }
] as const;

type Experience = (typeof experiences)[number];
type StackState = "behind" | "current" | "ahead";

function isDesktopStack() {
    return window.innerWidth >= 1280;
}

function stickyBandY() {
    const card = document.querySelector<HTMLElement>("#ventures .venture-lock");
    if (card) {
        const top = parseFloat(getComputedStyle(card).top);
        if (Number.isFinite(top)) return top;
    }
    return Math.min(216, Math.max(88, window.innerHeight * 0.5 - 256));
}

function scrollToExperience(id: string) {
    const target = document.getElementById(`experience-${id}`);
    const stack = document.querySelector<HTMLElement>("#ventures .venture-stack");
    if (!target) return;

    if (!isDesktopStack() || !stack) {
        window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - 88) });
        return;
    }

    const cards = [...stack.querySelectorAll<HTMLElement>(".venture-lock")];
    const gap = parseFloat(getComputedStyle(stack).rowGap || getComputedStyle(stack).gap) || 0;
    let y = stack.getBoundingClientRect().top + window.scrollY;
    for (const card of cards) {
        if (card === target) break;
        y += card.offsetHeight + gap;
    }
    window.scrollTo({ top: Math.max(0, y - stickyBandY()) });
}

function readLockedId(previous: string, cards: HTMLElement[]): string {
    if (cards.length === 0) return previous;

    if (isDesktopStack()) {
        const lockY = stickyBandY() + 1;
        let current: string | null = null;
        for (const card of cards) {
            if (card.getBoundingClientRect().top <= lockY) {
                current = card.dataset.lockId ?? current;
            }
        }
        return current ?? previous;
    }

    const viewBottom = window.innerHeight;
    let bestId: string | null = null;
    let bestVisible = 0;
    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, viewBottom) - Math.max(rect.top, 0));
        if (visible > bestVisible) {
            bestVisible = visible;
            bestId = card.dataset.lockId ?? null;
        }
    }
    return bestId ?? previous;
}

function stackState(index: number, lockedIndex: number): StackState {
    if (index < lockedIndex) return "behind";
    if (index === lockedIndex) return "current";
    return "ahead";
}

export default function Ventures() {
    const reduce = usePrefersReducedMotion();
    const stackRef = useRef<HTMLDivElement>(null);
    const [lockedId, setLockedId] = useState<string>(experiences[0].id);
    const lockedIndex = Math.max(0, experiences.findIndex((exp) => exp.id === lockedId));
    const locked = experiences[lockedIndex];

    useEffect(() => {
        const stack = stackRef.current;
        if (!stack) return;

        const cards = [...stack.querySelectorAll<HTMLElement>("[data-lock-id]")];

        const update = () => {
            setLockedId((prev) => {
                const next = readLockedId(prev, cards);
                return prev === next ? prev : next;
            });
        };

        const unsub = subscribeLayout(update);
        const observer = new IntersectionObserver(update, { threshold: [0, 0.5, 1] });
        cards.forEach((node) => observer.observe(node));

        return () => {
            unsub();
            observer.disconnect();
        };
    }, []);

    return (
        <section
            id="ventures"
            className="w-full py-16 sm:py-24 md:py-32 lg:py-40 relative z-10 scroll-mt-16 sm:scroll-mt-10"
        >
            <div className="container mx-auto px-page relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(24rem,2fr)_minmax(0,3fr)] gap-10 sm:gap-12 xl:gap-x-10 xl:gap-y-0 items-start">

                    <div className="xl:sticky xl:top-[var(--sticky-band)] self-start min-w-0 xl:pr-2">
                        <m.div
                            initial={{ opacity: 0, transform: "translateX(-12px)" }}
                            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: reduce ? 0 : DURATION.enter, ease: EASE_OUT }}
                            className="relative"
                        >
                            <div className="absolute -left-10 -top-10 w-40 sm:w-64 h-40 sm:h-64 bg-teal-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply" />

                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                                </div>
                                <h2 className="text-xs sm:text-sm font-semibold text-teal-600 tracking-widest uppercase">Experience & Evolution</h2>
                            </div>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-[2.85rem] font-light text-zinc-900 tracking-tight leading-[1.12] mb-5 sm:mb-8 break-balance">
                                Bridging <span className="font-medium text-teal-600">technical depth</span> with human intuition.
                            </h3>

                            <p className="text-base sm:text-lg leading-relaxed text-zinc-600 font-body mb-6 sm:mb-10 max-w-lg">
                                A timeline of leadership in AI architecture, deep-tech research, and the foundational social calibration forged in high-pressure environments.
                            </p>

                            <div className="hidden xl:flex flex-col gap-2" role="tablist" aria-label="Experience chapters">
                                {experiences.map((exp) => {
                                    const isLocked = lockedId === exp.id;
                                    return (
                                        <button
                                            key={exp.id}
                                            type="button"
                                            role="tab"
                                            aria-selected={isLocked}
                                            onClick={() => scrollToExperience(exp.id)}
                                            className={`pressable w-fit min-w-[8.5rem] text-left rounded-full px-4 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-[180ms] ease ${
                                                isLocked ? "lock-pill" : "lock-pill-idle hover:text-zinc-800"
                                            }`}
                                        >
                                            {exp.pill}
                                        </button>
                                    );
                                })}
                            </div>
                        </m.div>
                    </div>

                    <div className="relative min-w-0">
                        <div className="xl:hidden sticky top-3 z-30 flex justify-center mb-6 pointer-events-none">
                            <div className="pointer-events-auto glass-surface rounded-full px-4 py-2 shadow-sm min-w-[min(100%,18rem)] text-center">
                                <span className="inline-flex items-center justify-center text-sm font-semibold text-teal-950">
                                    {locked.company}
                                </span>
                            </div>
                        </div>

                        <div className="venture-stack" ref={stackRef}>
                            {experiences.map((exp, index) => (
                                <VentureCard
                                    key={exp.id}
                                    exp={exp}
                                    index={index}
                                    stack={stackState(index, lockedIndex)}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function VentureCard({
    exp,
    index,
    stack,
}: {
    exp: Experience;
    index: number;
    stack: StackState;
}) {
    const Icon = exp.icon;
    const current = stack === "current";

    return (
        <article
            id={`experience-${exp.id}`}
            data-lock-id={exp.id}
            data-stack={stack}
            aria-current={current ? "true" : undefined}
            className={`venture-lock card-shine surface-card group relative flex flex-col md:flex-row md:items-stretch gap-4 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-8 xl:px-9 min-w-0 max-w-full rounded-[1.5rem] sm:rounded-[2rem] bg-white border ${
                current ? "border-zinc-200/80" : "border-zinc-200/90"
            }`}
            style={{ zIndex: index + 1 }}
        >
            <div
                className={`absolute left-0 top-8 bottom-8 w-1 rounded-full transition-colors duration-[180ms] ease ${
                    current ? "bg-teal-600" : "bg-transparent"
                }`}
                aria-hidden
            />

            <div className="flex-shrink-0">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${exp.bg} ${current ? "ring-2 ring-teal-500/30" : ""}`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${exp.color}`} />
                </div>
            </div>

            <div className="flex-1 min-w-0 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 sm:mb-4 gap-2 min-w-0">
                    <div className="min-w-0 flex-1">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight break-balance">
                            {exp.role}
                        </h4>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 self-start sm:self-auto flex-shrink-0">
                        <span
                            className={`inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap font-body transition-colors duration-[180ms] ease ${
                                current ? "lock-pill" : "bg-zinc-100 text-zinc-500 border border-zinc-200/80"
                            }`}
                        >
                            {exp.date}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest block font-body px-1">
                            {exp.location}
                        </span>
                    </div>
                </div>

                {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className={`pressable inline-flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity duration-[180ms] ease mb-4 sm:mb-6 text-base sm:text-lg group/link ${exp.color}`}>
                        {exp.company}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-[160ms] ease-[var(--ease-out)] group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                ) : (
                    <p className="text-base sm:text-lg font-medium text-zinc-500 mb-4 sm:mb-6">{exp.company}</p>
                )}

                <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.7] sm:leading-[1.8] text-zinc-600 font-normal font-body mb-5 sm:mb-8">
                    {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {exp.tags.map((tag) => (
                        <span key={tag} className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 text-[11px] sm:text-xs font-medium text-zinc-600 tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
