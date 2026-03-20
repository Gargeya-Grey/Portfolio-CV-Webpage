"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-50 pt-20">
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Typography */}
                <div className="space-y-10 z-10">
                    <div className="space-y-6">
                        {/* Masthead: Editorial Name */}
                        <div className="overflow-hidden pb-4">
                            <motion.h1
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.16, 1, 0.3, 1],
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 5
                                }}
                                className="flex flex-col text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] font-serif tracking-tighter leading-[0.85] w-min"
                            >
                                {/* First Name - Teal Box */}
                                <div className="bg-[#14b8a6] text-white w-full text-center pt-2 md:pt-3 pb-4 md:pb-5 mb-0 md:mb-1 leading-[1]">
                                    Gargeya
                                </div>

                                {/* Last Name */}
                                <div className="text-zinc-900 w-full">
                                    Sharma.
                                </div>
                            </motion.h1>
                        </div>

                        {/* Statement Headline */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.2,
                                    }
                                }
                            }}
                            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-800 leading-[1.1]"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="block"
                            >
                                Architecting Intelligence.
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                }}
                                className="block text-zinc-400 mt-2"
                            >
                                Curating Art.
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-lg font-medium"
                    >
                        <span className="group relative inline-block cursor-help font-medium text-zinc-800 border-b border-zinc-300 border-dashed pb-0.5 transition-colors hover:border-zinc-600">
                            Co-Founder
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-zinc-200/50 rounded-2xl text-xs font-semibold text-zinc-600 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                                Building Autonomous Agents
                            </span>
                        </span>{" "}
                        @ evvolv.ai. A Philomath bridging Computer Vision, LLMs, and Human Psychology. Formerly Theatre, now Deep Learning.
                    </motion.p>

                </div>

                {/* Right Column: Prominent Abstract Visual */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-[1200px]">
                    {/* Glowing Core Background */}
                    <div className="absolute w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />

                    {/* Central Solid Cube/Diamond */}
                    <motion.div
                        className="absolute w-48 h-48 bg-zinc-900 rounded-3xl shadow-2xl shadow-zinc-900/40 flex items-center justify-center"
                        animate={{
                            rotateX: [0, 180, 360],
                            rotateY: [0, 180, 360],
                            rotateZ: [0, 90, 180]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Front Face Engraving */}
                        <span
                            className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-tighter text-zinc-700 select-none"
                            style={{ transform: "translateZ(1px)", backfaceVisibility: "hidden" }}
                        >
                            GS
                        </span>
                        {/* Back Face Engraving */}
                        <span
                            className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-tighter text-zinc-700 select-none"
                            style={{ transform: "rotateY(180deg) translateZ(1px)", backfaceVisibility: "hidden" }}
                        >
                            GS
                        </span>
                    </motion.div>

                    {/* Surrounding Dynamic Rings (Thick & Visible) */}
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={`ring-${i}`}
                            className="absolute rounded-full border-4"
                            style={{
                                width: 280 + i * 100,
                                height: 280 + i * 100,
                                borderColor: i === 1 ? "#14b8a6" : i === 0 ? "#27272a" : "#e4e4e7",
                                borderStyle: i === 2 ? "dashed" : "solid",
                                transformStyle: "preserve-3d"
                            }}
                            animate={{
                                rotateX: i % 2 === 0 ? [0, 360] : [360, 0],
                                rotateY: i % 2 !== 0 ? [0, 360] : [360, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                rotateX: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
                                rotateY: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                                scale: { duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                    ))}

                    {/* Orbiting Orbs */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={`orb-${i}`}
                            className="absolute w-8 h-8 rounded-full shadow-lg"
                            style={{
                                backgroundColor: i % 2 === 0 ? "#14b8a6" : "#18181b", // mix of teal and almost-black
                                top: "50%",
                                left: "50%",
                                marginTop: -16,
                                marginLeft: -16,
                            }}
                            animate={{
                                x: [0, Math.cos(i * (Math.PI / 2)) * 300, 0],
                                y: [0, Math.sin(i * (Math.PI / 2)) * 300, 0],
                                scale: [0, 1.5, 0],
                                zIndex: [0, 50, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Scroll</span>
                <div className="w-[30px] h-[50px] rounded-full border-2 border-zinc-300 flex justify-center p-1">
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section >
    );
}
