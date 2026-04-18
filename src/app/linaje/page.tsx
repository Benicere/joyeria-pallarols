import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Linaje from "@/components/Linaje";
import CinematicEffects from "@/components/CinematicEffects";

export default function LinajePage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="01 · Linaje"
        title={<>Nueve generaciones <em>al mismo banco.</em></>}
        lede="Desde 1750, la casa pasa de padre a hijo: las herramientas, los clientes viejos, la marca de punzón al reverso y la costumbre de anotarlo todo en el libro."
      />

      <section className="interior">
        <div className="two-col">
          <div>
            <h2>Un oficio que <em>se hereda</em>.</h2>
            <p>
              El primero cruzó el Atlántico en 1750 con un martillo, un cincel y el
              nombre de un maestro catalán que no volvería a ver. Abrió taller en la
              calle Defensa — entonces apenas un camino — y firmó sus primeras piezas
              con el mismo punzón que hoy seguimos usando.
            </p>
            <p>
              Cada generación agregó algo sin romper lo anterior. Un gesto nuevo, una
              herramienta comprada en París, una línea de alianzas que se pidió y se
              quedó. Nada se tiró.
            </p>
          </div>
          <div>
            <img
              className="full"
              style={{ margin: 0 }}
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=85"
              alt="Archivo familiar"
            />
          </div>
        </div>
      </section>

      <Linaje />
      <Footer />
      <CinematicEffects />
    </>
  );
}
