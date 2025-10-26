import helpMe from "@/assets/sticker-help-me-new.png";
import lorem from "@/assets/sticker-lorem.png";
import ctrlZ from "@/assets/sticker-ctrl-z.png";
import tools from "@/assets/sticker-tools.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Stickers background */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src={helpMe} 
              alt="Help Me sticker" 
              className="absolute top-20 left-10 w-40 md:w-56 rotate-12 animate-fade-in opacity-80"
            />
            <img 
              src={tools} 
              alt="Design tools sticker" 
              className="absolute top-32 right-10 w-32 md:w-40 -rotate-6 animate-fade-in opacity-80"
              style={{animationDelay: '0.2s'}}
            />
            <img 
              src={ctrlZ} 
              alt="Ctrl Z sticker" 
              className="absolute bottom-32 left-16 w-28 md:w-36 rotate-45 animate-fade-in opacity-80"
              style={{animationDelay: '0.4s'}}
            />
            <img 
              src={lorem} 
              alt="Lorem ipsum sticker" 
              className="absolute bottom-40 right-20 w-36 md:w-48 -rotate-12 animate-fade-in opacity-80"
              style={{animationDelay: '0.3s'}}
            />
          </div>

          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none handwriting animate-fade-in text-primary relative z-10">
            mi portfolio,<br />
            <span className="text-accent">Julieta</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
