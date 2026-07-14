"use client";

import { useEffect, useState } from "react";

/**
 * Sticky vertical→horizontal scroll is for true desktop mouse UX only.
 *
 * Off for:
 * - width < 1280
 * - short viewports (height < 900)
 * - tablet-class landscape box (e.g. iPad 1366×1024) even with trackpad
 * - coarse / no-hover pointers (touch-first)
 */
export function computeStickyScrollMode(
    width = typeof window !== "undefined" ? window.innerWidth : 0,
    height = typeof window !== "undefined" ? window.innerHeight : 0
): boolean {
    if (width < 1280 || height < 900) return false;

    // iPad landscape and similar: wide enough for 1280 sticky but needs native swipe
    if (width <= 1400 && height <= 1100) return false;

    if (typeof window === "undefined") return false;

    const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    return desktopPointer;
}

export function useStickyScrollMode(): boolean {
    // Default false (touch-safe) to avoid sticky flash on tablets during hydration
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const update = () => setSticky(computeStickyScrollMode());
        update();

        const mqHover = window.matchMedia("(hover: hover)");
        const mqPointer = window.matchMedia("(pointer: fine)");

        let timer: ReturnType<typeof setTimeout>;
        const onResize = () => {
            clearTimeout(timer);
            timer = setTimeout(update, 80);
        };

        window.addEventListener("resize", onResize);
        window.visualViewport?.addEventListener("resize", onResize);
        mqHover.addEventListener("change", update);
        mqPointer.addEventListener("change", update);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", onResize);
            window.visualViewport?.removeEventListener("resize", onResize);
            mqHover.removeEventListener("change", update);
            mqPointer.removeEventListener("change", update);
        };
    }, []);

    return sticky;
}
