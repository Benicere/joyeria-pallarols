const steps = [
  {
    n: "I · FUNDIR",
    h: "La granalla se vuelve líquido",
    p: "Plata 925 en crisol de grafito, soplete a llama neutra. Vaciado en lingotera de hierro. Espera.",
  },
  {
    n: "II · FORJAR",
    h: "El martillo encuentra la fibra",
    p: "Sobre el yunque, el lingote se estira y se recoge. Cada golpe endurece la pieza por dentro.",
  },
  {
    n: "III · CINCELAR",
    h: "Cinceles con nombre propio",
    p: "Repujado desde el reverso o grabado al frente. Algunos de estos cinceles tienen casi dos siglos.",
  },
  {
    n: "IV · PULIR",
    h: "Lo último es dejar el tiempo",
    p: "Lija fina, pasta, gamuza. La pátina la pone quien la lleva, con los años — nosotros no la forzamos.",
  },
];

export default function Taller() {
  return (
    <section className="taller" id="taller">
      <div className="bg" data-parallax="0.2">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=85"
          alt="Taller"
        />
      </div>
      <div className="wrap">
        <div>
          <div className="eyebrow">02 · Taller</div>
          <h2>
            Cuatro <em>gestos</em>, trescientos años.
          </h2>
          <p className="lede">
            Fundir, forjar, cincelar, pulir. El proceso no cambió porque nada lo
            mejoró.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s.n}>
              <span className="n">{s.n}</span>
              <div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
