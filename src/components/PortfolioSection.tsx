import { FolderKanban, Image, Palette, ArrowRight } from "lucide-react";
import WaveDivider from "./WaveDivider";

const PortfolioSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioCategories = [
    {
      icon: FolderKanban,
      title: "Projects",
      description: "Explore my technical projects and web applications",
      color: "bg-primary",
      action: () => window.open("https://github.com/YakkPut18", "_blank"),
    },
    {
      icon: Image,
      title: "Infographics",
      description: "Data visualizations and information design",
      color: "bg-secondary",
      action: () => scrollToSection('infographics'),
    },
    {
      icon: Palette,
      title: "My Designs",
      description: "Creative design work and visual experiments",
      color: "bg-accent",
      action: () => window.open("https://drive.google.com/drive/folders/1DzM0HxbnmGV5_6P-3GYbveKrbbx_N5zD?usp=sharing", "_blank"),
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 md:py-28 px-6 overflow-hidden bg-muted/30">
      {/* Wave at top */}
      <WaveDivider variant="top" color="hsl(var(--background))" />
      
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl pt-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my work across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={category.action}
            >
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft
                            hover:shadow-medium hover:border-primary/30 transition-all duration-300
                            hover:-translate-y-2 h-full flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-6 shadow-soft
                              group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  {category.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>View Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <WaveDivider color="hsl(var(--background))" />
    </section>
  );
};

export default PortfolioSection;