"use client";

import React from "react";
import { motion } from "framer-motion";

const GlassPanel = ({ delay = 0, style = {} }: { delay?: number, style?: React.CSSProperties }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: [0.03, 0.05, 0.03],
            scale: [1, 1.01, 1],
            rotate: [0, 1, 0]
        }}
        transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        }}
        className="absolute inset-0 bg-white/5 backdrop-blur-[120px] border border-white/10 rounded-sm"
        style={style}
    />
);

const SilkLine = ({ d, delay = 0, className = "" }: { d: string, delay?: number, className?: string }) => (
    <motion.svg
        viewBox="0 0 400 400"
        className={`absolute opacity-[0.08] ${className}`}
        initial={{ opacity: 0 }}
        animate={{ 
            opacity: [0.03, 0.08, 0.03],
            x: [0, 20, 0],
            y: [0, 10, 0],
        }}
        transition={{
            duration: 15 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        }}
    >
        <path d={d} fill="none" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="5 5" />
    </motion.svg>
);

export default function JapaneseGlassBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-zinc-50">
            {/* Base Vignette for Depth Framing */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(20,184,166,0.03)_100%)]" />

            {/* Shoji-style Grid Lines */}
            <motion.div 
                animate={{ opacity: [0.03, 0.05, 0.03] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)`,
                    backgroundSize: '20vw 25vh'
                }}
            />

            {/* Corner Framing Accents */}
            <div className="absolute inset-4 border border-teal-500/5 pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-teal-500/10" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-teal-500/10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-teal-500/10" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-teal-500/10" />

            {/* Floating Silk Lines (Edge Focused) */}
            <SilkLine d="M0,200 Q100,100 200,200 T400,200" className="top-0 left-[-10%] w-[50%] h-[30%]" delay={0} />
            <SilkLine d="M400,200 Q300,300 200,200 T0,200" className="bottom-0 right-[-10%] w-[50%] h-[30%]" delay={5} />
            <SilkLine d="M200,0 Q100,100 200,200 T200,400" className="top-0 right-0 w-[20%] h-[60%]" delay={8} />

            {/* Premium Glass Panels */}
            <div className="absolute inset-0 hidden sm:flex justify-around items-center px-[5vw]">
                <GlassPanel 
                    delay={0}
                    style={{ 
                        width: '25vw', 
                        height: '70vh', 
                        top: '10vh', 
                        left: '5vw',
                        backgroundColor: 'rgba(20, 184, 166, 0.02)',
                        borderColor: 'rgba(20, 184, 166, 0.1)'
                    }} 
                />
                <GlassPanel 
                    delay={5}
                    style={{ 
                        width: '30vw', 
                        height: '85vh', 
                        top: '5vh', 
                        left: '35vw',
                        backgroundColor: 'rgba(20, 184, 166, 0.03)',
                        borderColor: 'rgba(20, 184, 166, 0.12)'
                    }} 
                />
                <GlassPanel 
                    delay={10}
                    style={{ 
                        width: '20vw', 
                        height: '60vh', 
                        top: '25vh', 
                        right: '5vw',
                        backgroundColor: 'rgba(20, 184, 166, 0.02)',
                        borderColor: 'rgba(20, 184, 166, 0.1)'
                    }} 
                />
            </div>

            {/* Depth Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-teal-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-400/5 blur-[120px] rounded-full" />
        </div>
    );
}
