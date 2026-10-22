"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Encargos from "@/components/Encargos";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";

export default function EncargosPage() {
  const { t } = useT();
  const e = t.enc;
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow={e.eyebrow}
        title={<>{e.titleA} <em>{e.titleEm}</em> {e.titleB}</>}
        lede={e.lede}
      />

      <Encargos showHeader={false} showCta={false} />

      <section className="interior">
        <h2>{e.detailsA} <em>{e.detailsEm}</em>.</h2>
        {e.details.map((d) => (
          <p key={d.h}><em>{d.h}</em>{d.p}</p>
        ))}
        <div className="enc-cta">
          <a href="/visita">{e.cta}</a>
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
