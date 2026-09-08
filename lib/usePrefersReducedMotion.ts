"use client";

import { useEffect, useState } from "react";

/**
 * Always `false` on the server and during hydration.
 * Reads `prefers-reduced-motion` only after mount so the first HTML matches.
 */
export function usePrefersReducedMotion(): boolean {
    const [reduce, setReduce] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduce(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return reduce;
}
