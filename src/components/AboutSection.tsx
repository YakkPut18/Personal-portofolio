import { Code, Award, Globe } from "lucide-react";
import aryaPhoto from "@/assets/arya-photo.jpg";

const AboutSection = () => {
  const stats = [
    {
      icon: Code,
      number: "10",
      label: "TOTAL PROJECTS",
      description: "Innovative web solutions crafted",
      link: "https://github.com/YakkPut18",
    },
    {
      icon: Award,
      number: "7",
      label: "CERTIFICATES",
      description: "Professional skills validated",
      link: "https://drive.google.com/drive/folders/1LydvnZ8sGu1oVQu0NTat_buwHFd4Sik6?usp=sharing",
    },
    {
      icon: Globe,
      number: "3",
      label: "YEARS OF EXPERIENCE",
      description: "Continuous learning journey",
      link: null,
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            ✨ Transforming ideas into digital experiences ✨
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text content */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Arya Maulana Putra
                </span>
              </h3>
              <p className="text-xl text-foreground/90 font-semibold mb-4">
                Data Enthusiast & Visual Statistics Designer
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              As a passionate data enthusiast, I specialize in transforming complex datasets into compelling visual narratives. 
              My work bridges the gap between raw data and actionable insights, creating intuitive designs that communicate 
              stories effectively. With expertise in statistical visualization and a keen eye for design aesthetics, 
              I craft experiences that make data accessible and engaging for diverse audiences.
            </p>

            <div className="flex gap-4 pt-4">
            <a 
              href="/CV_Arya_Maulana_Putra.pdf" 
              download
              target="_blank"
              className="px-6 py-3 bg-primary/20 border border-primary rounded-lg font-semibold 
                               hover:bg-primary/30 transition-all duration-300 glow-purple flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
              Download CV
            </a>
              <a 
                href="https://github.com/YakkPut18"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary/20 border border-secondary rounded-lg font-semibold 
                         hover:bg-secondary/30 transition-all duration-300 glow-blue flex items-center gap-2"
              >
                <Code className="w-5 h-5" />
                View Projects
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-glow"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-purple">
                <img 
                  src={aryaPhoto} 
                  alt="Arya Maulana Putra" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const CardContent = (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl 
                              group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 
                              hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <stat.icon className="w-10 h-10 text-primary" />
                    <span className="text-4xl font-bold text-glow-purple">{stat.number}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-muted-foreground/80">{stat.description}</p>
                </div>
              </>
            );

            if (stat.link) {
              return (
                <a
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
