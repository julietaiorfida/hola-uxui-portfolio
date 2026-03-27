import { useLanguage } from "@/i18n/useLanguage";
import { useReveal } from "@/hooks/useReveal";
import figmaLogo from "@/assets/tools/figma.svg";
import illustratorLogo from "@/assets/tools/illustrator.png";
import photoshopLogo from "@/assets/tools/photoshop.png";
import canvaLogo from "@/assets/tools/canva.svg";
import afterEffectsLogo from "@/assets/tools/after-effects.png";
import capcutLogo from "@/assets/tools/capcut.png";
import claudeLogo from "@/assets/tools/claude.png";
import htmlLogo from "@/assets/tools/html.png";
import cssLogo from "@/assets/tools/css.png";
import chatgptLogo from "@/assets/tools/chatgpt.png";
import lovableLogo from "@/assets/tools/lovable.png";
import notionLogo from "@/assets/tools/notion.svg";
import ToolFlipCard from "@/components/ToolFlipCard";

const Experience = () => {
  const { t } = useLanguage();
  const titleRef = useReveal({ variant: 'up' });
  const timelineRef = useReveal({ variant: 'left', stagger: true, staggerDelay: 120, delay: 100 });
  const skillsRef = useReveal({ variant: 'up', delay: 200 });
  const toolsRef = useReveal({ variant: 'up', stagger: true, staggerDelay: 60, delay: 250 });
  const eduRef = useReveal({ variant: 'right', delay: 100 });
  const certRef = useReveal({ variant: 'right', delay: 200 });
  const volRef = useReveal({ variant: 'right', delay: 300 });

  const experiences = [
    { roleKey: "exp.role1", companyKey: "exp.company1", periodKey: "exp.period1", descKey: "exp.desc1" },
    { roleKey: "exp.role2", companyKey: "exp.company2", periodKey: "exp.period2", descKey: "exp.desc2" },
    { roleKey: "exp.role3", companyKey: "exp.company3", periodKey: "exp.period3", descKey: "exp.desc3" },
  ];

  const skillsCol1 = ["exp.skill1", "exp.skill2", "exp.skill3", "exp.skill4", "exp.skill5"];
  const skillsCol2 = ["exp.skill6", "exp.skill7", "exp.skill8", "exp.skill9", "exp.skill10"];

  return (
    <section id="experience" className="min-h-screen py-24 px-6 bg-[hsl(var(--section-rosa-mid))] border-t border-border/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef}>
          <h2 className="text-6xl md:text-7xl font-black text-primary mb-16 text-center md:text-left">
            {t("exp.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-12">
            {/* Timeline */}
            <div ref={timelineRef} className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} data-reveal-item className="relative pl-8 border-l-4 border-primary">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary"></div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{t(exp.roleKey)}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{t(exp.companyKey)}</p>
                  <p className="text-sm text-muted-foreground mb-2">{t(exp.periodKey)}</p>
                  <p className="text-foreground/80">{t(exp.descKey)}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="grid md:grid-cols-2 gap-8">
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
              <div ref={toolsRef} className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                <div data-reveal-item><ToolFlipCard logo={figmaLogo} name="Figma" description={t("tool.figma")} /></div>
                <div data-reveal-item><ToolFlipCard logo={illustratorLogo} name="Illustrator" description={t("tool.illustrator")} /></div>
                <div data-reveal-item><ToolFlipCard logo={photoshopLogo} name="Photoshop" description={t("tool.photoshop")} /></div>
                <div data-reveal-item><ToolFlipCard logo={canvaLogo} name="Canva" description={t("tool.canva")} /></div>
                <div data-reveal-item><ToolFlipCard logo={afterEffectsLogo} name="After Effects" description={t("tool.aftereffects")} /></div>
                <div data-reveal-item><ToolFlipCard logo={capcutLogo} name="CapCut" description={t("tool.capcut")} /></div>
                <div data-reveal-item><ToolFlipCard logo={claudeLogo} name="Claude" description={t("tool.claude")} /></div>
                <div data-reveal-item><ToolFlipCard logo={htmlLogo} name="HTML5" description={t("tool.html")} /></div>
                <div data-reveal-item><ToolFlipCard logo={cssLogo} name="CSS3" description={t("tool.css")} /></div>
                <div data-reveal-item><ToolFlipCard logo={chatgptLogo} name="ChatGPT" description={t("tool.chatgpt")} /></div>
                <div data-reveal-item><ToolFlipCard logo={lovableLogo} name="Lovable" description={t("tool.lovable")} /></div>
                <div data-reveal-item><ToolFlipCard logo={notionLogo} name="Notion" description={t("tool.notion")} /></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div ref={eduRef} className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
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

            <div ref={certRef} className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
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

            <div ref={volRef} className="bg-background rounded-3xl p-8 shadow-lg border-2 border-primary/20">
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
