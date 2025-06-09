
import { ShoppingCart, Plus, Minus, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extras?: string[];
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const sendToWhatsApp = () => {
    if (items.length === 0) return;

    const orderText = items.map(item => 
      `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
    ).join('\n');

    const message = `Olá! Gostaria de fazer o seguinte pedido:\n\n${orderText}\n\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-yellow-400 hover:bg-yellow-300 text-black p-4 rounded-full shadow-2xl animate-pulse-glow-orange relative"
        >
          <ShoppingCart className="w-6 h-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="ml-auto w-full max-w-md bg-cream h-full overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black font-orbitron">CARRINHO</h2>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent text-black hover:bg-black/10 p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {items.length === 0 ? (
                <p className="text-black/70 text-center py-8 font-exo">Carrinho vazio</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="bg-black/5 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-black font-orbitron text-sm">{item.name}</h3>
                          <Button
                            onClick={() => onRemoveItem(item.id)}
                            className="bg-transparent text-red-600 hover:bg-red-100 p-1 h-auto"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="bg-black text-cream hover:bg-black/80 w-8 h-8 p-0"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="font-bold text-black w-8 text-center">{item.quantity}</span>
                            <Button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="bg-black text-cream hover:bg-black/80 w-8 h-8 p-0"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <span className="font-bold text-black">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-black/20 pt-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-black font-orbitron">TOTAL:</span>
                      <span className="text-xl font-bold text-yellow-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={sendToWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 font-orbitron"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      ENVIAR PEDIDO
                    </Button>
                    
                    <Button
                      onClick={onClearCart}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 font-orbitron"
                    >
                      LIMPAR CARRINHO
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
