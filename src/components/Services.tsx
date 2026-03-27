
import { useLanguage } from "@/i18n/useLanguage";
import { useReveal } from "@/hooks/useReveal";
import serviceUiux from "@/assets/service-uiux.jpg";
import serviceWebdesign from "@/assets/service-webdesign.jpg";
import serviceLanding from "@/assets/service-landing.jpg";

const services = [
  {
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    image: serviceUiux,
    accent: false,
  },
  {
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    image: serviceWebdesign,
    accent: true,
  },
  {
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    image: serviceLanding,
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
      className="py-24 px-6 bg-[hsl(var(--section-rosa-light))] border-t border-border/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-primary text-center md:text-left">
            {t("services.title")}
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              data-reveal-item
              className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.03] flex flex-col ${
                service.accent
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/30 md:scale-[1.03]"
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

              {/* Image area */}
              <div className="mx-6 mb-6 rounded-2xl overflow-hidden flex-1 min-h-[200px] relative">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
