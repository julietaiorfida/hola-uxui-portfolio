import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import figmaLogo from "@/assets/tools/figma.svg";
import illustratorLogo from "@/assets/tools/illustrator.png";
import photoshopLogo from "@/assets/tools/photoshop.png";
import canvaLogo from "@/assets/tools/canva.svg";
import afterEffectsLogo from "@/assets/tools/after-effects.png";
import capcutLogo from "@/assets/tools/capcut.png";
import javascriptLogo from "@/assets/tools/javascript.png";
import htmlLogo from "@/assets/tools/html.png";
import cssLogo from "@/assets/tools/css.png";
import chatgptLogo from "@/assets/tools/chatgpt.svg";
import lovableLogo from "@/assets/tools/lovable.png";
import notionLogo from "@/assets/tools/notion.svg";
import ToolFlipCard from "@/components/ToolFlipCard";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const experiences = [
    { roleKey: "exp.role1", companyKey: "exp.company1", periodKey: "exp.period1", descKey: "exp.desc1" },
    { roleKey: "exp.role2", companyKey: "exp.company2", periodKey: "exp.period2", descKey: "exp.desc2" },
  ];

  const skillsCol1 = ["exp.skill1", "exp.skill2", "exp.skill3", "exp.skill4", "exp.skill5"];
  const skillsCol2 = ["exp.skill6", "exp.skill7", "exp.skill8", "exp.skill9", "exp.skill10"];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gradient-to-b from-primary/5 via-background to-secondary/10 relative overflow-hidden" ref={ref}>
      <div className={`max-w-7xl mx-auto ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
        <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
          {t("exp.title")}
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-12">
            {/* Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-4 border-primary animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{t(exp.roleKey)}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{t(exp.companyKey)}</p>
                  <p className="text-sm text-muted-foreground mb-2">{t(exp.periodKey)}</p>
                  <p className="text-foreground/80">{t(exp.descKey)}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              {[skillsCol1, skillsCol2].map((col, ci) => (
                <div key={ci}>
                  <h3 className="text-2xl font-bold text-primary mb-4">{t("exp.skillsTitle")}</h3>
                  <ul className="space-y-2">
                    {col.map((key) => (
                      <li key={key} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/80">{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t("exp.toolsTitle")}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <ToolFlipCard logo={figmaLogo} name="Figma" description={t("tool.figma")} />
                <ToolFlipCard logo={illustratorLogo} name="Illustrator" description={t("tool.illustrator")} />
                <ToolFlipCard logo={photoshopLogo} name="Photoshop" description={t("tool.photoshop")} />
                <ToolFlipCard logo={canvaLogo} name="Canva" description={t("tool.canva")} />
                <ToolFlipCard logo={afterEffectsLogo} name="After Effects" description={t("tool.aftereffects")} />
                <ToolFlipCard logo={capcutLogo} name="CapCut" description={t("tool.capcut")} />
                <ToolFlipCard logo={javascriptLogo} name="JavaScript" description={t("tool.javascript")} />
                <ToolFlipCard logo={htmlLogo} name="HTML5" description={t("tool.html")} />
                <ToolFlipCard logo={cssLogo} name="CSS3" description={t("tool.css")} />
                <ToolFlipCard logo={chatgptLogo} name="ChatGPT" description={t("tool.chatgpt")} />
                <ToolFlipCard logo={lovableLogo} name="Lovable" description={t("tool.lovable")} />
                <ToolFlipCard logo={notionLogo} name="Notion" description={t("tool.notion")} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">{t("exp.eduTitle")}</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">{t("exp.edu1.school")}</p>
                  <p className="text-foreground/80 mb-1">{t("exp.edu1.degree")}</p>
                  <p className="text-sm text-muted-foreground">{t("exp.edu1.period")}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">{t("exp.edu2.school")}</p>
                  <p className="text-foreground/80 mb-1">{t("exp.edu2.degree")}</p>
                  <p className="text-sm text-muted-foreground">{t("exp.edu2.period")}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">{t("exp.certTitle")}</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">{t("exp.cert1.name")}</p>
                  <p className="text-foreground/80 mb-1">{t("exp.cert1.org")}</p>
                  <p className="text-sm text-muted-foreground">{t("exp.cert1.date")}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-accent mb-1">{t("exp.cert2.name")}</p>
                  <p className="text-foreground/80 mb-1">{t("exp.cert2.org")}</p>
                  <p className="text-sm text-muted-foreground">{t("exp.cert2.date")}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-6">{t("exp.volTitle")}</h3>
              <div>
                <p className="text-lg font-semibold text-accent mb-1">{t("exp.vol.org")}</p>
                <p className="text-sm text-muted-foreground mb-3">{t("exp.vol.period")}</p>
                <p className="text-foreground/80">{t("exp.vol.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
