"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { DURATION, EASE_OUT, SPRING_UI, STAGGER } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const navItems = [
    { name: "Bio", href: "#bio" },
    { name: "Ventures", href: "#ventures" },
    { name: "Education", href: "#education" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "mailto:gargeya.sharma@gmail.com" },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState<string>("");
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const skipMenuAnimation = useRef(false);
    const reduce = usePrefersReducedMotion();

    const closeMenu = useCallback((options?: { instant?: boolean }) => {
        skipMenuAnimation.current = Boolean(options?.instant);
        setMenuOpen(false);
    }, []);

    const openMenu = useCallback(() => {
        skipMenuAnimation.current = false;
        setMenuOpen(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 300) {
                setActiveSection("");
                return;
            }

            const sections = navItems.filter(item => item.href.startsWith("#")).map(item => item.href.replace("#", ""));
            const buffer = Math.min(220, Math.max(120, window.innerHeight * 0.25));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= buffer && rect.bottom >= buffer;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) closeMenu({ instant: true });
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu({ instant: true });
        };
        window.addEventListener("resize", onResize);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("keydown", onKey);
        };
    }, [closeMenu]);

    const menuDuration = skipMenuAnimation.current || reduce ? 0 : DURATION.ui;

    return (
        <>
            <div
                className="fixed z-50 flex justify-center pointer-events-none left-0 right-0"
                style={{
                    top: "max(0.75rem, env(safe-area-inset-top, 0px))",
                    paddingLeft: "max(0.5rem, env(safe-area-inset-left, 0px))",
                    paddingRight: "max(0.5rem, env(safe-area-inset-right, 0px))",
                }}
            >
                <nav
                    className="nav-enter pointer-events-auto glass-surface flex items-center gap-1 sm:gap-2 md:gap-3 rounded-full px-2.5 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3.5 max-w-[calc(100vw-1rem)]"
                    aria-label="Primary"
                >
                    <Link
                        href="#"
                        onClick={() => {
                            setActiveSection("");
                            closeMenu({ instant: true });
                        }}
                        className="pressable flex items-center gap-2 sm:gap-2.5 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base font-bold text-teal-600 tracking-tight whitespace-nowrap transition-colors duration-[180ms] ease hover:text-teal-500 shrink-0"
                        aria-label="Gargeya Sharma — home"
                    >
                        <Logo
                            variant="light"
                            size={28}
                            priority
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-md shadow-sm ring-1 ring-zinc-200/60"
                        />
                        <span className="hidden min-[360px]:inline">Gargeya Sharma</span>
                        <span className="inline min-[360px]:hidden">G. Sharma</span>
                    </Link>

                    <div className="w-px h-5 sm:h-7 bg-zinc-200/80 shrink-0" />

                    <div className="relative hidden md:flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            const isHovered = hoveredSection === item.name;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onMouseEnter={() => setHoveredSection(item.name)}
                                    onMouseLeave={() => setHoveredSection(null)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`pressable group relative px-2.5 lg:px-5 py-1.5 lg:py-2.5 text-xs lg:text-sm font-medium transition-colors duration-[180ms] ease z-10 whitespace-nowrap ${isActive ? "text-teal-900" : "text-zinc-500 hover:text-zinc-800"}`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <AnimatePresence>
                                        {isActive && (
                                            <m.span
                                                layoutId="active-pill"
                                                className="absolute inset-0 rounded-full bg-teal-500/10 border border-teal-500/20 z-0"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={SPRING_UI}
                                            />
                                        )}
                                        {isHovered && !isActive && (
                                            <m.span
                                                layoutId="hover-pill"
                                                className="absolute inset-0 rounded-full bg-zinc-100/80 border border-zinc-200/50 z-0"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: DURATION.hover, ease: EASE_OUT }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="relative hidden sm:flex md:hidden items-center gap-0.5 max-w-[min(52vw,22rem)] overflow-x-auto overscroll-x-contain">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`pressable relative px-2.5 py-1.5 text-[11px] font-medium whitespace-nowrap rounded-full transition-colors duration-[180ms] ease ${isActive ? "text-teal-900 bg-teal-500/10 border border-teal-500/20" : "text-zinc-500 hover:text-zinc-800"}`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        className="pressable sm:hidden flex items-center justify-center w-9 h-9 rounded-full text-zinc-600 hover:bg-zinc-100/80 transition-colors duration-[180ms] ease shrink-0"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => (menuOpen ? closeMenu() : openMenu())}
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </nav>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <m.div
                        id="mobile-nav-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: menuDuration, ease: EASE_OUT }}
                        className="fixed inset-0 z-40 sm:hidden bg-[#e9fcfc]/95 backdrop-blur-xl"
                        style={{
                            paddingTop: "max(5rem, calc(env(safe-area-inset-top, 0px) + 4.5rem))",
                            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
                            paddingLeft: "max(1.25rem, env(safe-area-inset-left, 0px))",
                            paddingRight: "max(1.25rem, env(safe-area-inset-right, 0px))",
                        }}
                    >
                        <nav className="flex flex-col gap-2 max-w-sm mx-auto">
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <m.div
                                        key={item.name}
                                        initial={{ opacity: 0, transform: "translateY(8px) scale(0.97)" }}
                                        animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                                        transition={{ delay: reduce ? 0 : STAGGER * i, duration: reduce ? 0 : DURATION.ui, ease: EASE_OUT }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => closeMenu()}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`pressable flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-medium transition-colors duration-[180ms] ease ${
                                                isActive
                                                    ? "bg-teal-500/10 text-teal-800 border border-teal-500/20"
                                                    : "bg-white/60 text-zinc-700 border border-zinc-200/60 hover:bg-white"
                                            }`}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <span className="w-2 h-2 rounded-full bg-teal-500" aria-hidden />
                                            )}
                                        </Link>
                                    </m.div>
                                );
                            })}
                        </nav>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
