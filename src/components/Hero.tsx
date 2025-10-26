const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-none mb-8 handwriting animate-float text-primary">
            mi portfolio,<br />
            <span className="text-accent">julieta</span>
          </h1>
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                Maria Julieta Iorfida
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
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
