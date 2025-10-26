const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          {/* Stickers background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-20 left-10 text-6xl rotate-12 animate-float">🎨</div>
            <div className="absolute top-40 right-20 text-5xl -rotate-12 animate-float" style={{animationDelay: '1s'}}>✏️</div>
            <div className="absolute bottom-40 left-20 text-5xl rotate-45 animate-float" style={{animationDelay: '2s'}}>💡</div>
            <div className="absolute top-60 right-40 text-4xl -rotate-6 animate-float" style={{animationDelay: '0.5s'}}>🖌️</div>
            <div className="absolute bottom-60 right-10 text-5xl rotate-12 animate-float" style={{animationDelay: '1.5s'}}>📐</div>
            <div className="absolute top-1/3 left-1/4 text-4xl -rotate-12 animate-float" style={{animationDelay: '2.5s'}}>✨</div>
          </div>

          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none mb-8 handwriting animate-float text-primary relative z-10">
            mi portfolio,<br />
            <span className="text-accent">julieta</span>
          </h1>
          <div className="flex flex-col items-center gap-4 mt-12 relative z-10">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                Maria Julieta Iorfida
              </p>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light mt-2">
                Diseñadora UX/UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
