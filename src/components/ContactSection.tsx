import { Github, Linkedin, Instagram, BookOpen, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/YakkPut18",
      color: "bg-primary",
    },
    {
      icon: BookOpen,
      label: "Medium",
      href: "https://medium.com/@aryaputra1804",
      color: "bg-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arya-maulana-putra-8a719626b",
      color: "bg-accent",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/yakmaulana_",
      color: "bg-primary",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                    bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-4xl">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch for collaborations or just a friendly hello
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft
                              hover:shadow-medium hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center
                              aspect-square group-hover:-translate-y-2">
                  <div className={`w-14 h-14 md:w-16 md:h-16 ${social.color} rounded-full flex items-center justify-center mb-4 shadow-soft
                                group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-center text-sm md:text-base text-foreground">{social.label}</h4>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Email section */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-gradient-hero rounded-2xl p-6 md:p-10 text-center">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground/80 mb-4">Or send me an email at</p>
            <a
              href="mailto:aryaputra1804@student.uns.ac.id"
              className="inline-block text-lg md:text-2xl font-semibold text-primary-foreground hover:text-secondary
                       transition-colors break-all"
            >
              aryaputra1804@student.uns.ac.id
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;