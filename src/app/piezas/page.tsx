"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PieceCard from "@/components/PieceCard";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";
import { pieces } from "@/lib/pieces";

export default function PiezasPage() {
  const { t, lang } = useT();
  const c = t.cat;

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow={c.pageEyebrow}
        title={<>{c.titleA} <em>{c.titleEm}</em></>}
        lede={c.lede}
      />

      <section className="cat-page">
        <div className="cat-page-inner">
          <div className="grid-uniform">
            {pieces.map((p) => (
              <PieceCard piece={p} lang={lang} key={p.num} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
