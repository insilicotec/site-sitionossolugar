
import React from 'react';
import VideoGallery from '@/components/VideoGallery';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Video {
  id: number;
  src?: string;
  youtubeId?: string;
  thumbnail: string;
  title: string;
}

const VideoSection = ({ videos, useIntersectionObserver }: {
  videos: Video[];
  useIntersectionObserver: (options?: any) => [(element: HTMLElement | null) => void, IntersectionObserverEntry[]];
}) => {
  const [ref, entries] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-20 bg-white relative">
      <div className="water-pattern absolute inset-0 opacity-30"></div>
      
      <div className="container px-4">
        <div className="text-center mb-12" ref={ref}>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-6 decorated">
            Experiência em Movimento
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Assista e sinta-se parte da natureza e tranquilidade do Sítio Nosso Lugar através dos nossos vídeos.
          </p>
        </div>
        
        <div ref={ref} className="overflow-hidden">
          <VideoGallery videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
