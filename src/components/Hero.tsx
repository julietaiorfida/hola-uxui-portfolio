import { useState, useEffect, useRef, useMemo } from "react";
import heroVideo from "@/assets/julieta-hero-video.mp4";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

const DASH = 8000;

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useReveal({ variant: "scale", delay: 400 });

  const line1 = t("hero.title1");
  const line2 = t("hero.title2");

  const prefersReduced = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const t1Ref = useRef<SVGTextElement>(null);
  const t2Ref = useRef<SVGTextElement>(null);
  const [viewBox, setViewBox] = useState("0 0 800 320");
  // 0=hidden, 1=drawing line1, 2=drawing line2, 3=filling, 4=done
  const [phase, setPhase] = useState(prefersReduced ? 4 : 0);

  /* ── measure after fonts load & kick off animation ── */
  useEffect(() => {
    if (prefersReduced) return;

    document.fonts.ready.then(() => {
      const t1 = t1Ref.current;
      const t2 = t2Ref.current;
      if (!t1 || !t2) return;

      const b1 = t1.getBBox();
      const b2 = t2.getBBox();
      const w = Math.max(b1.x + b1.width, b2.x + b2.width) + 10;
      const h = b2.y + b2.height + 10;
      setViewBox(`0 0 ${Math.ceil(w)} ${Math.ceil(h)}`);

      requestAnimationFrame(() => setTimeout(() => setPhase(1), 250));
    });
  }, [prefersReduced, line1, line2]);

  /* ── phase state-machine ── */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === 1) timer = setTimeout(() => setPhase(2), 2000);
    else if (phase === 2) timer = setTimeout(() => setPhase(3), 1700);
    else if (phase === 3) timer = setTimeout(() => setPhase(4), 450);
    return () => clearTimeout(timer);
  }, [phase]);

  /* ── SVG sizes ── */
  const fs1 = 120;
  const fs2 = 140;
  const y1 = fs1 * 0.85;
  const y2 = y1 + fs2 * 1.05;

  const primary = "hsl(340, 85%, 60%)";
  const accent = "hsl(180, 65%, 55%)";

  const strokeStyle = (isLine2: boolean, color: string): React.CSSProperties => {
    const drawing = isLine2 ? phase >= 2 : phase >= 1;
    const filled = phase >= 3 || prefersReduced;

    return {
      strokeDasharray: DASH,
      strokeDashoffset: drawing ? 0 : DASH,
      transition: [
        `stroke-dashoffset ${isLine2 ? "1.5s" : "1.7s"} cubic-bezier(0.42, 0, 0.35, 1)`,
        "fill 0.4s ease",
        "stroke-width 0.4s ease",
      ].join(", "),
      fill: filled ? color : "transparent",
      stroke: color,
      strokeWidth: filled ? 0 : isLine2 ? 3.5 : 3,
      strokeLinejoin: "round",
      strokeLinecap: "round",
    };
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      <div className="absolute top-6 left-6 z-20">
        <LanguageToggle />
      </div>

      <div className="w-full h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Left Column – Handwritten Title */}
          <div className="relative z-10 pl-12 md:pl-20 lg:pl-32 flex-1 flex items-center justify-center">
            {/* Accessible heading */}
            <h1 className="sr-only">
              {line1} {line2}
            </h1>

            <svg
              viewBox={viewBox}
              className="w-full h-auto overflow-visible"
              aria-hidden="true"
            >
              <text
                ref={t1Ref}
                x="0"
                y={y1}
                fontFamily="'Caveat', cursive"
                fontWeight="700"
                fontSize={fs1}
                style={strokeStyle(false, primary)}
              >
                {line1}
              </text>
              <text
                ref={t2Ref}
                x="0"
                y={y2}
                fontFamily="'Caveat', cursive"
                fontWeight="700"
                fontSize={fs2}
                style={strokeStyle(true, accent)}
              >
                {line2}
              </text>
            </svg>
          </div>

          {/* Right Column – Video */}
          <div
            ref={videoRef}
            className="relative h-screen flex items-center justify-end"
            style={{ marginRight: "-100px" }}
          >
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-auto object-contain object-right"
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
