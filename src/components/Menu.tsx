
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Smartphone, QrCode, Skull } from "lucide-react";
import { useState, useEffect } from "react";

const Menu = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [fireParticles, setFireParticles] = useState<Array<{id: number, delay: number}>>([]);

  useEffect(() => {
    // Generate more fire particles for rock effect
    const particles = Array.from({length: 12}, (_, i) => ({
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
    alert("Em breve! O app ChapaBurger estará disponível nas lojas!");
  };

  const menuItems = [
    {
      name: "Chapa Clássico Mortal",
      description: "Hambúrguer artesanal, queijo derretido, alface, tomate e molho especial das trevas",
      price: "R$ 25,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Bacon Inferno Devastador",
      description: "Hambúrguer artesanal, bacon crocante, queijo derretido e cebola caramelizada do inferno",
      price: "R$ 29,90",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Green Revolution Rebelde",
      description: "Hambúrguer vegano de grão-de-bico, queijo vegano, rúcula e molho de ervas selvagens",
      price: "R$ 27,90",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Duplo Devastador Mortal",
      description: "Dois hambúrgueres artesanais, queijo duplo, bacon e molho especial explosivo",
      price: "R$ 35,90",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Premium Gold do Abismo",
      description: "Hambúrguer premium wagyu, queijo brie, rúcula selvagem e geleia de pimenta das trevas",
      price: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Smash Atomic Demolidor",
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

      {/* Floating Skulls */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 8}).map((_, i) => (
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
            <Skull className="w-6 h-6 text-orange-500" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-7xl font-black text-cream mb-6 font-orbitron skull-shadow">
              NOSSO
              <br />
              <span className="text-orange-500 gradient-text-orange text-glow-cream">CARDÁPIO</span>
            </h2>
            <div className="absolute -top-4 -right-4">
              <Skull className="w-8 h-8 text-orange-500 animate-pulse fire-effect" />
            </div>
          </div>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto font-light font-exo skull-text">
            Sabores únicos preparados com ingredientes selecionados e muito <span className="text-orange-500 font-bold">ROCK'N'ROLL</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-cream rounded-2xl overflow-hidden interactive-card perspective-card animate-bounce-in group relative skull-border"
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
                  className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm rounded-full p-2 hover:bg-black transition-all duration-300 transform hover:scale-110 glow-effect-orange"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${likedItems.includes(index) ? 'text-orange-500 fill-orange-500' : 'text-cream'}`}
                    strokeWidth={1.5}
                  />
                </button>
                {/* Skull overlay */}
                <div className="absolute top-4 left-4">
                  <Skull className="w-6 h-6 text-orange-500/60 animate-float" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Skull className="w-5 h-5 text-orange-500 mr-2" />
                  <h3 className="text-xl font-bold text-black font-orbitron skull-shadow">{item.name}</h3>
                </div>
                <p className="text-black/70 text-sm mb-4 font-light leading-relaxed font-exo">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-orange-500 gradient-text-orange skull-shadow">{item.price}</div>
                  <Button 
                    onClick={() => handleOrder(item.name)}
                    className="bg-black hover:bg-black/80 text-cream group/btn transition-all duration-300 transform hover:scale-105 neon-border-orange skull-border"
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
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl p-8 max-w-5xl mx-auto interactive-card relative overflow-hidden skull-border">
            {/* Smoke effects */}
            <div className="absolute top-0 left-1/4 w-16 h-16 smoke-effect opacity-30" style={{animationDelay: '0s'}} />
            <div className="absolute top-0 right-1/4 w-12 h-12 smoke-effect opacity-20" style={{animationDelay: '1s'}} />
            <div className="absolute bottom-0 left-1/3 w-20 h-20 smoke-effect opacity-25" style={{animationDelay: '2s'}} />

            {/* Floating skulls */}
            <div className="absolute top-4 left-4 animate-float opacity-30">
              <Skull className="w-8 h-8 text-black" />
            </div>
            <div className="absolute top-4 right-4 animate-float opacity-30" style={{animationDelay: '1s'}}>
              <Skull className="w-6 h-6 text-black" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Skull className="w-12 h-12 text-black mr-4 animate-float" />
                <h3 className="text-4xl lg:text-5xl font-black text-black font-orbitron skull-shadow">
                  PEÇA NO
                  <br />
                  NOSSO APP!
                </h3>
                <Smartphone className="w-12 h-12 text-black ml-4 animate-float" style={{animationDelay: '0.5s'}} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm skull-border">
                    <p className="text-black/90 mb-6 font-exo text-lg leading-relaxed font-bold">
                      💀 <strong>Mais segurança na entrega MORTAL</strong><br/>
                      🔥 <strong>Preços e taxa de entrega DEVASTADORES</strong><br/>
                      ⚡ <strong>Desconto fidelidade EXPLOSIVO</strong><br/>
                      🎁 <strong>Ganhos e promoções INFERNAIS</strong><br/>
                      💀 <strong>Pedidos mais rápidos que um RAIO</strong><br/>
                      ⭐ <strong>Acompanhamento em tempo REAL</strong>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={handleAppDownload}
                      className="bg-black text-cream hover:bg-black/80 font-bold transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-orbitron glow-effect-orange skull-border"
                    >
                      <Skull className="w-5 h-5 mr-2" />
                      BAIXAR APP
                    </Button>
                    
                    <div className="bg-cream rounded-xl p-4 neon-border-orange animate-pulse-glow-orange skull-border">
                      <QrCode className="w-16 h-16 text-black mx-auto mb-2" />
                      <p className="text-xs text-black font-bold font-exo">ESCANEIE AQUI</p>
                      <div className="flex justify-center mt-2">
                        <Skull className="w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-black rounded-3xl p-4 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 glow-effect-orange skull-border">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center"
                      alt="ChapaBurger App Interface"
                      className="w-full h-64 lg:h-80 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-orange-500 rounded-lg p-3 skull-border">
                        <div className="flex items-center justify-center mb-1">
                          <Skull className="w-5 h-5 text-black mr-2" />
                          <p className="text-black font-bold text-sm font-orbitron">ChapaBurger App</p>
                        </div>
                        <p className="text-black/70 text-xs font-exo text-center">Sua fome, nossa REBELDIA!</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fire effect around the phone */}
                  <div className="absolute -inset-4 fire-effect opacity-20 rounded-full blur-xl animate-pulse" />
                  
                  {/* Floating skulls around phone */}
                  <div className="absolute -top-4 -left-4 animate-float opacity-60">
                    <Skull className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 animate-float opacity-60" style={{animationDelay: '1s'}}>
                    <Skull className="w-8 h-8 text-orange-500" />
                  </div>
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
