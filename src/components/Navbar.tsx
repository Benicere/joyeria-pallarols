"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/lib/i18n";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const ticking = useRef(false);
  const { lang, t, toggle } = useT();

  useEffect(() => {
    const check = () => {
      setSolid(window.scrollY > window.innerHeight * 0.3);
      ticking.current = false;
    };
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className={`nav ${solid ? "is-solid" : ""}`}>
      <div className="left">
        <Link href="/piezas">{t.nav.piezas}</Link>
        <Link href="/encargos">{t.nav.encargos}</Link>
      </div>
      <div className="brand">
        <Link href="/">
          Joyería <em>Pallarols</em>
        </Link>
      </div>
      <div className="right">
        <Link href="/visita">{t.nav.visita}</Link>
        <button type="button" className="lang-toggle" onClick={toggle} aria-label="Toggle language">
          <span className={lang === "es" ? "is-active" : ""}>Es</span>
          <span className="sep">/</span>
          <span className={lang === "en" ? "is-active" : ""}>En</span>
        </button>
      </div>
    </nav>
  );
}
