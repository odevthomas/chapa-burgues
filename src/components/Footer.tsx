
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ChapaBurgues
              <span className="text-amber-400 block text-lg">CAMBUCI</span>
            </h3>
            <p className="text-gray-400">
              Os melhores hambúrgueres artesanais do Cambuci. Feito com amor e ingredientes frescos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">HORÁRIOS</h4>
            <div className="space-y-2 text-gray-400">
              <div>Segunda a Sexta: 18h - 23h</div>
              <div>Sábado e Domingo: 18h - 00h</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">CONTATO</h4>
            <div className="space-y-2 text-gray-400">
              <div>📱 (11) 99999-9999</div>
              <div>📧 contato@chapaburgues.com.br</div>
              <div>📍 Rua do Cambuci, 123 - Cambuci/SP</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ChapaBurgues Cambuci. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
