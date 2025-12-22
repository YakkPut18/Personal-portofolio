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
      gradient: "from-primary to-primary/50",
      action: () => window.open("https://github.com/YakkPut18", "_blank"),
    },
    {
      icon: Image,
      title: "Infographics",
      description: "Data visualizations and information design",
      gradient: "from-secondary to-secondary/50",
      action: () => scrollToSection('infographics'),
    },
    {
      icon: Palette,
      title: "My Designs",
      description: "Creative design work and visual experiments",
      gradient: "from-accent to-accent/50",
      action: () => {},
    },
  ];

  return (
    <section id="portfolio" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover my work across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={category.action}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-xl 
                            opacity-0 group-hover:opacity-50 transition-all duration-500`}></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 
                            hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl glow-purple">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
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
