"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";
import { company } from "@/app/constants/constants";

const contactFaqs = [
  {
    question: "¿Necesito cita previa?",
    answer:
      "Sí, trabajamos exclusivamente con cita previa para poder dedicar el tiempo necesario a cada cliente. Puedes agendar por WhatsApp.",
  },
  {
    question: "¿Cuánto cuesta un tatuaje?",
    answer:
      "El precio varía según el tamaño, la complejidad y la ubicación del diseño. Contáctanos con tu idea y te daremos un presupuesto personalizado.",
  },
  {
    question: "¿Qué cuidados debo tener después?",
    answer:
      "Te proporcionamos una guía completa de cuidados posterior al tatuaje. Es fundamental mantener la zona limpia e hidratada durante las primeras semanas.",
  },
  {
    question: "¿Puedo llevar mi propio diseño?",
    answer:
      "¡Por supuesto! Podemos trabajar con tu diseño tal cual o adaptarlo para que luzca perfecto en la piel. También creamos diseños originales desde cero.",
  },
];

const ContactSection = () => {
  const whatsappHref = company.whatsapp
    ? `https://wa.me/${company.whatsapp}?text=Hola%2C%20quiero%20agendar%20una%20cita`
    : null;
  const instagramHref = company.instagram
    ? `https://instagram.com/${company.instagram}`
    : null;
  const addressText = [company.address, company.city].filter(Boolean).join(", ");

  const hoursLines = company.openDays
    ? company.openDays.map((d) => `${d.day}: ${d.hours.join(", ")}`)
    : null;

  const infoItems = [
    { icon: MapPin, title: "Ubicación", value: addressText || null },
    { icon: Clock,  title: "Horario",   value: hoursLines ? "__schedule__" : null },
    { icon: Phone,  title: "Teléfono",  value: company.telephone },
    { icon: Mail,   title: "Email",     value: company.email },
  ].filter((item) => item.value);

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">Hablemos</p>
          <h1 className="text-5xl sm:text-7xl text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            Contacto
          </h1>
        </motion.div>

        {/* Contact info + CTAs */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-28">
          {/* Info */}
          {infoItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {infoItems.map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="p-3 border border-border">
                    <Icon size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-foreground mb-1">{title}</p>
                    {value === "__schedule__" && hoursLines ? (
                      <div className="grid grid-cols-[auto_auto] gap-x-6 gap-y-2 mt-2">
                        {hoursLines.map((line) => {
                          const [day, hours] = line.split(": ");
                          return (
                            <Fragment key={day}>
                              <span className="text-foreground/80 text-base">{day}</span>
                              <span className="text-muted-foreground font-light text-base">{hours}</span>
                            </Fragment>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-muted-foreground font-light text-base whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center"
          >
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-foreground text-background px-8 py-5 text-sm uppercase tracking-[0.2em] hover:bg-foreground/80 transition-all duration-300"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            )}
            {instagramHref && (
              <a
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-foreground/30 px-8 py-5 text-sm uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10 transition-all duration-300"
              >
                <Instagram size={18} />
                Instagram
              </a>
            )}
            {company.tiktok && (
              <a
                href={`https://tiktok.com/@${company.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-foreground/30 px-8 py-5 text-sm uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.79a4.85 4.85 0 01-1-.1z" /></svg>
                TikTok
              </a>
            )}
            {company.email && (
              <a
                href={`mailto:${company.email}`}
                className="flex items-center justify-center gap-3 border border-foreground/30 px-8 py-5 text-sm uppercase tracking-[0.2em] text-foreground hover:bg-foreground/10 transition-all duration-300"
              >
                <Mail size={18} />
                Email
              </a>
            )}
          </motion.div>
        </div>

        {/* Map */}
        {company.googlemaps && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-28"
          >
            <h3
              className="text-3xl sm:text-4xl text-foreground text-center mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ENCUÉNTRANOS
            </h3>
            <div className="aspect-video w-full border border-border overflow-hidden">
              <iframe
                src={company.googlemaps}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              />
            </div>
          </motion.div>
        )}

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h3
            className="text-3xl sm:text-4xl text-foreground text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            PREGUNTAS FRECUENTES
          </h3>
          <div className="space-y-6">
            {contactFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border p-6 hover:border-foreground/30 transition-colors duration-300"
              >
                <h4 className="text-sm uppercase tracking-[0.1em] text-foreground mb-3">{faq.question}</h4>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
