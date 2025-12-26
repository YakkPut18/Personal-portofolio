import { useState } from "react";
import { Code2, Palette as PaletteIcon, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [openDialog, setOpenDialog] = useState<"programming" | "design" | null>(null);

  const programmingTools = [
    { name: "Python", logo: pythonLogo },
    { name: "R Studio", logo: rstudioLogo },
    { name: "Minitab", logo: minitabLogo },
    { name: "Jupyter", logo: jupyterLogo },
    { name: "MySQL", logo: mysqlLogo },
  ];

  const designTools = [
    { name: "Adobe Illustrator", logo: illustratorLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "Adobe Photoshop", logo: photoshopLogo },
  ];

  const categories = [
    { 
      icon: Code2, 
      label: "Programming", 
      count: "5 Tools",
      description: "Data analysis & development",
      color: "bg-primary",
      onClick: () => setOpenDialog("programming")
    },
    { 
      icon: PaletteIcon, 
      label: "Design", 
      count: "4 Tools",
      description: "Visual & graphic design",
      color: "bg-secondary",
      onClick: () => setOpenDialog("design")
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={category.onClick}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft
                       hover:shadow-medium hover:border-primary/30 transition-all duration-300 cursor-pointer
                       hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-6 shadow-soft
                            group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-9 h-9 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-xl md:text-2xl mb-2 text-foreground">{category.label}</h4>
              <p className="text-muted-foreground mb-2">{category.description}</p>
              <span className="text-sm font-semibold text-primary">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Dialog */}
      <Dialog open={openDialog === "programming"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card border-border max-w-[90vw] sm:max-w-md shadow-medium rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground">Programming Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            {programmingTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card shadow-soft flex items-center justify-center p-2">
                  <img src={tool.logo} alt={tool.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                </div>
                <span className="font-medium text-xs sm:text-sm text-center text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Dialog */}
      <Dialog open={openDialog === "design"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card border-border max-w-[90vw] sm:max-w-md shadow-medium rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground">Design Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {designTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card shadow-soft flex items-center justify-center p-2">
                  <img src={tool.logo} alt={tool.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                </div>
                <span className="font-medium text-xs sm:text-sm text-center text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TechStackSection;