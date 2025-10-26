const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none mb-4 animate-float">
            <span className="block text-primary">Port</span>
            <span className="block text-primary-light -mt-12 md:-mt-20 lg:-mt-28">folio</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-8">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                Maria Julieta Iorfida
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-light">
                UX/UI Designer & Community Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
