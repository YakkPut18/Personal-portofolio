import { FolderKanban, Image, Palette } from "lucide-react";

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
    <section id="portfolio" className="relative py-20 px-6 overflow-hidden bg-muted/30">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Discover my work across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={category.action}
            >
              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft
                            hover:shadow-medium hover:border-primary/30 transition-all duration-300 h-full flex flex-col
                            hover:-translate-y-2">
                <div className={`mb-4 sm:mb-6 inline-flex p-3 sm:p-4 ${category.color} rounded-xl shadow-soft`}>
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 flex-grow">
                  {category.description}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  View Collection
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;