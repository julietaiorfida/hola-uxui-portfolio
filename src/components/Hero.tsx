import heroVideo from "@/assets/julieta-hero-video.mp4";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/useLanguage";
import { useReveal } from "@/hooks/useReveal";

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useReveal({ variant: 'scale', delay: 400 });

  const line1 = t("hero.title1");
  const line2 = t("hero.title2");

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Language Toggle */}
      <div className="absolute top-6 left-6 z-20">
        <LanguageToggle />
      </div>

      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Column - Text */}
          <div className="relative z-10 pl-12 md:pl-20 lg:pl-32 flex-1 flex items-center justify-center">
            <h1 className="text-[5rem] lg:text-[11rem] font-black leading-none handwriting text-primary md:text-8xl">
              <span className="brush-reveal brush-reveal-line1">{line1}</span>
              <br />
              <span className="text-accent text-[5.5rem] lg:text-[12rem] md:text-[10rem] brush-reveal brush-reveal-line2 pl-8 md:pl-16 lg:pl-24">{line2}</span>
            </h1>
          </div>

          {/* Right Column - Video */}
          <div ref={videoRef} className="relative h-screen flex items-center justify-end" style={{ marginRight: '-20px' }}>
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-auto object-contain object-right"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
