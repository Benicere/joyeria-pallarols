const rows = [
  { y: "1750", h: "El orfebre catalán", g: "Gen. I" },
  { y: "1845", h: "Platería criolla", g: "Gen. IV" },
  { y: "1919", h: "Nace el libro", g: "Gen. VI" },
  { y: "1952", h: "Línea nupcial", g: "Gen. VII" },
  { y: "1988", h: "Taller abierto", g: "Gen. VIII" },
  { y: "Hoy", h: "El mismo yunque", g: "Gen. IX" },
];

export default function Linaje() {
  return (
    <section className="linaje" id="linaje">
      <div className="linaje-inner">
        <div className="photo">
          <div className="big">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85"
              alt="Retrato del taller"
            />
          </div>
          <div className="stamp">
            <div>
              <div className="y">IX</div>
              <div className="t">Generación · hoy</div>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="eyebrow">01 · Linaje</div>
          <h2>
            Nueve generaciones <em>al mismo banco.</em>
          </h2>
          <p className="lede">
            Desde 1750, la casa pasa de padre a hijo: las herramientas, los
            clientes viejos, la marca de punzón al reverso y la costumbre de
            anotarlo todo en el libro.
          </p>
          <div className="timeline">
            {rows.map((r) => (
              <div className="row reveal" key={r.y}>
                <span className="y">{r.y}</span>
                <h4>{r.h}</h4>
                <span className="g">{r.g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
