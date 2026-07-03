"use client";

import React from 'react';

export default function JapaneseGlassBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-white pointer-events-none">
            {/* Shoji-style Precision Grid / Japanese Mat Overlay (Neutral Slate/Zinc on Solid White) */}
            <div 
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 1.2px 1.2px, #a1a1aa 1.2px, transparent 0),
                        linear-gradient(to right, rgba(24, 24, 27, 0.03) 1px, transparent 0), 
                        linear-gradient(to bottom, rgba(24, 24, 27, 0.03) 1px, transparent 0)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
}
