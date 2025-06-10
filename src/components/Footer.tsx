
import { MapPin, Clock, Phone, Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-black mb-4">
              ChapaBurgues
              <span className="text-red-600 block text-lg font-light">CAMBUCI</span>
            </h3>
            <p className="text-white/70 font-light leading-relaxed">
              Os melhores hambúrgueres artesanais do Cambuci. Feito com amor e ingredientes frescos.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-red-600 hover:text-red-700 transition-colors transform hover:scale-110 duration-700">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700 transition-colors transform hover:scale-110 duration-700">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in delay-700">
            <h4 className="text-lg font-bold mb-4 text-red-600 flex items-center">
              <Clock className="w-5 h-5 mr-2" strokeWidth={1.5} />
              HORÁRIOS
            </h4>
            <div className="space-y-2 text-white/70 font-light">
              <div>Segunda a Sexta: 18h - 23h</div>
              <div>Sábado e Domingo: 18h - 00h</div>
            </div>
          </div>

          <div className="animate-fade-in delay-500">
            <h4 className="text-lg font-bold mb-4 text-red-600 flex items-center">
              <MapPin className="w-5 h-5 mr-2" strokeWidth={1.5} />
              CONTATO
            </h4>
            <div className="space-y-2 text-white/70 font-light">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-red-600" strokeWidth={1.5} />
                (11) 99999-9999
              </div>
              <div>📧 contato@chapaburgues.com.br</div>
              <div>📍 Rua do Cambuci, 123 - Cambuci/SP</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 animate-fade-in delay-700">
          <p className="font-light">
            &copy; 2024 ChapaBurgues Cambuci. Todos os direitos reservados. 
            <span className="inline-flex items-center ml-2">
              Feito com <Heart className="w-4 h-4 mx-1 text-red-600 fill-current" strokeWidth={1} /> em São Paulo
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
