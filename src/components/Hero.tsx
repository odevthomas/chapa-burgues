import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById("cardapio");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de fazer um pedido.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Enhanced Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1920&h=1080&fit=crop&crop=center")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-red-900  from-black/90 via-black/70 to-black" />
      </div>

      {/* Fire Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="fire-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Smoke Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 8}).map((_, i) => (
          <div
            key={i}
            className="smoke-effect absolute"
            style={{
              left: `${20 + i * 10}%`,
              bottom: '10%',
              width: '80px',
              height: '80px',
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>

      {/* Floating Flames */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 6}).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
           
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <div className="animate-bounce-in">
            {/* Logo */}
            <div className="relative inline-block mb-8">
              <img 
                src="/chapaburgues.png"
                alt="ChapaBurger Logo"
                className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 drop-shadow-2xl animate-float glow-effect-orange"
              />
            </div>
            
            <div className="relative inline-block mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-cream mb-4 font-orbitron ">
                <span className="text-glow-cream/20">O MELHOR </span>
                <br />
                <span className="gradient-text-orange">BURGER </span>
              </h1>
              
              <div className="absolute -bottom-4 -left-4 animate-float" style={{animationDelay: '1s'}}>
              </div>
            </div>
            
            <div className="bg-orange-500 text-black px-8 py-3 rounded-full inline-block mb-8 neon-border-orange animate-pulse-glow-orange ">
              <span className="text-2xl md:text-3xl font-black tracking-wider font-orbitron">DO CAMBUCI</span>
            </div>
          </div>

         <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed animate-fade-in delay-500 font-exo Flame-text">
  Os hambúrgueres mais <span className="text-white font-bold">DEVASTADORES</span> do bairro!
  <br />
  Feitos na chapa quente com ingredientes frescos e muito <span className="text-white font-bold">ROCK'N'ROLL</span>.
</p>


          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-700">
            <Button 
              onClick={scrollToMenu}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 text-lg interactive-card font-orbitron glow-effect-orange 
"
            >
              <Flame className="w-5 h-5 mr-2 animate-pulse" />
              VER CARDÁPIO
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" strokeWidth={2} />
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-cream hover:bg-cream/90 text-black font-bold px-8 py-4 text-lg interactive-card font-orbitron neon-border-orange"
            >
              <Phone className="w-5 h-5 mr-2" strokeWidth={2} />
              PEDIR AGORA
            </Button>
          </div>

          {/* Stats with enhanced styling */}
          <div className="grid grid-cols-3 gap-8 mb-16 mt-16 text-white animate-fade-in delay-1000">
            {[
              { number: "666+", label: "Almas Satisfeitas", icon: <Flame className="w-6 h-6" /> },
              { number: "13+", label: "Sabores Mortais", icon: <Flame className="w-6 h-6" /> },
              { number: "5★", label: "Do Inferno", icon: <Flame className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center interactive-card perspective-card" style={{animationDelay: `${1.2 + index * 0.2}s`}}>
                <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 neon-border-orange 
  ">
                  <div className="text-orange-500 mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2 gradient-text-orange font-orbitron ">
                    {stat.number}
                  </div>
                  <div className="text-cream/80 text-sm font-light font-exo">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float opacity-30">
        <div className="w-20 h-20 bg-orange-500 rounded-full fire-effect" />
      </div>
      <div className="absolute top-1/4 right-10 animate-float opacity-40" style={{animationDelay: '1.5s'}}>
        <div className="w-16 h-16 bg-cream rounded-full glow-effect-orange" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-orange-400 animate-pulse drop-shadow-lg" strokeWidth={2} />
      </div>
    </div>
  );
};

export default Hero;
