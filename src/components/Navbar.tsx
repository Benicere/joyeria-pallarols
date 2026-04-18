"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > window.innerHeight * 0.3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${solid ? "is-solid" : ""}`}>
      <div className="left">
        <Link href="/linaje">Casa</Link>
        <Link href="/taller">Taller</Link>
        <Link href="/piezas">Piezas</Link>
      </div>
      <div className="brand">
        <Link href="/">
          Joyería <em>Pallarols</em>
        </Link>
      </div>
      <div className="right">
        <Link href="/encargos">Encargos</Link>
        <a href="#">Visita</a>
        <a href="#">Es / En</a>
      </div>
    </nav>
  );
}
