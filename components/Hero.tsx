import { Fragment } from "react";

import { SITE } from "@/lib/site";

/** The three fascinations the sentence is built on. The serif carries them. */
const FASCINATIONS = ["learn", "get evaluated", "work more efficiently"];

export default function Hero() {
    return (
        <section
            id="bio"
            className="short-landscape-hero relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-8 pt-[max(2.5rem,env(safe-area-inset-top,0px))] pb-[max(7.5rem,calc(env(safe-area-inset-bottom,0px)+6rem))]"
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e9fcfc]">
                <div className="hero-columns absolute inset-0 z-10" />

                <div aria-hidden className="absolute left-1/2 top-1/2 z-[15] h-[68%] w-[min(92vw,56rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl" />
                <div aria-hidden className="absolute left-1/2 top-1/2 z-[16] h-[60%] w-[min(88vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-[2.5rem] backdrop-blur-[3px]" />

                <div className="absolute inset-0 z-20 opacity-[0.07] mix-blend-overlay" aria-hidden>
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

            <div className="hero-drift w-full max-w-5xl mx-auto px-page relative z-10 flex flex-col items-center justify-center text-center">
                <div className="short-landscape-hero-space flex flex-col items-center w-full">
                    <div className="hero-enter hero-enter-1 flex items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-14">
                        <span aria-hidden className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-teal-900/50" />
                        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.42em] text-teal-950">
                            Gargeya&ensp;Sharma
                        </p>
                        <span aria-hidden className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-teal-900/50" />
                    </div>

                    <h1 className="hero-enter hero-enter-2 flex flex-col items-center px-1 tracking-tight leading-[1.04] sm:leading-[1.08] break-balance">
                        <span className="font-semibold text-teal-950 text-[clamp(2.6rem,11vw,3.4rem)] sm:text-[clamp(2.5rem,7vw,5rem)] tracking-[-0.032em]">
                            Architecting Intelligence.
                        </span>
                        <span className="mt-4 sm:mt-5 font-serif italic font-medium text-teal-800 text-[clamp(2rem,8.6vw,2.7rem)] sm:text-[clamp(2rem,5.6vw,3.9rem)] tracking-[0.005em]">
                            Curating Art.
                        </span>
                    </h1>
                    <div className="hero-enter hero-enter-3 mt-8 sm:mt-10 flex flex-col items-center max-w-3xl w-full">
                        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-white/70 py-2 pl-4 pr-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_28px_rgba(15,118,110,0.12)] backdrop-blur-md text-sm sm:text-[15px] font-semibold tracking-[0.02em] text-teal-950">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                            </span>
                            Founder @{" "}
                            <a
                                href={SITE.edudojo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pressable text-teal-700 hover:text-teal-800 transition-colors duration-[180ms] ease font-semibold"
                            >
                                Edudojo.ai
                            </a>
                        </p>
                        <p className="mt-14 sm:mt-20 max-w-xl px-1 font-body text-[clamp(1.05rem,3.4vw,1.25rem)] font-normal leading-[1.85] tracking-[0.01em] text-zinc-700 text-balance">
                            In love with AI and psychology, especially how people{" "}
                            <span className="hero-coda block">
                                <span
                                    aria-hidden
                                    className="hero-coda-item mx-auto mb-5 mt-7 block h-px w-10 bg-gradient-to-r from-transparent via-teal-900/40 to-transparent sm:hidden"
                                    style={{ animationDelay: "380ms" }}
                                />
                                {FASCINATIONS.map((fascination, index) => (
                                    <Fragment key={fascination}>
                                        {index > 0 && (
                                            <>
                                                {" "}
                                                <span aria-hidden className="mx-[0.2em] hidden text-teal-500 sm:inline">
                                                    &middot;
                                                </span>{" "}
                                            </>
                                        )}
                                        <span
                                            className="hero-coda-item block whitespace-nowrap leading-[1.6] sm:inline sm:leading-[1.85]"
                                            style={{ animationDelay: `${460 + index * 80}ms` }}
                                        >
                                            <span className="font-serif italic font-medium text-teal-800 text-[1.12em] tracking-[0.005em]">
                                                {fascination}
                                            </span>
                                            {index === FASCINATIONS.length - 1 ? "." : null}
                                        </span>
                                    </Fragment>
                                ))}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
