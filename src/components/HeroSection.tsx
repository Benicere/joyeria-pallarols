export default function HeroSection() {
  return (
    <section className="hero">
      <div className="bg" data-parallax="0.3">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=2000&q=85"
          alt="Plata labrada"
        />
      </div>
      <div className="content">
        <div className="eyebrow">Casa fundada en 1750 · Plata 925</div>
        <h1>
          Plata que
          <br />
          lleva el
          <br />
          <em>tiempo</em> dentro.
        </h1>
        <div className="sub">
          <div className="ticker">
            Gen. <em>IX</em> · Buenos Aires
          </div>
          <p>
            Piezas únicas y series cortas, trabajadas a mano en un taller que abrió
            sus puertas hace nueve generaciones.
          </p>
          <div className="scroll">Scroll</div>
        </div>
      </div>
    </section>
  );
}
