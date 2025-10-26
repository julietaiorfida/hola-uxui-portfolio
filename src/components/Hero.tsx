const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Stickers background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl rotate-12 animate-fade-in">🎨</div>
            <div className="absolute top-40 right-20 text-5xl -rotate-12 animate-fade-in" style={{animationDelay: '0.2s'}}>✏️</div>
            <div className="absolute bottom-40 left-20 text-5xl rotate-45 animate-fade-in" style={{animationDelay: '0.4s'}}>💡</div>
            <div className="absolute top-60 right-40 text-4xl -rotate-6 animate-fade-in" style={{animationDelay: '0.1s'}}>🖌️</div>
            <div className="absolute bottom-60 right-10 text-5xl rotate-12 animate-fade-in" style={{animationDelay: '0.3s'}}>📐</div>
            <div className="absolute top-1/3 left-1/4 text-4xl -rotate-12 animate-fade-in" style={{animationDelay: '0.5s'}}>✨</div>
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
