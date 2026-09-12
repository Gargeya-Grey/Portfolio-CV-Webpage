"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DURATION, EASE_OUT, SPRING_UI, STAGGER } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { subscribeLayout } from "@/lib/subscribeLayout";

const navItems = [
    { name: "Bio", href: "#bio" },
    { name: "Ventures", href: "#ventures" },
    { name: "Education", href: "#education" },
    { name: "Lab", href: "#lab" },
    { name: "Contact", href: "#contact" },
] as const;

const sectionIds = navItems.map((item) => item.href.slice(1));

export default function Navigation() {
    const [activeSection, setActiveSection] = useState<string>("#bio");
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const skipMenuAnimation = useRef(false);
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const lastFocusedRef = useRef<HTMLElement | null>(null);
    const reduce = usePrefersReducedMotion();

    const closeMenu = useCallback((options?: { instant?: boolean }) => {
        skipMenuAnimation.current = Boolean(options?.instant);
        setMenuOpen(false);
    }, []);

    const openMenu = useCallback(() => {
        skipMenuAnimation.current = false;
        lastFocusedRef.current =
            document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setMenuOpen(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            let next = "#bio";

            if (window.scrollY >= 280) {
                const nearBottom =
                    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 96;
                if (nearBottom) {
                    next = "#contact";
                } else {
                    const line = window.innerHeight * 0.42;
                    let current = "bio";
                    for (const id of sectionIds) {
                        const element = document.getElementById(id);
                        if (!element) continue;
                        if (element.getBoundingClientRect().top <= line) current = id;
                    }
                    next = `#${current}`;
                }
            }

            setActiveSection((prev) => (prev === next ? prev : next));
        };

        const observer = new IntersectionObserver(handleScroll, {
            threshold: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
        });

        const bind = () => {
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) observer.observe(element);
            }
            handleScroll();
        };

        bind();
        const unsub = subscribeLayout(handleScroll);
        window.addEventListener("hashchange", handleScroll);
        const retry = window.setTimeout(bind, 0);

        return () => {
            unsub();
            observer.disconnect();
            window.removeEventListener("hashchange", handleScroll);
            window.clearTimeout(retry);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.body.dataset.menuOpen = "true";
        } else {
            document.body.style.overflow = "";
            delete document.body.dataset.menuOpen;
        }
        return () => {
            document.body.style.overflow = "";
            delete document.body.dataset.menuOpen;
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

    /** Move focus into the sheet on open, hand it back to the trigger on close. */
    useEffect(() => {
        if (menuOpen) {
            dialogRef.current?.querySelector<HTMLElement>("a[href]")?.focus({ preventScroll: true });
            return;
        }
        lastFocusedRef.current?.focus({ preventScroll: true });
        lastFocusedRef.current = null;
    }, [menuOpen]);

    /** Keep Tab inside the sheet while it is open. */
    useEffect(() => {
        const panel = dialogRef.current;
        if (!menuOpen || !panel) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key !== "Tab") return;
            const items = Array.from(panel.querySelectorAll<HTMLElement>("a[href]"));
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && (active === first || !panel.contains(active))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        panel.addEventListener("keydown", onKeyDown);
        return () => panel.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    const menuDuration = skipMenuAnimation.current || reduce ? 0 : DURATION.ui;
    const sheetDuration = skipMenuAnimation.current || reduce ? 0 : DURATION.enter;
    /** Trigger chrome: icon cross-swap and the Menu/Close label roll share one timing. */
    const triggerMotion = { duration: reduce ? 0 : DURATION.hover, ease: EASE_OUT };
    const enterFrom = (index: number) => (menuDuration === 0 ? 0 : 0.04 + STAGGER * index);

    const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        skipMenuAnimation.current = true;
        setMenuOpen(false);
        window.setTimeout(() => {
            document.getElementById(href.slice(1))?.scrollIntoView({
                behavior: "auto",
                block: "start",
            });
            if (location.hash !== href) location.hash = href;
        }, 50);
    };

    return (
        <>
            <div
                className="fixed z-50 flex justify-center pointer-events-none left-0 right-0"
                style={{
                    bottom: "max(0.85rem, env(safe-area-inset-bottom, 0px))",
                    paddingLeft: "max(0.5rem, env(safe-area-inset-left, 0px))",
                    paddingRight: "max(0.5rem, env(safe-area-inset-right, 0px))",
                }}
            >
                <nav
                    className="nav-enter pointer-events-auto glass-surface site-nav flex items-center gap-0.5 sm:gap-1 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 max-w-[calc(100vw-1rem)]"
                    aria-label="Primary"
                >
                    <div className="relative hidden sm:flex items-center">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            const isHovered = hoveredSection === item.name;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onMouseEnter={() => setHoveredSection(item.name)}
                                    onMouseLeave={() => setHoveredSection(null)}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`pressable group relative px-2.5 md:px-4 lg:px-5 py-2 lg:py-2.5 text-[12px] md:text-[13px] lg:text-sm font-medium transition-colors duration-[180ms] ease z-10 whitespace-nowrap ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-800"}`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive && (
                                        <m.span
                                            layoutId="active-pill"
                                            className="absolute inset-0 rounded-full lock-pill z-0"
                                            transition={SPRING_UI}
                                        />
                                    )}
                                    <AnimatePresence>
                                        {isHovered && !isActive && (
                                            <m.span
                                                className="absolute inset-0 rounded-full bg-zinc-100/70 z-0"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: DURATION.hover, ease: EASE_OUT }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </a>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        className="pressable sm:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-zinc-700 text-sm font-medium"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => (menuOpen ? closeMenu() : openMenu())}
                    >
                        <span className="relative block h-4 w-4">
                            <m.span
                                className="absolute inset-0 grid place-items-center"
                                initial={false}
                                animate={{
                                    opacity: menuOpen ? 0 : 1,
                                    rotate: menuOpen ? -90 : 0,
                                    scale: menuOpen ? 0.6 : 1,
                                }}
                                transition={triggerMotion}
                            >
                                <Menu className="h-4 w-4" />
                            </m.span>
                            <m.span
                                className="absolute inset-0 grid place-items-center"
                                initial={false}
                                animate={{
                                    opacity: menuOpen ? 1 : 0,
                                    rotate: menuOpen ? 0 : 90,
                                    scale: menuOpen ? 1 : 0.6,
                                }}
                                transition={triggerMotion}
                            >
                                <X className="h-4 w-4" />
                            </m.span>
                        </span>
                        <span className="relative grid overflow-hidden">
                            <m.span
                                className="col-start-1 row-start-1"
                                initial={false}
                                animate={{ y: menuOpen ? "-120%" : "0%", opacity: menuOpen ? 0 : 1 }}
                                transition={triggerMotion}
                            >
                                Menu
                            </m.span>
                            <m.span
                                className="col-start-1 row-start-1"
                                initial={false}
                                animate={{ y: menuOpen ? "0%" : "120%", opacity: menuOpen ? 1 : 0 }}
                                transition={triggerMotion}
                            >
                                Close
                            </m.span>
                        </span>
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
                        ref={dialogRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: menuDuration * 0.7, ease: EASE_OUT } }}
                        transition={{ duration: sheetDuration, ease: EASE_OUT }}
                        className="fixed inset-0 z-40 sm:hidden overflow-hidden bg-[#e9fcfc]/85 backdrop-blur-2xl"
                        style={{
                            paddingTop: "max(2.25rem, calc(env(safe-area-inset-top, 0px) + 1.5rem))",
                            paddingBottom: "max(5.5rem, calc(env(safe-area-inset-bottom, 0px) + 4.5rem))",
                            paddingLeft: "max(1.5rem, env(safe-area-inset-left, 0px))",
                            paddingRight: "max(1.5rem, env(safe-area-inset-right, 0px))",
                        }}
                    >
                        {/* Same room as the hero: striped light field, drifting colour */}
                        <m.span
                            aria-hidden
                            className="hero-columns pointer-events-none absolute inset-0"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0 } }}
                            transition={{ duration: sheetDuration, ease: EASE_OUT }}
                        />
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-teal-300/35 blur-[90px]"
                        />
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sky-300/30 blur-[100px]"
                        />

                        <nav className="relative mx-auto flex h-full max-w-md flex-col overflow-y-auto">
                            <m.div
                                className="mt-auto flex items-center gap-4"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: menuDuration, ease: EASE_OUT }}
                            >
                                <span
                                    aria-hidden
                                    className="h-px flex-1 bg-gradient-to-r from-transparent to-teal-900/40"
                                />
                                <span className="text-[11px] font-bold uppercase tracking-[0.42em] text-teal-950/75">
                                    Index
                                </span>
                                <span
                                    aria-hidden
                                    className="h-px flex-1 bg-gradient-to-l from-transparent to-teal-900/40"
                                />
                            </m.div>

                            <ul className="mt-8 mb-auto flex flex-col">
                                {navItems.map((item, i) => {
                                    const isActive = activeSection === item.href;
                                    const delay = enterFrom(i);

                                    return (
                                        <li key={item.name} className="relative">
                                            {i > 0 && (
                                                <m.span
                                                    aria-hidden
                                                    className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-teal-900/15 to-teal-900/[0.04]"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{
                                                        duration: sheetDuration,
                                                        delay,
                                                        ease: EASE_OUT,
                                                    }}
                                                />
                                            )}
                                            <m.div
                                                initial={{ opacity: 0, y: 14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: menuDuration, delay, ease: EASE_OUT }}
                                            >
                                                <a
                                                    href={item.href}
                                                    onClick={(event) => handleNavigate(event, item.href)}
                                                    aria-current={isActive ? "page" : undefined}
                                                    className="pressable relative flex items-center gap-4 rounded-2xl py-4 pl-3 pr-2 transition-colors duration-[180ms] ease active:bg-teal-500/[0.07]"
                                                >
                                                    <m.span
                                                        aria-hidden
                                                        className="absolute left-0 top-1/2 -mt-4 block h-8 w-[3px] origin-center rounded-full bg-teal-600"
                                                        initial={false}
                                                        animate={{
                                                            scaleY: isActive ? 1 : 0,
                                                            opacity: isActive ? 1 : 0,
                                                        }}
                                                        transition={reduce ? { duration: 0 } : SPRING_UI}
                                                    />
                                                    <span
                                                        aria-hidden
                                                        className={`w-[1.5em] shrink-0 font-serif italic tabular-nums text-[0.95rem] transition-colors duration-[180ms] ${
                                                            isActive ? "text-teal-700" : "text-teal-900/35"
                                                        }`}
                                                    >
                                                        {String(i + 1).padStart(2, "0")}
                                                    </span>
                                                    <span
                                                        className={`text-[clamp(1.5rem,6.8vw,1.9rem)] font-semibold tracking-[-0.02em] transition-colors duration-[180ms] ease ${
                                                            isActive ? "text-teal-800" : "text-zinc-800"
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </span>
                                                </a>
                                            </m.div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
