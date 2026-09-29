"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import Logo from "@/components/Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState("idle"), 4000);
  }

  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="page-shell">
        <div className="contact-grid">
          <div className="contact-main">
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-heading">Good work starts with<br /><em>a conversation.</em></h2>
            <div className="contact-email">
              <a href={"mailto:" + SITE.email}>{SITE.email}<ArrowUpRight size={22} aria-hidden="true" /></a>
              <button type="button" className="copy-button no-print" onClick={copyEmail} aria-label="Copy email address">{copyState === "copied" ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}</button>
            </div>
            <p role="status" className="copy-status no-print">{copyState === "copied" ? "Email copied." : copyState === "failed" ? "Couldn’t copy. Select the email address or open it to get in touch." : ""}</p>
            <div className="contact-socials">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={SITE.x} target="_blank" rel="noopener noreferrer" aria-label="X (@GargeyaS)">X <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <a className="website-card" href={SITE.website} target="_blank" rel="me noopener noreferrer">
            <span className="website-card-top">Beyond the CV <ArrowUpRight size={23} aria-hidden="true" /></span>
            <h3>A little more<br />{" "}<em>of my world.</em></h3>
            <p>The things I build, the ideas I write about, and the questions I keep following.</p>
            <span className="website-card-url">sgargeya.com <ArrowUpRight size={16} aria-hidden="true" /></span>
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-identity"><Logo variant="dark" size={30} alt="" /><span>{SITE.name}<span className="footer-copyright">© {new Date().getFullYear()}</span></span></div>
          <p>Jaipur, India <span aria-hidden="true">·</span> Remote</p>
          <a href="#bio" className="back-to-top no-print">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
