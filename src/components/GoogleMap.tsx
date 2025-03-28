
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-sitio-green-dark/20">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4648182621125!2d-48.454347826394986!3d-1.4945939361955172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46bf82606e0e7%3A0x89d158410e41f533!2sVila%20F%C3%A1tima%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1692370215834!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Sítio Nosso Lugar"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
