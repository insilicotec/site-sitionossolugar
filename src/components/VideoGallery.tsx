
import { useState, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
  const [loadedThumbnails, setLoadedThumbnails] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Initialize all thumbnails as not loaded
    const initialLoadState = videos.reduce((acc, video) => {
      acc[video.id] = false;
      return acc;
    }, {} as Record<number, boolean>);
    
    setLoadedThumbnails(initialLoadState);
  }, [videos]);

  const handleThumbnailLoad = (id: number) => {
    setLoadedThumbnails(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const getYoutubeEmbedUrl = useCallback((youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  }, []);

  // Melhorando a função para obter miniaturas de qualidade mais alta do YouTube
  const getYoutubeThumbnail = useCallback((youtubeId: string) => {
    // Tentamos carregar maxresdefault (alta qualidade)
    // Se falhar, o manipulador de erros carregará hqdefault (qualidade padrão)
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }, []);

  // Fallback para miniatura de qualidade padrão se a alta qualidade falhar
  const handleThumbnailError = useCallback((id: number, youtubeId?: string) => {
    if (youtubeId) {
      // Substitui a URL da miniatura pela versão hqdefault (qualidade mais baixa, mas mais confiável)
      const thumbnailElement = document.getElementById(`thumb-${id}`) as HTMLImageElement;
      if (thumbnailElement) {
        thumbnailElement.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
      }
    }
    // Marca como carregado para remover o skeleton
    handleThumbnailLoad(id);
  }, []);

  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="py-4">
          {videos.map((video) => (
            <CarouselItem key={video.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div 
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-full mx-2"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  {!loadedThumbnails[video.id] && (
                    <Skeleton className="w-full h-48 absolute inset-0" />
                  )}
                  <img
                    id={`thumb-${video.id}`}
                    src={video.youtubeId ? getYoutubeThumbnail(video.youtubeId) : video.thumbnail}
                    alt={video.title}
                    className={`w-full h-48 object-cover ${!loadedThumbnails[video.id] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
                    loading="lazy"
                    onLoad={() => handleThumbnailLoad(video.id)}
                    onError={() => handleThumbnailError(video.id, video.youtubeId)}
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
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0" />
          <CarouselNext className="relative inset-0 translate-y-0" />
        </div>
      </Carousel>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedVideo && (
            <>
              <VisuallyHidden>
                <DialogTitle>{selectedVideo.title}</DialogTitle>
              </VisuallyHidden>
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoGallery;
