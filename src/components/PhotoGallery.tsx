
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedPhoto(photo)}
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedPhoto && (
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
