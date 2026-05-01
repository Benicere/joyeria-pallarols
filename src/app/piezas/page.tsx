"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CinematicEffects from "@/components/CinematicEffects";
import { useState } from "react";
import { useT } from "@/lib/i18n";

type CatKey = "Todas" | "Anillos" | "Alianzas" | "Colgantes" | "Aros" | "Pulseras" | "Cadenas";

type Piece = {
  num: string;
  title: { es: string; en: string };
  category: Exclude<CatKey, "Todas">;
  meta: { es: string; en: string };
  price: string;
  img: string;
};

const allPieces: Piece[] = [
  { num: "N.º 421", title: { es: "Sello", en: "Signet" },          category: "Anillos",   meta: { es: "6 modelos", en: "6 models" },       price: "Desde $420.000", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=85" },
  { num: "N.º 388", title: { es: "Alianzas", en: "Wedding bands" }, category: "Alianzas",  meta: { es: "A medida", en: "Made to order" },   price: "Desde $280.000", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85" },
  { num: "N.º 312", title: { es: "Retoño", en: "Sprout" },         category: "Colgantes", meta: { es: "Serie corta", en: "Short series" }, price: "Desde $190.000", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85" },
  { num: "N.º 274", title: { es: "Gota", en: "Drop" },             category: "Aros",      meta: { es: "4 largos", en: "4 lengths" },       price: "Desde $160.000", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=85" },
  { num: "N.º 198", title: { es: "Cordón", en: "Cord" },           category: "Pulseras",  meta: { es: "Trenzada", en: "Braided" },          price: "Desde $240.000", img: "https://images.unsplash.com/photo-1535632066274-3f7f26feb089?w=900&q=85" },
  { num: "N.º 156", title: { es: "Patria", en: "Patria" },         category: "Cadenas",   meta: { es: "Labrada", en: "Engraved" },          price: "Desde $320.000", img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&q=85" },
  { num: "N.º 089", title: { es: "Nocturno", en: "Nocturne" },     category: "Colgantes", meta: { es: "Pieza única", en: "One of a kind" }, price: "Consultar",       img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85" },
  { num: "N.º 402", title: { es: "Hoja", en: "Leaf" },             category: "Anillos",   meta: { es: "3 tamaños", en: "3 sizes" },         price: "Desde $260.000", img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85" },
  { num: "N.º 377", title: { es: "Criolla", en: "Criolla" },       category: "Aros",      meta: { es: "Par", en: "Pair" },                  price: "Desde $180.000", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85" },
  { num: "N.º 365", title: { es: "Medalla", en: "Medal" },         category: "Colgantes", meta: { es: "Grabada", en: "Engraved" },          price: "Desde $210.000", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85" },
  { num: "N.º 341", title: { es: "Eslabón", en: "Link" },          category: "Cadenas",   meta: { es: "50 cm", en: "50 cm" },                price: "Desde $380.000", img: "https://images.unsplash.com/photo-1573408301819-6eea342dd51f?w=900&q=85" },
  { num: "N.º 298", title: { es: "Argolla", en: "Band" },          category: "Pulseras",  meta: { es: "Maciza", en: "Solid" },              price: "Desde $220.000", img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=900&q=85" },
];

const categories: CatKey[] = ["Todas", "Anillos", "Alianzas", "Colgantes", "Aros", "Pulseras", "Cadenas"];

export default function PiezasPage() {
  const { t, lang } = useT();
  const c = t.cat;
  const [filter, setFilter] = useState<CatKey>("Todas");
  const list = filter === "Todas" ? allPieces : allPieces.filter((p) => p.category === filter);

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
          <div className="cat-filters">
            {categories.map((k) => (
              <button
                key={k}
                className={filter === k ? "is-active" : ""}
                onClick={() => setFilter(k)}
              >
                {c.categories[k]}
              </button>
            ))}
          </div>

          <div className="cat-count">
            {c.footShowing} {list.length} {c.footOf} {allPieces.length} {c.footPieces}
          </div>

          <div className="grid-uniform">
            {list.map((p) => (
              <div className="ed" key={p.num}>
                <div className="img">
                  <img src={p.img} alt={p.title[lang]} />
                </div>
                <div className="num">{p.num}</div>
                <div className="caption">
                  <h3>{p.title[lang]}</h3>
                  <div className="m">
                    {p.meta[lang]}
                    <br />
                    {p.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
