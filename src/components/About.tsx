
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900">
              O QUE É
              <br />
              <span className="text-amber-500">CHAPA?</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              No coração do bairro do Cambuci, a ChapaBurgues nasceu da paixão por hambúrgueres 
              artesanais verdadeiramente especiais. Cada burguer é preparado na hora com 
              ingredientes frescos e temperado com muito amor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa chapa esquenta todos os dias para oferecer sabores únicos que vão 
              conquistar seu paladar. Uma experiência gastronômica que combina tradição 
              e inovação em cada mordida.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-black text-amber-500">5+</div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-amber-500">15+</div>
                <div className="text-sm text-gray-600">Sabores únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-amber-500">100%</div>
                <div className="text-sm text-gray-600">Ingredientes frescos</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 transform rotate-3">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🍳</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Chef Especialista</h3>
                  <p className="text-gray-600">
                    Mais de 10 anos de experiência em hambúrgueres gourmet
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold">★★★★★</div>
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
