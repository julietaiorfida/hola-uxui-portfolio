import helpMe from "@/assets/sticker-help-me-original.png";
import lorem from "@/assets/sticker-lorem-original.png";
import ctrlZ from "@/assets/sticker-ctrl-z-original.png";
import tools from "@/assets/sticker-tools-original.png";
import character from "@/assets/character-julieta.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="relative">
            {/* Stickers background */}
            <div className="absolute inset-0 pointer-events-none">
              <img 
                src={helpMe} 
                alt="Help Me sticker" 
                className="absolute -top-10 -left-10 w-32 md:w-40 rotate-12 animate-fade-in opacity-80"
              />
              <img 
                src={ctrlZ} 
                alt="Ctrl Z sticker" 
                className="absolute bottom-10 left-0 w-24 md:w-32 -rotate-6 animate-fade-in opacity-80"
                style={{animationDelay: '0.3s'}}
              />
            </div>

            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black leading-none handwriting animate-fade-in text-primary relative z-10">
              mi portfolio,<br />
              <span className="text-accent">Julieta</span>
            </h1>
          </div>

          {/* Right Column - Character */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Stickers around character */}
            <div className="absolute inset-0 pointer-events-none">
              <img 
                src={tools} 
                alt="Design tools sticker" 
                className="absolute top-10 right-10 w-28 md:w-36 rotate-12 animate-fade-in opacity-80"
                style={{animationDelay: '0.2s'}}
              />
              <img 
                src={lorem} 
                alt="Lorem ipsum sticker" 
                className="absolute bottom-20 right-0 w-32 md:w-40 -rotate-6 animate-fade-in opacity-80"
                style={{animationDelay: '0.4s'}}
              />
            </div>

            <img 
              src={character} 
              alt="Julieta character" 
              className="w-64 md:w-80 lg:w-96 animate-fade-in relative z-10"
              style={{animationDelay: '0.1s'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
