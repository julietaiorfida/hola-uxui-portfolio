const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none mb-4 animate-float">
            <span className="block text-primary">Port</span>
            <span className="block text-primary-light -mt-12 md:-mt-20 lg:-mt-28">folio</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <div className="h-1 w-24 bg-primary rounded-full"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              UX/UI Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
