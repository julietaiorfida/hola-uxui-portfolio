import { useLanguage } from "@/i18n/useLanguage";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgWireframes from "@/assets/about/wireframes.jpeg";
import imgIllustrator from "@/assets/about/illustrator.jpeg";
import imgTotebag from "@/assets/about/totebag.jpeg";
import imgFigma from "@/assets/about/figma-work.jpeg";
import imgAccordion from "@/assets/about/accordion-art.jpeg";
import imgSculpture from "@/assets/about/paper-sculpture.jpeg";
import imgWorkshop from "@/assets/about/workshop.jpeg";
import imgCalligraphy from "@/assets/about/calligraphy.jpeg";
import imgPhotography from "@/assets/about/photography.jpeg";
import imgWineLabels from "@/assets/about/wine-labels.jpeg";
import imgCanvasArt from "@/assets/about/canvas-art.jpeg";
import imgIllustratorLettering from "@/assets/about/illustrator-lettering.jpeg";
import imgStencilWords from "@/assets/about/stencil-words.jpeg";
import imgCarpeDiem from "@/assets/about/carpe-diem.jpeg";
import imgCalligraphySantiago from "@/assets/about/calligraphy-santiago.jpeg";

const About = () => {
  const { t } = useLanguage();
  const imageRef = useReveal({ variant: 'scale' });
  const titleRef = useReveal({ variant: 'up', delay: 100 });
  const textRef = useReveal({ variant: 'right', delay: 200 });
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    { src: imgWireframes, alt: "Wireframes de prototipos" },
    { src: imgIllustrator, alt: "Diseño en Illustrator" },
    { src: imgTotebag, alt: "Tote bag pintada a mano" },
    { src: imgFigma, alt: "Trabajo en Figma" },
    { src: imgAccordion, alt: "Arte en acordeón" },
    { src: imgSculpture, alt: "Escultura de papel" },
    { src: imgWorkshop, alt: "Taller de diseño" },
    { src: imgCalligraphy, alt: "Caligrafía" },
    { src: imgPhotography, alt: "Sesión de fotografía" },
    { src: imgWineLabels, alt: "Diseño de etiquetas de vino" },
    { src: imgCanvasArt, alt: "Arte en canvas" },
    { src: imgIllustratorLettering, alt: "Lettering en Illustrator" },
    { src: imgStencilWords, alt: "Stencil de palabras" },
    { src: imgCarpeDiem, alt: "Diseño editorial Carpe Diem" },
    { src: imgCalligraphySantiago, alt: "Caligrafía artística" },
  ];

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance when visible
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen py-24 px-6 bg-[hsl(var(--section-white))] border-t border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative max-w-sm mx-auto w-full">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-background shadow-2xl relative">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <div ref={titleRef}>
              <h2 className="text-6xl md:text-7xl font-black text-primary mb-8">
                {t("about.title")}
              </h2>
            </div>
            <div ref={textRef} className="space-y-4 text-lg text-foreground/80">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
