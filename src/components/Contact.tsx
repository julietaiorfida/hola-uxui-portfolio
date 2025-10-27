import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const Contact = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <section id="contact" className="min-h-screen py-20 px-6 flex items-center bg-gradient-to-br from-background to-accent/10 relative overflow-hidden" ref={ref}>
      {/* Decorative stickers */}
      <div className={`absolute top-20 left-10 text-6xl rotate-12 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`} style={{
      animationDelay: '0.4s'
    }}>
        💌
      </div>
      
      <div className={`max-w-7xl mx-auto w-full ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center">
          CONTACT
        </h2>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-2xl text-foreground/80">
            ¿Tienes un proyecto en mente? <br />
            <span className="text-primary font-bold">¡Hablemos!</span>
          </p>

          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">CABA, Argentina</p>
            <a href="mailto:julietaiorfida@gmail.com" className="block text-xl font-semibold text-primary hover:underline">
              julietaiorfida@gmail.com
            </a>
            <a href="tel:+5491127284692" className="block text-lg text-foreground/80 hover:text-primary">
              +54 11 2728-4692
            </a>
          </div>

          <Button size="lg" asChild className="rounded-full px-12 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-all hover:shadow-primary/50">
            <a href="mailto:julietaiorfida@gmail.com">
              <Mail className="mr-3 h-6 w-6" />
              Enviar Mensaje
            </a>
          </Button>

          <div className="flex justify-center gap-6 pt-8">
            <Button variant="outline" size="icon" asChild className="rounded-full w-20 h-20 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all hover:scale-110">
              <a href="https://www.linkedin.com/in/mariajulietaiorfida/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full w-20 h-20 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all hover:scale-110">
              <a href="https://www.behance.net/mariajulietaiorfida" target="_blank" rel="noopener noreferrer">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="rounded-full w-20 h-20 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all hover:scale-110">
              <a href="https://wa.me/5491127950179" target="_blank" rel="noopener noreferrer">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;