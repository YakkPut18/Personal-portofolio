import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold text-glow-purple">
            Arya M.P
          </Link>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('infographics')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Infographics
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
