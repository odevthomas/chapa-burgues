
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const message = "Olá! Gostaria de fazer um pedido.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl animate-pulse group"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
