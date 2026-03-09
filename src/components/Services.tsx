import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    accent: false,
  },
  {
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    accent: true,
  },
  {
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    accent: false,
  },
];

const Services = () => {
  const { t } = useLanguage();
  const titleRef = useReveal({ variant: "up" });
  const gridRef = useReveal({ variant: "up", stagger: true, staggerDelay: 120, delay: 150 });

  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-accent/5 via-background to-secondary/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-primary text-center md:text-left">
            {t("services.title")}
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              data-reveal-item
              className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.03] ${
                service.accent
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/30 scale-[1.02]"
                  : "bg-card text-card-foreground border border-border"
              }`}
            >
              {/* Header */}
              <div className="p-8 pb-4">
                <h3
                  className={`text-2xl md:text-3xl font-extrabold tracking-tight ${
                    service.accent ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {t(service.titleKey)}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    service.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {t(service.descKey)}
                </p>
              </div>

              {/* Decorative mockup area */}
              <div
                className={`mx-6 mb-6 rounded-2xl h-44 flex items-end justify-center overflow-hidden ${
                  service.accent ? "bg-primary-foreground/15" : "bg-muted/60"
                }`}
              >
                {/* Stylised phone/screen shapes */}
                <div className="flex gap-2 items-end pb-0 translate-y-4">
                  <div
                    className={`w-16 h-28 rounded-t-xl ${
                      service.accent ? "bg-primary-foreground/20" : "bg-primary/15"
                    }`}
                  />
                  <div
                    className={`w-20 h-36 rounded-t-xl ${
                      service.accent ? "bg-primary-foreground/30" : "bg-primary/25"
                    }`}
                  />
                  <div
                    className={`w-16 h-24 rounded-t-xl ${
                      service.accent ? "bg-primary-foreground/20" : "bg-primary/15"
                    }`}
                  />
                </div>
              </div>

              {/* Arrow button */}
              <div className="absolute bottom-6 right-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
                    service.accent
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
