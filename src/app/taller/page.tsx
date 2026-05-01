"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Taller from "@/components/Taller";
import CinematicEffects from "@/components/CinematicEffects";
import { useT } from "@/lib/i18n";

export default function TallerPage() {
  const { t } = useT();
  const tl = t.taller;
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow={tl.eyebrow}
        title={<>{tl.titleA} <em>{tl.titleEm}</em>{tl.titleB}</>}
        lede={tl.pageLede}
      />

      <section className="interior">
        <h2>{tl.bankTitleA} <em>{tl.bankTitleEm}</em>.</h2>
        <p>{tl.bankP}</p>
        <img
          className="full"
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=85"
          alt="Taller"
        />
      </section>

      <Taller />

      <section className="interior">
        <h2>{tl.slowTitleA} <em>{tl.slowTitleEm}</em>.</h2>
        <p>{tl.slowP}</p>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
