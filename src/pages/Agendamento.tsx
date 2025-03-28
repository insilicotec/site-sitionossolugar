import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { ReservationData } from '@/components/reservation/types';
import WhatsappButton from '@/components/WhatsappButton';
import GoogleMap from '@/components/GoogleMap';
import { toast } from 'sonner';
import { Instagram, Phone, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Agendamento = () => {
  const [whatsappMessage, setWhatsappMessage] = useState('Olá! Gostaria de fazer uma reserva no Sítio Nosso Lugar.');

  const handleSubmit = (data: ReservationData) => {
    try {
      console.log("Reservation data received:", data);
    
      // Format the date
      const formattedDate = data.dataEvento 
        ? format(data.dataEvento, "dd/MM/yyyy", { locale: ptBR }) 
        : "Data não selecionada";
    
      // Generate services text
      const servicesText = [
        { name: "Apenas o local", value: data.apenasLocal, emoji: "🏠" },
        { name: "Inclui comida", value: data.incluiComida, emoji: "🍽️" },
        { name: "Buffet completo", value: data.buffet, emoji: "🍲" },
        { name: "DJ", value: data.dj, emoji: "🎵" },
        { name: "Decoração", value: data.decoracao, emoji: "🎊" }
      ]
        .map(service => {
          const status = service.value ? "✅" : "❌";
          return `${service.emoji} ${status} ${service.name}`;
        })
        .join("\n");
    
    // Create WhatsApp message
    const message = `✨ *NOVA RESERVA - SÍTIO NOSSO LUGAR* ✨
    
📋 *DADOS PESSOAIS*
👤 Nome: ${data.nome}
🏙️ Cidade: ${data.cidade}

📅 *DETALHES DO EVENTO*
📆 Data: ${formattedDate}
🎭 Tipo: ${getEventTypeText(data.tipoEvento)}

🛠️ *SERVIÇOS SOLICITADOS*
${servicesText}

${data.observacoes ? `💬 *OBSERVAÇÕES*\n${data.observacoes}` : ""}

--
🙏 Agradecemos seu interesse em realizar seu evento no Sítio Nosso Lugar!`;

    setWhatsappMessage(message);
    
    toast.success("Formulário enviado com sucesso!");
    
    // Redirect to WhatsApp
    setTimeout(() => {
      const whatsappUrl = `https://wa.me/559184731385?text=${encodeURIComponent(message)}`;
      console.log("Opening WhatsApp URL");
      window.open(whatsappUrl, '_blank');
    }, 1000);
  } catch (error) {
    console.error("Error processing form:", error);
    toast.error("Erro ao processar o formulário");
  }
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
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-sitio-green-dark text-white py-12">
          <div className="container px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Agende Seu Evento</h1>
            <p className="text-lg max-w-3xl mx-auto text-black">
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
        
        {/* Developer Credits Section */}
        <section className="py-12 bg-gradient-to-r from-sitio-green-dark/10 to-sitio-blue-light/20">
          <div className="container px-4">
            <motion.div 
              className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-block mb-3"
                  >
                    <Sparkles className="h-10 w-10 text-sitio-green-dark mb-2 mx-auto" />
                  </motion.div>
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-sitio-green-dark mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Desenvolvido por Insilico tecnologia
                  </motion.h2>
                  <motion.div 
                    className="h-1 w-20 bg-sitio-green-dark mx-auto mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Precisa de um site profissional para o seu negócio? Entre em contato!
                  </motion.p>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* WhatsApp Contact */}
                  <motion.a
                    href="https://wa.me/5591988939655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-500 text-white p-4 rounded-lg flex items-center gap-3 hover:bg-emerald-600 transition-all transform hover:scale-[1.02]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-white/80">(91) 98893-9655</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xl">→</span>
                    </div>
                  </motion.a>
                  
                  {/* Instagram Contact */}
                  <motion.a
                    href="https://www.instagram.com/insilicotec/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg flex items-center gap-3 hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="bg-white/20 p-3 rounded-full">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-sm text-white/80">@insilicotec</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xl">→</span>
                    </div>
                  </motion.a>
                </motion.div>
                
                <motion.div 
                  className="mt-6 text-center text-gray-500 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-3 w-3 text-sitio-green-dark" />
                    <Star className="h-4 w-4 text-sitio-green-dark" />
                    <Star className="h-5 w-5 text-sitio-green-dark" />
                    <Star className="h-4 w-4 text-sitio-green-dark" />
                    <Star className="h-3 w-3 text-sitio-green-dark" />
                  </div>
                  <p className="mt-2">Desenvolvimento de sites profissionais, responsivos e otimizados</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton 
        phone="559184731385" 
        message={whatsappMessage} 
      />
    </div>
  );
};

export default Agendamento;
