
import { motion } from 'framer-motion';
import { Clock, Heart, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="text-white pt-16 pb-8 bg-black bg-[nature-earth-600]">
      <div className="container mx-auto px-4">        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <h2 className="font-display text-2xl font-bold mb-4 text-zinc-50">Sítio Nosso Lugar</h2>
              <p className="text-gray-400 mb-6">
                Seu refúgio natural para momentos especiais. Um espaço cercado pela natureza e projetado para suas melhores celebrações.
              </p>
              <div className="flex gap-2">
                <SocialLink href="https://www.instagram.com/sitionossolugar/" icon={<Instagram size={20} />} />
                <SocialLink href="tel:+559184731385" icon={<Phone size={20} />} />
                <SocialLink href="mailto:contato@sitionossolugar.com" icon={<Mail size={20} />} />
              </div>            </motion.div>
          </div>
            {/* Contact */}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-medium mb-4 text-slate-50">Contato</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-amber-800/20 p-2 rounded-full">
                  <Phone size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">(91) 8473-1385</p>
                  <p className="text-gray-500 text-sm">Segunda a Sexta, 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-amber-800/20 p-2 rounded-full">
                  <Mail size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">contato@sitionossolugar.com.br</p>
                  <p className="text-gray-500 text-sm">Responderemos em até 24h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-amber-800/20 p-2 rounded-full">
                  <MapPin size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Rodovia BR 316</p>
                  <p className="text-gray-500 text-sm">Vila Fátima - Tracuateua Pará</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 bg-amber-800/20 p-2 rounded-full">
                  <Clock size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Horário de Atendimento</p>
                  <p className="text-gray-500 text-sm">Seg-Sex 9h às 18h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Developer Credit Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Developer Credit */}
            <div className="flex items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm mb-1">Site desenvolvido por</p>                <motion.a 
                  href="https://www.instagram.com/insilicotec/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Insilico Tecnologia
                </motion.a>
              </div>
            </div>
            
            {/* WhatsApp Developer Contact */}
            <motion.a
              href="https://wa.me/5591988939655?text=🌿%20Olá!%20Vim%20através%20do%20site%20do%20Sítio%20Nosso%20Lugar%20e%20gostaria%20de%20conversar%20sobre%20desenvolvimento%20web.%20💻✨"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Soft neon glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nature-400/50 via-amber-400/50 to-nature-500/50 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-nature-400/30 via-amber-400/30 to-nature-500/30 rounded-lg animate-pulse"></div>
              
              {/* Button content */}
              <div className="relative bg-gradient-to-r from-nature-600 via-nature-700 to-amber-700 hover:from-nature-500 hover:via-nature-600 hover:to-amber-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg">
                <MessageCircle size={18} className="md:w-5 md:h-5 animate-pulse" />
                <span className="font-medium text-sm md:text-base">Quero fazer um site</span>
              </div>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Copyright & Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <span>&copy; {currentYear} Sítio Nosso Lugar</span>
            <span className="text-gray-700">•</span>
            <span>Todos os direitos reservados</span>
          </div>
          
          <div className="flex items-center">
            Feito com <Heart size={14} className="text-amber-400 mx-1" /> para momentos especiais
          </div>
        </div>
      </div>
    </footer>;
};

const FooterLink = ({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) => <li>
    <Link to={to} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
      <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-amber-400 transition-colors"></span>
      {children}
    </Link>
  </li>;

const SocialLink = ({
  href,
  icon
}: {
  href: string;
  icon: React.ReactNode;
}) => <motion.a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-700 hover:text-white transition-colors" whileHover={{
  y: -3
}}>
    {icon}
  </motion.a>;

export default Footer;
