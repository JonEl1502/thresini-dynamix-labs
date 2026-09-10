"use client";

import { useEffect, useState } from "react";
import OrbitMark, { OrbitGraticule } from "@/components/orbit-mark";
import s from "./hero-orbit.module.css";

/**
 * The signature.
 *
 * On load the three rings spin from scattered to aligned over 3s on
 * cubic-bezier(.65,0,.35,1), landing on the one instant where all three share
 * nodes at 0° / 120° / 240°. The headline, lede and CTAs reveal off that
 * landing at 3s / 3.15s / 3.3s.
 *
 * At t = 3s we add .drift, which hands the same three animations over to a
 * slow linear loop at the same 3:2:1 ratio — one full realignment every 36s.
 * Because each ring's eased spin ended exactly on its own rotational symmetry,
 * restarting the loop from 0 is seamless: the mark never jumps, it just keeps
 * turning and snaps home once a cycle.
 */
export function HeroOrbit({ label }: { label?: string }) {
  const [drift, setDrift] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setDrift(true), 3000);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className={`${s.stage} ${drift ? "drift" : ""}`}>
      <span className={s.plate} aria-hidden="true" />
      <span className={s.plateInner} aria-hidden="true" />
      <OrbitGraticule className={s.graticule} />
      <OrbitMark
        variant="full"
        palette="system"
        optical={false}
        dimensional
        animated
        cycle={36}
        className={s.mark}
        title={label}
      />
      <span className={`${s.bearing} ${s.b0}`} aria-hidden="true">
        000°
      </span>
      <span className={`${s.bearing} ${s.b120}`} aria-hidden="true">
        120°
      </span>
      <span className={`${s.bearing} ${s.b240}`} aria-hidden="true">
        240°
      </span>
    </div>
  );
}

export default HeroOrbit;
