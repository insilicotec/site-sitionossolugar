
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { ReservationData } from '@/components/reservation/types';
import WhatsappButton from '@/components/WhatsappButton';
import GoogleMap from '@/components/GoogleMap';

const Agendamento = () => {
  const [formData, setFormData] = useState<ReservationData | null>(null);
  const [whatsappMessage, setWhatsappMessage] = useState('');

  const handleSubmit = (data: ReservationData) => {
    console.log("Reservation data received:", data);
    setFormData(data);
    
    // Format the date
    const formattedDate = data.dataEvento 
      ? format(data.dataEvento, "dd/MM/yyyy", { locale: ptBR }) 
      : "Data não selecionada";
    
    // Generate services list from checked options only
    const selectedServices = [];
    if (data.apenasLocal) selectedServices.push("🏠 Apenas o local");
    if (data.incluiComida) selectedServices.push("🍽️ Inclui comida");
    if (data.buffet) selectedServices.push("🍲 Buffet completo");
    if (data.dj) selectedServices.push("🎵 DJ");
    if (data.decoracao) selectedServices.push("🎊 Decoração");
    
    const servicesText = selectedServices.length > 0 
      ? selectedServices.join("\n") 
      : "Nenhum serviço adicional selecionado";
    
    // Create WhatsApp message with emojis and better formatting
    const message = `✨ *NOVA RESERVA - SÍTIO NOSSO LUGAR* ✨
    
📋 *DADOS PESSOAIS*
👤 Nome: ${data.nome}
📱 Telefone: ${data.telefone}
🏙️ Cidade: ${data.cidade}

📅 *DETALHES DO EVENTO*
📆 Data: ${formattedDate}
🎭 Tipo: ${getEventTypeText(data.tipoEvento)}

🛠️ *SERVIÇOS SOLICITADOS*
${servicesText}

${data.observacoes ? `💬 *OBSERVAÇÕES*\n${data.observacoes}` : ""}

--
🙏 Agradecemos seu interesse em realizar seu evento no Sítio Nosso Lugar!`;

    setWhatsappMessage(encodeURIComponent(message));
    
    // Redirect to WhatsApp (delayed slightly to ensure state is updated)
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
      console.log("Opening WhatsApp URL:", whatsappUrl);
      window.open(whatsappUrl, '_blank');
    }, 100);
  };

  const getEventTypeText = (eventType: string): string => {
    const eventTypes: Record<string, string> = {
      'casamento': 'Casamento 💍',
      'aniversario': 'Aniversário 🎂',
      'corporativo': 'Evento Corporativo 💼',
      'dayuse': 'Day Use 🌴',
      'outro': 'Outro evento'
    };
    
    return eventTypes[eventType] || eventType;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-sitio-green-dark text-white py-12">
          <div className="container px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agende Seu Evento</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Preencha o formulário abaixo com os detalhes do seu evento.
              Entraremos em contato para confirmar a disponibilidade e finalizar sua reserva.
            </p>
          </div>
        </section>
        
        {/* Reservation Form Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-sitio-green-dark mb-6">Formulário de Reserva</h2>
              <ReservationForm onSubmit={handleSubmit} />
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-sitio-blue-light/20">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-sitio-green-dark mb-6 text-center">Nossa Localização</h2>
              <p className="text-center mb-8 text-gray-700">
                Estamos localizados na Vila Fátima, com fácil acesso pela Rodovia Bernardo Sayão.
              </p>
              <GoogleMap />
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-sitio-green-dark mb-4">Informações Importantes</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-sitio-accent mr-2">•</span>
                    <span>As reservas devem ser feitas com pelo menos 15 dias de antecedência.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-accent mr-2">•</span>
                    <span>É necessário um sinal de 30% para confirmação da reserva.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-accent mr-2">•</span>
                    <span>Horário de funcionamento dos eventos: das 10h às 23h.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-accent mr-2">•</span>
                    <span>Capacidade máxima: 200 pessoas (verificar disponibilidade).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sitio-accent mr-2">•</span>
                    <span>Os valores variam conforme os serviços solicitados.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-sitio-green-dark mb-4">Dúvidas Frequentes</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Posso levar meu próprio buffet?</h3>
                    <p className="text-gray-700">Sim, você pode optar por contratar seu próprio serviço de buffet, mas oferecemos opções completas também.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Há estacionamento no local?</h3>
                    <p className="text-gray-700">Sim, oferecemos estacionamento gratuito para os convidados.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">O espaço é coberto?</h3>
                    <p className="text-gray-700">Sim, temos espaços cobertos e ao ar livre para seu evento.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sitio-green-dark">Como funciona o agendamento?</h3>
                    <p className="text-gray-700">Após o envio do formulário, entraremos em contato para confirmar detalhes e disponibilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton 
        phone="559184731385" 
        message={whatsappMessage || "Olá! Gostaria de fazer uma reserva no Sítio Nosso Lugar."} 
      />
    </div>
  );
};

export default Agendamento;
