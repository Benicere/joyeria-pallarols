import type { Dict } from "@/lib/dictionary";
import { precioML, type PiezaML } from "@/lib/mercadolibre";

/* Una pieza publicada en Mercado Libre: sus fotos de allá y el botón que lleva
   a la publicación, donde se hace la compra. Al pasar el mouse se ve la 2.ª foto. */
export default function MLCard({ pieza, t }: { pieza: PiezaML; t: Dict["comprar"] }) {
  const [foto, foto2] = pieza.fotos;
  return (
    <article className="ml-card">
      <a className="ml-img" href={pieza.link} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        {foto && <img src={foto} alt={pieza.titulo} loading="lazy" />}
        {foto2 && <img src={foto2} alt="" loading="lazy" className="ml-img-2" />}
      </a>
      <div className="ml-body">
        <h3>{pieza.titulo}</h3>
        <div className="ml-price">{precioML(pieza.precio, pieza.moneda)}</div>
        <div className="ml-tags">
          {pieza.envioGratis && <span className="ml-free">{t.freeShipping}</span>}
          {pieza.stock === 1 ? (
            <span>{t.lastUnit}</span>
          ) : (
            pieza.stock > 1 && <span>{pieza.stock} {t.units}</span>
          )}
        </div>
        <a className="ml-buy" href={pieza.link} target="_blank" rel="noopener noreferrer">
          {t.buy}
        </a>
      </div>
    </article>
  );
}
