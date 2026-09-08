import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="bio"
            className="short-landscape-hero relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden bg-transparent scroll-mt-8 pt-[max(2.5rem,env(safe-area-inset-top,0px))] pb-[max(7.5rem,calc(env(safe-area-inset-bottom,0px)+6rem))]"
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

            <div className="w-full max-w-4xl mx-auto px-page relative z-10 flex flex-col items-center justify-center text-center">
                <div className="short-landscape-hero-space flex flex-col items-center w-full">
                    <div className="hero-enter hero-enter-1 flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
                        <span className="name-pill inline-flex items-center rounded-full bg-teal-700 text-white px-5 sm:px-6 py-2 sm:py-2.5 text-lg sm:text-xl font-semibold tracking-tight">
                            Gargeya
                        </span>
                        <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">
                            Sharma
                        </span>
                    </div>

                    <h1 className="hero-enter hero-enter-2 font-medium tracking-tight text-teal-950 leading-[1.15] break-balance text-[clamp(2.15rem,6vw,4.25rem)]">
                        Architecting Intelligence.
                    </h1>
                    <p className="hero-enter hero-enter-2 mt-3 sm:mt-4 font-medium tracking-tight text-teal-900/45 leading-[1.15] break-balance text-[clamp(1.85rem,5.2vw,3.5rem)]">
                        Curating Art.
                    </p>

                    <div className="hero-enter hero-enter-3 mt-10 sm:mt-14 flex flex-col items-center gap-4 max-w-2xl">
                        <p className="text-[clamp(1.05rem,2.2vw,1.45rem)] font-normal text-teal-950 font-body">
                            Founder @{" "}
                            <Link
                                href="https://edudojo.ai"
                                target="_blank"
                                className="pressable text-teal-600 hover:text-teal-700 transition-colors duration-[180ms] ease inline-flex items-center font-semibold"
                            >
                                Edudojo.ai
                            </Link>
                        </p>
                        <p className="text-sm sm:text-base text-zinc-600 font-body leading-relaxed max-w-xl">
                            Bridging student-centric pedagogy, LLMs, and deeper human evaluation.
                        </p>
                        <p className="text-sm sm:text-base text-zinc-600 font-body leading-relaxed">
                            Theatre artist turned{" "}
                            <span className="bg-teal-600 text-white px-1.5 py-0.5 rounded-sm font-semibold tracking-tight">
                                AI Engineer
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
