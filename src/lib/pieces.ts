export type Piece = {
  num: string;
  title: { es: string; en: string };
  meta: { es: string; en: string };
  price: string;
  img: string;
};

// Orden fijo: el inicio muestra las primeras HOME_COUNT, la galería todas.
export const pieces: Piece[] = [
  { num: "N.º 421", title: { es: "Sello", en: "Signet" },          meta: { es: "Anillos · 6 modelos", en: "Rings · 6 models" },       price: "Desde $420.000", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=85" },
  { num: "N.º 388", title: { es: "Alianzas", en: "Wedding bands" }, meta: { es: "A medida", en: "Made to order" },                 price: "Desde $280.000", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85" },
  { num: "N.º 312", title: { es: "Retoño", en: "Sprout" },         meta: { es: "Colgante · Serie corta", en: "Pendant · Short series" }, price: "Desde $190.000", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85" },
  { num: "N.º 274", title: { es: "Gota", en: "Drop" },             meta: { es: "Aros · 4 largos", en: "Earrings · 4 lengths" },      price: "Desde $160.000", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=85" },
  { num: "N.º 198", title: { es: "Cordón", en: "Cord" },           meta: { es: "Pulsera trenzada", en: "Braided bracelet" },         price: "Desde $240.000", img: "https://images.unsplash.com/photo-1535632066274-3f7f26feb089?w=900&q=85" },
  { num: "N.º 156", title: { es: "Patria", en: "Patria" },         meta: { es: "Cadena labrada", en: "Engraved chain" },             price: "Desde $320.000", img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&q=85" },
  { num: "N.º 089", title: { es: "Nocturno", en: "Nocturne" },     meta: { es: "Colgante · Pieza única", en: "Pendant · One of a kind" }, price: "Consultar",   img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=900&q=85" },
  { num: "N.º 402", title: { es: "Hoja", en: "Leaf" },             meta: { es: "Anillo · 3 tamaños", en: "Ring · 3 sizes" },         price: "Desde $260.000", img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=85" },
  { num: "N.º 377", title: { es: "Criolla", en: "Criolla" },       meta: { es: "Aros · Par", en: "Earrings · Pair" },                price: "Desde $180.000", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85" },
  { num: "N.º 365", title: { es: "Medalla", en: "Medal" },         meta: { es: "Colgante grabado", en: "Engraved pendant" },         price: "Desde $210.000", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85" },
  { num: "N.º 341", title: { es: "Eslabón", en: "Link" },          meta: { es: "Cadena · 50 cm", en: "Chain · 50 cm" },              price: "Desde $380.000", img: "https://images.unsplash.com/photo-1573408301819-6eea342dd51f?w=900&q=85" },
  { num: "N.º 298", title: { es: "Argolla", en: "Band" },          meta: { es: "Pulsera maciza", en: "Solid bracelet" },             price: "Desde $220.000", img: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=900&q=85" },
];

export const HOME_COUNT = 6;
