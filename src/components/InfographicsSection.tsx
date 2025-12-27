import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import WaveDivider from "./WaveDivider";
import ScrollReveal from "./ScrollReveal";
import infographic1 from "@/assets/infographic-1.png";
import infographic2 from "@/assets/infographic-2.png";
import infographic3 from "@/assets/infographic-3.png";
import infographic4 from "@/assets/infographic-4.png";
import infographic5 from "@/assets/infographic-5.png";
import infographic6 from "@/assets/infographic-6.png";
import infographic7 from "@/assets/infographic-7.png";
import infographic8 from "@/assets/infographic-8.png";

const InfographicsSection = () => {
  const [selectedInfographic, setSelectedInfographic] = useState<{
    id: number;
    title: string;
    image: string;
  } | null>(null);

  const infographics = [
    { id: 1, title: "Biaya menjadi KAYA di tempat yang SALAH", image: infographic1 },
    { id: 2, title: "Smart Electric Alarm: Penerapan Machine Learning dalam Upaya Efisiensi Listrik", image: infographic2 },
    { id: 3, title: "Integrasi Sensor untuk Rekomendasi Perawatan Tanaman", image: infographic3 },
    { id: 4, title: "Pertahian Masa Depan: Teknologi dan Urban Farming untuk ketahanan pangan Indonesia menuju keberlanjutan", image: infographic4 },
    { id: 5, title: "Transformasi Sistem Pendidikan", image: infographic5 },
    { id: 6, title: "Paradoks Gizi", image: infographic6 },
    { id: 7, title: "Jawa Tengah menuju Indonesia Emas 2045", image: infographic7 },
    { id: 8, title: "TreeNet: Teknologi Jaringan Pohon Pintar", image: infographic8 },
  ];

  return (
    <section id="infographics" className="relative py-20 md:py-28 px-6 overflow-hidden bg-muted/30">
      {/* Wave at top */}
      <WaveDivider variant="top" color="hsl(var(--background))" />
      
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-7xl pt-16">
        <ScrollReveal direction="up">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-primary">Infographics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual stories through data
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {infographics.map((infographic, index) => (
            <ScrollReveal key={infographic.id} direction="up" delay={0.1 * (index % 4)}>
              <div
                className="group relative aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedInfographic(infographic)}
              >
                <div className="relative h-full bg-card border border-border rounded-2xl shadow-soft
                              overflow-hidden hover:shadow-medium hover:border-primary/30 transition-all duration-300 
                              group-hover:-translate-y-2">
                  <img 
                    src={infographic.image} 
                    alt={infographic.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                flex flex-col items-center justify-center p-4">
                    <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center mb-4">
                      <ZoomIn className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-center line-clamp-3 text-primary-foreground">
                      {infographic.title}
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
      <Dialog open={!!selectedInfographic} onOpenChange={() => setSelectedInfographic(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 bg-card border-border overflow-hidden shadow-medium rounded-2xl">
          <DialogTitle className="sr-only">
            {selectedInfographic?.title}
          </DialogTitle>
          <button 
            onClick={() => setSelectedInfographic(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          {selectedInfographic && (
            <div className="flex flex-col max-h-[95vh]">
              <div className="flex-1 overflow-auto p-4">
                <img 
                  src={selectedInfographic.image} 
                  alt={selectedInfographic.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-4 border-t border-border bg-muted/50">
                <h3 className="text-lg md:text-xl font-semibold text-center text-foreground">
                  {selectedInfographic.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InfographicsSection;