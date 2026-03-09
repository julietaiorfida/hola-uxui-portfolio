import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ToolFlipCardProps {
  logo: string;
  name: string;
  description: string;
}

const ToolFlipCard = ({ logo, name, description }: ToolFlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`flip-card aspect-square ${flipped ? "flipped" : ""}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${name}: ${description}`}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front bg-background rounded-2xl p-6 shadow-lg border-2 border-primary/20 flex items-center justify-center">
          <img src={logo} alt={name} className="w-16 h-16" />
        </div>
        {/* Back */}
        <div className="flip-card-back bg-primary rounded-2xl p-4 shadow-lg border-2 border-primary/20 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-primary-foreground text-sm mb-1" translate="no">{name}</p>
          <p className="text-primary-foreground/90 text-xs leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolFlipCard;
