import { Code, Award, Globe, Download, ExternalLink } from "lucide-react";
import WaveDivider from "./WaveDivider";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const stats = [
    {
      icon: Code,
      number: "10",
      label: "Total Projects",
      description: "Innovative solutions crafted",
      link: "https://github.com/YakkPut18",
      color: "bg-primary",
    },
    {
      icon: Award,
      number: "7",
      label: "Certificates",
      description: "Professional skills validated",
      link: "https://drive.google.com/drive/folders/1LydvnZ8sGu1oVQu0NTat_buwHFd4Sik6?usp=sharing",
      color: "bg-secondary",
    },
    {
      icon: Globe,
      number: "3",
      label: "Years Experience",
      description: "Continuous learning journey",
      link: null,
      color: "bg-accent",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hello, I'm <span className="text-primary">Arya Maulana Putra</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data Enthusiast & Visual Statistics Designer
            </p>
          </div>
        </ScrollReveal>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Description card */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft h-full">
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a passionate data enthusiast, I specialize in transforming complex datasets into compelling visual narratives. 
                My work bridges the gap between raw data and actionable insights, creating intuitive designs that communicate 
                stories effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With expertise in statistical visualization and a keen eye for design aesthetics, 
                I craft experiences that make data accessible and engaging for diverse audiences.
              </p>

              <div className="flex flex-wrap gap-3">
                <a 
                  href="/CV_Arya_Maulana_Putra.pdf" 
                  download
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full font-semibold 
                           hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-soft text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a 
                  href="https://github.com/YakkPut18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold 
                           hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-soft text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills highlights */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-gradient-hero rounded-2xl p-6 md:p-8 text-primary-foreground h-full">
              <h3 className="text-xl font-bold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {['Data Analysis', 'Statistical Visualization', 'Information Design', 'Python Programming', 'UI/UX Design'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const CardContent = (
              <div className="bg-card border border-border rounded-2xl p-6 shadow-soft
                            hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1
                            flex flex-col items-center text-center h-full">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mb-4 shadow-soft`}>
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-4xl font-bold text-foreground mb-2">{stat.number}</span>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            );

            if (stat.link) {
              return (
                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {CardContent}
                  </a>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                {CardContent}
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Wave divider */}
      <WaveDivider color="hsl(210 20% 94% / 0.3)" />
    </section>
  );
};

export default AboutSection;