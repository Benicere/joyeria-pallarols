"use client";

import { useEffect } from "react";

export default function CinematicEffects() {
  useEffect(() => {
    const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || "0.3");
        const offset = (rect.top - vh / 2) * -speed;
        const img = el.querySelector("img");
        if (img) img.style.transform = `translateY(${offset * 0.12}px) scale(1.08)`;
      });
    };
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 8) * 0.05}s`;
      io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      io.disconnect();
    };
  }, []);

  return null;
}
