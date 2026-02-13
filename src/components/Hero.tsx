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

    // Randomized delay to simulate natural handwriting rhythm
    const handDelay = (base: number, variance: number) =>
      base + (Math.random() - 0.3) * variance;

    let cancelled = false;

    const writeLine = (
      text: string,
      setter: (v: string) => void,
      baseSpeed: number,
      variance: number
    ): Promise<void> =>
      new Promise((resolve) => {
        let i = 0;
        const next = () => {
          if (cancelled) return;
          if (i < text.length) {
            i++;
            setter(text.slice(0, i));
            // Slightly longer pause on spaces/commas for natural feel
            const char = text[i - 1];
            const extra = char === ',' ? 180 : char === ' ' ? 60 : 0;
            setTimeout(next, handDelay(baseSpeed, variance) + extra);
          } else {
            resolve();
          }
        };
        next();
      });

    const run = async () => {
      await new Promise((r) => setTimeout(r, 300));
      // Line 1 – current speed feels good
      await writeLine(line1, setTyped1, 90, 50);
      if (cancelled) return;
      // Pause between lines
      setCursorPos(2);
      await new Promise((r) => setTimeout(r, 400));
      // Line 2 – slower, more deliberate
      await writeLine(line2, setTyped2, 160, 70);
      if (cancelled) return;
      setTimeout(() => setShowCursor(false), 800);
    };

    run();
    return () => { cancelled = true; };
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
