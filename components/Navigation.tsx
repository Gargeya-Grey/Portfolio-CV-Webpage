"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { SITE } from "@/lib/site";

const navItems = [
  { name: "Experience", href: "#ventures" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#lab" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("#bio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });

  const dialogRef = useRef<HTMLDialogElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const previousOverflow = useRef("");

  // Cache section vertical offsets outside the scroll loop so scrolling never forces reflows.
  useEffect(() => {
    let thresholds: { href: string; top: number }[] = [];
    let maxScroll = 0;
    let rafId = 0;

    const measure = () => {
      const scrollY = window.scrollY;
      thresholds = navItems.map((item) => {
        const el = document.getElementById(item.href.slice(1));
        return {
          href: item.href,
          top: el ? el.getBoundingClientRect().top + scrollY : Infinity,
        };
      });
      maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    };

    const updateFromScroll = () => {
      rafId = 0;
      const y = window.scrollY;
      setScrolled(y > 24);

      let next = "#bio";
      for (const item of thresholds) {
        if (y + 160 >= item.top) next = item.href;
      }
      if (y > 0 && maxScroll > 0 && y >= maxScroll - 8) {
        next = "#contact";
      }
      setActiveSection(next);
    };

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateFromScroll);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    updateFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            measure();
            onScroll();
          })
        : null;
    if (resizeObserver) {
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver?.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Position the gliding active pill over the current desktop nav item.
  useEffect(() => {
    const syncPill = () => {
      const link = linkRefs.current[activeSection];
      if (!link || activeSection === "#bio") {
        setPillStyle((prev) => (prev.visible ? { ...prev, visible: false } : prev));
        return;
      }
      setPillStyle({ left: link.offsetLeft, width: link.offsetWidth, visible: true });
    };

    syncPill();
    window.addEventListener("resize", syncPill, { passive: true });
    document.fonts?.ready.then(syncPill).catch(() => {});
    return () => window.removeEventListener("resize", syncPill);
  }, [activeSection]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    const dialog = dialogRef.current;
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      if (dialog?.open) document.body.style.overflow = previousOverflow.current;
    };
  }, []);

  function openMenu() {
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    setMenuOpen(true);
  }

  function closeMenu() {
    document.body.style.overflow = previousOverflow.current;
    dialogRef.current?.close();
  }

  function handleClose() {
    document.body.style.overflow = previousOverflow.current;
    setMenuOpen(false);
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <header className="site-header no-print" data-scrolled={scrolled}>
        <div className="page-shell header-inner">
          <Link href="/#bio" className="brand-link" aria-label="Gargeya Sharma, back to introduction">
            <Logo size={30} alt="" />
            <span>Gargeya</span><span className="brand-descriptor">Digital CV</span>
          </Link>
          <nav className="desktop-navigation" aria-label="Primary">
            <span
              className="nav-active-pill"
              aria-hidden="true"
              data-visible={pillStyle.visible}
              style={{
                width: `${pillStyle.width}px`,
                transform: `translate3d(${pillStyle.left}px, 0, 0)`,
              }}
            />
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  ref={(node) => {
                    linkRefs.current[item.href] = node;
                  }}
                  href={"/" + item.href}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className="nav-link-label">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <div className="header-actions">
            <a href={SITE.website} className="header-website" target="_blank" rel="me noopener noreferrer">Personal website <ArrowUpRight size={15} aria-hidden="true" /></a>
            <ThemeToggle />
            <button type="button" className="menu-trigger" aria-label="Open navigation" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={openMenu}><Menu size={23} aria-hidden="true" /></button>
          </div>
        </div>
      </header>
      <dialog ref={dialogRef} id="mobile-navigation" className="mobile-navigation no-print" aria-label="Site navigation" onClose={handleClose} onKeyDown={handleMenuKeyDown} onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}>
        <div className="mobile-navigation-inner">
          <div className="mobile-navigation-top"><span>Gargeya <span> / Digital CV</span></span><button type="button" className="menu-trigger" aria-label="Close navigation" onClick={closeMenu}><X size={24} aria-hidden="true" /></button></div>
          <nav aria-label="Mobile primary">
            <Link href="/#bio" onClick={closeMenu} aria-current={activeSection === "#bio" ? "location" : undefined}>Introduction</Link>
            {navItems.map((item) => <Link key={item.href} href={"/" + item.href} onClick={closeMenu} aria-current={activeSection === item.href ? "location" : undefined}>{item.name}<ArrowUpRight size={22} aria-hidden="true" /></Link>)}
          </nav>
          <a className="text-link" href={SITE.website} target="_blank" rel="me noopener noreferrer" onClick={closeMenu}>Explore my personal website <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </dialog>
    </>
  );
}
