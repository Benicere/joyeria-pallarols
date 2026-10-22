"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Piece } from "@/lib/pieces";
import type { Lang } from "@/lib/dictionary";
import PieceCard from "@/components/PieceCard";

export default function PieceGallery({ pieces, lang, reveal = false }: { pieces: Piece[]; lang: Lang; reveal?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + pieces.length) % pieces.length)),
    [pieces.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const p = open === null ? null : pieces[open];

  return (
    <>
      <div className="grid-uniform">
        {pieces.map((piece, i) => (
          <PieceCard piece={piece} lang={lang} className={reveal ? "reveal" : ""} key={piece.num} onClick={() => setOpen(i)} />
        ))}
      </div>

      {p && createPortal(
        <div className="lb" role="dialog" aria-modal="true" aria-label={p.title[lang]} onClick={close}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={p.img} alt={p.title[lang]} />
            <figcaption>
              <span className="lb-num">{p.num}</span>
              <span className="lb-title">{p.title[lang]}</span>
              <span className="lb-meta">{p.meta[lang]}</span>
            </figcaption>
          </figure>
          <button className="lb-close" onClick={close} aria-label="Cerrar">×</button>
          {pieces.length > 1 && (
            <>
              <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Anterior">‹</button>
              <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Siguiente">›</button>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
