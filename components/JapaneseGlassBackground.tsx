"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GlassPanel = ({ style = {} }: { style?: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        className="absolute inset-0 bg-white/5 backdrop-blur-[2px] border border-white/10 rounded-sm will-change-transform"
        style={style}
    />
);

const SilkLine = ({ d, className = "" }: { d: string; className?: string }) => (
    <motion.svg
        viewBox="0 0 400 400"
        className={`absolute ${className} pointer-events-none opacity-10`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
    >
        <path
            d={d}
            stroke="rgba(20, 184, 166, 0.3)"
            strokeWidth="0.8"
            fill="none"
        />
    </motion.svg>
);


export default function JapaneseGlassBackground() {
    // High-performance MotionValues for GPU-accelerated movement
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const mouseOpacity = useMotionValue(0);

    // Optimized spring physics (slightly stiffer for better sync with less overhead)
    const springX = useSpring(mouseX, { stiffness: 300, damping: 50 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 50 });
    const springOpacity = useSpring(mouseOpacity, { stiffness: 300, damping: 40 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            mouseOpacity.set(1);
        };

        const handleMouseLeave = () => {
            mouseOpacity.set(0);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY, mouseOpacity]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-zinc-50 pointer-events-none">
            {/* Base Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(20,184,166,0.03)_100%)]" />

            {/* Shoji-style Precision Grid (Static for core performance) */}
            <div 
                className="absolute inset-0 opacity-[0.18]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 1.2px 1.2px, #14b8a6 1.2px, transparent 0),
                        linear-gradient(to right, rgba(20, 184, 166, 0.15) 1px, transparent 0), 
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.15) 1px, transparent 0)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Interactive Hover Glow Layer — GPU Accelerated via translate3d and reduced blur */}
            <motion.div 
                className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none will-change-transform blur-[60px]"
                style={{
                    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, transparent 70%)',
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: springOpacity,
                }}
            />

            {/* Corner Framing Accents */}
            <div className="absolute inset-4 border border-teal-500/5 pointer-events-none" />

            {/* Simplified Glass Panel */}
            <div className="absolute inset-0 hidden sm:block pointer-events-none">
                <GlassPanel 
                    style={{ 
                        width: '30vw', 
                        height: '100vh', 
                        top: '0', 
                        left: '0',
                        backgroundColor: 'rgba(20, 184, 166, 0.01)',
                        borderColor: 'rgba(20, 184, 166, 0.03)'
                    }} 
                />
            </div>
        </div>
    );
}
