import { useState } from "react";
import { Code2, Palette as PaletteIcon } from "lucide-react";
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
      color: "bg-primary",
      onClick: () => setOpenDialog("programming")
    },
    { 
      icon: PaletteIcon, 
      label: "Design", 
      count: "4 Tools",
      color: "bg-secondary",
      onClick: () => setOpenDialog("design")
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={category.onClick}
              className="bg-card border border-border rounded-xl p-4 sm:p-8 shadow-soft
                       hover:shadow-medium hover:border-primary/30 transition-all duration-300 cursor-pointer
                       hover:-translate-y-2 group"
            >
              <div className={`inline-flex p-3 ${category.color} rounded-xl mb-2 sm:mb-4 shadow-soft`}>
                <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-bold text-base sm:text-xl mb-1 sm:mb-2 text-foreground">{category.label}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Dialog */}
      <Dialog open={openDialog === "programming"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card border-border max-w-[90vw] sm:max-w-md shadow-medium">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground">Programming Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {programmingTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <img src={tool.logo} alt={tool.name} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                <span className="font-semibold text-xs sm:text-sm text-center text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Dialog */}
      <Dialog open={openDialog === "design"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card border-border max-w-[90vw] sm:max-w-md shadow-medium">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground">Design Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {designTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <img src={tool.logo} alt={tool.name} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
                <span className="font-semibold text-xs sm:text-sm text-center text-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TechStackSection;