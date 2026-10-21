import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Manifiesto from "@/components/Manifiesto";
import Catalogo from "@/components/Catalogo";
import Encargos from "@/components/Encargos";
import Footer from "@/components/Footer";
import CinematicEffects from "@/components/CinematicEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <Manifiesto />
      <Catalogo />
      <Encargos />
      <Footer />
      <CinematicEffects />
    </>
  );
}
