import { useState } from "react";

const TakeWhatYouNeed = () => {
  const services = [
    "GRAPHIC DESIGN",
    "COPYWRITING",
    "WEB DESIGN",
    "EMAIL MARKETING",
    "BRANDING",
    "CONTENT CREATION",
    "LOGO SUITE",
    "MARKETING"
  ];

  const [tornStrips, setTornStrips] = useState<number[]>([]);

  const handleTear = (index: number) => {
    setTornStrips([...tornStrips, index]);
    setTimeout(() => {
      setTornStrips(tornStrips.filter(i => i !== index));
    }, 600);
  };

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="bg-muted rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-16 bg-primary rounded-t-3xl"></div>
          <div className="absolute top-12 left-8 right-8">
            <svg className="w-full" height="30" viewBox="0 0 400 30" fill="none">
              <path d="M 0 15 Q 100 5, 200 15 T 400 15" stroke="hsl(var(--primary))" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          
          <div className="relative pt-8">
            <h2 className="text-4xl md:text-6xl font-black text-primary text-center mb-4 handwriting">
              take what<br />you need
            </h2>
            
            <div className="border-t-4 border-dashed border-primary/30 mt-8 mb-4"></div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleTear(index)}
                  className={`relative group ${tornStrips.includes(index) ? 'animate-tear' : ''}`}
                >
                  <div className="bg-primary text-white px-4 py-8 w-24 md:w-28 rounded-lg shadow-md 
                                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                                cursor-pointer border-t-4 border-dashed border-white/30">
                    <p className="text-xs md:text-sm font-bold text-center writing-mode-vertical transform rotate-0"
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      {service}
                    </p>
                  </div>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Haz clic en cualquier papel para "tomarlo"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeWhatYouNeed;