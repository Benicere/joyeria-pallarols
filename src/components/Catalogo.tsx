"use client";

import { useT } from "@/lib/i18n";
import { pieces, HOME_COUNT } from "@/lib/pieces";
import PieceGallery from "@/components/PieceGallery";

export default function Catalogo() {
  const { t, lang } = useT();
  const c = t.cat;
  return (
    <section className="cat" id="cat">
      <div className="cat-inner">
        <div className="cat-head">
          <h2>
            {c.titleA}
            <br />
            <em>{c.titleEm}</em>
          </h2>
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <p>{c.lede}</p>
          </div>
        </div>

        <PieceGallery pieces={pieces.slice(0, HOME_COUNT)} lang={lang} reveal />

        <div className="cat-foot">
          <a href="/piezas">{c.footCta}</a>
        </div>
      </div>
    </section>
  );
}
