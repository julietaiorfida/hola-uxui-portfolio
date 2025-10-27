import heroImage from "@/assets/julieta-hero-main.png";
import stickerTools from "@/assets/sticker-tools-original.png";
import stickerCtrlZ from "@/assets/sticker-ctrl-z-original.png";
const Hero = () => {
  return <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-secondary/10">
      {/* Decorative stickers */}
      <img src={stickerTools} alt="" className="absolute top-20 left-10 w-24 h-24 opacity-80 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
      <img src={stickerCtrlZ} alt="" className="absolute bottom-32 left-32 w-20 h-20 opacity-80 -rotate-6 animate-float" style={{ animationDelay: '1s' }} />
      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Column - Text */}
          <div className="relative z-10 pl-12 md:pl-20 lg:pl-32 flex-1 flex items-center justify-center">
            <h1 className="text-[5rem] lg:text-[11rem] font-black leading-none handwriting animate-fade-in text-primary md:text-8xl">
              Mi portfolio,<br />
              <span className="text-accent text-[5.5rem] lg:text-[12rem] md:text-[10rem]">Julieta</span>
            </h1>
          </div>

          {/* Right Column - Character (Full height, no margins) */}
          <div className="relative h-screen flex items-center justify-end">
            <img src={heroImage} alt="Julieta" className="h-full w-auto object-contain object-right animate-fade-in" style={{
            animationDelay: '0.1s',
            maxWidth: 'none'
          }} />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;