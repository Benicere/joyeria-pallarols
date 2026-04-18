const pieces = [
  {
    cls: "a",
    num: "N.º 421",
    title: "Sello",
    meta: ["Anillos · 6 modelos", "Desde $420.000"],
    img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1400&q=85",
  },
  {
    cls: "b",
    num: "N.º 388",
    title: "Alianzas",
    meta: ["A medida", "Desde $280.000"],
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&q=85",
  },
  {
    cls: "c",
    num: "N.º 312",
    title: "Retoño",
    meta: ["Colgantes", "Desde $190.000"],
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&q=85",
  },
  {
    cls: "d",
    num: "N.º 274",
    title: "Gota",
    meta: ["Aros · 4 largos", "Desde $160.000"],
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=85",
  },
  {
    cls: "e",
    num: "N.º 198",
    title: "Cordón",
    meta: ["Pulsera trenzada", "Desde $240.000"],
    img: "https://images.unsplash.com/photo-1535632066274-3f7f26feb089?w=900&q=85",
  },
  {
    cls: "f",
    num: "N.º 156",
    title: "Patria",
    meta: ["Cadena labrada", "Desde $320.000"],
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=900&q=85",
  },
  {
    cls: "g",
    num: "N.º 089",
    title: "Nocturno",
    meta: ["Pieza única", "Consultar"],
    img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1400&q=85",
  },
];

export default function Catalogo() {
  return (
    <section className="cat" id="cat">
      <div className="cat-inner">
        <div className="cat-head">
          <h2>
            Colecciones
            <br />
            <em>permanentes.</em>
          </h2>
          <div>
            <div className="eyebrow">03 · Piezas</div>
            <p>
              Todo en plata 925, números limitados y firmadas al reverso. Cada
              pieza entra al libro antes de salir del taller.
            </p>
          </div>
        </div>

        <div className="ed-grid">
          {pieces.map((p) => (
            <div className={`ed ${p.cls} reveal`} key={p.num}>
              <div className="img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="num">{p.num}</div>
              <div className="caption">
                <h3>{p.title}</h3>
                <div className="m">
                  {p.meta[0]}
                  <br />
                  {p.meta[1]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cat-foot">
          <span className="n">Mostrando 7 de 34 piezas</span>
          <a href="#">Ver catálogo completo →</a>
        </div>
      </div>
    </section>
  );
}
