import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-6 bg-muted/20" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Educación */}
          <div className="bg-background rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-primary mb-6">Educación</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-accent mb-1">Universidad Argentina de la Empresa</p>
                <p className="text-foreground/80 mb-1">Licenciatura en Diseño de Multimedia e Interacción</p>
                <p className="text-sm text-muted-foreground">Marzo 2024 - Diciembre 2028 (En curso)</p>
              </div>
              
              <div>
                <p className="text-lg font-semibold text-accent mb-1">Colegio Marianista</p>
                <p className="text-foreground/80 mb-1">Bachillerato en Ciencias Sociales y Humanidades</p>
                <p className="text-sm text-muted-foreground">Marzo 2008 - Diciembre 2023</p>
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="bg-background rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-primary mb-6">Certificaciones</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-accent mb-1">Fundamentos de la Inteligencia Artificial</p>
                <p className="text-foreground/80 mb-1">IBM</p>
                <p className="text-sm text-muted-foreground">Octubre 2025</p>
              </div>
              
              <div>
                <p className="text-lg font-semibold text-accent mb-1">Primer Certificado en Inglés</p>
                <p className="text-foreground/80 mb-1">Educación Internacional de Cambridge</p>
                <p className="text-sm text-muted-foreground">Agosto 2023</p>
              </div>
            </div>
          </div>

          {/* Voluntariado */}
          <div className="bg-background rounded-3xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-primary mb-6">Voluntariado</h3>
            
            <div>
              <p className="text-lg font-semibold text-accent mb-1">Fundación Misión Marianista</p>
              <p className="text-sm text-muted-foreground mb-3">Marzo 2022 - Actualidad</p>
              <p className="text-foreground/80">
                Apoyo escolar en Colegio de Fátima, Villa Soldati. Acompañamiento académico 
                en matemática, lengua e inglés, generando espacios de confianza y fomentando 
                valores de compañerismo y empatía.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
