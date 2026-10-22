import { useState } from "react";
import { X, ZoomIn, Award } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import WaveDivider from "./WaveDivider";
import ScrollReveal from "./ScrollReveal";
import certificateIBCC from "@/assets/certificate-ibcc.png";
import certificateIMC from "@/assets/certificate-imc.png.asset.json";
import certificateSSF from "@/assets/certificate-ssf.png.asset.json";
import certificateSDC from "@/assets/certificate-sdc.png.asset.json";
import certificateDataLoka from "@/assets/certificate-dataloka.jpg.asset.json";
import certificateEPIC from "@/assets/certificate-epic.jpg.asset.json";
import certificateANAVA from "@/assets/certificate-anava.jpg.asset.json";

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    id: number;
    title: string;
    image: string;
  } | null>(null);

  const certificates = [
    { id: 1, title: "Semifinal IBCC ITB 2026", image: certificateIBCC },
    { id: 2, title: "Juara 1 Infografis IMC IPB", image: certificateIMC.url },
    { id: 3, title: "Juara 2 SSIC SSF 2025", image: certificateSSF.url },
    { id: 4, title: "Top 10 SDC by Pojok Statistik 2024", image: certificateSDC.url },
    { id: 5, title: "Presenter Data Loka 2026", image: certificateDataLoka.url },
    { id: 6, title: "Juara 3 Essay Ilmiah EPIC UNEJ 2025", image: certificateEPIC.url },
    { id: 7, title: "Juara 3 Infografis ANAVA #19 UGM 2025", image: certificateANAVA.url },
  ];

  return (
    <section id="certificates" className="relative py-20 md:py-28 px-6 overflow-hidden bg-muted/30">
      {/* Wave at top */}
      <WaveDivider variant="top" color="hsl(var(--background))" />
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-6xl pt-16">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Certificates</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognitions and milestones along my journey
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <ScrollReveal key={certificate.id} direction="up" delay={0.1 * index}>
              <div
                className="group cursor-pointer h-full"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="bg-card border border-border rounded-2xl p-4 shadow-soft
                              hover:shadow-medium hover:border-primary/30 transition-all duration-300
                              hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-muted">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                  flex flex-col items-center justify-center p-4">
                      <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center mb-3">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary-foreground">
                        Click to view
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {certificate.title}
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <WaveDivider color="hsl(var(--background))" />

      {/* Lightbox Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 bg-card border-border overflow-hidden shadow-medium rounded-2xl">
          <DialogTitle className="sr-only">
            {selectedCertificate?.title}
          </DialogTitle>
          <button 
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          {selectedCertificate && (
            <div className="flex flex-col max-h-[95vh]">
              <div className="flex-1 overflow-auto p-4">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-4 border-t border-border bg-muted/50">
                <h3 className="text-lg md:text-xl font-semibold text-center text-foreground">
                  {selectedCertificate.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
