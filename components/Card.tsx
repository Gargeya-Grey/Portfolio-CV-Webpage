"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
    const reduce = usePrefersReducedMotion();

    return (
        <m.div
            className={`
                surface-card
                bg-white/50 backdrop-blur-sm
                rounded-3xl
                border border-teal-100/50
                p-6
                cursor-default
                ${className || ""}
            `}
            initial={{ opacity: 0, transform: "translateY(8px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: reduce ? 0 : DURATION.enter, ease: EASE_OUT }}
            viewport={{ once: true }}
        >
            {children}
        </m.div>
    );
}
