
import { Star, Award, Users, Flame } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-4xl lg:text-7xl font-black text-black font-orbitron">
                O QUE É
                <br />
                <span className="text-amber-400 gradient-text">CHAPA?</span>
              </h2>
              <div className="absolute -top-4 -right-4">
                <Flame className="w-8 h-8 text-amber-400 animate-pulse fire-effect" />
              </div>
            </div>
            
            <p className="text-lg text-black/80 leading-relaxed font-light font-exo">
              No coração do bairro do Cambuci, a <span className="font-bold text-amber-600">ChapaBurgues</span> nasceu da paixão por hambúrgueres 
              artesanais verdadeiramente especiais. Cada burguer é preparado na hora com 
              ingredientes frescos e temperado com muito amor.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-light font-exo">
              Nossa chapa esquenta todos os dias para oferecer sabores únicos que vão 
              conquistar seu paladar. Uma experiência gastronômica que combina tradição 
              e inovação em cada mordida.
            </p>
            
            <div className="flex space-x-8 pt-6">
              {[
                { number: "5+", label: "Anos de experiência" },
                { number: "15+", label: "Sabores únicos" },
                { number: "100%", label: "Ingredientes frescos" }
              ].map((stat, index) => (
                <div key={index} className="text-center interactive-card perspective-card">
                  <div className="bg-amber-400/10 rounded-xl p-4 neon-border">
                    <div className="text-3xl font-black text-amber-400 gradient-text font-orbitron">{stat.number}</div>
                    <div className="text-sm text-black/60 font-light font-exo">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="bg-black rounded-3xl p-8 interactive-card perspective-card glow-effect relative overflow-hidden">
              {/* Fire effects around the card */}
              <div className="absolute -top-2 -right-2 w-8 h-8 fire-effect rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 fire-effect rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              
              <div className="bg-white rounded-2xl p-6 relative z-10">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&crop=center"
                      alt="Chef preparando hambúrguer na chapa"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2 font-orbitron">Chef Especialista</h3>
                  <p className="text-black/70 font-light font-exo">
                    Mais de 10 anos de experiência em hambúrgueres gourmet e chapa tradicional
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black rounded-full w-28 h-28 flex items-center justify-center animate-pulse-glow neon-border">
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-1 fill-current" strokeWidth={1} />
                <div className="text-sm font-bold font-orbitron">5.0</div>
                <div className="text-xs font-exo">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
