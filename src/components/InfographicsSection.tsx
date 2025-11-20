import { Image } from "lucide-react";

const InfographicsSection = () => {
  const infographics = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Infographic ${i + 1}`,
    category: "Data Visualization",
  }));

  return (
    <section id="infographics" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            Infographics
          </h2>
          <p className="text-lg text-muted-foreground">
            Visual stories through data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infographics.map((infographic, index) => (
            <div
              key={infographic.id}
              className="group relative aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg 
                            opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Card */}
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl 
                            overflow-hidden hover:border-primary/50 transition-all duration-300 
                            group-hover:-translate-y-2">
                {/* Placeholder image area */}
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-muted/30">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 
                                group-hover:bg-primary/30 transition-colors">
                    <Image className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-center mb-2">
                    {infographic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {infographic.category}
                  </p>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              flex items-end justify-center p-6">
                  <button className="px-4 py-2 bg-primary/20 border border-primary rounded-lg 
                                   text-sm font-semibold hover:bg-primary/30 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
