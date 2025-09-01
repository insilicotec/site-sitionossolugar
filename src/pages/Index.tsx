import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

// Import refactored components
import CallToActionSection from '@/components/home/CallToActionSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import GallerySection from '@/components/home/GallerySection';
import HeroSection from '@/components/home/HeroSection';
import MapSection from '@/components/home/MapSection';
import StorySection from '@/components/home/StorySection';

// Import constants
import { GALLERY_IMAGES } from '@/assets/constants/images';

const videos = [];

const Index = () => {
  const [activeEntries, setActiveEntries] = useState<Element[]>([]);
  const [ref, entries] = useIntersectionObserver({
    threshold: 0.1,
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

      <main className="flex-grow">
        {' '}
        <HeroSection />
        <StorySection useIntersectionObserver={useIntersectionObserver} />
        <ExperienceSection useIntersectionObserver={useIntersectionObserver} />
        <GallerySection photos={GALLERY_IMAGES} useIntersectionObserver={useIntersectionObserver} />
        <MapSection useIntersectionObserver={useIntersectionObserver} />
        <CallToActionSection useIntersectionObserver={useIntersectionObserver} />
      </main>

  <Footer />
    </div>
  );
};

export default Index;
