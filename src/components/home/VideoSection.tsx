
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

        {/* Video Gallery */}
        <div ref={ref} className="relative">
          <VideoGallery videos={videos} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
