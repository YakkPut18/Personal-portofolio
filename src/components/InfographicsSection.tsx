import infographic1 from "@/assets/infographic-1.png";
import infographic2 from "@/assets/infographic-2.png";
import infographic3 from "@/assets/infographic-3.png";
import infographic4 from "@/assets/infographic-4.png";
import infographic5 from "@/assets/infographic-5.png";
import infographic6 from "@/assets/infographic-6.png";
import infographic7 from "@/assets/infographic-7.png";
import infographic8 from "@/assets/infographic-8.png";

const InfographicsSection = () => {
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
    <section id="infographics" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-glow-purple mb-4">
            Infographics
          </h2>
          <p className="text-lg text-muted-foreground">
            Visual stories through data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infographics.map((infographic, index) => (
            <div
              key={infographic.id}
              className="group relative aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg 
                            opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl 
                            overflow-hidden hover:border-primary/50 transition-all duration-300 
                            group-hover:-translate-y-2">
                <img 
                  src={infographic.image} 
                  alt={infographic.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              flex items-end justify-center p-4">
                  <h3 className="text-sm font-semibold text-center line-clamp-3">
                    {infographic.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
