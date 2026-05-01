"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Linaje from "@/components/Linaje";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";

export default function LinajePage() {
  const { t } = useT();
  const l = t.linaje;
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow={l.eyebrow}
        title={<>{l.titleA} <em>{l.titleEm}</em></>}
        lede={l.lede}
      />

      <section className="interior">
        <div className="two-col">
          <div>
            <h2>{l.pageTitleA} <em>{l.pageTitleEm}</em>.</h2>
            <p>{l.pageP1}</p>
            <p>{l.pageP2}</p>
          </div>
          <div>
            <img
              className="full"
              style={{ margin: 0 }}
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85"
              alt="Archivo"
            />
          </div>
        </div>
      </section>

      <Linaje />
      <Footer />
      <CinematicEffects />
    </>
  );
}
