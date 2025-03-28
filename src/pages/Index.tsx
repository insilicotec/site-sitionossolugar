
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
import VideoSection from '@/components/home/VideoSection';
import MapSection from '@/components/home/MapSection';
import CallToActionSection from '@/components/home/CallToActionSection';

// Cache-busting timestamp for media assets
const timestamp = new Date().getTime();

const photos = [{
  id: 1,
  src: `/lovable-uploads/57f7a25d-1204-4c33-9a72-f8f9cd835e02.png?v=${timestamp}`,
  alt: "Evento organizado com mesas e cadeiras douradas em ambiente natural"
}, {
  id: 2,
  src: `/lovable-uploads/a6c3f3e5-afad-4cdd-ba30-4af367d78ade.png?v=${timestamp}`,
  alt: "Área de lazer noturna com mesas e iluminação especial"
}, {
  id: 3,
  src: `/lovable-uploads/1ceb5176-485a-4c1d-b418-3449ff8518ac.png?v=${timestamp}`,
  alt: "Família em momento especial com roupões brancos"
}, {
  id: 4,
  src: `/lovable-uploads/3b453679-06d7-4e57-89b2-e348b049a975.png?v=${timestamp}`,
  alt: "Quarto com camas em tons rosados"
}, {
  id: 5,
  src: `/lovable-uploads/d51eb3b7-e8ca-4c8c-9561-d4447900704c.png?v=${timestamp}`,
  alt: "Corredor para cerimônia com cadeiras e decoração floral"
}, {
  id: 6,
  src: `/lovable-uploads/2048c0e9-be7a-4fa6-abea-eb2c0dcf4e1b.png?v=${timestamp}`,
  alt: "Área de descanso com pergolados e cortinas brancas"
}, {
  id: 7,
  src: `/lovable-uploads/5bddaa83-3589-4afd-ac73-eb5317e1bc34.png?v=${timestamp}`,
  alt: "Área verde com caminho de madeira e palmeiras"
}, {
  id: 8,
  src: `/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png?v=${timestamp}`,
  alt: "Salão de festas com mesas douradas decoradas para evento"
}, {
  id: 9,
  src: `/lovable-uploads/4a1d4b9c-1ea8-418a-8a24-ab78a8f64d53.png?v=${timestamp}`,
  alt: "Piscina com mãe e filha brincando com bola vermelha"
}];

const videos = [{
  id: 1,
  youtubeId: "P1p7TOXDEHs",
  thumbnail: `https://img.youtube.com/vi/P1p7TOXDEHs/hqdefault.jpg?v=${timestamp}`,
  title: "Conheça o Sítio Nosso Lugar"
}, {
  id: 2,
  youtubeId: "TawdKsGX0DM",
  thumbnail: `https://img.youtube.com/vi/TawdKsGX0DM/hqdefault.jpg?v=${timestamp}`,
  title: "Eventos no Sítio"
}, {
  id: 3,
  youtubeId: "OTJQOUpMu9M",
  thumbnail: `https://img.youtube.com/vi/OTJQOUpMu9M/hqdefault.jpg?v=${timestamp}`,
  title: "Área de Lazer"
}];

const Index = () => {
  const [activeEntries, setActiveEntries] = useState<Element[]>([]);
  const [ref, entries] = useIntersectionObserver({
    threshold: 0.1
  });
  
  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveEntries(prev => [...prev, entry.target]);
        entry.target.classList.add('animate-slide-up');
      }
    });
  }, [entries]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <StorySection useIntersectionObserver={useIntersectionObserver} />
        <ExperienceSection useIntersectionObserver={useIntersectionObserver} />
        <GallerySection photos={photos} useIntersectionObserver={useIntersectionObserver} />
        <VideoSection videos={videos} useIntersectionObserver={useIntersectionObserver} />
        <MapSection useIntersectionObserver={useIntersectionObserver} />
        <CallToActionSection useIntersectionObserver={useIntersectionObserver} />
      </main>
      
      <Footer />
      <WhatsappButton phone="559184731385" message="Olá! Gostaria de mais informações sobre o Sítio Nosso Lugar." />
    </div>
  );
};

export default Index;
