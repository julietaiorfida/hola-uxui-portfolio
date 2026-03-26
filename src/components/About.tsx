import { useLanguage } from "@/i18n/useLanguage";
import { useReveal } from "@/hooks/useReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  return (
    <section id="about" className="min-h-screen py-24 px-6 bg-[hsl(var(--section-white))] border-t border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-square rounded-[3rem] overflow-hidden bg-background shadow-2xl">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
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
