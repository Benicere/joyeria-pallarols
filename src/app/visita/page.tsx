"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";

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
            <h3>{t.visita.addressTitle}</h3>
            <div className="lines">
              {t.visita.addressLines.map((l) => <div key={l}>{l}</div>)}
            </div>
          </div>

          <div className="block">
            <h3>{t.visita.contactTitle}</h3>
            <div className="lines">
              <div><a href={`tel:${t.visita.phone.replace(/\s/g, "")}`}>{t.visita.phone}</a></div>
              <div><a href={`mailto:${t.visita.email}`}>{t.visita.email}</a></div>
            </div>
          </div>
        </div>

        <div className="visita-cta">
          <a href={`mailto:${t.visita.email}?subject=Visita%20al%20taller`}>
            {t.visita.cta}
          </a>
        </div>

        <div className="visita-map">
          <iframe
            title="Mapa Defensa 1039"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-58.3735%2C-34.6215%2C-58.3680%2C-34.6175&amp;layer=mapnik&amp;marker=-34.6195%2C-58.3707"
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
