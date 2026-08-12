import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Filmography from "@/components/Filmography";
import GallerySection from "@/components/GallerySection";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { galleries } from "@/data/galleries";

// Alternating light/dark rhythm for the galleries.
const darkGalleries = new Set(["effects", "musicians"]);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Filmography />

        {galleries.map((gallery) => {
          const tone = darkGalleries.has(gallery.id) ? "dark" : "light";
          // "Работы" anchor lands on the musicians/tv block.
          const wrap = gallery.id === "musicians";
          const section = (
            <GallerySection key={gallery.id} gallery={gallery} tone={tone} />
          );
          return wrap ? (
            <div id="works" key="works-anchor" className="scroll-mt-24">
              {section}
            </div>
          ) : (
            section
          );
        })}

        <Contacts />
      </main>
      <Footer />
    </>
  );
}
