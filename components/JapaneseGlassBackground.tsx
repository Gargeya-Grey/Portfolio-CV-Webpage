"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlassPanel = ({ delay = 0, style = {} }: { delay?: number, style?: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: [0.02, 0.04, 0.02],
            scale: [1, 1.005, 1],
        }}
        transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        }}
        className="absolute inset-0 bg-white/5 backdrop-blur-2xl border border-white/5 rounded-sm"
        style={style}
    />
);

const SilkLine = ({ d, duration = 20, delay = 0, className = "" }: { d: string; duration?: number; delay?: number; className?: string }) => (
    <motion.svg
        viewBox="0 0 400 400"
        className={`absolute opacity-[0.05] ${className}`}
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: [0.02, 0.05, 0.02],
            x: [0, 10, 0],
        }}
        transition={{
            duration: duration + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        }}
    >
        <motion.path
            d={d}
            stroke="rgba(20, 184, 166, 0.2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    </motion.svg>
);


export default function JapaneseGlassBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const pressProgress = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const springPress = useSpring(pressProgress, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        const handleMouseDown = () => pressProgress.set(1);
        const handleMouseUp = () => pressProgress.set(0);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [mouseX, mouseY, pressProgress]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-zinc-50 pointer-events-none">
            {/* Base Vignette for Depth Framing */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(20,184,166,0.03)_100%)]" />

            {/* Shoji-style Precision Grid (Subtle Base) */}
            <motion.div 
                animate={{ opacity: [0.1, 0.18, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 0px 0px, #14b8a6 2.2px, transparent 0),
                        linear-gradient(to right, rgba(20, 184, 166, 0.26) 1.5px, transparent 0), 
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.26) 1.5px, transparent 0)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Shoji Pulse Wave (Subtle 3D Kinetic Sweep) */}
            <motion.div
                animate={{ 
                    maskPosition: [
                        '-150% -150%', 
                        '150% 150%'
                    ]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut" // Non-linear 3D trajectory
                }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 0px 0px, #14b8a6 4px, transparent 0),
                        linear-gradient(to right, rgba(20, 184, 166, 0.3) 1.5px, transparent 0), 
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.3) 1.5px, transparent 0)
                    `,
                    backgroundSize: '80px 80px',
                    opacity: 0.3,
                    WebkitMaskImage: 'linear-gradient(135deg, transparent 35%, black 50%, transparent 65%)',
                    maskImage: 'linear-gradient(135deg, transparent 35%, black 50%, transparent 65%)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: '300% 300%',
                    maskSize: '300% 300%',
                }}
            />

            {/* Interactive Shoji Ignite (Click Driven) */}
            <motion.div 
                className="absolute inset-0 transition-opacity duration-200"
                style={{
                    opacity: useTransform(springPress, [0, 1], [0, 0.48]),
                    scale: useTransform(springPress, [0, 1], [0.98, 1]),
                    backgroundImage: `
                        radial-gradient(circle at 0px 0px, #14b8a6 4px, transparent 0),
                        linear-gradient(to right, rgba(20, 184, 166, 0.6) 2px, transparent 0), 
                        linear-gradient(to bottom, rgba(20, 184, 166, 0.6) 2px, transparent 0)
                    `,
                    backgroundSize: '80px 80px',
                    WebkitMaskImage: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(240px circle at ${Number(x)}px ${Number(y)}px, black 0%, transparent 100%)`
                    ),
                    maskImage: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(240px circle at ${Number(x)}px ${Number(y)}px, black 0%, transparent 100%)`
                    )
                }}
            />


            {/* Corner Framing Accents */}
            <div className="absolute inset-4 border border-teal-500/5 pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-teal-500/5" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-teal-500/5" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-teal-500/5" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-teal-500/5" />

            {/* Floating Silk Lines (Edge Focused) */}
            <SilkLine d="M0,200 Q100,100 200,200 T400,200" className="top-0 left-[-10%] w-[50%] h-[30%]" delay={0} />
            <SilkLine d="M400,200 Q300,300 200,200 T0,200" className="bottom-0 right-[-10%] w-[50%] h-[30%]" delay={10} />

            {/* Premium Glass Panels (Very Subtle) */}
            <div className="absolute inset-0 hidden sm:flex justify-around items-center px-[5vw] pointer-events-none">
                <GlassPanel 
                    delay={0}
                    style={{ 
                        width: '25vw', 
                        height: '70vh', 
                        top: '10vh', 
                        left: '5vw',
                        backgroundColor: 'rgba(20, 184, 166, 0.01)',
                        borderColor: 'rgba(20, 184, 166, 0.05)'
                    }} 
                />
                <GlassPanel 
                    delay={10}
                    style={{ 
                        width: '20vw', 
                        height: '60vh', 
                        top: '25vh', 
                        right: '5vw',
                        backgroundColor: 'rgba(20, 184, 166, 0.01)',
                        borderColor: 'rgba(20, 184, 166, 0.05)'
                    }} 
                />
            </div>
        </div>
    );
}
