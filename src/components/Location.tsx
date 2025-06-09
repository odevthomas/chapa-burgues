
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-6xl font-black mb-8">
              VENHA
              <br />
              <span className="text-amber-200">NOS VISITAR!</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 mt-1 text-amber-200" />
                <div>
                  <h3 className="text-xl font-bold mb-2">ENDEREÇO</h3>
                  <p className="text-white/90">
                    Rua do Cambuci, 123<br/>
                    Cambuci - São Paulo/SP<br/>
                    CEP: 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-8 h-8 mt-1 text-amber-200" />
                <div>
                  <h3 className="text-xl font-bold mb-2">FUNCIONAMENTO</h3>
                  <p className="text-white/90">
                    Segunda a Domingo<br/>
                    18:00 às 23:00
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 mt-1 text-amber-200" />
                <div>
                  <h3 className="text-xl font-bold mb-2">CONTATOS</h3>
                  <p className="text-white/90">
                    📱 (11) 99999-9999<br/>
                    📧 contato@chapaburgues.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="w-8 h-8 mt-1 text-amber-200" />
                <div>
                  <h3 className="text-xl font-bold mb-2">REDES SOCIAIS</h3>
                  <p className="text-white/90">
                    @chapaburgues_cambuci
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4">
                💬 WHATSAPP DELIVERY
              </Button>
              <Button variant="outline" className="w-full bg-white/20 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4">
                📍 VER NO MAPS
              </Button>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">PET FRIENDLY</h3>
            <div className="text-center">
              <div className="text-6xl mb-4">🐕</div>
              <p className="text-white/90 leading-relaxed">
                Aqui tem um lugarzinho pro seu cãozinho que veio de longe! Petiscos 
                para animais. Não esqueça de consultar nosso espaço dedicado para pets. 
                Nosso espaço tem uma entrada especial, já que a sombra é muito boa.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">NOSSO AMBIENTE</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl aspect-square flex items-center justify-center">
                <div className="text-4xl">📸</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
