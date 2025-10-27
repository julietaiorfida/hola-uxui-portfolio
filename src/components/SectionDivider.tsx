interface SectionDividerProps {
  variant?: 'wave1' | 'wave2' | 'wave3' | 'wave4';
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}

const SectionDivider = ({ 
  variant = 'wave1', 
  className = '', 
  flipX = false, 
  flipY = false 
}: SectionDividerProps) => {
  const waves = {
    wave1: (
      <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,56C672,48,768,32,864,32C960,32,1056,48,1152,53.3C1248,59,1344,53,1392,50.7L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave2: (
      <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave3: (
      <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,64C672,75,768,85,864,80C960,75,1056,53,1152,42.7C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    wave4: (
      <path d="M0,48L48,53.3C96,59,192,69,288,69.3C384,69,480,59,576,58.7C672,59,768,69,864,74.7C960,80,1056,80,1152,74.7C1248,69,1344,59,1392,53.3L1440,48L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
  };

  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim();

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg 
        className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]" 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
        style={{ transform: transform || undefined }}
      >
        {waves[variant]}
      </svg>
    </div>
  );
};

export default SectionDivider;
