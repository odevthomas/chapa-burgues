
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 rounded-full border-4 border-white"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full border-4 border-white"></div>
      </div>

      {/* Circular Pattern */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              border: '2px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6">
        <div className="text-white text-2xl font-bold">
          ChapaBurgues
          <span className="text-amber-200 block text-sm font-normal">CAMBUCI</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#inicio" className="hover:text-amber-200 transition-colors">INÍCIO</a>
          <a href="#cardapio" className="hover:text-amber-200 transition-colors">CARDÁPIO</a>
          <a href="#sobre" className="hover:text-amber-200 transition-colors">SOBRE</a>
          <a href="#contato" className="hover:text-amber-200 transition-colors">CONTATO</a>
        </div>
        <Button className="bg-amber-400 text-black hover:bg-amber-300 font-bold">
          PEÇA JÁ
        </Button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
            CHAPA
            <br />
            <span className="text-amber-300">BURGUES</span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Os melhores hambúrgueres artesanais do Cambuci. 
            Ingredientes frescos, sabor único e qualidade incomparável.
          </p>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">ABERTO</div>
              <div className="text-xs">Todos os dias</div>
              <div className="text-xs">18h às 23h</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">CAMBUCI</div>
              <div className="text-xs">São Paulo - SP</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">DELIVERY</div>
              <div className="text-xs">WhatsApp</div>
              <div className="text-xs">(11) 99999-9999</div>
            </div>
          </div>

          <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 font-bold text-lg px-8 py-4">
            VER CARDÁPIO
          </Button>
        </div>

        {/* Burger Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
              <div className="text-6xl">🍔</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
              NOVO!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
