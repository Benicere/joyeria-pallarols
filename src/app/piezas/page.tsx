"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CinematicEffects from "@/components/CinematicEffects";
import { useState } from "react";

type Piece = {
  num: string;
  title: string;
  category: "Anillos" | "Alianzas" | "Colgantes" | "Aros" | "Pulseras" | "Cadenas";
  meta: string;
  price: string;
  img: string;
};

const allPieces: Piece[] = [
  { num: "N.º 421", title: "Sello", category: "Anillos", meta: "6 modelos", price: "Desde $420.000", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=85" },
  { num: "N.º 388", title: "Alianzas", category: "Alianzas", meta: "A medida", price: "Desde $280.000", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85" },
  { num: "N.º 312", title: "Retoño", category: "Colgantes", meta: "Serie corta", price: "Desde $190.000", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85" },
  { num: "N.º 274", title: "Gota", category: "Aros", meta: "4 largos", price: "Desde $160.000", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=85" },
  { num: "N.º 198", title: "Cordón", category: "Pulseras", meta: "Trenzada", price: "Desde $240.000", img: "https://images.unsplash.com/photo-1535632066274-3f7f26feb089?w=900&q=85" },
  { num: "N.º 156", title: "Patria", category: "Cadenas", meta: "Labrada", price: "Desde $320.000", img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&q=85" },
  { num: "N.º 089", title: "Nocturno", category: "Colgantes", meta: "Pieza única", price: "Consultar", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85" },
  { num: "N.º 402", title: "Hoja", category: "Anillos", meta: "3 tamaños", price: "Desde $260.000", img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85" },
  { num: "N.º 377", title: "Criolla", category: "Aros", meta: "Par", price: "Desde $180.000", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85" },
  { num: "N.º 365", title: "Medalla", category: "Colgantes", meta: "Grabada", price: "Desde $210.000", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85" },
  { num: "N.º 341", title: "Eslabón", category: "Cadenas", meta: "50 cm", price: "Desde $380.000", img: "https://images.unsplash.com/photo-1573408301819-6eea342dd51f?w=900&q=85" },
  { num: "N.º 298", title: "Argolla", category: "Pulseras", meta: "Maciza", price: "Desde $220.000", img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=900&q=85" },
];

const categories = ["Todas", "Anillos", "Alianzas", "Colgantes", "Aros", "Pulseras", "Cadenas"] as const;

export default function PiezasPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todas");
  const list = filter === "Todas" ? allPieces : allPieces.filter((p) => p.category === filter);

  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Catálogo"
        title={<>Colecciones <em>permanentes.</em></>}
        lede="Todo en plata 925, números limitados y firmadas al reverso. Cada pieza entra al libro antes de salir del taller."
      />

      <section className="cat-page">
        <div className="cat-page-inner">
          <div className="cat-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={filter === c ? "is-active" : ""}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="cat-count">
            Mostrando {list.length} de {allPieces.length} piezas
          </div>

          <div className="grid-uniform">
            {list.map((p) => (
              <div className="ed reveal" key={p.num}>
                <div className="img">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="num">{p.num}</div>
                <div className="caption">
                  <h3>{p.title}</h3>
                  <div className="m">
                    {p.meta}
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
