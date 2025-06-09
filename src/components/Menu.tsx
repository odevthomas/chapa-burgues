
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Smartphone, QrCode, Flame } from "lucide-react";
import { useState, useEffect } from "react";

const Menu = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [fireParticles, setFireParticles] = useState<Array<{id: number, delay: number}>>([]);

  useEffect(() => {
    // Generate fire particles
    const particles = Array.from({length: 8}, (_, i) => ({
      id: i,
      delay: Math.random() * 2
    }));
    setFireParticles(particles);
  }, []);

  const toggleLike = (index: number) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleOrder = (itemName: string) => {
    const whatsappNumber = "5511999999999";
    const message = `Olá! Gostaria de pedir: ${itemName}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAppDownload = () => {
    // Simulação de download do app
    alert("Em breve! O app ChapaBurgues estará disponível nas lojas!");
  };

  const menuItems = [
    {
      name: "Chapa Clássico",
      description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial da casa",
      price: "R$ 25,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chapa Bacon Inferno",
      description: "Hambúrguer artesanal, bacon crocante, queijo derretido e cebola caramelizada",
      price: "R$ 29,90",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chapa Green Revolution",
      description: "Hambúrguer vegano de grão-de-bico, queijo vegano, rúcula e molho de ervas",
      price: "R$ 27,90",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chapa Duplo Devastador",
      description: "Dois hambúrgueres artesanais, queijo duplo, bacon e molho especial explosivo",
      price: "R$ 35,90",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chapa Premium Gold",
      description: "Hambúrguer premium wagyu, queijo brie, rúcula selvagem e geleia de pimenta artesanal",
      price: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Chapa Smash Atomic",
      description: "Dois smash burgers, queijo cheddar derretido, cebola grelhada e molho barbecue defumado",
      price: "R$ 32,90",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section id="cardapio" className="py-20 bg-black relative overflow-hidden">
      {/* Fire particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {fireParticles.map((particle) => (
          <div
            key={particle.id}
            className="fire-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 font-orbitron">
              NOSSO
              <br />
              <span className="text-amber-400 gradient-text text-glow">CARDÁPIO</span>
            </h2>
            <div className="absolute -top-4 -right-4">
              <Flame className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light font-exo">
            Sabores únicos preparados com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden interactive-card perspective-card animate-bounce-in group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 transform hover:scale-110 glow-effect"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${likedItems.includes(index) ? 'text-red-500 fill-red-500' : 'text-black'}`}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 font-orbitron">{item.name}</h3>
                <p className="text-black/70 text-sm mb-4 font-light leading-relaxed font-exo">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-amber-400 gradient-text">{item.price}</div>
                  <Button 
                    onClick={() => handleOrder(item.name)}
                    className="bg-black hover:bg-black/80 text-white group/btn transition-all duration-300 transform hover:scale-105 neon-border"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" strokeWidth={1.5} />
                    PEDIR
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced App Section */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-3xl p-8 max-w-5xl mx-auto interactive-card relative overflow-hidden">
            {/* Smoke effects */}
            <div className="absolute top-0 left-1/4 w-16 h-16 smoke-effect opacity-30" style={{animationDelay: '0s'}} />
            <div className="absolute top-0 right-1/4 w-12 h-12 smoke-effect opacity-20" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-0 left-1/3 w-20 h-20 smoke-effect opacity-25" style={{animationDelay: '2s'}} />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Smartphone className="w-12 h-12 text-black mr-4 animate-float" />
                <h3 className="text-4xl lg:text-5xl font-black text-black font-orbitron">
                  PEÇA NO
                  <br />
                  NOSSO APP!
                </h3>
                <Flame className="w-12 h-12 text-red-600 ml-4 fire-effect" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-black/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-black/90 mb-6 font-exo text-lg leading-relaxed">
                      📱 <strong>Mais segurança na entrega</strong><br/>
                      💰 <strong>Preços e taxa de entrega mais baixa</strong><br/>
                      🎯 <strong>Desconto fidelidade exclusivo</strong><br/>
                      🎁 <strong>Ganhos e promoções especiais</strong><br/>
                      🔥 <strong>Pedidos mais rápidos</strong><br/>
                      ⭐ <strong>Acompanhamento em tempo real</strong>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={handleAppDownload}
                      className="bg-black text-white hover:bg-black/80 font-bold transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-orbitron glow-effect"
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      BAIXAR APP
                    </Button>
                    
                    <div className="bg-white rounded-xl p-4 neon-border animate-pulse-glow">
                      <QrCode className="w-16 h-16 text-black mx-auto mb-2" />
                      <p className="text-xs text-black font-bold font-exo">ESCANEIE AQUI</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-black rounded-3xl p-4 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 glow-effect">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center"
                      alt="ChapaBurgues App Interface"
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-amber-400 rounded-lg p-3">
                        <p className="text-black font-bold text-sm font-orbitron">ChapaBurgues App</p>
                        <p className="text-black/70 text-xs font-exo">Sua fome, nossa prioridade!</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fire effect around the phone */}
                  <div className="absolute -inset-4 fire-effect opacity-20 rounded-full blur-xl animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
