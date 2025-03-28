
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Initialize all images as not loaded
    const initialLoadState = photos.reduce((acc, photo) => {
      acc[photo.id] = false;
      return acc;
    }, {} as Record<number, boolean>);
    
    setLoadedImages(initialLoadState);
  }, [photos]);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const openPhotoViewer = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(photos.findIndex(p => p.id === photo.id));
  };

  const closePhotoViewer = () => {
    setSelectedPhoto(null);
  };

  const showPreviousPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const showNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      showPreviousPhoto(e as unknown as React.MouseEvent);
    } else if (e.key === 'ArrowRight') {
      showNextPhoto(e as unknown as React.MouseEvent);
    } else if (e.key === 'Escape') {
      closePhotoViewer();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white aspect-square"
          >
            {!loadedImages[photo.id] && (
              <Skeleton className="w-full h-full absolute" />
            )}
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${!loadedImages[photo.id] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
              onClick={() => openPhotoViewer(photo)}
              loading="lazy"
              onLoad={() => handleImageLoad(photo.id)}
              onError={() => handleImageLoad(photo.id)}
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={closePhotoViewer}>
        <DialogContent 
          className="max-w-6xl p-0 bg-black/95 border-none relative"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {selectedPhoto && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={closePhotoViewer}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="relative flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={showPreviousPhoto}
                  className="absolute left-2 z-40 rounded-full bg-black/40 hover:bg-black/60 text-white"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={showNextPhoto}
                  className="absolute right-2 z-40 rounded-full bg-black/40 hover:bg-black/60 text-white"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="px-4 py-2 bg-black/60 rounded-full text-white text-sm">
                  {currentIndex + 1} / {photos.length}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
