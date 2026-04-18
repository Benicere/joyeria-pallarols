import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">Lo que hacemos</p>
          <h1 className="text-5xl sm:text-7xl text-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            Servicios
          </h1>
        </div>
      </section>
      <Footer />
    </div>
  );
}
