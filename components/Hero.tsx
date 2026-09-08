"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { DURATION, EASE_OUT, STAGGER } from "@/lib/motion";

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section
            id="bio"
            className="short-landscape-hero relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-20 pt-[max(5rem,calc(env(safe-area-inset-top,0px)+4.5rem))] pb-16 sm:pt-24 sm:pb-16"
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e9fcfc]">
                <div
                    className="absolute inset-0 z-10 opacity-70"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.05) 100%)",
                        backgroundSize: "5vw 100%",
                    }}
                />

                <div className="absolute inset-0 z-[12] hero-rings" />

                <div className="absolute inset-0 z-20 opacity-[0.07] mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                        <filter id="mosaicNoise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#mosaicNoise)" />
                    </svg>
                </div>

                <div className="absolute inset-0 z-0">
                    <div className="ambient-blob ambient-blob-a" />
                    <div className="ambient-blob ambient-blob-b" />
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-page relative z-10 flex flex-col items-center justify-center text-center">
                <div className="short-landscape-hero-space space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-24 w-full max-w-7xl mx-auto flex flex-col items-center">
                    <m.div
                        initial={reduce ? false : "hidden"}
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: STAGGER,
                                    delayChildren: 0.12,
                                }
                            }
                        }}
                        className="font-medium tracking-tight text-teal-950 leading-[1.08] sm:leading-[1.1] flex flex-col items-center w-full min-w-0 px-0 sm:px-2"
                    >
                        <m.div
                            variants={{
                                hidden: { opacity: 0, transform: "translateY(12px)" },
                                visible: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                    transition: { duration: DURATION.enter + 0.16, ease: EASE_OUT }
                                }
                            }}
                            className="flex flex-col xl:flex-row items-center justify-center xl:whitespace-nowrap w-full min-w-0 gap-1 sm:gap-0"
                        >
                            <span className="short-landscape-hero-type hero-display-type sm:mr-[0.25em] inline-block break-balance">
                                Architecting
                            </span>
                            <span className="short-landscape-hero-type hero-display-type font-bold inline-flex items-center max-w-full">
                                Intelligence
                                <span className="text-teal-500 font-black ml-0.5 sm:ml-1 scale-125 translate-y-[-0.05em]">.</span>
                            </span>
                        </m.div>

                        <m.div
                            variants={{
                                hidden: { opacity: 0, transform: "translateY(12px)" },
                                visible: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                    transition: { duration: DURATION.enter + 0.16, ease: EASE_OUT }
                                }
                            }}
                            className="flex flex-col xl:flex-row items-center justify-center xl:whitespace-nowrap text-teal-900/50 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full min-w-0"
                        >
                            <span className="short-landscape-hero-type hero-display-type sm:mr-[0.25em] inline-block">
                                Curating
                            </span>
                            <span className="short-landscape-hero-type hero-display-type font-bold inline-flex items-center">
                                ART
                                <span className="text-teal-500 font-black ml-0.5 sm:ml-1 scale-125 translate-y-[-0.05em]">.</span>
                            </span>
                        </m.div>
                    </m.div>
                    <m.div
                        initial={reduce ? false : { opacity: 0, transform: "translateY(10px)" }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        transition={{ duration: DURATION.enter, delay: reduce ? 0 : 0.28, ease: EASE_OUT }}
                        className="short-landscape-hero-meta w-full max-w-2xl md:max-w-3xl xl:max-w-5xl mx-auto px-2 sm:px-6 font-body mt-6 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-24 text-center flex flex-col items-center gap-3 sm:gap-4"
                    >
                        <h4 className="hero-body-type text-[clamp(1.05rem,2.4vw,1.6rem)] font-normal text-teal-950">
                            Founder @{" "}
                            <Link
                                href="https://edudojo.ai"
                                target="_blank"
                                className="pressable text-teal-600 hover:text-teal-700 transition-colors duration-[180ms] ease inline-flex items-center gap-1 font-semibold"
                            >
                                Edudojo.ai
                            </Link>
                        </h4>
                        <div className="hero-tagline-type flex flex-col items-center justify-center gap-2 mt-2 text-[11px] md:text-[12px] xl:text-[13px] font-semibold tracking-[0.1em] md:tracking-[0.14em] xl:tracking-[0.16em] uppercase text-zinc-600/90 font-sans max-w-lg md:max-w-2xl xl:max-w-none px-2">
                            <span className="text-center leading-relaxed">Bridging Student-Centric Pedagogy, LLMs & Deeper Human Evaluation</span>
                            <span className="text-center leading-relaxed">
                                Theatre Artist turned{" "}
                                <span className="bg-teal-600 text-white px-1.5 py-0.5 rounded-sm inline-block ml-1 font-extrabold">
                                    AI Engineer
                                </span>
                            </span>
                        </div>
                    </m.div>
                </div>
            </div>

            <m.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduce ? 0 : 0.7, duration: DURATION.enter, ease: EASE_OUT }}
                className="short-landscape-hide absolute bottom-3 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20"
                style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))" }}
            >
                <span className="text-[10px] sm:text-xs font-semibold text-teal-900/45 uppercase tracking-[0.18em]">Scroll</span>
                <div className="w-[22px] sm:w-[26px] h-[36px] sm:h-[44px] rounded-full border border-teal-900/18 flex justify-center p-1.5 bg-white/35 backdrop-blur-sm">
                    <div className="scroll-dot w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-800/80 rounded-full" />
                </div>
            </m.div>
        </section>
    );
}
