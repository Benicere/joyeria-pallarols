"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import MLCard from "@/components/MLCard";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";
import { catalogoML } from "@/lib/mercadolibre";

export default function ComprarPage() {
  const { t } = useT();
  const c = t.comprar;
  const { piezas, tienda } = catalogoML;

  return (
    <>
      <Navbar />
      <PageHeader eyebrow={c.eyebrow} title={<>{c.titleA} <em>{c.titleEm}</em></>} lede={c.lede} />

      <section className="cat-page">
        <div className="cat-page-inner">
          {piezas.length > 0 ? (
            <>
              <div className="ml-grid">
                {piezas.map((p) => (
                  <MLCard key={p.id} pieza={p} t={c} />
                ))}
              </div>
              {tienda && (
                <div className="cat-foot">
                  <a href={tienda} target="_blank" rel="noopener noreferrer">{c.seeAll}</a>
                </div>
              )}
            </>
          ) : (
            <div className="ml-empty">
              <h2><em>{c.emptyTitle}</em></h2>
              <p>{c.emptyText}</p>
              <div className="enc-cta">
                <a href="/encargos">{c.emptyCta}</a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
