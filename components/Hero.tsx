import { SITE } from "@/lib/site";

export default function Hero() {
    return (
        <section
            id="bio"
            className="short-landscape-hero relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-8 pt-[max(2.5rem,env(safe-area-inset-top,0px))] pb-[max(7.5rem,calc(env(safe-area-inset-bottom,0px)+6rem))]"
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e9fcfc]">
                <div className="hero-columns absolute inset-0 z-10" />

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

            <div className="w-full max-w-5xl mx-auto px-page relative z-10 flex flex-col items-center justify-center text-center">
                <div className="short-landscape-hero-space flex flex-col items-center w-full">
                    <div className="hero-enter hero-enter-1 flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                        <span className="name-pill inline-flex items-center rounded-full bg-teal-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xl sm:text-xl font-semibold tracking-tight">
                            Gargeya
                        </span>
                        <span className="text-3xl sm:text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">
                            Sharma
                        </span>
                    </div>

                    <h1 className="hero-enter hero-enter-2 flex flex-col items-center px-1 font-medium tracking-tight leading-[1.08] sm:leading-[1.15] break-balance">
                        <span className="text-teal-950 text-[clamp(2.55rem,12.2vw,3.35rem)] sm:text-[clamp(1.75rem,6.2vw,4.25rem)]">
                            Architecting Intelligence.
                        </span>
                        <span className="mt-2 sm:mt-3 text-teal-900/60 sm:text-teal-900/55 text-[clamp(2rem,9.4vw,2.7rem)] sm:text-[clamp(1.5rem,5.2vw,3.5rem)]">
                            Curating Art.
                        </span>
                    </h1>
                    <div
                        className="hero-title-rule hero-enter hero-enter-2 mt-6 sm:mt-8 mb-8 sm:mb-12 h-px w-16 sm:w-24 bg-teal-800/35"
                        aria-hidden
                    />

                    <div className="hero-enter hero-enter-3 flex flex-col items-center gap-5 sm:gap-6 max-w-3xl w-full">
                        <p className="text-[clamp(1.25rem,4.4vw,1.75rem)] font-medium text-teal-950 font-body tracking-tight">
                            Founder @{" "}
                            <a
                                href={SITE.edudojo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pressable text-teal-600 hover:text-teal-700 transition-colors duration-[180ms] ease inline-flex items-center font-semibold"
                            >
                                Edudojo.ai
                            </a>
                        </p>
                        <p className="text-[clamp(1.125rem,3.8vw,1.5rem)] text-zinc-700 font-body leading-relaxed max-w-2xl px-1 break-balance">
                            In love with AI and psychology, especially how people learn, get evaluated, and work more efficiently.
                        </p>
                        <p className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-x-1.5 sm:gap-y-0 text-[clamp(1.125rem,3.8vw,1.5rem)] text-zinc-700 font-body leading-relaxed">
                            <span>Artist turned</span>
                            <span className="name-pill inline-flex items-center rounded-full bg-teal-700 text-white px-4 py-1.5 sm:px-2.5 sm:py-0.5 font-semibold tracking-tight">
                                AI Engineer.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
