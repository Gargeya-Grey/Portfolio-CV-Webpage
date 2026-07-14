"use client";

import React, { useRef, useState, useEffect } from "react";
import { m, useSpring, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Code2, PenTool, FolderOpen } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/data";
import { useStickyScrollMode } from "@/lib/useStickyScrollMode";

function getCardMetrics(width: number, height: number) {
    if (width < 1500) {
        return {
            w: Math.min(420, width * 0.32),
            gap: 28,
            h: Math.min(500, Math.max(400, height * 0.46)),
        };
    }
    return {
        w: 440,
        gap: 32,
        h: Math.min(540, Math.max(460, height * 0.48)),
    };
}

function SectionHeading({ centered = false, className = "" }: { centered?: boolean; className?: string }) {
    return (
        <div className={`${centered ? "text-center flex flex-col items-center" : ""} ${className}`}>
            <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${centered ? "justify-center" : ""}`}>
                <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                </div>
                <h2 className="text-[11px] sm:text-sm font-bold text-teal-700 tracking-widest uppercase">The Lab</h2>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight leading-[1.15] break-balance">
                Experimental code, research papers, and{" "}
                <span className="font-semibold text-teal-700">mechanics of intelligence</span>.
            </h3>
        </div>
    );
}

function getProjectIcon(type: string) {
    switch (type) {
        case "writing":
            return PenTool;
        case "academic":
            return FolderOpen;
        default:
            return Code2;
    }
}

/**
 * Touch / tablet / iPad landscape: native momentum swipe carousel.
 * No sticky lock, no Framer X, no bottom timeline — finger owns the track.
 */
function LabTouchSwipe() {
    return (
        <div className="relative w-full bg-transparent py-14 sm:py-16 md:py-20">
            <div className="px-page mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
                <SectionHeading centered />
                <p className="mt-3 text-center text-xs sm:text-sm text-zinc-400 font-medium tracking-wide md:hidden">
                    Swipe to explore
                </p>
            </div>

            <div
                className="touch-carousel flex w-full gap-4 sm:gap-5 md:gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-2 px-[max(1rem,env(safe-area-inset-left))] sm:px-6 md:px-10"
                style={{ WebkitOverflowScrolling: "touch" }}
                role="region"
                aria-label="Lab projects — swipe horizontally"
            >
                {/* Leading spacer so first card can center-snap on wide tablets */}
                <div className="shrink-0 w-[max(0.25rem,calc((100vw-min(85vw,22rem))/2-1rem))] sm:w-[max(0.5rem,calc((100vw-min(70vw,24rem))/2-1.5rem))] md:w-[max(1rem,calc((100vw-min(42vw,26rem))/2-1.5rem))]" aria-hidden />

                {projects.map((project, index) => (
                    <div
                        key={`${project.title}-${index}`}
                        className="snap-center shrink-0 w-[min(85vw,22rem)] sm:w-[min(70vw,24rem)] md:w-[min(42vw,26rem)]"
                    >
                        <LabSwipeCard project={project} />
                    </div>
                ))}

                <div className="shrink-0 w-[max(0.25rem,calc((100vw-min(85vw,22rem))/2-1rem))] sm:w-[max(0.5rem,calc((100vw-min(70vw,24rem))/2-1.5rem))] md:w-[max(1rem,calc((100vw-min(42vw,26rem))/2-1.5rem))]" aria-hidden />
            </div>
        </div>
    );
}

function LabSwipeCard({ project }: { project: (typeof projects)[0] }) {
    const Icon = getProjectIcon(project.type);

    return (
        <Link href={project.href} target="_blank" className="block group h-full">
            <article
                className={`relative w-full min-h-[22rem] sm:min-h-[24rem] md:min-h-[26rem] rounded-2xl sm:rounded-3xl border bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 shadow-[0_12px_28px_rgba(0,0,0,0.05)] transition-colors duration-300 flex flex-col ${
                    project.isLatest
                        ? "border-teal-500/40 shadow-[0_12px_28px_rgba(13,148,136,0.06)]"
                        : "border-zinc-200/90"
                }`}
            >
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border shrink-0 ${
                            project.isLatest
                                ? "bg-teal-50 border-teal-100 text-teal-600"
                                : "bg-zinc-50 border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50"
                        }`}
                    >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    {project.isLatest && (
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/40 text-[9px] font-black text-teal-700 tracking-widest uppercase">
                            Latest
                        </span>
                    )}
                </div>

                <h3
                    className={`text-xl sm:text-2xl font-semibold tracking-tight mb-2 transition-colors duration-200 line-clamp-2 ${
                        project.isLatest ? "text-zinc-900 group-hover:text-teal-800" : "text-zinc-900 group-hover:text-teal-900"
                    }`}
                >
                    {project.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-body mb-5 flex-1 line-clamp-5">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/50 border border-zinc-200/60 text-zinc-600 shadow-sm group-hover:border-teal-200 group-hover:text-teal-700 transition-colors duration-200 font-body"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-zinc-400 group-hover:text-teal-600 transition-colors duration-200">
                        {project.type === "writing" ? "Read Article" : "View Code"} <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </article>
        </Link>
    );
}

/** Desktop mouse: sticky vertical scroll drives horizontal card translation */
function LabDesktopSticky() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const [translations, setTranslations] = useState({ start: 0, end: 0, cardW: 400, cardH: 480, gap: 32 });

    useEffect(() => {
        const calculate = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            if (width < 1280 || height < 900) return;

            const { w, gap, h } = getCardMetrics(width, height);
            const offset = w + gap;
            const lastIndex = Math.max(0, projects.length - 1);
            const start = (width - w) / 2;
            const end = (width - w) / 2 - lastIndex * offset;

            setTranslations({ start, end, cardW: w, cardH: h, gap });
        };

        calculate();

        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(calculate, 100);
        };

        window.addEventListener("resize", handleResize);
        window.visualViewport?.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener("resize", handleResize);
            window.visualViewport?.removeEventListener("resize", handleResize);
        };
    }, []);

    const xValue = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [translations.start, translations.start, translations.end, translations.end]
    );
    const springX = useSpring(xValue, { stiffness: 45, damping: 15, mass: 0.8 });

    const progressScale = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
    const progressScaleClamped = useSpring(progressScale, { stiffness: 100, damping: 30 });
    const progressLeft = useTransform(progressScaleClamped, [0, 1], ["0%", "100%"]);

    const stickyTop = "max(4.5rem, calc(env(safe-area-inset-top, 0px) + 3.5rem))";

    return (
        <div
            ref={sectionRef}
            className="relative h-[320vh] w-full bg-transparent z-0"
        >
            <div
                className="sticky w-full flex flex-col justify-center overflow-hidden lab-short-compact"
                style={{
                    top: stickyTop,
                    height: `calc(100dvh - ${stickyTop})`,
                }}
            >
                <div className="lab-title-block absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-full max-w-4xl px-page">
                    <SectionHeading centered />
                </div>

                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 lg:w-64 bg-gradient-to-r from-zinc-50 via-zinc-50/70 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 lg:w-64 bg-gradient-to-l from-zinc-50 via-zinc-50/70 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />

                <div className="relative z-10 flex items-center w-full pt-[clamp(5.5rem,14vh,8.5rem)] pb-[clamp(5rem,12vh,7rem)]">
                    <m.div
                        ref={trackRef}
                        style={{ x: springX, willChange: "transform", gap: translations.gap }}
                        className="flex items-center relative w-max"
                    >
                        {projects.map((project, index) => (
                            <div key={index} className="shrink-0">
                                <LabCarouselCard
                                    project={project}
                                    width={translations.cardW}
                                    height={translations.cardH}
                                />
                            </div>
                        ))}
                    </m.div>
                </div>

                {/* Progress lifted from viewport bottom edge for landscape comfort */}
                <div
                    className="absolute left-0 right-0 z-30 flex items-center justify-center px-page md:px-24"
                    style={{ bottom: "max(1.75rem, calc(env(safe-area-inset-bottom, 0px) + 1.25rem))" }}
                >
                    <div className="flex items-center gap-3 sm:gap-6 md:gap-8 w-full max-w-xl">
                        <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest w-10 sm:w-12 shrink-0">Start</span>
                        <div className="relative flex-1 h-[3px] sm:h-[4px] bg-zinc-200/60 rounded-full shadow-inner min-w-0">
                            <m.div
                                className="absolute top-0 left-0 bottom-0 bg-teal-500 rounded-full origin-left"
                                style={{ scaleX: progressScaleClamped }}
                            />
                            <div className="absolute inset-0 pointer-events-none">
                                {projects.map((_, idx) => (
                                    <LabIndexTick key={idx} index={idx} total={projects.length} scrollProgress={scrollYProgress} />
                                ))}
                            </div>
                            <m.div
                                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-teal-500 shadow-md flex items-center justify-center -ml-2.5 sm:-ml-3 z-10"
                                style={{ left: progressLeft }}
                            >
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-teal-500 animate-pulse" />
                            </m.div>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest w-10 sm:w-12 text-right shrink-0">End</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LabCarouselCard = React.memo(function LabCarouselCard({
    project,
    width,
    height,
}: {
    project: (typeof projects)[0];
    width: number;
    height: number;
}) {
    const Icon = getProjectIcon(project.type);
    const compact = height < 360 || width < 300;

    return (
        <m.div style={{ perspective: 1000, width, height }} className="mx-auto">
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
                    className={`relative w-full h-full bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between cursor-pointer overflow-hidden border transition-colors duration-300 ${
                        compact ? "p-4" : "p-5 sm:p-8 md:p-10"
                    } ${
                        project.isLatest
                            ? "border-teal-500/40 bg-teal-50/[0.02] shadow-[0_20px_40px_rgba(13,148,136,0.04)]"
                            : "border-zinc-200/90"
                    }`}
                >
                    <div className={compact ? "space-y-3" : "space-y-4 sm:space-y-6"}>
                        <div className="flex items-center justify-between">
                            <div
                                className={`rounded-full flex items-center justify-center border transition-all duration-200 group-hover:scale-110 ${
                                    compact ? "w-9 h-9" : "w-10 h-10 sm:w-12 sm:h-12"
                                } ${
                                    project.isLatest
                                        ? "bg-teal-50 border-teal-100 text-teal-600 group-hover:bg-teal-100"
                                        : "bg-zinc-50 border-zinc-100 text-zinc-400 group-hover:text-teal-600 group-hover:bg-teal-50"
                                }`}
                            >
                                <Icon className={compact ? "w-4 h-4" : "w-5 h-5 sm:w-6 sm:h-6"} />
                            </div>
                            {project.isLatest && (
                                <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200/40 text-[9px] font-black text-teal-700 tracking-widest uppercase">
                                    Latest
                                </span>
                            )}
                        </div>

                        <h3
                            className={`font-semibold tracking-tight transition-colors duration-200 line-clamp-3 ${
                                compact ? "text-lg" : "text-xl sm:text-2xl md:text-3xl"
                            } ${
                                project.isLatest ? "text-zinc-900 group-hover:text-teal-800" : "text-zinc-900 group-hover:text-teal-900"
                            }`}
                        >
                            {project.title}
                        </h3>

                        <p className={`text-zinc-500 leading-relaxed font-body ${compact ? "text-sm line-clamp-3" : "line-clamp-4 sm:line-clamp-5"}`}>
                            {project.description}
                        </p>
                    </div>

                    <div className={`flex flex-col ${compact ? "gap-3" : "gap-4 sm:gap-6"}`}>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.tags.slice(0, compact ? 3 : project.tags.length).map(tag => (
                                <span
                                    key={tag}
                                    className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/50 border border-zinc-200/60 text-zinc-600 shadow-sm group-hover:border-teal-200 group-hover:text-teal-700 transition-colors duration-200 font-body"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 group-hover:text-teal-600 transition-colors duration-200">
                            {project.type === "writing" ? "Read Article" : "View Code"} <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </m.div>
            </Link>
        </m.div>
    );
});
LabCarouselCard.displayName = "LabCarouselCard";

const LabIndexTick = React.memo(function LabIndexTick({
    index,
    total,
    scrollProgress,
}: {
    index: number;
    total: number;
    scrollProgress: MotionValue<number>;
}) {
    const span = Math.max(total - 1, 1);
    const checkpoint = 0.2 + (index / span) * 0.6;

    const range: number[] = [];
    const scaleOutput: number[] = [];
    const colorOutput: string[] = [];
    const opacityOutput: number[] = [];

    if (checkpoint - 0.08 >= 0) {
        range.push(checkpoint - 0.08);
        scaleOutput.push(0.9);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.5);
    }

    if (range.length === 0 || range[range.length - 1] < checkpoint) {
        range.push(checkpoint);
        scaleOutput.push(1.35);
        colorOutput.push("#0d9488");
        opacityOutput.push(1.0);
    }

    if (checkpoint + 0.08 <= 1) {
        range.push(checkpoint + 0.08);
        scaleOutput.push(0.9);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.5);
    }

    const scale = useTransform(scrollProgress, range, scaleOutput);
    const color = useTransform(scrollProgress, range, colorOutput);
    const opacity = useTransform(scrollProgress, range, opacityOutput);
    const leftPercent = `${(index / span) * 100}%`;

    return (
        <m.div
            style={{ left: leftPercent, scale, color, opacity }}
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2 mt-4 sm:mt-5"
        >
            <div className="w-1 h-1 rounded-full bg-current mb-1" />
            <span className="text-[9px] sm:text-[10px] font-black tracking-wider font-mono select-none">
                {String(index + 1).padStart(2, "0")}
            </span>
        </m.div>
    );
});
LabIndexTick.displayName = "LabIndexTick";

export default function Lab() {
    const sticky = useStickyScrollMode();

    return (
        <section id="lab" className="relative w-full scroll-mt-20">
            {sticky ? <LabDesktopSticky /> : <LabTouchSwipe />}
        </section>
    );
}
