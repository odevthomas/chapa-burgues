
import { MapPin, Clock, Phone, Instagram, MessageCircle, Navigation, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Location = () => {
  const [cep, setCep] = useState("");
  const [addressData, setAddressData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const consultarCEP = async () => {
    if (!cep || cep.length !== 8) {
      setError("CEP deve ter 8 dígitos");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        setError("CEP não encontrado");
        setAddressData(null);
      } else {
        setAddressData(data);
      }
    } catch (err) {
      setError("Erro ao consultar CEP");
      setAddressData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-black w-full">
      <div className="w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-cream animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 font-orbitron skull-shadow text-cream">
              VENHA
              <br />
              <span className="text-red-700 gradient-text-red">NOS VISITAR!</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 bg-cream/10 p-4 rounded-xl skull-border">
                <MapPin className="w-6 h-6 mt-1 text-red-700" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cream font-orbitron">ENDEREÇO</h3>
                  <p className="text-cream/80 font-light font-exo">
                    Rua do Cambuci, 123<br/>
                    Cambuci - São Paulo/SP<br/>
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 bg-cream/10 p-4 rounded-xl skull-border">
                <Clock className="w-6 h-6 mt-1 text-red-700" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cream font-orbitron">FUNCIONAMENTO</h3>
                  <p className="text-cream/80 font-light font-exo">
                    Segunda a Domingo<br/>
                    18:00 às 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 bg-cream/10 p-4 rounded-xl skull-border">
                <Phone className="w-6 h-6 mt-1 text-red-700" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cream font-orbitron">CONTATOS</h3>
                  <p className="text-cream/80 font-light font-exo">
                    (11) 99999-9999<br/>
                    contato@chapaburgues.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 bg-cream/10 p-4 rounded-xl skull-border">
                <Instagram className="w-6 h-6 mt-1 text-red-700" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-cream font-orbitron">REDES SOCIAIS</h3>
                  <p className="text-cream/80 font-light font-exo">
                    @chapaburgues_cambuci
                  </p>
                </div>
              </div>
            </div>

            {/* Consulta CEP */}
            <div className="mt-8 bg-cream/10 p-6 rounded-xl skull-border">
              <h3 className="text-xl font-bold mb-4 text-cream font-orbitron">CONSULTA SEU CEP</h3>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Digite seu CEP (apenas números)"
                  value={cep}
                  onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                  className="flex-1 px-4 py-2 rounded-lg bg-black text-cream border border-red-700 focus:outline-none focus:border-red-300"
                />
                <Button 
                  onClick={consultarCEP}
                  disabled={loading}
                  className="bg-red-700 hover:bg-red-300 text-black font-bold font-orbitron"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {loading ? "..." : "BUSCAR"}
                </Button>
              </div>
              
              {error && (
                <p className="text-red-700 mt-2 font-exo">{error}</p>
              )}
              
              {addressData && (
                <div className="mt-4 p-4 bg-red-700/10 rounded-lg">
                  <p className="text-cream font-exo">
                    <strong>Endereço:</strong> {addressData.logradouro}<br/>
                    <strong>Bairro:</strong> {addressData.bairro}<br/>
                    <strong>Cidade:</strong> {addressData.localidade} - {addressData.uf}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-4">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 transform hover:scale-105 transition-all duration-300 group font-orbitron"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" strokeWidth={1.5} />
                WHATSAPP DELIVERY
              </Button>
              <Button 
                onClick={openMaps}
                className="w-full bg-red-700 hover:bg-red-300 text-black font-bold py-4 transform hover:scale-105 transition-all duration-300 group font-orbitron"
              >
                <Navigation className="w-5 h-5 mr-2 group-hover:animate-pulse" strokeWidth={1.5} />
                VER NO MAPS
              </Button>
            </div>
          </div>

          <div className=" rounded-2xl p-8 animate-fade-in delay-300 transform ">
            <div className="text-center">
              <img 
                src="/Ambiente Amigável para Animais.png"
                alt="Ambiente pet friendly"
                className="w-full h-100 object-cover mb-4"
              />
           
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mt-20 animate-fade-in delay-600 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-cream text-center mb-8 font-orbitron">NOSSO AMBIENTE</h3>
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
