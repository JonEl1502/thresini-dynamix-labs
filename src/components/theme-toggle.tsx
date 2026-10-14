"use client";

import s from "./theme-toggle.module.css";

/* The theme lives on <html data-theme>; the inline script in the layout sets
   it before paint. Both icons are rendered and CSS shows the right one, so
   there is no server/client mismatch to hydrate around. */
export default function ThemeToggle() {
  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("thresini-theme", next);
      } catch {
        /* private mode: the choice just won't persist */
      }
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof document.startViewTransition !== "function") {
      apply();
      return;
    }

    /* The new theme grows out of the button as a circle over the old one, so
       the opposite colour comes in rather than the page snapping. */
    const box = event.currentTarget.getBoundingClientRect();
    const x = box.left + box.width / 2;
    const y = box.top + box.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = document.startViewTransition(apply);
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 700, easing: "cubic-bezier(.22,.7,.24,1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {});
  };

  return (
    <button type="button" className={s.toggle} onClick={toggle} aria-label="Switch between light and dark mode">
      <svg className={s.sun} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <svg className={s.moon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.2 8.2 0 1 0 20 14.2z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
