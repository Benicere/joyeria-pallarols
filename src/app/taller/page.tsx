import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Taller from "@/components/Taller";
import CinematicEffects from "@/components/CinematicEffects";

export default function TallerPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="02 · Taller"
        title={<>Cuatro <em>gestos</em>, trescientos años.</>}
        lede="Fundir, forjar, cincelar, pulir. El proceso no cambió porque nada lo mejoró. Lo que sí cambia es el pulso, la paciencia y la mano que lo ejecuta."
      />

      <section className="interior">
        <h2>El <em>banco</em>.</h2>
        <p>
          El mismo yunque desde 1845. La lima del abuelo, la sierra de pelo del
          padre, los cinceles firmados con iniciales que ya nadie conoce. Todo
          guardado, todo usado.
        </p>
        <img
          className="full"
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=2000&q=85"
          alt="Taller"
        />
      </section>

      <Taller />

      <section className="interior">
        <h2>Sin <em>apuro</em>.</h2>
        <p>
          Una pieza tarda lo que tiene que tardar. Nadie se va del taller con algo
          que no esté firmado, pesado, y anotado en el libro. Eso nos permitió
          dormir tranquilos nueve generaciones.
        </p>
      </section>

      <Footer />
      <CinematicEffects />
    </>
  );
}
