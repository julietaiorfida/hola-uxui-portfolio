import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import julietaPhoto from "@/assets/julieta-sin-fondo.png";
import characterPhoto from "@/assets/character-julieta-final-no-bg.png";
import characterPhoto2 from "@/assets/character-julieta.png";
const About = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-br from-secondary/30 to-accent/20 relative overflow-hidden" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-square rounded-[3rem] overflow-hidden bg-secondary shadow-2xl">
                    <img 
                      src={julietaPhoto} 
                      alt="Julieta" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-[3rem] overflow-hidden bg-secondary shadow-2xl">
                    <img 
                      src={characterPhoto} 
                      alt="Character Julieta" 
                      className="w-full h-full object-contain bg-gradient-to-br from-secondary to-accent/30"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square rounded-[3rem] overflow-hidden bg-secondary shadow-2xl">
                    <img 
                      src={characterPhoto2} 
                      alt="Character Julieta 2" 
                      className="w-full h-full object-contain bg-gradient-to-br from-primary/20 to-secondary"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary shadow-xl animate-float"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-6xl md:text-7xl font-black text-primary mb-8">
              ABOUT ME
            </h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Me di cuenta de que quería estudiar diseño cuando no podía usar una app sin pensar cómo mejorarla. Desde chica observaba tipografías, colores y composiciones sin saber que eso era diseño.
              </p>
              <p>
                Hoy estudio Diseño de Multimedia e Interacción en UADE. Me especializo en UX/UI, branding y contenido visual.
              </p>
              <p>
                Soy muy creativa, curiosa y detallista. Me encanta imaginar, experimentar y no paro hasta encontrar soluciones que realmente funcionen.
              </p>
              <p>
                Para mí, diseñar no es solo resolver problemas: es hacer que las ideas se sientan, se entiendan y se disfruten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;