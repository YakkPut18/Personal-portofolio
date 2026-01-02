import ScrollReveal from "./ScrollReveal";

import pythonLogo from "@/assets/python-logo.png";
import rstudioLogo from "@/assets/rstudio-logo.png";
import minitabLogo from "@/assets/minitab-logo.png";
import jupyterLogo from "@/assets/jupyter-logo.png";
import mysqlLogo from "@/assets/mysql-logo.png";
import illustratorLogo from "@/assets/illustrator-logo-new.png";
import canvaLogo from "@/assets/canva-logo-new.png";
import figmaLogo from "@/assets/figma-logo-new.png";
import photoshopLogo from "@/assets/photoshop-logo.png";

const TechStackSection = () => {
  const programmingTools = [
    { name: "Python", logo: pythonLogo },
    { name: "R Studio", logo: rstudioLogo },
    { name: "Minitab", logo: minitabLogo },
    { name: "Jupyter", logo: jupyterLogo },
    { name: "MySQL", logo: mysqlLogo },
  ];

  const designTools = [
    { name: "Illustrator", logo: illustratorLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "Photoshop", logo: photoshopLogo },
  ];

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              My Favorite Tools
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary italic">Exploring the Tools</span>
              <br />
              Behind My Designs
            </h2>
          </div>
        </ScrollReveal>

        {/* Programming Tools */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Programming</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {programmingTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-full px-5 py-3 shadow-soft
                           hover:shadow-medium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <img src={tool.logo} alt={tool.name} className="w-7 h-7 object-contain" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Design Tools */}
        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Design</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-full px-5 py-3 shadow-soft
                           hover:shadow-medium hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <img src={tool.logo} alt={tool.name} className="w-7 h-7 object-contain" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechStackSection;
