/* ============================================================================
   Piezas publicadas en Mercado Libre.

   El archivo src/data/mercadolibre.json NO se edita a mano: lo escribe cada hora
   el VPS (ml-notificador/catalogo_web.py) con las publicaciones activas de la
   cuenta y lo commitea solo cuando algo cambió; Vercel publica el cambio.
   Las fotos son las mismas de Mercado Libre (vienen de su CDN, mlstatic.com).
   ============================================================================ */

import datos from "@/data/mercadolibre.json";

export type PiezaML = {
  id: string;
  titulo: string;
  precio: number;
  moneda: string;
  stock: number;
  envioGratis: boolean;
  link: string;
  fotos: string[];
};

export type CatalogoML = {
  actualizado: string | null;
  tienda: string | null;
  piezas: PiezaML[];
};

export const catalogoML = datos as CatalogoML;

export function precioML(precio: number, moneda: string) {
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: moneda || "ARS",
      maximumFractionDigits: 0,
    }).format(precio);
  } catch {
    return `${moneda} ${precio}`;
  }
}
