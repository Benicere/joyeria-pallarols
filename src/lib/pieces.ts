export type Piece = {
  num: string;
  title: { es: string; en: string };
  meta: { es: string; en: string };
  img: string;
};

type Entry = [title: [string, string], meta: [string, string]];

// Orden fijo: el inicio muestra las primeras HOME_COUNT, la galería todas.
// La foto de cada pieza es /piezas/pieza-N.webp según su posición.
const entries: Entry[] = [
  [["Perla negra", "Black pearl"], ["Colgante · Plata", "Pendant · Silver"]],
  [["Follaje", "Foliage"], ["Colgante · Plata", "Pendant · Silver"]],
  [["Calado", "Openwork"], ["Anillo · Oro", "Ring · Gold"]],
  [["Monograma", "Monogram"], ["Hebilla · Plata cincelada", "Buckle · Chased silver"]],
  [["Turquesa", "Turquoise"], ["Anillo · Plata cincelada", "Ring · Chased silver"]],
  [["Mate", "Mate"], ["Mate y bombilla · Plata", "Mate and bombilla · Silver"]],
  [["Voluta", "Scroll"], ["Hebilla labrada", "Carved buckle"]],
  [["Gemelos", "Cufflinks"], ["Gemelos · Plata calada", "Cufflinks · Pierced silver"]],
  [["Racimo", "Cluster"], ["Anillo · Plata", "Ring · Silver"]],
  [["Azul", "Blue"], ["Anillo · Plata", "Ring · Silver"]],
  [["Conjunto", "Set"], ["Colgante y brazalete · Plata", "Pendant and cuff · Silver"]],
  [["Rombo", "Lozenge"], ["Colgante · Plata", "Pendant · Silver"]],
  [["Pava", "Kettle"], ["Platería · Plata repujada", "Silverware · Repoussé silver"]],
  [["Cofre", "Casket"], ["Caja · Plata repujada", "Box · Repoussé silver"]],
  [["Violeta", "Violet"], ["Colgante · Plata", "Pendant · Silver"]],
  [["Esmalte", "Enamel"], ["Broche · Plata esmaltada", "Brooch · Enamelled silver"]],
  [["Gargantilla", "Collar"], ["Collar y anillo · Plata", "Necklace and ring · Silver"]],
  [["Alas", "Wings"], ["Collar · Plata", "Necklace · Silver"]],
  [["Iniciales", "Initials"], ["Colgante · Oro calado", "Pendant · Pierced gold"]],
  [["Mosaico", "Mosaic"], ["Aros y colgante", "Earrings and pendant"]],
  [["Juego", "Suite"], ["Aros y colgante · Plata", "Earrings and pendant · Silver"]],
  [["Rosa", "Rose"], ["Pulsera · Plata", "Bracelet · Silver"]],
  [["Enredadera", "Vine"], ["Collar · Plata", "Necklace · Silver"]],
  [["Apretón", "Handshake"], ["Medalla · Plata grabada", "Medal · Engraved silver"]],
  [["Tres azules", "Three blues"], ["Collar · Plata", "Necklace · Silver"]],
  [["Flores", "Flowers"], ["Collar · Plata", "Necklace · Silver"]],
  [["Ave", "Bird"], ["Broche", "Brooch"]],
  [["Noche", "Night"], ["Gargantilla y aros · Plata", "Choker and earrings · Silver"]],
  [["Celeste", "Sky"], ["Pulsera · Plata", "Bracelet · Silver"]],
  [["Sagrario", "Tabernacle"], ["Platería litúrgica", "Liturgical silverware"]],
];

export const pieces: Piece[] = entries.map(([title, meta], i) => ({
  num: `N.º ${String(i + 1).padStart(2, "0")}`,
  title: { es: title[0], en: title[1] },
  meta: { es: meta[0], en: meta[1] },
  img: `/piezas/pieza-${i + 1}.webp`,
}));

export const HOME_COUNT = 6;
