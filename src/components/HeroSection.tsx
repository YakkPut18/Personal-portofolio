import { motion } from "framer-motion";
import { Code2, Zap, Trophy, ArrowDown } from "lucide-react";
import aryaPhoto from "@/assets/arya-photo.jpg";
import WaveDivider from "./WaveDivider";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Decorative shapes with animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-40 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-primary-foreground/10 rounded-full blur-xl"
      />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content - Left side */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-foreground/90 font-medium">Data Enthusiast & Designer</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground leading-tight"
            >
              Welcome To My
              <br />
              <span className="text-secondary">Portfolio Website</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              Transforming complex data into compelling visual narratives. Creating intuitive designs that communicate stories effectively.
            </motion.p>

            {/* Feature icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-4 mb-8"
            >
              {[
                { icon: Code2, label: 'Programming' },
                { icon: Zap, label: 'Data Analysis' },
                { icon: Trophy, label: 'Design' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold text-sm sm:text-base
                         hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300 shadow-medium"
              >
                Explore My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold text-sm sm:text-base
                         hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Profile image - Right side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative circles with animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/50 rounded-full"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/50 rounded-full"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-medium"
              >
                <img 
                  src={aryaPhoto} 
                  alt="Arya Maulana Putra" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-medium text-sm font-semibold"
              >
                ✨ Arya Maulana
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-48 md:bottom-52 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Wave divider - moved up for smoother transition */}
      <WaveDivider color="hsl(var(--background))" />
    </section>
  );
};

export default HeroSection;