"use client";

import React, { useRef } from "react";
import { m, useScroll, useTransform, useSpring } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2 } from "lucide-react";

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    // Track the scroll over a 250vh container for smooth, premium scroll velocity
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Translate the editorial timeline horizontally
    const xValue = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const springX = useSpring(xValue, { stiffness: 45, damping: 15, mass: 0.8 });
    const x = useTransform(springX, (val) => `${val}vw`);

    // Dynamically scale/fade milestones slightly to highlight active chapter
    const mscOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 1, 0.25, 0.25]);
    const btechOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.25, 0.25, 1, 1]);

    const educationData = [
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
            opacity: mscOpacity,
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
            opacity: btechOpacity,
            icon: BookOpen,
            themeColor: "text-cyan-600 border-cyan-500"
        }
    ];

    // Dynamic colors for the timeline indicator labels based on active states
    const mastersLabelColor = useTransform(scrollYProgress, [0, 0.45], ["#0f766e", "#71717a"]);
    const bachelorsLabelColor = useTransform(scrollYProgress, [0.55, 1], ["#71717a", "#0f766e"]);

    // Calculate position for the floating node along the scrollbar (from 0% to 100%)
    const handleLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="education" ref={sectionRef} className="relative h-[250vh] w-full bg-transparent">
            {/* Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                             {/* Fixed Title Section */}
                <div className="absolute top-28 md:top-36 left-6 md:left-32 right-6 z-20 pointer-events-none max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-100/50 shadow-sm">
                            <GraduationCap className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-sm font-bold text-teal-700 tracking-wildest uppercase">Academic Journey</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-light text-zinc-900 tracking-tight leading-[1.1] md:whitespace-nowrap">
                        A foundation of <span className="font-semibold text-teal-700">rigorous curiosity</span>.
                    </h3>
                </div>

                {/* Horizontal Sliding Editorial Canvas */}
                <m.div 
                    style={{ x }} 
                    className="flex w-[200vw] items-center relative z-10"
                >
                    {educationData.map((edu, idx) => {
                        const Icon = edu.icon;
                        return (
                            <m.div 
                                key={idx} 
                                style={{ opacity: edu.opacity }}
                                className="w-[100vw] flex justify-center px-6 md:px-24 flex-shrink-0"
                            >
                                <div className="w-full max-w-5xl relative">
                                    {/* Giant Year Backdrop */}
                                    <div className="text-[12vw] font-black text-teal-600/[0.04] tracking-tighter leading-none select-none -mb-8 md:-mb-12 font-sans">
                                        {edu.year}
                                    </div>
                                    
                                    {/* Content Card with Left Accent Line */}
                                    <div className={`border-l-4 ${edu.themeColor} pl-4 md:pl-12 space-y-6 md:space-y-8`}>
                                        
                                        {/* Degree Title & Institution */}
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <Icon className={`w-6 h-6 ${edu.themeColor}`} />
                                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{edu.timeline}</span>
                                            </div>
                                            <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-base md:text-xl font-bold text-zinc-700 mt-2">
                                                {edu.institution} <span className="text-sm text-zinc-400 font-normal">| {edu.location}</span>
                                            </p>
                                        </div>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-2">
                                            {/* Column 1: Core Details */}
                                            <div className="space-y-4">
                                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">Academic Focus</span>
                                                <p className="text-base md:text-lg text-zinc-800 leading-relaxed font-body font-medium">
                                                    {edu.highlights[0]}
                                                </p>
                                            </div>
                                            
                                            {/* Column 2: Highlights / Dissertation */}
                                            <div className="space-y-4">
                                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold block">Key Highlight</span>
                                                <p className="text-base md:text-lg text-zinc-800 leading-relaxed font-body font-medium">
                                                    {edu.highlights[1]}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Footer Info */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-zinc-200/50">
                                            <div className="flex flex-wrap gap-2">
                                                {edu.tags.map(tag => (
                                                    <span 
                                                        key={tag} 
                                                        className="px-2.5 py-1 rounded-full bg-white/80 border border-zinc-200 text-[10px] sm:text-xs font-bold text-zinc-800 shadow-sm"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="flex items-center gap-2.5">
                                                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Grade:</span>
                                                <span className="text-base md:text-lg font-extrabold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-xl">
                                                    {edu.performance}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        );
                    })}
                </m.div>

                {/* Fixed Scrolling Progress Timeline Indicator at the bottom */}
                <div className="absolute bottom-16 md:bottom-24 left-10 md:left-24 right-10 md:right-24 z-20 flex items-center justify-center">
                    <div className="flex items-center gap-8 w-full max-w-xl">
                        <m.span style={{ color: mastersLabelColor }} className="text-xs font-bold uppercase tracking-wider w-20">Masters</m.span>
                        <div className="relative flex-1 h-[4px] bg-zinc-200/60 rounded-full shadow-inner">
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
                        <m.span style={{ color: bachelorsLabelColor }} className="text-xs font-bold uppercase tracking-wider w-20 text-right">Bachelors</m.span>
                    </div>
                </div>
            </div>
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
        scaleOutput.push(0.85);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.4);
    }
    
    // Center point (checkpoint)
    if (range.length === 0 || range[range.length - 1] < checkpoint) {
        range.push(checkpoint);
        scaleOutput.push(1.25);
        colorOutput.push("#0d9488");
        opacityOutput.push(1.0);
    }

    // Right boundary
    if (checkpoint + 0.15 <= 1) {
        range.push(checkpoint + 0.15);
        scaleOutput.push(0.85);
        colorOutput.push("#a1a1aa");
        opacityOutput.push(0.4);
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
            <span className="text-[10px] font-black tracking-wider font-sans select-none">{year}</span>
        </m.div>
    );
}
