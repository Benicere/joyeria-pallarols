"use client";

import { useT } from "@/lib/i18n";
import { pieces, HOME_COUNT } from "@/lib/pieces";
import PieceCard from "@/components/PieceCard";

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

        <div className="grid-uniform">
          {pieces.slice(0, HOME_COUNT).map((p) => (
            <PieceCard piece={p} lang={lang} className="reveal" key={p.num} />
          ))}
        </div>

        <div className="cat-foot">
          <a href="/piezas">{c.footCta}</a>
        </div>
      </div>
    </section>
  );
}
