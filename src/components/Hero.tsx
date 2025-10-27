import character from "@/assets/julieta-sin-fondo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24 md:px-12 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="relative">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[9rem] font-black leading-none handwriting animate-fade-in text-primary relative z-10">
              Mi portfolio,<br />
              <span className="text-accent text-[4.5rem] md:text-[7rem] lg:text-[10rem]">Julieta</span>
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
