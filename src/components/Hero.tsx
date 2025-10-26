import designTools from "@/assets/sticker-design-tools.png";
import uxCollection from "@/assets/sticker-ux-collection.png";
import smiley from "@/assets/sticker-smiley.png";
import helpMe from "@/assets/sticker-help-me.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Stickers background */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src={designTools} 
              alt="" 
              className="absolute top-20 left-10 w-32 md:w-48 rotate-12 animate-fade-in opacity-70"
            />
            <img 
              src={uxCollection} 
              alt="" 
              className="absolute top-32 right-10 w-40 md:w-56 -rotate-6 animate-fade-in opacity-70"
              style={{animationDelay: '0.2s'}}
            />
            <img 
              src={smiley} 
              alt="" 
              className="absolute bottom-32 left-16 w-24 md:w-32 rotate-45 animate-fade-in opacity-70"
              style={{animationDelay: '0.4s'}}
            />
            <img 
              src={helpMe} 
              alt="" 
              className="absolute bottom-40 right-20 w-28 md:w-36 -rotate-12 animate-fade-in opacity-70"
              style={{animationDelay: '0.3s'}}
            />
            <div className="absolute top-1/2 left-1/4 text-6xl rotate-12 animate-fade-in opacity-50" style={{animationDelay: '0.5s'}}>✨</div>
            <div className="absolute bottom-1/3 right-1/3 text-5xl -rotate-6 animate-fade-in opacity-50" style={{animationDelay: '0.6s'}}>🎨</div>
          </div>

          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none handwriting animate-fade-in text-primary relative z-10">
            mi portfolio,<br />
            <span className="text-accent">julieta</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
