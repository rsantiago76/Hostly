import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F1F5F9]">
        <img 
          src={images[currentIndex]} 
          alt={`Property view ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-[#0F172A]" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
              <span className="text-sm text-white font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video rounded-lg overflow-hidden transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-[#3B82F6] ring-offset-2' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
