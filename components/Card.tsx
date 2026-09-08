"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT } from "@/lib/motion";

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
    const reduce = useReducedMotion();

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
            initial={reduce ? false : { opacity: 0, transform: "translateY(8px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: DURATION.enter, ease: EASE_OUT }}
            viewport={{ once: true }}
        >
            {children}
        </m.div>
    );
}
