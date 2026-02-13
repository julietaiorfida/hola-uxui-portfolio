import { useState, useEffect, useMemo } from "react";
import heroVideo from "@/assets/julieta-hero-video.mp4";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useReveal({ variant: 'scale', delay: 400 });

  const line1 = t("hero.title1");
  const line2 = t("hero.title2");

  const prefersReduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const [typed1, setTyped1] = useState(prefersReduced ? line1 : "");
  const [typed2, setTyped2] = useState(prefersReduced ? line2 : "");
  const [showCursor, setShowCursor] = useState(!prefersReduced);
  const [cursorPos, setCursorPos] = useState<1 | 2>(1);

  useEffect(() => {
    if (prefersReduced) return;

    let i = 0;
    const speed1 = 90;
    const speed2 = 110;
    const pauseBetween = 350;

    // Type line 1
    const typeLine1 = () => {
      if (i < line1.length) {
        setTyped1(line1.slice(0, i + 1));
        i++;
        setTimeout(typeLine1, speed1);
      } else {
        // Pause then start line 2
        setCursorPos(2);
        setTimeout(typeLine2Start, pauseBetween);
      }
    };

    let j = 0;
    const typeLine2Start = () => {
      typeLine2();
    };
    const typeLine2 = () => {
      if (j < line2.length) {
        setTyped2(line2.slice(0, j + 1));
        j++;
        setTimeout(typeLine2, speed2);
      } else {
        // Done – fade cursor out
        setTimeout(() => setShowCursor(false), 600);
      }
    };

    const startDelay = setTimeout(typeLine1, 300);
    return () => clearTimeout(startDelay);
  }, [line1, line2, prefersReduced]);

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
              <span>
                {typed1}
                {showCursor && cursorPos === 1 && (
                  <span className="inline-block w-[2px] h-[0.8em] bg-primary ml-1 align-baseline animate-typewriter-cursor" />
                )}
              </span>
              <br />
              <span className="text-accent text-[5.5rem] lg:text-[12rem] md:text-[10rem]">
                {typed2}
                {showCursor && cursorPos === 2 && (
                  <span className="inline-block w-[2px] h-[0.8em] bg-accent ml-1 align-baseline animate-typewriter-cursor" />
                )}
              </span>
            </h1>
          </div>

          {/* Right Column - Video */}
          <div ref={videoRef} className="relative h-screen flex items-center justify-end" style={{ marginRight: '-100px' }}>
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
