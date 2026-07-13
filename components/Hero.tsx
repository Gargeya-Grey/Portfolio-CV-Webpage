"use client";

import { m } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="bio" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent pt-20 sm:pt-0 scroll-mt-20">
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

                {/* Mesh Gradient Blobs (Toned Down) */}
                <m.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Top Left Teal */}
                    <m.div 
                        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] rounded-[40%_60%_70%_30%] bg-teal-300/30 mix-blend-multiply"
                        style={{ filter: "blur(90px)" }}
                    />
                    
                    {/* Top Right Cyan */}
                    <m.div 
                        animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[20%] -right-[10%] w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] rounded-[60%_40%_30%_70%] bg-cyan-300/30 mix-blend-multiply"
                        style={{ filter: "blur(90px)" }}
                    />

                    {/* Bottom Center Sky/Blue */}
                    <m.div 
                        animate={{ x: [0, 50, -50, 0], y: [0, -80, 0], scale: [1, 1.3, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[40%] left-[20%] w-[60vw] h-[40vw] min-w-[600px] min-h-[400px] rounded-[50%_50%_60%_40%] bg-sky-200/30 mix-blend-multiply"
                        style={{ filter: "blur(100px)" }}
                    />

                    {/* Center Emerald Accent */}
                    <m.div 
                        animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[20%] left-[40%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] rounded-[30%_70%_70%_30%] bg-emerald-200/20 mix-blend-multiply"
                        style={{ filter: "blur(80px)" }}
                    />
                </m.div>
            </div>

            {/* Foreground Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="space-y-12 md:space-y-20 lg:space-y-24 w-full max-w-7xl mx-auto flex flex-col items-center">
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
                        className="font-medium tracking-tight text-teal-950 leading-[1.1] flex flex-col items-center drop-shadow-sm px-4 w-full"
                    >
                        {/* Upper Segment: Architecting Intelligence. */}
                        <m.div
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
                        </m.div>
                        
                        {/* Lower Segment: Curating ART. */}
                        <m.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center sm:whitespace-nowrap text-teal-900/50 mt-6 md:mt-10 lg:mt-12 w-full will-change-transform"
                        >
                            <span className="text-[clamp(2.8rem,13vw,6rem)] sm:mr-[0.3em] inline-block">Curating</span>
                            <span className="text-[clamp(2.8rem,13vw,6rem)] font-bold inline-flex items-center">
                                ART
                                <span className="text-teal-500 font-black ml-1 scale-125 translate-y-[-0.05em]">.</span>
                            </span>
                        </m.div>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="w-full max-w-[95%] md:max-w-3xl lg:max-w-5xl mx-auto drop-shadow-sm px-6 font-body mt-12 md:mt-20 lg:mt-24 text-center flex flex-col items-center gap-4"
                    >
                        <h4 className="text-[clamp(1.2rem,2.6vw,1.6rem)] font-normal text-teal-950">
                            Founder @{" "}
                            <Link 
                                href="https://edudojo.ai" 
                                target="_blank" 
                                className="text-teal-600 hover:text-teal-700 transition-colors duration-200 inline-flex items-center gap-1 font-semibold"
                            >
                                Edudojo.ai
                            </Link>
                        </h4>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-2 text-[11px] md:text-[13px] font-bold tracking-[0.28em] uppercase text-zinc-600/90 font-sans">
                            <span>Bridging Computer Vision, LLMs & Psychology</span>
                            <span className="hidden sm:inline text-teal-500/60">•</span>
                            <span>Theatre Artist turned AI Engineer</span>
                        </div>
                    </m.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20"
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
