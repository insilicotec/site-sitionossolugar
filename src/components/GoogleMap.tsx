
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-sitio-green-dark/20 animate-scale-up">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.464!2d-48.318734!3d-1.494593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48b5d7d1bf057%3A0x7edb7dc9110c08b0!2sS%C3%ADtio%20Nosso%20Lugar!5e0!3m2!1spt-BR!2sbr!4v1696428120961!5m2!1spt-BR!2sbr" 
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
