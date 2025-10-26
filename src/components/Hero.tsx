import character from "@/assets/julieta-sin-fondo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="relative">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black leading-none handwriting animate-fade-in text-primary relative z-10">
              mi portfolio,<br />
              <span className="text-accent">Julieta</span>
            </h1>
          </div>

          {/* Right Column - Character */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={character} 
              alt="Julieta" 
              className="w-64 md:w-80 lg:w-[28rem] animate-fade-in"
              style={{animationDelay: '0.1s'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
