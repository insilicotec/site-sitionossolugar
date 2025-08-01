
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface CarouselGalleryProps {
  photos: Photo[];
}

const CarouselGallery = ({ photos }: CarouselGalleryProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo) => (
            <CarouselItem key={photo.id} className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-white aspect-square h-full">
                  {!loadedImages[photo.id] && (
                    <Skeleton className="w-full h-full absolute" />
                  )}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${!loadedImages[photo.id] ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
                    onClick={() => openPhotoViewer(photo)}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(photo.id)}
                    onError={() => handleImageLoad(photo.id)}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious className="bg-white/80 hover:bg-white border border-amber-200 h-8 w-8 md:h-10 md:w-10" />
        </div>
        <div className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext className="bg-white/80 hover:bg-white border border-amber-200 h-8 w-8 md:h-10 md:w-10" />
        </div>
      </Carousel>      <Dialog open={!!selectedPhoto} onOpenChange={closePhotoViewer}>
        <DialogContent 
          className="max-w-6xl p-0 bg-black/95 border-none relative w-[95vw] max-h-[95vh]"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {selectedPhoto && (
            <>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 z-50 text-white hover:bg-white/20 rounded-full h-8 w-8 md:h-10 md:w-10"
                onClick={closePhotoViewer}
              >
                <X className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
              
              <div className="relative flex items-center justify-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={showPreviousPhoto}
                  className="absolute left-1 md:left-2 z-40 rounded-full bg-black/40 hover:bg-black/60 text-white h-8 w-8 md:h-12 md:w-12"
                >
                  <ChevronLeft className="h-4 w-4 md:h-8 md:w-8" />
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
                  className="absolute right-1 md:right-2 z-40 rounded-full bg-black/40 hover:bg-black/60 text-white h-8 w-8 md:h-12 md:w-12"
                >
                  <ChevronRight className="h-4 w-4 md:h-8 md:w-8" />
                </Button>
              </div>
              
              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center">
                <div className="px-3 md:px-4 py-1 md:py-2 bg-black/60 rounded-full text-white text-xs md:text-sm">
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

export default CarouselGallery;
