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
      onClick: () => setOpenDialog("programming")
    },
    { 
      icon: PaletteIcon, 
      label: "Design", 
      count: "4 Tools",
      onClick: () => setOpenDialog("design")
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-blue mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        {/* Tech categories */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={category.onClick}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 
                       hover:border-primary/50 transition-all duration-300 cursor-pointer
                       hover:-translate-y-2 group"
            >
              <category.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-xl mb-2">{category.label}</h4>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Dialog */}
      <Dialog open={openDialog === "programming"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-xl border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">Programming Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-6">
            {programmingTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
                <span className="font-semibold text-sm text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Dialog */}
      <Dialog open={openDialog === "design"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-xl border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">Design Tools</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-6">
            {designTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
                <span className="font-semibold text-sm text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TechStackSection;
