
import { Button } from "@/components/ui/button";

const Menu = () => {
  const menuItems = [
    {
      name: "Chapa Clássico",
      description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial",
      price: "R$ 25,90",
      emoji: "🍔"
    },
    {
      name: "Chapa Bacon",
      description: "Hambúrguer artesanal, bacon crocante, queijo e cebola caramelizada",
      price: "R$ 29,90",
      emoji: "🥓"
    },
    {
      name: "Chapa Veggie",
      description: "Hambúrguer de grão-de-bico, queijo, rúcula e molho de ervas",
      price: "R$ 27,90",
      emoji: "🌱"
    },
    {
      name: "Chapa Duplo",
      description: "Dois hambúrgueres artesanais, queijo duplo e molho especial",
      price: "R$ 35,90",
      emoji: "🍔"
    }
  ];

  return (
    <section id="cardapio" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            NOSSO
            <br />
            <span className="text-amber-400">CARDÁPIO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sabores únicos preparados com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="text-2xl font-black text-amber-500 mb-4">{item.price}</div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">
                    PEDIR AGORA
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-4">
              PEÇA PELO
              <br />
              NOSSO APP!
            </h3>
            <p className="text-white/90 mb-6">
              • Mais segurança na entrega<br/>
              • Preços e taxa de entrega mais baixa<br/>
              • Desconto fidelidade<br/>
              • Ganhos exclusivos
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold">
              BAIXAR APP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
