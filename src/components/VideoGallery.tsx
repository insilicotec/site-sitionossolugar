
import { useState, useCallback } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Video {
  id: number;
  src?: string;
  youtubeId?: string;
  thumbnail: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const getYoutubeEmbedUrl = useCallback((youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  }, []);

  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem key={video.id} className="sm:basis-1/2 md:basis-1/3">
              <div 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-full"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3">
                      <svg 
                        className="w-8 h-8 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <h3 className="font-medium text-gray-800 truncate">{video.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0" />
          <CarouselNext className="relative inset-0 translate-y-0" />
        </div>
      </Carousel>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedVideo && (
            <div className="bg-black rounded-lg overflow-hidden">
              {selectedVideo.youtubeId ? (
                <iframe
                  src={getYoutubeEmbedUrl(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              ) : selectedVideo.src ? (
                <video 
                  src={selectedVideo.src} 
                  controls 
                  autoPlay 
                  className="w-full h-auto max-h-[80vh]"
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              ) : null}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoGallery;
