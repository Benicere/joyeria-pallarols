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

      <section className="interior">
        <h2>{e.pageH2A} <em>{e.pageH2Em}</em>.</h2>
        <p>{e.pageP1}</p>
        <p>{e.pageP2}</p>
      </section>

      <Encargos />

      <section className="interior">
        <h2>{e.faqA} <em>{e.faqEm}</em>.</h2>
        <p><em>{e.faq1Q}</em>{e.faq1A}</p>
        <p><em>{e.faq2Q}</em>{e.faq2A}</p>
        <p><em>{e.faq3Q}</em>{e.faq3A}</p>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
