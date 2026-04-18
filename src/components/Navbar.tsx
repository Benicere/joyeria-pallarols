export default function Navbar() {
  return (
    <nav className="nav">
      <div className="left">
        <a href="#linaje">Casa</a>
        <a href="#taller">Taller</a>
        <a href="#cat">Piezas</a>
      </div>
      <div className="brand">
        Joyería <em>Pallarols</em>
      </div>
      <div className="right">
        <a href="#enc">Encargos</a>
        <a href="#">Visita</a>
        <a href="#">Es / En</a>
      </div>
    </nav>
  );
}
