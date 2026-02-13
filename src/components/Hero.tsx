import heroVideo from "@/assets/julieta-hero-video.mp4";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-secondary/10">
      {/* Language Toggle */}
      <div className="absolute top-6 left-6 z-20">
        <LanguageToggle />
      </div>

      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Column - Text */}
          <div className="relative z-10 pl-12 md:pl-20 lg:pl-32 flex-1 flex items-center justify-center">
            <h1 className="text-[5rem] lg:text-[11rem] font-black leading-none handwriting animate-fade-in text-primary md:text-8xl">
              {t("hero.title1")}<br />
              <span className="text-accent text-[5.5rem] lg:text-[12rem] md:text-[10rem]">{t("hero.title2")}</span>
            </h1>
          </div>

          {/* Right Column - Video */}
          <div className="relative h-screen flex items-center justify-end">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-auto object-contain object-right animate-fade-in"
              style={{
                animationDelay: '0.1s',
                maxWidth: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
