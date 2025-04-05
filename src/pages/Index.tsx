
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
  src: `/lovable-uploads/1851a7c1-30ec-44d7-935e-1ef9c096df56.png`,
  alt: "Cozinha exterior com panelas de barro e vista para a natureza"
}, {
  id: 6,
  src: `/lovable-uploads/ddbfc5be-12bf-4f57-a537-a2a14fa040fc.png`,
  alt: "Mulher com vestido azul em trilha natural de madeira"
}, {
  id: 7,
  src: `/lovable-uploads/1e2ec1cf-3b26-4f02-b3f6-d75b298840c2.png`,
  alt: "Área de evento com mesas decoradas e tenda branca"
}, {
  id: 8,
  src: `/lovable-uploads/4eedf5e9-d6cb-42cf-91ab-5a025f837f33.png`,
  alt: "Salão de festas com mesas douradas decoradas para evento"
}, {
  id: 9,
  src: `/lovable-uploads/4a1d4b9c-1ea8-418a-8a24-ab78a8f64d53.png`,
  alt: "Piscina com mãe e filha brincando com bola vermelha"
}, {
  id: 10,
  src: `/lovable-uploads/becaf84a-a175-46a9-a9d2-dcc53e9a8136.png`,
  alt: "Vista externa da estrutura principal do Sítio com áreas verdes"
}, {
  id: 11,
  src: `/lovable-uploads/d9cf6811-08ca-43e0-a3b1-185afbdd0a34.png`,
  alt: "Vestido de noiva branco pendurado em janela com vista para jardim"
}, {
  id: 12,
  src: `/lovable-uploads/a903567d-fbbc-477e-b192-7f5f7c51ee91.png`,
  alt: "Três pessoas sorridentes desfrutando da piscina em dia ensolarado"
}];

const videos = [{
  id: 1,
  youtubeId: "P1p7TOXDEHs",
  thumbnail: `https://img.youtube.com/vi/P1p7TOXDEHs/maxresdefault.jpg`,
  title: "Conheça o Sítio Nosso Lugar"
}, {
  id: 2,
  youtubeId: "TawdKsGX0DM",
  thumbnail: `https://img.youtube.com/vi/TawdKsGX0DM/maxresdefault.jpg`,
  title: "Eventos no Sítio"
}, {
  id: 3,
  youtubeId: "OTJQOUpMu9M",
  thumbnail: `https://img.youtube.com/vi/OTJQOUpMu9M/maxresdefault.jpg`,
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
