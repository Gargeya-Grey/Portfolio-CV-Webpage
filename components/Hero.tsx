"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="bio" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 sm:pt-0 scroll-mt-20">
            {/* Foreground Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="space-y-12 md:space-y-20 lg:space-y-24 w-full max-w-7xl mx-auto flex flex-col items-center">
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
                        className="font-medium tracking-tight text-zinc-800 leading-[1.1] flex flex-col items-center drop-shadow-sm px-4 w-full"
                    >
                        {/* Upper Segment: Architecting Intelligence. */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center sm:whitespace-nowrap w-full will-change-transform"
                        >
                            <span className="text-[clamp(2.8rem,13vw,6rem)] sm:mr-[0.3em] inline-block">Architecting</span>
                            <span className="text-[clamp(2.8rem,13vw,6rem)] font-bold inline-flex items-center">
                                Intelligence
                                <span className="text-teal-500 font-black ml-1 scale-125 translate-y-[-0.05em]">.</span>
                            </span>
                        </motion.div>
                        
                        {/* Lower Segment: Curating ART. */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center sm:whitespace-nowrap text-zinc-500 mt-6 md:mt-10 lg:mt-12 w-full will-change-transform"
                        >
                            <span className="text-[clamp(2.8rem,13vw,6rem)] sm:mr-[0.3em] inline-block">Curating</span>
                            <span className="text-[clamp(2.8rem,13vw,6rem)] font-bold inline-flex items-center">
                                ART
                                <span className="text-teal-500 font-black ml-1 scale-125 translate-y-[-0.05em]">.</span>
                            </span>
                        </motion.div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="text-[clamp(1.1rem,3vw,1.5rem)] lg:text-[1.75rem] text-zinc-600 leading-[1.6] font-normal w-full max-w-[95%] md:max-w-3xl lg:max-w-5xl mx-auto drop-shadow-sm px-6 hyphens-auto font-body mt-4 text-center"
                    >
                        <span className="group relative inline-block cursor-help font-medium text-zinc-900 border-b-2 border-zinc-300 border-dashed pb-0.5 transition-colors duration-200 hover:border-zinc-600">
                            Founder
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-white/80 backdrop-blur-xl border border-white/30 shadow-xl shadow-zinc-200/50 rounded-2xl text-xs sm:text-sm font-semibold text-zinc-600 opacity-0 transform translate-y-2 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap pointer-events-none">
                                AI revolution in Evaluation & Education
                            </span>
                        </span>{" "}
                        @ Edudojo.ai. A Philomath bridging Computer Vision, LLMs, and Human Psychology. Formerly Theatre, now AI Engineer.
                    </motion.p>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20"
            >
                <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest drop-shadow-sm">Scroll</span>
                <div className="w-[24px] sm:w-[30px] h-[40px] sm:h-[50px] rounded-full border-2 border-zinc-400/50 flex justify-center p-1 bg-white/30 backdrop-blur-sm shadow-sm">
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
