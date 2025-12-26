const Footer = () => {
  return (
    <footer className="relative py-8 px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary mb-1">
              Arya Maulana Putra
            </p>
            <p className="text-sm text-muted-foreground">
              Data Enthusiast & Visual Statistics Designer
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} All rights reserved</p>
            <p className="mt-1">Built with passion and professional design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;