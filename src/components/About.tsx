import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import julietaPhoto from "@/assets/julieta-sin-fondo.png";
import characterPhoto from "@/assets/character-julieta-final-no-bg.png";
import julietaThumbsUp from "@/assets/julieta-thumbs-up.png";
import julietaPhone from "@/assets/julieta-phone.png";
import julietaDrawing from "@/assets/julieta-drawing.png";
import julietaLaptop from "@/assets/julieta-laptop.png";
import julietaTeam from "@/assets/julieta-team.png";
import usersFirstSticker from "@/assets/sticker-users-first-star-original.png";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const images = [
    { src: julietaPhoto, alt: "Julieta" },
    { src: characterPhoto, alt: "Character Julieta" },
    { src: julietaThumbsUp, alt: "Julieta con actitud positiva" },
    { src: julietaPhone, alt: "Julieta en llamada" },
    { src: julietaDrawing, alt: "Julieta diseñando" },
    { src: julietaLaptop, alt: "Julieta trabajando" },
    { src: julietaTeam, alt: "Julieta colaborando" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-secondary/10 via-background to-accent/5 relative overflow-hidden" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
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
            <img src={usersFirstSticker} alt="Users First" className="absolute -bottom-6 -right-6 w-40 h-40 animate-float" />
          </div>

          <div>
            <h2 className="text-6xl md:text-7xl font-black text-primary mb-8">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
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
