"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryImage = { src: string; alt: string };
type Tab = "tattoo" | "piercing";

interface GallerySectionProps {
  tattooImages: GalleryImage[];
  piercingImages: GalleryImage[];
}

const GallerySection = ({ tattooImages, piercingImages }: GallerySectionProps) => {
  const hasBoth = tattooImages.length > 0 && piercingImages.length > 0;
  const defaultTab: Tab = tattooImages.length > 0 ? "tattoo" : "piercing";
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
  const images = activeTab === "tattoo" ? tattooImages : piercingImages;

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">Nuestro trabajo</p>
        <h1 className="text-5xl sm:text-7xl text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
          Galería
        </h1>

        {/* Tabs */}
        {hasBoth && (
          <div className="flex justify-center gap-8 mt-10">
            {(["tattoo", "piercing"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-[0.2em] pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab
                    ? "text-foreground border-foreground"
                    : "text-muted-foreground border-transparent hover:text-foreground/70"
                }`}
              >
                {tab === "tattoo" ? "Tattoo" : "Piercing"}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden bg-card hover-lift cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 max-md:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Process section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-28"
      >
        <h3
          className="text-3xl sm:text-4xl text-foreground text-center mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          NUESTRO PROCESO
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Consulta", desc: "Conversamos sobre tu idea, estilo y ubicación ideal para el diseño." },
            { step: "02", title: "Diseño", desc: "Creamos bocetos personalizados hasta encontrar el diseño perfecto." },
            { step: "03", title: "Sesión", desc: "Realizamos el tatuaje en un ambiente estéril con total comodidad." },
            { step: "04", title: "Cuidado", desc: "Te guiamos en el cuidado posterior para una cicatrización perfecta." },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-border p-8 text-center hover:border-foreground/30 transition-colors duration-300"
            >
              <p className="text-3xl text-foreground/20 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{item.step}</p>
              <h4 className="text-sm uppercase tracking-[0.15em] text-foreground mb-3">{item.title}</h4>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16"
      >
        <a
          href="https://wa.me/TUNUMERO?text=Hola%2C%20quiero%20ver%20más%20trabajos"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-foreground/30 px-10 py-4 text-sm uppercase tracking-[0.2em] text-foreground hover:bg-foreground hover:text-background transition-all duration-300 inline-block"
        >
          Ver más en WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default GallerySection;
