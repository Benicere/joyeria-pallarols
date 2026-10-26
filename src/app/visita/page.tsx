"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";
import WhatsAppLink from "@/components/WhatsAppLink";
import { instagram, whatsapp } from "@/lib/contact";

export default function VisitaPage() {
  const { t } = useT();
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow={t.visita.eyebrow}
        title={<>{t.visita.titleA} <em>{t.visita.titleEm}</em></>}
        lede={t.visita.lede}
      />

      <section className="interior">
        <div className="visita-grid">
          <div className="block">
            <h3>{t.visita.hoursTitle}</h3>
            <div className="hours">
              {t.visita.hours.map((h) => (
                <div className="row" key={h.d}>
                  <span>{h.d}</span>
                  <span className="h">{h.h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="block">
            <h3>{t.visita.contactTitle}</h3>
            <div className="lines">
              <div><WhatsAppLink /></div>
              <div>
                <a href={instagram.url} target="_blank" rel="noopener noreferrer">
                  Instagram · {instagram.label}
                </a>
              </div>
              <div><a href={`mailto:${t.visita.email}`}>{t.visita.email}</a></div>
            </div>
          </div>
        </div>

        <div className="visita-cta">
          <a href={whatsapp.url} target="_blank" rel="noopener noreferrer">
            {t.visita.cta}
          </a>
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
