import { Code2, Database, FileCode, Palette as PaletteIcon } from "lucide-react";

const TechStackSection = () => {
  const techStack = [
    {
      name: "Python",
      icon: "🐍",
      category: "Programming",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      category: "Programming",
    },
    {
      name: "SQL",
      icon: "🗄️",
      category: "Database",
    },
    {
      name: "R / RStudio",
      icon: "📊",
      category: "Analytics",
    },
    {
      name: "Figma",
      icon: "🎨",
      category: "Design",
    },
    {
      name: "Canva",
      icon: "✨",
      category: "Design",
    },
    {
      name: "Adobe Illustrator",
      icon: "🖌️",
      category: "Design",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-glow-blue mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg 
                            opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                            hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center
                            aspect-square group-hover:-translate-y-2">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-center text-sm mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-muted-foreground text-center">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech categories */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: Code2, label: "Programming", count: "2 Languages" },
            { icon: Database, label: "Database", count: "1 Language" },
            { icon: FileCode, label: "Analytics", count: "1 Tool" },
            { icon: PaletteIcon, label: "Design", count: "3 Tools" },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 
                       hover:border-primary/50 transition-all duration-300"
            >
              <category.icon className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-display font-semibold mb-1">{category.label}</h4>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
