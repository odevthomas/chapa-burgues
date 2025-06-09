
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-amber-400/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 border border-amber-400/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-amber-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center p-6 animate-fade-in">
        <div className="text-white text-2xl font-black">
          ChapaBurgues
          <span className="text-amber-400 block text-sm font-light tracking-wide">CAMBUCI</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white font-light">
          <button onClick={() => scrollToSection('inicio')} className="hover:text-amber-400 transition-all duration-300 transform hover:scale-105">INÍCIO</button>
          <button onClick={() => scrollToSection('cardapio')} className="hover:text-amber-400 transition-all duration-300 transform hover:scale-105">CARDÁPIO</button>
          <button onClick={() => scrollToSection('sobre')} className="hover:text-amber-400 transition-all duration-300 transform hover:scale-105">SOBRE</button>
          <button onClick={() => scrollToSection('contato')} className="hover:text-amber-400 transition-all duration-300 transform hover:scale-105">CONTATO</button>
        </div>
        <Button 
          onClick={() => scrollToSection('cardapio')}
          className="bg-amber-400 text-black hover:bg-amber-300 font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          PEÇA JÁ
        </Button>
      </nav>

      {/* Main Content */}
      <div id="inicio" className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-white mb-10 lg:mb-0 animate-fade-in delay-300">
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none animate-scale-in">
            CHAPA
            <br />
            <span className="text-amber-400">BURGUES</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 font-light leading-relaxed animate-fade-in delay-500">
            Os melhores hambúrgueres artesanais do Cambuci. 
            Ingredientes frescos, sabor único e qualidade incomparável.
          </p>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-700">
              <Clock className="w-5 h-5 mx-auto mb-2 text-amber-400" strokeWidth={1.5} />
              <div className="text-sm font-medium">ABERTO</div>
              <div className="text-xs text-white/70">Todos os dias</div>
              <div className="text-xs text-white/70">18h às 23h</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-900">
              <MapPin className="w-5 h-5 mx-auto mb-2 text-amber-400" strokeWidth={1.5} />
              <div className="text-sm font-medium">CAMBUCI</div>
              <div className="text-xs text-white/70">São Paulo - SP</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-1000">
              <Phone className="w-5 h-5 mx-auto mb-2 text-amber-400" strokeWidth={1.5} />
              <div className="text-sm font-medium">DELIVERY</div>
              <div className="text-xs text-white/70">WhatsApp</div>
              <div className="text-xs text-white/70">(11) 99999-9999</div>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={() => scrollToSection('cardapio')}
            className="bg-amber-400 text-black hover:bg-amber-300 font-bold text-lg px-8 py-4 group transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in delay-1200"
          >
            VER CARDÁPIO
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Button>
        </div>

        {/* Burger Image */}
        <div className="lg:w-1/2 flex justify-center animate-fade-in delay-600">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 transform hover:scale-105 animate-scale-in delay-800">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center" 
                alt="Hambúrguer Artesanal ChapaBurgues"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-400 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm animate-pulse">
              NOVO!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
