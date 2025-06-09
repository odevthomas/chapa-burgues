
import { MapPin, Clock, Phone, Instagram, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const message = "Olá! Gostaria de fazer um pedido delivery.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openMaps = () => {
    const address = "Rua do Cambuci, 123, Cambuci - São Paulo/SP";
    const mapsUrl = `https://maps.google.com?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-black animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              VENHA
              <br />
              <span className="text-amber-400">NOS VISITAR!</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <MapPin className="w-6 h-6 mt-1 text-amber-400" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2">ENDEREÇO</h3>
                  <p className="text-black/70 font-light">
                    Rua do Cambuci, 123<br/>
                    Cambuci - São Paulo/SP<br/>
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Clock className="w-6 h-6 mt-1 text-amber-400" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2">FUNCIONAMENTO</h3>
                  <p className="text-black/70 font-light">
                    Segunda a Domingo<br/>
                    18:00 às 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Phone className="w-6 h-6 mt-1 text-amber-400" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2">CONTATOS</h3>
                  <p className="text-black/70 font-light">
                    📱 (11) 99999-9999<br/>
                    📧 contato@chapaburgues.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                <Instagram className="w-6 h-6 mt-1 text-amber-400" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2">REDES SOCIAIS</h3>
                  <p className="text-black/70 font-light">
                    @chapaburgues_cambuci
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 transform hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" strokeWidth={1.5} />
                WHATSAPP DELIVERY
              </Button>
              <Button 
                onClick={openMaps}
                className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-4 transform hover:scale-105 transition-all duration-300 group"
              >
                <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" strokeWidth={1.5} />
                VER NO MAPS
              </Button>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-8 animate-fade-in delay-300 transform hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">PET FRIENDLY</h3>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop&crop=center"
                alt="Ambiente pet friendly"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <p className="text-white/90 leading-relaxed font-light">
                Aqui tem um lugarzinho pro seu cãozinho que veio de longe! Petiscos 
                para animais. Não esqueça de consultar nosso espaço dedicado para pets. 
                Nosso espaço tem uma entrada especial, já que a sombra é muito boa.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mt-20 animate-fade-in delay-600">
          <h3 className="text-3xl font-bold text-black text-center mb-8">NOSSO AMBIENTE</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=300&h=300&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center",
              "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=300&fit=crop&crop=center"
            ].map((image, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-square transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <img 
                  src={image}
                  alt={`Ambiente ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
