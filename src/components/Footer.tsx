import WaveDivider from "./WaveDivider";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 px-6 bg-gradient-hero text-primary-foreground">
      {/* Wave at top */}
      <WaveDivider variant="top" color="hsl(var(--background))" />
      
      <div className="container mx-auto max-w-6xl pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold mb-1">
              Arya Maulana Putra
            </p>
            <p className="text-sm text-primary-foreground/70">
              Data Enthusiast & Visual Statistics Designer
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} All rights reserved</p>
            <p className="mt-1">Built with passion and professional design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;