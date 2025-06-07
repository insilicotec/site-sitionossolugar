
import VideoGallery from '@/components/VideoGallery';

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
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Experiência em Movimento
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Mergulhe na atmosfera única do Sítio Nosso Lugar através dos nossos vídeos que capturam a essência e magia dos nossos espaços.
          </p>        </div>

        {/* Video Gallery */}
        <div ref={ref} className="relative">
          <VideoGallery videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
