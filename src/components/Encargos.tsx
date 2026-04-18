const encargoSteps = [
  {
    n: "I",
    h: "Un café",
    p: "Nos encontramos en el taller. Traé lo que tengas: una foto, una piedra, un dibujo en servilleta. Charlamos.",
  },
  {
    n: "II",
    h: "Dos bocetos a mano",
    p: "Dibujos a escala real con peso aproximado. Los revisamos juntos, sin compromiso. Si algo no cierra, volvemos.",
  },
  {
    n: "III",
    h: "Seis a diez semanas",
    p: "Podés venir a ver la pieza en proceso cuantas veces quieras — es parte de tenerla. Al final, entra al libro.",
  },
];

export default function Encargos() {
  return (
    <section className="enc" id="enc">
      <div className="enc-inner">
        <div className="enc-top">
          <div className="eyebrow">04 · Encargos</div>
          <h2>
            Algo que <em>todavía</em> no existe.
          </h2>
          <p className="sub">
            Anillos con plata heredada, alianzas grabadas con la letra de quien
            las lleva, colgantes que guardan una inicial o una fecha. Con cita,
            sin apuro.
          </p>
        </div>

        <div className="enc-steps">
          {encargoSteps.map((s) => (
            <div className="enc-step reveal" key={s.n}>
              <div className="n">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>

        <div className="enc-cta">
          <a href="#">Reservar un encuentro &nbsp;→</a>
        </div>
      </div>
    </section>
  );
}
