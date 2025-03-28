
import { Instagram, Phone, MapPin, Mail, Clock, Heart, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-4 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-4">Sítio Nosso Lugar</h2>
              <p className="text-gray-400 mb-6">
                Seu refúgio natural para momentos especiais. Um espaço cercado pela natureza e projetado para suas melhores celebrações.
              </p>
              <div className="flex gap-2">
                <SocialLink href="https://www.instagram.com/sitionossolugar/" icon={<Instagram size={20} />} />
                <SocialLink href="tel:+559184731385" icon={<Phone size={20} />} />
                <SocialLink href="mailto:contato@sitionossolugar.com" icon={<Mail size={20} />} />
              </div>
            </motion.div>
          </div>
          
          {/* Links */}
          <motion.div 
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Navegação</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Página Inicial</FooterLink>
              <FooterLink to="/agendamento">Agendamento</FooterLink>
              <FooterLink to="/como-chegar">Como Chegar</FooterLink>
              <FooterLink to="/parcerias">Parcerias</FooterLink>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div 
            className="md:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-4">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-nature-500/20 p-2 rounded-full">
                  <Phone size={16} className="text-nature-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">(91) 8473-1385</p>
                  <p className="text-gray-500 text-sm">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-nature-500/20 p-2 rounded-full">
                  <Mail size={16} className="text-nature-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">contato@sitionossolugar.com.br</p>
                  <p className="text-gray-500 text-sm">Responderemos em até 24h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-nature-500/20 p-2 rounded-full">
                  <MapPin size={16} className="text-nature-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Rod. Bernardo Sayão, Km 5</p>
                  <p className="text-gray-500 text-sm">Vila Fátima, Belém - PA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-nature-500/20 p-2 rounded-full">
                  <Clock size={16} className="text-nature-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Horário de Atendimento</p>
                  <p className="text-gray-500 text-sm">Seg-Sex 9h às 18h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Newsletter - Optional */}
        <motion.div 
          className="mt-12 mb-8 bg-gray-800/70 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-medium mb-2">Fique por dentro das novidades</h3>
              <p className="text-gray-400">Receba informações sobre eventos e promoções especiais</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-1 py-3 px-4 rounded-l-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-nature-400"
                />
                <button className="bg-nature-500 hover:bg-nature-600 text-white px-4 rounded-r-lg transition-colors flex items-center">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Copyright & Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Sítio Nosso Lugar</span>
            <span className="text-gray-700">•</span>
            <span>Todos os direitos reservados</span>
          </div>
          
          <div className="flex items-center">
            Feito com <Heart size={14} className="text-nature-400 mx-1" /> para momentos especiais
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-nature-400 transition-colors flex items-center gap-2 group"
    >
      <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-nature-400 transition-colors"></span>
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-nature-500 hover:text-white transition-colors"
    whileHover={{ y: -3 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
