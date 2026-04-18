import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

function getImages(folder: string, prefix: string) {
  const dir = path.join(process.cwd(), "public", folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(webp|jpg|jpeg|png)$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0");
      const numB = parseInt(b.match(/\d+/)?.[0] || "0");
      return numA - numB;
    })
    .map((file, i) => ({
      src: `/${folder}/${file}`,
      alt: `${prefix} ${i + 1}`,
    }));
}

export default function Galeria() {
  const tattooImages = getImages("tatuajes", "Tatuaje");
  const piercingImages = getImages("piercing", "Piercing");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GallerySection tattooImages={tattooImages} piercingImages={piercingImages} />
      <Footer />
    </div>
  );
}
