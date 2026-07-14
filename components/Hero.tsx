"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="bio"
            className="short-landscape-hero relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-20 pt-[max(5rem,calc(env(safe-area-inset-top,0px)+4.5rem))] pb-16 sm:pt-0 sm:pb-0"
        >
            {/* Ambient Background Mesh/Mosaic Gradient */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e9fcfc]">
                
                {/* Vertical Shades Overlay */}
                <div 
                    className="absolute inset-0 z-10 opacity-70"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.05) 100%)",
                        backgroundSize: "5vw 100%",
                    }}
                />

                {/* SVG Noise Overlay for Subtle Mosaic Texture */}
                <div className="absolute inset-0 z-20 opacity-[0.1] mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                        <filter id="mosaicNoise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#mosaicNoise)" />
                    </svg>
                </div>

                {/* Mesh Gradient Blobs (Toned Down) — cap min sizes so fold covers don't overflow layout */}
                <m.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                >
                    <m.div 
                        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[min(500px,80vw)] min-h-[min(500px,80vw)] rounded-[40%_60%_70%_30%] bg-teal-300/30 mix-blend-multiply"
                        style={{ filter: "blur(90px)" }}
                    />
                    
                    <m.div 
                        animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[45vw] h-[45vw] min-w-[min(450px,70vw)] min-h-[min(450px,70vw)] rounded-[60%_40%_30%_70%] bg-cyan-300/30 mix-blend-multiply"
                        style={{ filter: "blur(90px)" }}
                    />

                    <m.div 
                        animate={{ x: [0, 50, -50, 0], y: [0, -80, 0], scale: [1, 1.3, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[40%] left-[20%] w-[60vw] h-[40vw] min-w-[min(600px,90vw)] min-h-[min(400px,50vw)] rounded-[50%_50%_60%_40%] bg-sky-200/30 mix-blend-multiply"
                        style={{ filter: "blur(100px)" }}
                    />

                    <m.div 
                        animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] min-w-[min(300px,50vw)] min-h-[min(300px,50vw)] rounded-[30%_70%_70%_30%] bg-emerald-200/20 mix-blend-multiply"
                        style={{ filter: "blur(80px)" }}
                    />
                </m.div>
            </div>

            {/* Foreground Content */}
            <div className="w-full max-w-7xl mx-auto px-page relative z-10 flex flex-col items-center justify-center text-center">
                <div className="short-landscape-hero-space space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-24 w-full max-w-7xl mx-auto flex flex-col items-center">
                    {/* Statement Headline with Fluid Typography */}
                    <m.div
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
                        className="font-medium tracking-tight text-teal-950 leading-[1.08] sm:leading-[1.1] flex flex-col items-center drop-shadow-sm w-full min-w-0 px-0 sm:px-2"
                    >
                        {/*
                          Fluid type sized so "Architecting Intelligence" fits within iPad portrait (~1024)
                          without horizontal clip. Single-line only from xl (1280+) where width allows.
                        */}
                        <m.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col xl:flex-row items-center justify-center xl:whitespace-nowrap w-full min-w-0 will-change-transform gap-1 sm:gap-0"
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
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col xl:flex-row items-center justify-center xl:whitespace-nowrap text-teal-900/50 mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full min-w-0 will-change-transform"
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="short-landscape-hero-meta w-full max-w-2xl md:max-w-3xl xl:max-w-5xl mx-auto drop-shadow-sm px-2 sm:px-6 font-body mt-6 sm:mt-10 md:mt-14 lg:mt-16 xl:mt-24 text-center flex flex-col items-center gap-3 sm:gap-4"
                    >
                        <h4 className="hero-body-type text-[clamp(1.05rem,2.4vw,1.6rem)] font-normal text-teal-950">
                            Founder @{" "}
                            <Link 
                                href="https://edudojo.ai" 
                                target="_blank" 
                                className="text-teal-600 hover:text-teal-700 transition-colors duration-200 inline-flex items-center gap-1 font-semibold"
                            >
                                Edudojo.ai
                            </Link>
                        </h4>
                        {/* Stack taglines until xl so the teal bullet never floats alone between squeezed lines */}
                        <div className="hero-tagline-type flex flex-col xl:flex-row items-center justify-center gap-2 xl:gap-5 mt-1 sm:mt-2 text-[11px] md:text-[12px] xl:text-[13px] font-bold tracking-[0.12em] md:tracking-[0.16em] xl:tracking-[0.24em] uppercase text-zinc-600/90 font-sans max-w-lg md:max-w-2xl xl:max-w-none px-2">
                            <span className="text-center leading-relaxed">Bridging Computer Vision, LLMs & Psychology</span>
                            <span className="hidden xl:inline text-teal-500/60" aria-hidden>•</span>
                            <span className="text-center leading-relaxed">Theatre Artist turned AI Engineer</span>
                        </div>
                    </m.div>
                </div>
            </div>

            {/* Scroll Down Indicator — hide on very short landscape to free space */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="short-landscape-hide absolute bottom-3 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20"
                style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))" }}
            >
                <span className="text-[10px] sm:text-xs font-bold text-teal-900/50 uppercase tracking-widest drop-shadow-sm">Scroll</span>
                <div className="w-[24px] sm:w-[30px] h-[40px] sm:h-[50px] rounded-full border-2 border-teal-900/20 flex justify-center p-1 bg-white/30 backdrop-blur-sm shadow-sm">
                    <m.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-800/80 rounded-full"
                    />
                </div>
            </m.div>
        </section>
    );
}
