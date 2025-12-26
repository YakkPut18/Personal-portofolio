import { Code2, Zap, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary-foreground/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10 text-center px-6">
        {/* Top icons */}
        <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/30 backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/30 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center border border-primary-foreground/30 backdrop-blur-sm">
            <Trophy className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-sans text-3xl sm:text-5xl md:text-7xl font-bold mb-2 animate-fade-in text-primary-foreground" style={{ animationDelay: '0.2s' }}>
          <span>Welcome To My</span>
          <br />
          <span className="text-secondary">
            Portfolio Website
          </span>
        </h1>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium">Arya Maulana</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold text-sm sm:text-base
                     hover:bg-primary-foreground/90 transition-all duration-300 shadow-medium"
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold text-sm sm:text-base
                     hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;