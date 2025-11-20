const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-6xl md:text-8xl font-black mb-6 text-glow-purple animate-fade-in">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            My Portfolio
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Data Enthusiast • Visual Statistics Designer • Creative Developer
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary/20 border-2 border-primary rounded-lg font-semibold 
                     hover:bg-primary/30 transition-all duration-300 glow-purple"
          >
            Explore My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-secondary/20 border-2 border-secondary rounded-lg font-semibold 
                     hover:bg-secondary/30 transition-all duration-300 glow-blue"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
