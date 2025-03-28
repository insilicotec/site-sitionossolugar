
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Video {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
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
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedVideo && (
            <div className="bg-black rounded-lg overflow-hidden">
              <video 
                src={selectedVideo.src} 
                controls 
                autoPlay 
                className="w-full h-auto max-h-[80vh]"
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoGallery;
