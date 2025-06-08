
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import { Handshake, Map } from 'lucide-react';

const Parcerias = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sitio-sand">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-orange-100 opacity-30"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Parcerias e Colaborações</h1>
              <p className="text-lg text-gray-700">
                Colabore com o Sítio Nosso Lugar e construa uma parceria de sucesso. Estamos abertos 
                a diferentes tipos de parcerias que tragam valor para nossos visitantes e seu negócio.
              </p>
            </div>
  
            
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-amber-700 py-4 px-6">
                  <h2 className="text-2xl font-semibold text-white flex items-center">
                    <Handshake className="mr-2" />
                    Entre em Contato
                  </h2>
                </div>
                
                <div className="p-6">
                  <PartnershipForm />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-amber-800 flex items-center">
                <Map className="w-5 h-5 mr-2" />
                Termos de Parceria
              </h3>
              <p className="text-gray-600 mb-4">
                Todas as parcerias são avaliadas individualmente para garantir alinhamento com nossos 
                valores de sustentabilidade, respeito à natureza e experiências autênticas. 
              </p>
              <p className="text-gray-600 mb-4">
                Após o contato inicial, nossa equipe irá analisar sua proposta e retornar com 
                informações detalhadas sobre as possibilidades de colaboração.
              </p>
              <p className="text-amber-800 font-medium">
                Estamos ansiosos para trabalhar com você!
              </p>
            </div>
          </div>
        </section>
      </main>      
      <Footer />
    </div>
  );
};

export default Parcerias;
