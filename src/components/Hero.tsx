import heroImage from "@/assets/character-julieta-final-no-bg.png";

const Hero = () => {
  return <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background to-primary/5">
      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Column - Text */}
          <div className="relative z-10 pl-8 md:pl-16 lg:pl-24">
            <h1 className="text-[4rem] lg:text-[9rem] font-black leading-none handwriting animate-fade-in text-primary md:text-8xl">
              Mi portfolio,<br />
              <span className="text-accent text-[4.5rem] lg:text-[10rem] md:text-9xl">Julieta</span>
            </h1>
          </div>

          {/* Right Column - Character (Full height, no margins) */}
          <div className="relative h-screen flex items-center justify-end">
            <img 
              src={heroImage} 
              alt="Julieta" 
              className="h-full w-auto object-contain object-right animate-fade-in" 
              style={{
                animationDelay: '0.1s',
                maxWidth: 'none'
              }} 
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;