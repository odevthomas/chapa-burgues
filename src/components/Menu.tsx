
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

const Menu = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

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

  const menuItems = [
    {
      name: "Chapa Clássico",
      description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial",
      price: "R$ 25,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chapa Bacon",
      description: "Hambúrguer artesanal, bacon crocante, queijo e cebola caramelizada",
      price: "R$ 29,90",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chapa Veggie",
      description: "Hambúrguer de grão-de-bico, queijo, rúcula e molho de ervas",
      price: "R$ 27,90",
      image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chapa Duplo",
      description: "Dois hambúrgueres artesanais, queijo duplo e molho especial",
      price: "R$ 35,90",
      image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chapa Premium",
      description: "Hambúrguer premium, queijo brie, rúcula e geleia de pimenta",
      price: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop&crop=center"
    },
    {
      name: "Chapa Smash",
      description: "Dois smash burgers, queijo cheddar, cebola e molho barbecue",
      price: "R$ 32,90",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="cardapio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            NOSSO
            <br />
            <span className="text-amber-400">CARDÁPIO</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Sabores únicos preparados com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300 transform hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${likedItems.includes(index) ? 'text-red-500 fill-red-500' : 'text-black'}`}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{item.name}</h3>
                <p className="text-black/70 text-sm mb-4 font-light leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-black text-amber-400">{item.price}</div>
                  <Button 
                    onClick={() => handleOrder(item.name)}
                    className="bg-black hover:bg-black/80 text-white group/btn transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" strokeWidth={1.5} />
                    PEDIR
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="bg-amber-400 rounded-2xl p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-black text-black mb-4">
              PEÇA PELO
              <br />
              NOSSO APP!
            </h3>
            <p className="text-black/80 mb-6 font-light">
              • Mais segurança na entrega<br/>
              • Preços e taxa de entrega mais baixa<br/>
              • Desconto fidelidade<br/>
              • Ganhos exclusivos
            </p>
            <Button className="bg-black text-white hover:bg-black/80 font-bold transform hover:scale-105 transition-all duration-300">
              BAIXAR APP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
