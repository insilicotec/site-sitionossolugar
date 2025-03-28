
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PartnershipForm } from '@/components/PartnershipForm';
import WhatsappButton from '@/components/WhatsappButton';
import { HandshakeIcon } from 'lucide-react';
import { Building2, Instagram, MessageSquare } from 'lucide-react';

// We use the MessageSquare icon as a replacement for TikTok

const Parcerias = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sitio-sand">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-800 opacity-5 pattern-leaves"></div>
          
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-sitio-green-forest mb-6">Parcerias e Colaborações</h1>
              <p className="text-lg text-gray-700">
                Colabore com o Sítio Nosso Lugar e construa uma parceria de sucesso. Estamos abertos 
                a diferentes tipos de parcerias que tragam valor para nossos visitantes e seu negócio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-sitio-green-forest">Empresas</h3>
                <p className="text-gray-600 mb-4">
                  Oferecemos opções para empresas que desejam realizar eventos corporativos, 
                  team buildings ou parcerias de marketing. Vamos trabalhar juntos para criar uma 
                  colaboração personalizada.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-sitio-green-forest">Fornecedores</h3>
                <p className="text-gray-600 mb-4">
                  Se você é um fornecedor de produtos ou serviços para eventos, podemos estabelecer 
                  parcerias para oferecer soluções completas aos nossos clientes, desde decoração 
                  a serviços de catering.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                  <Instagram size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-sitio-green-forest">Influenciadores</h3>
                <p className="text-gray-600 mb-4">
                  Criadores de conteúdo e influenciadores digitais são bem-vindos para colaborar conosco.
                  Vamos criar experiências autênticas que destacam a beleza e a hospitalidade do 
                  Sítio Nosso Lugar.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-emerald-600 py-4 px-6">
                  <h2 className="text-2xl font-semibold text-white flex items-center">
                    <MessageSquare className="mr-2" />
                    Entre em Contato
                  </h2>
                </div>
                
                <div className="p-6">
                  <PartnershipForm />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-sitio-green-forest flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.8,18.1h6.7v-2.1h-6.7V18.1z M10.8,13.9h6.7v-2.1h-6.7V13.9z M10.8,9.8h6.7V7.7h-6.7V9.8z M7.5,7.7H5.4v2.1h2.1V7.7z
                   M7.5,11.8H5.4v2.1h2.1V11.8z M7.5,15.9H5.4V18h2.1V15.9z M4.3,3.6v16.7h15.4V3.6H4.3z M2.3,1.5h19.4v20.9H2.3V1.5z"/>
                </svg>
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
              <p className="text-sitio-green-dark font-medium">
                Estamos ansiosos para trabalhar com você!
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre parcerias com o Sítio Nosso Lugar." />
    </div>
  );
};

export default Parcerias;
