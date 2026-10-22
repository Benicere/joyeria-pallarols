import type { Piece } from "@/lib/pieces";
import type { Lang } from "@/lib/dictionary";

export default function PieceCard({ piece, lang, className = "", onClick }: { piece: Piece; lang: Lang; className?: string; onClick?: () => void }) {
  return (
    <div className={`ed ${className}`} onClick={onClick}>
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
