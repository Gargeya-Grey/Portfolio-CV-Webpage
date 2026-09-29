"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { SITE } from "@/lib/site";
import { subscribeLayout } from "@/lib/subscribeLayout";

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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      let next = "#bio";
      for (const item of navItems) {
        if ((document.getElementById(item.href.slice(1))?.getBoundingClientRect().top ?? Infinity) <= 160) next = item.href;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) next = "#contact";
      setActiveSection(next);
    };
    update();
    return subscribeLayout(update);
  }, []);

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
            <Logo size={32} alt="" priority />
            <span>Gargeya</span><span className="brand-descriptor">Digital CV</span>
          </Link>
          <nav className="desktop-navigation" aria-label="Primary">
            {navItems.map((item) => <Link key={item.href} href={"/" + item.href} aria-current={activeSection === item.href ? "location" : undefined}>{item.name}</Link>)}
          </nav>
          <a href={SITE.website} className="header-website" target="_blank" rel="me noopener noreferrer">Personal website <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button type="button" className="menu-trigger" aria-label="Open navigation" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={openMenu}><Menu size={23} aria-hidden="true" /></button>
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
