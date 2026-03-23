"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-32 pb-48 md:pb-32">
            {/* Foreground Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="space-y-12 md:space-y-20 lg:space-y-24 w-full max-w-6xl mx-auto flex flex-col items-center">
                    {/* Masthead: Expanded Name with Tiered Fluid Typography */}
                    <div className="w-full overflow-hidden pb-8 md:pb-12 px-4 flex justify-center">
                        <motion.h1
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8 text-[clamp(2.2rem,13vw,4.5rem)] md:text-[clamp(4.5rem,10vw,6rem)] lg:text-[clamp(5rem,8vw,8.5rem)] font-serif tracking-tighter leading-[0.9] w-full max-w-full px-2"
                        >
                            <span className="bg-[#14b8a6] text-white px-5 md:px-12 py-2 md:py-6 shadow-2xl shadow-teal-900/20 break-words">
                                Gargeya
                            </span>
                            <span className="text-zinc-900 drop-shadow-sm break-words">
                                Sharma
                            </span>
                        </motion.h1>
                    </div>

                    {/* Statement Headline with Fluid Typography */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.4,
                                }
                            }
                        }}
                        className="text-[clamp(1.15rem,5.5vw,4.5rem)] font-medium tracking-tight text-zinc-800 leading-[1.2] flex flex-col items-center drop-shadow-sm px-6"
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
                            className="block text-zinc-500 mt-2 md:mt-4"
                        >
                            Curating Art.
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="text-[clamp(1rem,3vw,1.25rem)] lg:text-2xl text-zinc-600 leading-relaxed font-normal w-full max-w-[95%] md:max-w-3xl lg:max-w-4xl mx-auto mt-12 md:mt-24 drop-shadow-sm px-6 hyphens-auto"
                    >
                        <span className="group relative inline-block cursor-help font-medium text-zinc-900 border-b-2 border-zinc-300 border-dashed pb-0.5 transition-colors hover:border-zinc-600">
                            Co-Founder
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-xl shadow-zinc-200/50 rounded-2xl text-xs sm:text-sm font-semibold text-zinc-600 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                                Building Autonomous Agents
                            </span>
                        </span>{" "}
                        @ evvolv.ai. A Philomath bridging Computer Vision, LLMs, and Human Psychology. Formerly Theatre, now Deep Learning.
                    </motion.p>
                </div>
            </div>

            {/* Scroll Down Indicator - Optimization for small viewports */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20"
            >
                <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest drop-shadow-sm">Scroll</span>
                <div className="w-[24px] sm:w-[30px] h-[40px] sm:h-[50px] rounded-full border-2 border-zinc-400/50 flex justify-center p-1 bg-white/20 backdrop-blur-sm shadow-sm">
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
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-zinc-600 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}

