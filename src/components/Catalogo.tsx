"use client";

import { useT } from "@/lib/i18n";

const pieces = [
  { cls: "a", num: "N.º 421", key: "Sello",    price: "Desde $420.000", meta: { es: "Anillos · 6 modelos", en: "Rings · 6 models" },         titles: { es: "Sello", en: "Signet" },    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1400&q=85" },
  { cls: "b", num: "N.º 388", key: "Alianzas", price: "Desde $280.000", meta: { es: "A medida", en: "Made to order" },                       titles: { es: "Alianzas", en: "Wedding bands" }, img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85" },
  { cls: "c", num: "N.º 312", key: "Retoño",   price: "Desde $190.000", meta: { es: "Colgantes", en: "Pendants" },                            titles: { es: "Retoño", en: "Sprout" },    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85" },
  { cls: "d", num: "N.º 274", key: "Gota",     price: "Desde $160.000", meta: { es: "Aros · 4 largos", en: "Earrings · 4 lengths" },          titles: { es: "Gota", en: "Drop" },        img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=85" },
  { cls: "e", num: "N.º 198", key: "Cordón",   price: "Desde $240.000", meta: { es: "Pulsera trenzada", en: "Braided bracelet" },             titles: { es: "Cordón", en: "Cord" },      img: "https://images.unsplash.com/photo-1535632066274-3f7f26feb089?w=900&q=85" },
  { cls: "f", num: "N.º 156", key: "Patria",   price: "Desde $320.000", meta: { es: "Cadena labrada", en: "Engraved chain" },                 titles: { es: "Patria", en: "Patria" },    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&q=85" },
  { cls: "g", num: "N.º 089", key: "Nocturno", price: "Consultar",      meta: { es: "Pieza única", en: "One of a kind" },                     titles: { es: "Nocturno", en: "Nocturne" }, img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1400&q=85" },
];

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

        <div className="ed-grid">
          {pieces.map((p) => (
            <div className={`ed ${p.cls} reveal`} key={p.num}>
              <div className="img">
                <img src={p.img} alt={p.titles[lang]} />
              </div>
              <div className="num">{p.num}</div>
              <div className="caption">
                <h3>{p.titles[lang]}</h3>
                <div className="m">
                  {p.meta[lang]}
                  <br />
                  {p.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cat-foot">
          <span className="n">{c.footShowing} 7 {c.footOf} 34 {c.footPieces}</span>
          <a href="/piezas">{c.footCta}</a>
        </div>
      </div>
    </section>
  );
}
