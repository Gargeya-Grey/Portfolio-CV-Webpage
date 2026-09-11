type LayoutListener = () => void;

const listeners = new Set<LayoutListener>();

let raf = 0;
let started = false;

function flush() {
    raf = 0;
    listeners.forEach((listener) => listener());
}

function schedule() {
    if (raf) return;
    raf = requestAnimationFrame(flush);
}

const scrollOpts: AddEventListenerOptions = { passive: true, capture: true };
const resizeOpts: AddEventListenerOptions = { passive: true };

function scrollTargets(): EventTarget[] {
    return [window, document, document.documentElement, document.body];
}

function start() {
    if (started || typeof window === "undefined") return;
    started = true;
    for (const target of scrollTargets()) {
        target.addEventListener("scroll", schedule, scrollOpts);
    }
    window.addEventListener("wheel", schedule, resizeOpts);
    window.addEventListener("touchmove", schedule, resizeOpts);
    window.addEventListener("resize", schedule, resizeOpts);
    window.visualViewport?.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("scroll", schedule);
}

function stop() {
    if (!started) return;
    started = false;
    for (const target of scrollTargets()) {
        target.removeEventListener("scroll", schedule, scrollOpts);
    }
    window.removeEventListener("wheel", schedule, resizeOpts);
    window.removeEventListener("touchmove", schedule, resizeOpts);
    window.removeEventListener("resize", schedule, resizeOpts);
    window.visualViewport?.removeEventListener("resize", schedule);
    window.visualViewport?.removeEventListener("scroll", schedule);
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
}

/** One rAF-coalesced scroll/resize subscription for all layout-driven UI. */
export function subscribeLayout(listener: LayoutListener): () => void {
    listeners.add(listener);
    start();
    listener();
    return () => {
        listeners.delete(listener);
        if (listeners.size === 0) stop();
    };
}
