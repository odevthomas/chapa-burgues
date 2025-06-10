import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Smartphone, QrCode, Skull, Plus, Flame, Utensils, Coffee, BeerIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Cart, { CartItem } from "./Cart";

const Menu = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [fireParticles, setFireParticles] = useState<Array<{id: number, delay: number}>>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("burgers");

  useEffect(() => {
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

  const addToCart = (item: any) => {
    const cartItem: CartItem = {
      id: `${item.name}-${Date.now()}`,
      name: item.name,
      price: parseFloat(item.price.replace('R$ ', '').replace(',', '.')),
      quantity: 1
    };

    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === cartItem.name);
      if (existingItem) {
        return prev.map(i => 
          i.name === cartItem.name 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, cartItem];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleAppDownload = () => {
    alert("Em breve! O app ChapaBurger estará disponível nas lojas!");
  };

  const burgerItems = [
    {
      name: "INFERNO DUPLO",
      description: "Dois hambúrgueres artesanais de 150g, queijo cheddar, bacon crocante e molho especial",
      price: "R$ 39,90",
      image: "/menu/INFERNODUPLO.jpeg  ", // Terceira imagem que você enviou
      highlight: true
    },
    {
      name: "CLÁSSICO BRUTAL",
      description: "Hambúrguer artesanal de 180g, queijo americano, molho especial, alface e tomate",
      price: "R$ 32,90",
      image: "/menu/CLÁSSICOBRUTAL.jpeg", // Primeira imagem que você enviou
      highlight: false
    },
    {
      name: "REBELDE VEGAN",
      description: "Hambúrguer vegano, queijo vegano, rúcula, tomate e molho especial à base de plantas",
      price: "R$ 34,90",
      image: "/menu/REBELDEVEGAN.jpeg", // Segunda imagem que você enviou
      highlight: false
    },
    {
      name: "DESTRUIDOR BACON",
      description: "Hambúrguer artesanal de 180g, muito bacon crocante, queijo cheddar e molho barbecue",
      price: "R$ 37,90",
      image: "/menu/DESTRUIDORBACON.jpeg", // Quarta imagem que você enviou
      highlight: false
    },
    {
      name: "COMBO APOCALIPSE",
      description: "Hambúrguer artesanal, batata frita rústica, molho especial e refrigerante",
      price: "R$ 49,90",
      image: "/menu/COMBOAPOCALIPSE .jpeg", // Quarta imagem que você enviou
      highlight: true
    },
    {
      name: "MONSTRUOSO",
      description: "Três hambúrgueres de 150g, queijo cheddar, bacon, cebola caramelizada e molho da casa",
      price: "R$ 49,90",
      image: "/menu/MONSTRUOSO.png", // Terceira imagem que você enviou
      highlight: false
    },
    {
      name: "FRANGO INFERNAL",
      description: "Filé de frango empanado, molho picante, alface, tomate e queijo prato derretido",
      price: "R$ 34,90",
      image: "/menu/FRANGO.png", // Primeira imagem que você enviou
      highlight: false
    },
    {
      name: "EXPLOSÃO CHEESE",
      description: "Hambúrguer de 180g, triplo queijo (cheddar, prato e muçarela), cebola crispy e molho especial",
      price: "R$ 38,90",
      image: "/menu/EXPLOSÃOCHEESE.jpeg", // Segunda imagem que você enviou
      highlight: false
    }
  ];

  const sidesItems = [
    {
      name: "BATATA DEMONÍACA",
      description: "Batata frita rústica com mix de pimentas e molho especial",
      price: "R$ 19,90",
      image: "/menu/BATATADEMONÍACA.jpeg", // Quarta imagem que você enviou
      highlight: false
    },
    {
      name: "ONION RINGS INFERNAL",
      description: "Anéis de cebola empanados com molho barbecue defumado",
      price: "R$ 22,90",
      image: "/menu/ONIONRINGS.jpeg", // Primeira imagem que você enviou
      highlight: false
    },
    {
      name: "PORÇÃO DIABÓLICA",
      description: "Mix de batata frita, onion rings, isca de frango e molhos",
      price: "R$ 39,90",
      image: "/menu/PORÇÃODIABÓLICA.jpeg", // Segunda imagem que você enviou
      highlight: true
    },
    {
      name: "CHICKEN WINGS",
      description: "Asinhas de frango com molho picante ou barbecue",
      price: "R$ 29,90",
      image: "/burger3.jpg", // Terceira imagem que você enviou
      highlight: false
    }
  ];

  const drinksItems = [
    {
      name: "SHAKE DEMONÍACO",
      description: "Milkshake de chocolate com calda de caramelo e chantilly",
      price: "R$ 18,90",
      image: "/burger1.jpg", // Primeira imagem que você enviou
      highlight: false
    },
    {
      name: "CERVEJA INFERNAL",
      description: "Cerveja artesanal exclusiva ChapaBurger 350ml",
      price: "R$ 15,90",
      image: "/burger2.jpg", // Segunda imagem que você enviou
      highlight: false
    },
    {
      name: "REFRIGERANTE BRUTAL",
      description: "Refrigerante de cola, guaraná ou limão 500ml",
      price: "R$ 8,90",
      image: "/burger3.jpg", // Terceira imagem que você enviou
      highlight: false
    },
    {
      name: "SUCO EXPLOSIVO",
      description: "Sucos naturais de laranja, limão, abacaxi ou morango",
      price: "R$ 12,90",
      image: "/burger4.jpg", // Quarta imagem que você enviou
      highlight: false
    }
  ];

  const getActiveItems = () => {
    switch(activeCategory) {
      case "burgers":
        return burgerItems;
      case "sides":
        return sidesItems;
      case "drinks":
        return drinksItems;
      default:
        return burgerItems;
    }
  };

  return (
    <section id="cardapio" className="py-20 bg-black relative overflow-hidden w-full">
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
            <Skull className="w-6 h-6 text-red-600" />
          </div>
        ))}
      </div>

      <div className="w-full px-6 relative z-10">
  <div className="text-center mb-16 animate-fade-in max-w-7xl mx-auto">
    <div className="relative inline-block">
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 font-orbitron ">
        NOSSO
        <br />
        <span className="text-white gradient-text-white ">CARDÁPIO</span>
      </h2>
            <div className="absolute -top-4 -right-4">
              <Flame className="w-8 h-8 text-red-500 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-light">
            Sabores únicos preparados com ingredientes selecionados e muito <span className="text-red-500 font-bold">ROCK N ROLL</span>
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 max-w-2xl mx-auto">
          <div className="bg-gray-900/20 p-2 rounded-full flex shadow-2xl border border-red-900/30">
            <button 
              onClick={() => setActiveCategory("burgers")}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "burgers" 
                  ? "bg-gradient-to-r from-red-700 to-red-900 text-gray-100 shadow-lg" 
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              <Flame className={`w-5 h-5 ${activeCategory === "burgers" ? "text-gray-100" : "text-gray-400"}`} />
              HAMBÚRGUERES
            </button>
            <button 
              onClick={() => setActiveCategory("sides")}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "sides" 
                  ? "bg-gradient-to-r from-red-700 to-red-900 text-gray-100 shadow-lg" 
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              <Utensils className={`w-5 h-5 ${activeCategory === "sides" ? "text-gray-100" : "text-gray-400"}`} />
              ACOMPANHAMENTOS
            </button>
            <button 
              onClick={() => setActiveCategory("drinks")}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                activeCategory === "drinks" 
                  ? "bg-gradient-to-r from-red-700 to-red-900 text-gray-100 shadow-lg" 
                  : "text-gray-400 hover:text-gray-100"
              }`}
            >
              <Coffee className={`w-5 h-5 ${activeCategory === "drinks" ? "text-gray-100" : "text-gray-400"}`} />
              BEBIDAS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          {getActiveItems().map((item, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-gray-900/20 to-gray-950 rounded-2xl overflow-hidden animate-bounce-in group relative ${
                item.highlight ? "lg:col-span-2" : ""
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: "0 0 20px rgba(220, 38, 38, 0.2), 0 0 40px  inset"
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className={`w-full ${item.highlight ? "h-64" : "h-48"} object-cover group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 bg-red-900/70 rounded-full p-2 hover:bg-red-700 transition-all duration-300 transform hover:scale-110 z-10"
                  style={{boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)"}}
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${likedItems.includes(index) ? 'text-white fill-white' : 'text-gray-100'}`}
                    strokeWidth={1.5}
                  />
                </button>
                
                {/* Item name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <h3 className="text-3xl font-black text-gray-100 font-orbitron tracking-wider drop-shadow-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 text-sm mb-4 font-light leading-relaxed min-h-[60px]">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-white">
                    <span className="bg-clip-text text-white bg-gradient-to-r from-gray-400 to-gray-200">
                      {item.price}
                    </span>
                  </div>
                  <Button 
                    onClick={() => addToCart(item)}
                    className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-gray-100 group/btn transition-all duration-300 transform hover:scale-105 font-bold"
                    style={{boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)"}}
                  >
                    <Plus className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" strokeWidth={2} />
                    ADICIONAR
                  </Button>
                </div>
              </div>
              
              {/* Corner flame */}
              <div className="absolute -bottom-2 -right-2">
                <Flame className="w-10 h-10 text-red-900/40" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced App Section */}
        <div className="text-center animate-fade-in delay-700 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br"
              >
            {/* Fire effects */}
        
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/5 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Flame className="w-12 h-12 text-red-500 mr-4 animate-pulse" />
                <h3 className="text-4xl lg:text-5xl font-black font-orbitron">
                  <span className="bg-clip-text text-white bg-gradient-to-r from-whaite animate-text-shimmer">
                    BAIXE NOSSO APP
                  </span>
                </h3>
                <Smartphone className="w-12 h-12 text-gray-500 ml-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-gray-950/80 rounded-2xl p-6 backdrop-blur-sm"
                      >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900/20 p-4 rounded-xl">
                        <Flame className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="text-gray-100 font-bold text-center">Entrega mais rápida</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900/20 p-4 rounded-xl">
                        <Skull className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="text-gray-100 font-bold text-center">Promoções exclusivas</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900/20 p-4 rounded-xl">
                        <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="text-gray-100 font-bold text-center">Programa fidelidade</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900/20 p-4 rounded-xl">
                        <Utensils className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="text-gray-100 font-bold text-center">Cardápio completo</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={handleAppDownload}
                      className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-gray-100 font-bold transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-orbitron"
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      BAIXAR AGORA
                    </Button>
                    
                    <div className="bg-gradient-to-br from-gray-900/20 to-gray-900/20 rounded-xl p-4"
                         style={{boxShadow: "0 0 15px "}}>
                      <QrCode className="w-16 h-16 text-gray-100 mx-auto mb-2" />
                      <p className="text-xs text-gray-100 font-bold text-center">ESCANEIE PARA BAIXAR</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className=" p-4 transform  "
                       style={{boxShadow: "0 0 25px "}}>
                    <img 
                      src="/app.png" // Primeira imagem que você enviou
                      alt="ChapaBurger App Interface"
                      className="w-full h-100 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 rounded-2xl" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-gray-900/20/80 backdrop-blur-md rounded-lg p-4"
                           style={{boxShadow: "0 0 15px "}}>
                        <div className="flex items-center justify-center mb-1">
                          <Flame className="w-5 h-5 text-red-500 mr-2" />
                          <p className="text-gray-100 font-bold text-lg">CHAPABURGER APP</p>
                        </div>
                        <p className="text-gray-300 text-sm text-center">Sua fome, nossa REBELDIA!</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flame effects */}
                  <div className="absolute -top-4 -left-4 animate-pulse">
                    <Flame className="w-12 h-12 text-red-600/40" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 animate-pulse" style={{animationDelay: "0.5s"}}>
                    <Flame className="w-14 h-14 text-red-600/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Component */}
      <Cart 
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </section>
  );
};

export default Menu;