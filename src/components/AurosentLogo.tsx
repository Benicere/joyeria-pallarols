"use client";

import { useEffect, useRef } from "react";

/* ============================================================================
   AUROSENT LOGO — wordmark de la agencia en el pie del footer ("Desarrollado por").
   El mismo componente que en los sitios de celulares: plateado en reposo, se DORA
   al acercarse. Con mouse, según la distancia del puntero al logo (y un brillo
   que lo sigue en X); en touch, según cuánto se scrolleó hasta él. Las dos capas
   (oro + brillo) usan el mismo webp como máscara, así solo pintan las letras.
   El rAF corre solo mientras --t se está moviendo: quieto, no gasta frames.
   ============================================================================ */

const SRC = "/company/aurosent.webp";
const RADIO = 420; // px desde el borde del logo donde el efecto empieza a notarse
const VELOCIDAD = 0.08; // fracción del camino hacia el objetivo que avanza cada frame

const suave = (k: number) => k * k * (3 - 2 * k);

const capa: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  WebkitMask: `url(${SRC}) center / 100% 100% no-repeat`,
  mask: `url(${SRC}) center / 100% 100% no-repeat`,
  pointerEvents: "none",
};

export default function AurosentLogo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t = 0;
    let target = 0;
    let sx = 50;
    let raf = 0;

    const animar = () => {
      t += (target - t) * VELOCIDAD;
      if (Math.abs(target - t) < 0.001) t = target;
      el.style.setProperty("--t", t.toFixed(3));
      el.style.setProperty("--sx", `${sx.toFixed(1)}%`);
      raf = t === target ? 0 : requestAnimationFrame(animar);
    };
    const pedirFrame = () => {
      if (!raf) raf = requestAnimationFrame(animar);
    };

    const porMouse = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right);
      const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
      target = suave(Math.max(0, 1 - Math.hypot(dx, dy) / RADIO));
      sx = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
      pedirFrame();
    };
    const fuera = () => {
      target = 0;
      pedirFrame();
    };
    const porScroll = () => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      target = suave(Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.55))));
      sx = 20 + target * 60;
      pedirFrame();
    };

    const esTouch =
      window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches;
    const raiz = document.documentElement;
    if (esTouch) {
      window.addEventListener("scroll", porScroll, { passive: true });
      window.addEventListener("resize", porScroll);
      porScroll();
    } else {
      window.addEventListener("pointermove", porMouse);
      raiz.addEventListener("mouseleave", fuera);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", porScroll);
      window.removeEventListener("resize", porScroll);
      window.removeEventListener("pointermove", porMouse);
      raiz.removeEventListener("mouseleave", fuera);
    };
  }, []);

  return (
    <span ref={ref} className={`relative inline-block aspect-[2381/243] ${className}`}>
      <img
        src={SRC}
        alt=""
        width={2381}
        height={243}
        draggable={false}
        className="absolute inset-0 block h-full w-full select-none"
      />
      {/* Oro: tiñe el plateado (blend color) conservando sus luces y sombras. */}
      <span
        style={{
          ...capa,
          background: "linear-gradient(100deg, #8a7a58, #d6c39a 38%, #f4ead0 52%, #c9b384 70%, #7d6d4c)",
          mixBlendMode: "color",
          opacity: "calc(var(--t, 0) * 0.85)",
        }}
      />
      {/* Brillo: un óvalo de luz que acompaña al puntero (o al scroll en touch). */}
      <span
        className="motion-reduce:hidden"
        style={{
          ...capa,
          background: "radial-gradient(40% 140% at var(--sx, 50%) 50%, rgba(255, 248, 230, .55), transparent 70%)",
          mixBlendMode: "soft-light",
          opacity: "calc(var(--t, 0) * 0.7)",
        }}
      />
    </span>
  );
}
