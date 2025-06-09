
import { Star, Award, Users, Skull } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-cream relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Floating Skulls */}
        {Array.from({length: 4}).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-5"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${5 + Math.random() * 2}s`
            }}
          >
            <Skull className="w-12 h-12 text-black" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-4xl lg:text-7xl font-black text-black font-orbitron skull-shadow">
                O QUE É
                <br />
                <span className="text-orange-500 gradient-text-orange">CHAPA?</span>
              </h2>
              <div className="absolute -top-4 -right-4">
                <Skull className="w-8 h-8 text-orange-500 animate-pulse fire-effect" />
              </div>
            </div>
            
            <p className="text-lg text-black/80 leading-relaxed font-light font-exo">
              No coração do bairro do Cambuci, a <span className="font-bold text-orange-600">ChapaBurger</span> nasceu da paixão por hambúrgueres 
              artesanais verdadeiramente <span className="font-bold text-red-600">MORTAIS</span>. Cada burger é preparado na hora com 
              ingredientes frescos e temperado com muito <span className="font-bold">ROCK'N'ROLL</span>.
            </p>
            <p className="text-lg text-black/80 leading-relaxed font-light font-exo">
              Nossa chapa esquenta todos os dias para oferecer sabores únicos que vão 
              <span className="font-bold text-orange-600"> DEVASTAR</span> seu paladar. Uma experiência gastronômica que combina tradição 
              e rebeldia em cada mordida <span className="font-bold text-red-600">INFERNAL</span>.
            </p>
            
            <div className="flex space-x-8 pt-6">
              {[
                { number: "6+", label: "Anos de Rebeldia", icon: <Skull className="w-4 h-4" /> },
                { number: "13+", label: "Sabores Mortais", icon: <Skull className="w-4 h-4" /> },
                { number: "100%", label: "Ingredientes do Inferno", icon: <Skull className="w-4 h-4" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center interactive-card perspective-card">
                  <div className="bg-orange-500/10 rounded-xl p-4 neon-border-orange skull-border">
                    <div className="text-orange-500 mb-1">{stat.icon}</div>
                    <div className="text-3xl font-black text-orange-500 gradient-text-orange font-orbitron skull-shadow">{stat.number}</div>
                    <div className="text-sm text-black/60 font-light font-exo">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="bg-black rounded-3xl p-8 interactive-card perspective-card glow-effect-orange relative overflow-hidden skull-border">
              {/* Fire effects around the card */}
              <div className="absolute -top-2 -right-2 w-8 h-8 fire-effect rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 fire-effect rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              
              {/* Floating skulls inside card */}
              <div className="absolute top-4 left-4">
                <Skull className="w-6 h-6 text-orange-500/30 animate-float" />
              </div>
              <div className="absolute bottom-4 right-4" style={{animationDelay: '1s'}}>
                <Skull className="w-4 h-4 text-orange-500/20 animate-float" />
              </div>
              
              <div className="bg-cream rounded-2xl p-6 relative z-10">
                <div className="text-center">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&crop=center"
                      alt="Chef preparando hambúrguer na chapa"
                      className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <Skull className="w-6 h-6 text-orange-500 mr-2" />
                    <h3 className="text-2xl font-bold text-black font-orbitron skull-shadow">Chef Rebelde</h3>
                  </div>
                  <p className="text-black/70 font-light font-exo">
                    Mais de 10 anos de experiência em hambúrgueres gourmet e chapa <span className="font-bold text-orange-600">INFERNAL</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-black rounded-full w-28 h-28 flex items-center justify-center animate-pulse-glow-orange neon-border-orange skull-border">
              <div className="text-center">
                <Skull className="w-6 h-6 mx-auto mb-1 fill-current" strokeWidth={1} />
                <div className="text-sm font-bold font-orbitron">5.0</div>
                <div className="text-xs font-exo">Mortal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
