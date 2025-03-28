
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnershipForm, { PartnershipData, InfluencerData, PartnershipType } from '@/components/PartnershipForm';
import WhatsappButton from '@/components/WhatsappButton';
import { Handshake, Briefcase, Presentation, Users, Camera, Instagram, TikTok } from 'lucide-react';

const Parcerias = () => {
  const [formData, setFormData] = useState<PartnershipData | InfluencerData | null>(null);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSubmit = (data: PartnershipData | InfluencerData, type: PartnershipType) => {
    setFormData(data);
    
    // Create WhatsApp message based on partnership type
    let message = '';
    
    if (type === 'business') {
      const businessData = data as PartnershipData;
      message = `*Nova Solicitação de Parceria - Agência/Negócio*
      
*Dados da Agência:*
Nome da Agência: ${businessData.nomeAgencia}
Responsável: ${businessData.responsavel}
Telefone: ${businessData.telefone}
Cidade: ${businessData.cidade}
Website/Rede Social: ${businessData.website || "Não informado"}

*Proposta de Parceria:*
${businessData.descricao}`;
    } else {
      const influencerData = data as InfluencerData;
      message = `*Nova Solicitação de Parceria - Influenciador*
      
*Dados do Influenciador:*
Nome: ${influencerData.nome}
Instagram/TikTok: @${influencerData.social}
Telefone: ${influencerData.telefone}
Cidade: ${influencerData.cidade}

${influencerData.mensagem ? `*Mensagem:*\n${influencerData.mensagem}` : ''}`;
    }

    setWhatsappMessage(message);
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/559184731385?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-sitio-sand/30">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-sitio-green-dark opacity-90 z-0"></div>
          <div 
            className="absolute inset-0 z-0 opacity-20" 
            style={{
              backgroundImage: 'url("/images/hero-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
            }}
          ></div>
          <div className="container px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Parcerias Estratégicas</h1>
            <p className="text-xl max-w-3xl mx-auto text-black/90">
              Amplie seus negócios com o Sítio Nosso Lugar.
              Uma experiência única para oferecer aos seus clientes.
            </p>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-sitio-earth mb-4">Por que ser nosso Parceiro?</h2>
                <div className="h-1 w-20 bg-sitio-green-dark mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-sitio-sand/40 p-8 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] border-l-4 border-sitio-green-dark">
                  <div className="flex items-center mb-6">
                    <div className="bg-sitio-green-dark p-3 rounded-full mr-4">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-sitio-green-dark">Para Agências</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Comissões atrativas sobre reservas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Material promocional exclusivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Condições especiais para grupos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Atendimento prioritário</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-sitio-sand/40 p-8 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] border-l-4 border-sitio-green-dark">
                  <div className="flex items-center mb-6">
                    <div className="bg-sitio-green-dark p-3 rounded-full mr-4">
                      <Presentation className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-sitio-green-dark">Para Eventos</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Descontos especiais em locações</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Pacotes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Flexibilidade em datas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Divulgação conjunta</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-sitio-sand/40 p-8 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] border-l-4 border-sitio-green-dark">
                  <div className="flex items-center mb-6">
                    <div className="bg-sitio-green-dark p-3 rounded-full mr-4">
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-sitio-green-dark">Para Influencers</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Parcerias com conteúdos exclusivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Acesso a locais especiais para fotos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Visibilidade em nossas redes sociais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sitio-green-dark mr-2 font-bold">•</span>
                      <span>Experiências personalizadas</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center px-4 py-10 bg-sitio-green-dark/10 rounded-xl shadow-inner mb-12">
                <Handshake className="h-12 w-12 mx-auto text-sitio-green-dark mb-4" />
                <p className="text-xl text-gray-800">
                  Juntos podemos criar experiências inesquecíveis para seus seguidores e clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Form Section */}
        <section className="py-16 bg-gradient-to-b from-sitio-sand/30 to-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-sitio-green-dark/10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-sitio-earth mb-4">Formulário de Parceria</h2>
                  <p className="text-gray-600">Preencha os dados abaixo para iniciarmos uma conversa</p>
                  <div className="h-1 w-20 bg-sitio-green-dark mx-auto mt-4"></div>
                </div>
                <PartnershipForm onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-sitio-earth mb-4">Depoimentos de Parceiros</h2>
                <div className="h-1 w-20 bg-sitio-green-dark mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-sitio-green-dark/10 relative">
                  <div className="absolute -top-5 -left-5 bg-sitio-green-dark text-white p-3 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700 italic mb-6 pt-4">
                    "A parceria com o Sítio Nosso Lugar tem sido incrível para nossa agência. Nossos clientes sempre voltam encantados com a experiência e o atendimento. Recomendo fortemente!"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-sitio-green-dark/20 rounded-full flex items-center justify-center text-sitio-green-dark font-bold text-xl">
                      MS
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-sitio-green-dark">Maria Silva</p>
                      <p className="text-sm text-gray-600">Viagens & Turismo</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border border-sitio-green-dark/10 relative">
                  <div className="absolute -top-5 -left-5 bg-sitio-green-dark text-white p-3 rounded-full">
                    <Presentation className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700 italic mb-6 pt-4">
                    "Como promotor de eventos, encontrar o Sítio Nosso Lugar foi um diferencial para meus clientes. O espaço é perfeito e a equipe sempre pronta para ajudar com todas as necessidades."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-sitio-green-dark/20 rounded-full flex items-center justify-center text-sitio-green-dark font-bold text-xl">
                      JS
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-sitio-green-dark">João Santos</p>
                      <p className="text-sm text-gray-600">JS Eventos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-lg border border-sitio-green-dark/10 relative">
                  <div className="absolute -top-5 -left-5 bg-sitio-green-dark text-white p-3 rounded-full">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700 italic mb-6 pt-4">
                    "Fazer uma parceria com o Sítio Nosso Lugar elevou o nível do meu conteúdo. As fotos ficaram incríveis e meus seguidores adoraram conhecer esse paraíso através das minhas redes."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-sitio-green-dark/20 rounded-full flex items-center justify-center text-sitio-green-dark font-bold text-xl">
                      AP
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-sitio-green-dark">Ana Paula</p>
                      <p className="text-sm text-gray-600">@ana.viagens</p>
                    </div>
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
