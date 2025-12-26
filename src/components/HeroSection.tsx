import { Code2, Zap, Trophy, ArrowDown } from "lucide-react";
import aryaPhoto from "@/assets/arya-photo.jpg";
import WaveDivider from "./WaveDivider";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary-foreground/10 rounded-full blur-xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content - Left side */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-foreground/90 font-medium">Data Enthusiast & Designer</span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground leading-tight">
              Welcome To My
              <br />
              <span className="text-secondary">Portfolio Website</span>
            </h1>

            {/* Description */}
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Transforming complex data into compelling visual narratives. Creating intuitive designs that communicate stories effectively.
            </p>

            {/* Feature icons */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Programming</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Data Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium hidden sm:inline">Design</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold text-sm sm:text-base
                         hover:bg-primary-foreground/90 transition-all duration-300 shadow-medium"
              >
                Explore My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold text-sm sm:text-base
                         hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile image - Right side */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/50 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/50 rounded-full"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-medium">
                <img 
                  src={aryaPhoto} 
                  alt="Arya Maulana Putra" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-medium text-sm font-semibold">
                ✨ Arya Maulana
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Wave divider */}
      <WaveDivider color="hsl(var(--background))" />
    </section>
  );
};

export default HeroSection;