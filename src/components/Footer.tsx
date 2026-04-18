export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="f-top">
        <div>
          <h3 className="big">
            Joyería
            <br />
            <em>Pallarols</em>
          </h3>
        </div>
        <div className="f-info">
          <div>
            <h5>Casa</h5>
            <a href="#">Historia</a>
            <a href="#">Taller</a>
            <a href="#">Archivo</a>
            <a href="#">Prensa</a>
          </div>
          <div>
            <h5>Piezas</h5>
            <a href="#">Anillos</a>
            <a href="#">Alianzas</a>
            <a href="#">Colgantes</a>
            <a href="#">Aros · Pulseras</a>
          </div>
          <div>
            <h5>Contacto</h5>
            <p>Defensa 1039, San Telmo</p>
            <p>Lunes a sábado</p>
            <p>Con cita previa</p>
            <p style={{ color: "var(--gold)", marginTop: 12 }}>+54 11 4361 ·· ··</p>
          </div>
        </div>
      </div>
      <div className="f-legal">
        <span>© MMXXVI · Diseño de demostración</span>
        <span>Plata 925 · Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
