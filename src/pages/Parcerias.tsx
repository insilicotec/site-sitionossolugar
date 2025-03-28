
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnershipForm, { PartnershipData } from '@/components/PartnershipForm';
import WhatsappButton from '@/components/WhatsappButton';

const Parcerias = () => {
  const [formData, setFormData] = useState<PartnershipData | null>(null);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSubmit = (data: PartnershipData) => {
    setFormData(data);
    
    // Create WhatsApp message
    const message = `*Nova Solicitação de Parceria*
    
*Dados da Agência:*
Nome da Agência: ${data.nomeAgencia}
Responsável: ${data.responsavel}
Telefone: ${data.telefone}
E-mail: ${data.email}
Cidade: ${data.cidade}
Website/Rede Social: ${data.website || "Não informado"}

*Proposta de Parceria:*
${data.descricao}`;

    setWhatsappMessage(message);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/559184731385?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sitio-green-dark text-white py-12">
          <div className="container px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Parcerias</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Estabeleça parcerias estratégicas com o Sítio Nosso Lugar.
              Ideal para agências de viagem e promotores de eventos.
            </p>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-sitio-earth mb-6 text-center">Benefícios de ser um Parceiro</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-sitio-sand p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-sitio-green-dark mb-3">Para Agências de Viagem</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Comissões atrativas sobre reservas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Material promocional exclusivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Condições especiais para grupos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Atendimento prioritário</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Visitas técnicas gratuitas</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-sitio-sand p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-sitio-green-dark mb-3">Para Promotores de Eventos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Descontos especiais em locações</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Pacotes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Flexibilidade em datas e horários</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Divulgação conjunta em redes sociais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2">•</span>
                      <span>Suporte completo para seus eventos</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700">
                  Juntos podemos criar experiências incríveis para seus clientes e expandir nossos negócios.
                  Preencha o formulário abaixo para iniciarmos uma parceria.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Form Section */}
        <section className="py-12 bg-sitio-sand">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-sitio-earth mb-6">Formulário de Parceria</h2>
              <PartnershipForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-sitio-earth mb-8 text-center">O que dizem nossos Parceiros</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-sitio-sand p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic mb-4">
                    "A parceria com o Sítio Nosso Lugar tem sido incrível para nossa agência. Nossos clientes sempre voltam encantados com a experiência e o atendimento."
                  </p>
                  <div>
                    <p className="font-semibold text-sitio-green-dark">Maria Silva</p>
                    <p className="text-sm text-gray-600">Viagens & Turismo</p>
                  </div>
                </div>
                
                <div className="bg-sitio-sand p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 italic mb-4">
                    "Como promotor de eventos, encontrar o Sítio Nosso Lugar foi um diferencial para meus clientes. O espaço é perfeito e a equipe sempre pronta para ajudar."
                  </p>
                  <div>
                    <p className="font-semibold text-sitio-green-dark">João Santos</p>
                    <p className="text-sm text-gray-600">JS Eventos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      {whatsappMessage ? (
        <WhatsappButton phone="559184731385" message={whatsappMessage} />
      ) : (
        <WhatsappButton phone="559184731385" message="Olá! Gostaria de fazer uma parceria com o Sítio Nosso Lugar." />
      )}
    </div>
  );
};

export default Parcerias;
