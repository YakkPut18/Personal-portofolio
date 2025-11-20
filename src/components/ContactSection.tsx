import { Github, Linkedin, Instagram, BookOpen } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-primary",
      glow: "group-hover:glow-purple",
    },
    {
      icon: BookOpen,
      label: "Medium",
      href: "#",
      color: "hover:text-secondary",
      glow: "group-hover:glow-blue",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-accent",
      glow: "group-hover:glow-cyan",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:text-primary",
      glow: "group-hover:glow-purple",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 ${social.glow}`}></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 
                            hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center
                            aspect-square group-hover:-translate-y-2">
                <social.icon className={`w-12 h-12 mb-4 transition-colors ${social.color}`} />
                <h4 className="font-semibold text-center">{social.label}</h4>
              </div>
            </a>
          ))}
        </div>

        {/* Email section */}
        <div className="text-center bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <p className="text-muted-foreground mb-4">Or send me an email at</p>
          <a
            href="mailto:arya@example.com"
            className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:text-primary/80 
                     transition-colors group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-glow-purple">arya.maulana@example.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
