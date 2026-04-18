"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Palette, Award, Heart } from "lucide-react";
import { company } from "@/app/constants/constants";

const values = [
  {
    icon: Palette,
    title: "Arte Único",
    description: "Cada diseño es una pieza original, creada en colaboración contigo para reflejar tu esencia y personalidad única.",
  },
  {
    icon: Shield,
    title: "Máxima Higiene",
    description: "Utilizamos exclusivamente materiales esterilizados y desechables, cumpliendo con los más estrictos protocolos sanitarios.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description: "Más de una década perfeccionando técnicas y estilos, desde el realismo más detallado hasta lo abstracto y vanguardista.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Tu satisfacción es nuestra prioridad. Te acompañamos en todo el proceso, desde la consulta hasta el cuidado posterior.",
  },
];

const AboutSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">Sobre nosotros</p>
          <h1 className="text-5xl sm:text-7xl text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            Nosotros
          </h1>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <Image
              src="/nosotros/nosotros-1.webp"
              alt="Nuestro estudio"
              width={1200}
              height={800}
              className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 max-md:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'var(--gradient-overlay)' }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>{company.description}</p>
              {company.highlights && (
                <ul className="space-y-2">
                  {company.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span className="w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {[
                { number: "10+", label: "Años" },
                { number: "2K+", label: "Trabajos" },
                { number: "100%", label: "Higiene" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>{stat.number}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3
            className="text-3xl sm:text-4xl text-foreground text-center mb-16"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            NUESTROS VALORES
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 hover:border-foreground/30 transition-colors duration-300 group"
            >
              <value.icon size={28} className="text-muted-foreground mb-5 group-hover:text-foreground transition-colors duration-300" />
              <h4 className="text-sm uppercase tracking-[0.15em] text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href={company.whatsapp ? `https://wa.me/${company.whatsapp}?text=Hola%2C%20quiero%20saber%20más%20sobre%20el%20estudio` : "/contacto"}
            target={company.whatsapp ? "_blank" : undefined}
            rel={company.whatsapp ? "noopener noreferrer" : undefined}
            className="bg-foreground text-background px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-foreground/80 transition-all duration-300 inline-block"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
