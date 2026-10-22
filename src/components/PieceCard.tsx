import type { Piece } from "@/lib/pieces";
import type { Lang } from "@/lib/dictionary";

export default function PieceCard({ piece, lang, className = "" }: { piece: Piece; lang: Lang; className?: string }) {
  return (
    <div className={`ed ${className}`}>
      <div className="img">
        <img src={piece.img} alt={piece.title[lang]} loading="lazy" />
      </div>
      <div className="num">{piece.num}</div>
      <div className="caption">
        <h3>{piece.title[lang]}</h3>
        <div className="m">{piece.meta[lang]}</div>
      </div>
    </div>
  );
}
