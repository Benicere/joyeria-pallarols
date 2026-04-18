"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-foreground/10"
        style={{
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          top: `${p.y}%`,
        }}
        animate={{
          y: [0, -60, 0],
          x: [0, Math.random() * 30 - 15, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          delay: p.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
