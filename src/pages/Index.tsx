import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// Import refactored components
import HeroSection from '@/components/home/HeroSection';
import StorySection from '@/components/home/StorySection';
import ExperienceSection from '@/components/home/ExperienceSection';
import GallerySection from '@/components/home/GallerySection';
import MapSection from '@/components/home/MapSection';
import CallToActionSection from '@/components/home/CallToActionSection';

// Cache-busting timestamp for media assets
const timestamp = new Date().getTime();

const photos = [{
  id: 1,
  src: `/lovable-uploads/57f7a25d-1204-4c33-9a72-f8f9cd835e02.png`,
  alt: "Evento organizado com mesas e cadeiras douradas em ambiente natural"
}, {
  id: 2,
  src: `/lovable-uploads/a6c3f3e5-afad-4cdd-ba30-4af367d78ade.png`,
  alt: "Área de lazer noturna com mesas e iluminação especial"
}, {
  id: 3,
  src: `/lovable-uploads/1ceb5176-485a-4c1d-b418-3449ff8518ac.png`,
  alt: "Família em momento especial com roupões brancos"
}, {
  id: 4,
  src: `/lovable-uploads/3b453679-06d7-4e57-89b2-e348b049a975.png`,
  alt: "Quarto com camas em tons rosados"
}, {
  id: 5,
  src: `/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png`,
  alt: "Salão de festas com mesas douradas decoradas para evento"
}, {
  id: 6,
  src: `/lovable-uploads/4a1d4b9c-1ea8-418a-8a24-ab78a8f64d53.png`,
  alt: "Piscina com mãe e filha brincando com bola vermelha"
}, {
  id: 7,
  src: "/src/img/mulher-vestido-azul-trilha-ecologica.jpg",
  alt: "Mulher com vestido azul em trilha natural de madeira"
}, {
  id: 8,
  src: "/src/img/mesas-ao-ar-livre.jpg",
  alt: "Área de evento com decoração de casamento ao ar livre"
}, {
  id: 9,
  src: "/src/img/piscina-vista.jpg",
  alt: "Vista externa da estrutura principal do Sítio com áreas verdes"
}, {
  id: 10,
  src: "/src/img/panelas-fogao-barro.jpg",
  alt: "Cozinha exterior com panelas de barro e vista para a natureza"
}];

const videos = [];

const Index = () => {
  const [activeEntries, setActiveEntries] = useState<Element[]>([]);
  const [ref, entries] = useIntersectionObserver({
    threshold: 0.1
  });
    useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !activeEntries.includes(entry.target)) {
        setActiveEntries(prev => {
          if (!prev.includes(entry.target)) {
            return [...prev, entry.target];
          }
          return prev;
        });
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, [entries]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">        <HeroSection />
        <StorySection useIntersectionObserver={useIntersectionObserver} />
        <ExperienceSection useIntersectionObserver={useIntersectionObserver} />
        <GallerySection photos={photos} useIntersectionObserver={useIntersectionObserver} />
        <MapSection useIntersectionObserver={useIntersectionObserver} />
        <CallToActionSection useIntersectionObserver={useIntersectionObserver} />
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar." />
    </div>
  );
};

export default Index;
