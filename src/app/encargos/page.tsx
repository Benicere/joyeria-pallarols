import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Encargos from "@/components/Encargos";
import CinematicEffects from "@/components/CinematicEffects";

export default function EncargosPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="04 · Encargos"
        title={<>Algo que <em>todavía</em> no existe.</>}
        lede="Anillos con plata heredada, alianzas grabadas con la letra de quien las lleva, colgantes que guardan una inicial o una fecha. Con cita, sin apuro."
      />

      <section className="interior">
        <h2>Cómo <em>trabajamos</em>.</h2>
        <p>
          Un encargo es una conversación larga. Traé lo que tengas — una foto vieja,
          una piedra de la abuela, un dibujo en servilleta — y lo transformamos en
          algo que se pueda heredar. Nada se apura. Nada se improvisa.
        </p>
        <p>
          Aceptamos refundir plata heredada: te entregamos un recibo con el peso y lo
          incorporamos a la nueva pieza. Es la manera más honesta de mantener viva
          una joya vieja que ya nadie se pone.
        </p>
      </section>

      <Encargos />

      <section className="interior">
        <h2>Preguntas <em>frecuentes</em>.</h2>
        <p>
          <em>¿Cuánto tarda?</em> Entre seis y diez semanas, según la complejidad. No
          trabajamos contra reloj.
        </p>
        <p>
          <em>¿Se puede grabar?</em> Sí, a mano con buril. Fechas, iniciales, una
          línea corta. El grabado a máquina no lo hacemos.
        </p>
        <p>
          <em>¿Y si no me gusta el boceto?</em> Volvemos al primer paso, sin costo.
          Hasta que la pieza sea la que tenía que ser.
        </p>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
