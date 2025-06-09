
import { Star, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-6xl font-black text-black">
              O QUE É
              <br />
              <span className="text-amber-400">CHAPA?</span>
            </h2>
            <p className="text-lg text-black/80 leading-relaxed font-light">
              No coração do bairro do Cambuci, a ChapaBurgues nasceu da paixão por hambúrgueres 
              artesanais verdadeiramente especiais. Cada burguer é preparado na hora com 
              ingredientes frescos e temperado com muito amor.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-light">
              Nossa chapa esquenta todos os dias para oferecer sabores únicos que vão 
              conquistar seu paladar. Uma experiência gastronômica que combina tradição 
              e inovação em cada mordida.
            </p>
            <div className="flex space-x-8 pt-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-amber-400">5+</div>
                <div className="text-sm text-black/60 font-light">Anos de experiência</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-amber-400">15+</div>
                <div className="text-sm text-black/60 font-light">Sabores únicos</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-amber-400">100%</div>
                <div className="text-sm text-black/60 font-light">Ingredientes frescos</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="bg-black rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
              <div className="bg-white rounded-xl p-6">
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center"
                    alt="Chef preparando hambúrguer"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-black mb-2">Chef Especialista</h3>
                  <p className="text-black/70 font-light">
                    Mais de 10 anos de experiência em hambúrgueres gourmet
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-400 text-black rounded-full w-24 h-24 flex items-center justify-center animate-pulse">
              <div className="text-center">
                <Star className="w-5 h-5 mx-auto mb-1" fill="currentColor" strokeWidth={1} />
                <div className="text-xs font-bold">5.0</div>
                <div className="text-xs">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
