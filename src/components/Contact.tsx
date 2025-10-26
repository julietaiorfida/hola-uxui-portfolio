import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
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
            <a 
              href="mailto:julietaiorfida@gmail.com"
              className="block text-xl font-semibold text-primary hover:underline"
            >
              julietaiorfida@gmail.com
            </a>
            <a 
              href="tel:+5491127284692"
              className="block text-lg text-foreground/80 hover:text-primary"
            >
              +54 11 2728-4692
            </a>
          </div>

          <Button
            size="lg"
            asChild
            className="rounded-full px-12 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-all hover:shadow-primary/50"
          >
            <a href="mailto:julietaiorfida@gmail.com">
              <Mail className="mr-3 h-6 w-6" />
              Enviar Mensaje
            </a>
          </Button>

          <div className="flex justify-center gap-6 pt-8">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full w-16 h-16 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all"
            >
              <a href="https://linkedin.com/in/julietaiorfida/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-16 h-16 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all"
            >
              <Instagram className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-16 h-16 border-2 shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-primary/50 transition-all"
            >
              <Github className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
