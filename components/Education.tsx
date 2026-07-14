"use client";

import React, { useRef } from "react";
import { m, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useStickyScrollMode } from "@/lib/useStickyScrollMode";

type EduItem = {
    year: string;
    timeline: string;
    degree: string;
    institution: string;
    location: string;
    performance: string;
    highlights: string[];
    tags: string[];
    icon: typeof Award;
    themeColor: string;
};

const educationData: EduItem[] = [
    {
        year: "2023",
        timeline: "Sep 2022 – Sep 2023",
        degree: "M.S. in Artificial Intelligence",
        institution: "Queen Mary University of London",
        location: "London, UK",
        performance: "Graduated with Distinction",
        highlights: [
            "Rigorous exploration into the mathematical foundations of deep learning architectures, computer vision, and large language models.",
            "Dissertation: Unsupervised Machine Translation using visual signals as rewards for Reinforcement Learning."
        ],
        tags: ["Artificial Intelligence", "Reinforcement Learning", "Computer Vision"],
        icon: Award,
        themeColor: "text-teal-600 border-teal-500"
    },
    {
        year: "2022",
        timeline: "Jun 2018 – Aug 2022",
        degree: "B.Tech. in Computer Science",
        institution: "University of Petroleum & Energy Studies",
        location: "Dehradun, India",
        performance: "CGPA: 8.77 (With Honors)",
        highlights: [
            "Specialization in Cyber Security and Forensics with Honors.",
            "Self-taught mastery of Machine Learning and Deep Learning fundamentals, verified by 100+ advanced certifications from Coursera and prestigious global institutions.",
            "Appointed as Student Placement Representative in the final year."
        ],
        tags: ["Computer Science", "Cyber Security", "Machine Learning"],
        icon: BookOpen,
        themeColor: "text-cyan-600 border-cyan-500"
    }
];

function SectionHeading({ className = "", centered = false }: { className?: string; centered?: boolean }) {
    return (
        <div className={`${centered ? "text-center flex flex-col items-center" : ""} ${className}`}>
            <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${centered ? "justify-center" : ""}`}>
                <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </div>
                <h2 className="text-[11px] sm:text-sm font-bold text-teal-700 tracking-widest uppercase">Academic Journey</h2>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.15] md:leading-[1.1] break-balance">
                A foundation of <span className="font-semibold text-teal-700">rigorous curiosity</span>.
            </h3>
        </div>
    );
}

function EducationCard({
    edu,
    compact = false,
}: {
    edu: EduItem;
    compact?: boolean;
}) {
    const Icon = edu.icon;
    const secondaryHighlight = edu.highlights[1] ?? edu.highlights[0];

    return (
        <div className="w-full max-w-5xl relative min-w-0">
            <div
                className={`font-black text-teal-600/[0.06] tracking-tighter leading-none select-none font-sans ${
                    compact
                        ? "text-[clamp(3rem,14vw,5rem)] -mb-3"
                        : "edu-year-backdrop text-[clamp(4rem,14vw,12vw)] -mb-4 sm:-mb-8 md:-mb-12"
                }`}
            >
                {edu.year}
            </div>

            <div className={`border-l-4 ${edu.themeColor} pl-3 sm:pl-4 md:pl-10 space-y-3 sm:space-y-5 md:space-y-6`}>
                <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${edu.themeColor}`} />
                        <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">{edu.timeline}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-zinc-900 tracking-tight leading-tight break-balance">
                        {edu.degree}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-700 mt-1.5 sm:mt-2">
                        {edu.institution}{" "}
                        <span className="text-xs sm:text-sm text-zinc-400 font-normal">| {edu.location}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-10 pt-1">
                    <div className="space-y-2">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">Academic Focus</span>
                        <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-body font-medium line-clamp-5 md:line-clamp-none">
                            {edu.highlights[0]}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">Key Highlight</span>
                        <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-body font-medium line-clamp-4 md:line-clamp-none">
                            {secondaryHighlight}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 pt-4 border-t border-zinc-200/50">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/80 border border-zinc-200 text-[10px] sm:text-xs font-bold text-zinc-800 shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Grade:</span>
                        <span className="text-sm sm:text-base font-extrabold text-teal-700 bg-teal-50 border border-teal-100 px-2.5 sm:px-3.5 py-1 rounded-xl whitespace-nowrap">
                            {edu.performance}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Phone portrait: stacked cards (best for long academic copy).
 * Shown via CSS under md when touch mode is active (see globals).
 */
function EducationPhoneStack() {
    return (
        <div className="edu-phone-stack relative w-full bg-transparent py-14 sm:py-16">
            <div className="container mx-auto px-page max-w-3xl">
                <SectionHeading className="mb-10" />
                <div className="flex flex-col gap-10">
                    {educationData.map((edu) => (
                        <m.div
                            key={edu.year}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="rounded-[1.5rem] bg-white/40 backdrop-blur-sm border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-5 sm:p-7"
                        >
                            <EducationCard edu={edu} compact />
                        </m.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/**
 * Tablet / iPad landscape / any non-sticky viewport md+:
 * native horizontal snap swipe — no Framer X, no timeline chrome.
 */
function EducationTouchSwipe() {
    return (
        <div className="edu-touch-swipe relative w-full bg-transparent py-14 sm:py-16 md:py-20">
            <div className="px-page mb-8 sm:mb-10 max-w-4xl mx-auto">
                <SectionHeading centered />
                <p className="mt-3 text-center text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
                    Swipe to explore · {educationData.length} degrees
                </p>
            </div>

            <div
                className="touch-carousel flex w-full gap-4 sm:gap-5 md:gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-2 px-[max(1rem,env(safe-area-inset-left))] sm:px-6 md:px-10"
                style={{ WebkitOverflowScrolling: "touch" }}
                role="region"
                aria-label="Education history — swipe horizontally"
            >
                <div
                    className="shrink-0 w-[max(0.5rem,calc((100vw-min(88vw,36rem))/2-1rem))] md:w-[max(1rem,calc((100vw-min(72vw,40rem))/2-1.5rem))]"
                    aria-hidden
                />

                {educationData.map((edu) => (
                    <div
                        key={edu.year}
                        className="snap-center shrink-0 w-[min(88vw,36rem)] md:w-[min(72vw,40rem)]"
                    >
                        <div className="rounded-[1.5rem] sm:rounded-[2rem] bg-white/50 backdrop-blur-sm border border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-5 sm:p-7 md:p-9 h-full">
                            <EducationCard edu={edu} compact />
                        </div>
                    </div>
                ))}

                <div
                    className="shrink-0 w-[max(0.5rem,calc((100vw-min(88vw,36rem))/2-1rem))] md:w-[max(1rem,calc((100vw-min(72vw,40rem))/2-1.5rem))]"
                    aria-hidden
                />
            </div>
        </div>
    );
}

function EducationDesktopSticky() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const xValue = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const springX = useSpring(xValue, { stiffness: 45, damping: 15, mass: 0.8 });
    const x = useTransform(springX, (val) => `${val}vw`);

    const mscOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 1, 0.25, 0.25]);
    const btechOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.25, 0.25, 1, 1]);
    const opacities = [mscOpacity, btechOpacity];

    const mastersLabelColor = useTransform(scrollYProgress, [0, 0.45], ["#0f766e", "#71717a"]);
    const bachelorsLabelColor = useTransform(scrollYProgress, [0.55, 1], ["#71717a", "#0f766e"]);
    const handleLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={sectionRef}
            className="relative h-[220vh] w-full bg-transparent z-0"
        >
            <div className="sticky top-0 h-dvh w-full flex flex-col justify-center overflow-hidden sticky-short-compact">
                <div className="edu-title-block absolute top-20 md:top-28 left-0 right-0 z-20 pointer-events-none px-page md:left-8 lg:left-32 max-w-4xl">
                    <SectionHeading />
                </div>
                <m.div
                    style={{ x, willChange: "transform" }}
                    className="flex w-[200vw] items-center relative z-10 pt-12 md:pt-4 -mt-4 md:-mt-8"
                >
                    {educationData.map((edu, idx) => (
                        <m.div
                            key={edu.year}
                            style={{ opacity: opacities[idx] }}
                            className="w-[100vw] flex justify-center px-page md:px-16 lg:px-24 flex-shrink-0"
                        >
                            <EducationCard edu={edu} />
                        </m.div>
                    ))}
                </m.div>

                {/* Fixed Scrolling Progress Timeline Indicator at the bottom */}
                <div className="absolute bottom-28 md:bottom-40 left-10 md:left-24 right-10 md:right-24 z-20 flex items-center justify-center">
                    <div className="flex flex-col gap-4 w-full max-w-xl">
                        {/* Top Labels Row */}
                        <div className="flex justify-between w-full px-2">
                            <m.span style={{ color: mastersLabelColor }} className="text-[11px] font-black uppercase tracking-widest">Masters</m.span>
                            <m.span style={{ color: bachelorsLabelColor }} className="text-[11px] font-black uppercase tracking-widest">Bachelors</m.span>
                        </div>
                        {/* Progress Bar Row */}
                        <div className="relative h-[4px] bg-zinc-200/60 rounded-full shadow-inner mx-4">
                            <m.div 
                                className="absolute top-0 left-0 bottom-0 bg-teal-500 rounded-full origin-left"
                                style={{ scaleX: scrollYProgress }}
                            />
                            
                            {/* Chronological Ruler Ticks */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[2023, 2022, 2021, 2020, 2019, 2018].map((year, i) => (
                                    <YearTick key={year} year={year} index={i} scrollProgress={scrollYProgress} />
                                ))}
                            </div>

                            {/* Floating indicator node with visual anchor */}
                            <m.div 
                                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-teal-500 shadow-md flex items-center justify-center -ml-3 z-10"
                                style={{ left: handleLeft }}
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Non-sticky: phone stack + tablet/landscape swipe (CSS toggles which is shown) */
function EducationTouchModes() {
    return (
        <>
            <EducationPhoneStack />
            <EducationTouchSwipe />
        </>
    );
}

export default function Education() {
    const sticky = useStickyScrollMode();

    return (
        <section id="education" className="relative w-full scroll-mt-20">
            {sticky ? <EducationDesktopSticky /> : <EducationTouchModes />}
        </section>
    );
}

function YearTick({ year, index, scrollProgress }: { year: number; index: number; scrollProgress: any }) {
    const checkpoint = index * 0.2;
    
    // Construct strictly increasing keyframe offsets within [0, 1] range to avoid Web Animations API crash
    const range = [];
    const scaleOutput = [];
    const colorOutput = [];
    const opacityOutput = [];

    // Left boundary
    if (checkpoint - 0.15 >= 0) {
        range.push(checkpoint - 0.15);
        scaleOutput.push(0.95);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.7);
    }
    
    // Center point (checkpoint)
    if (range.length === 0 || range[range.length - 1] < checkpoint) {
        range.push(checkpoint);
        scaleOutput.push(1.3);
        colorOutput.push("#0d9488");
        opacityOutput.push(1.0);
    }

    // Right boundary
    if (checkpoint + 0.15 <= 1) {
        range.push(checkpoint + 0.15);
        scaleOutput.push(0.95);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.7);
    }

    const scale = useTransform(scrollProgress, range, scaleOutput);
    const color = useTransform(scrollProgress, range, colorOutput);
    const opacity = useTransform(scrollProgress, range, opacityOutput);
    const leftPercent = `${index * 20}%`;

    return (
        <m.div 
            style={{ left: leftPercent, scale, color, opacity }}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2 mt-5"
        >
            <div className="w-1.5 h-1.5 rounded-full bg-current mb-1" />
            <span className="text-xs font-bold tracking-wider font-sans select-none">{year}</span>
        </m.div>
    );
}
