import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
    <section id="infographics" className="relative py-20 px-6 overflow-hidden bg-muted/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            Infographics
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Visual stories through data
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {infographics.map((infographic, index) => (
            <div
              key={infographic.id}
              className="group relative aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedInfographic(infographic)}
            >
              <div className="relative h-full bg-card border border-border rounded-xl shadow-soft
                            overflow-hidden hover:shadow-medium hover:border-primary/30 transition-all duration-300 
                            group-hover:-translate-y-2">
                <img 
                  src={infographic.image} 
                  alt={infographic.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              flex items-end justify-center p-4">
                  <h3 className="text-sm font-semibold text-center line-clamp-3 text-primary-foreground">
                    {infographic.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedInfographic} onOpenChange={() => setSelectedInfographic(null)}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 bg-card border-border overflow-hidden shadow-medium">
          <DialogTitle className="sr-only">
            {selectedInfographic?.title}
          </DialogTitle>
          <button 
            onClick={() => setSelectedInfographic(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
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