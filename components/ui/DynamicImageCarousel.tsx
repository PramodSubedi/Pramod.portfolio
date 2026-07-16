"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface CarouselImage {
  src: string;
  caption: string;
}

interface DynamicImageCarouselProps {
  folderPath: string; // e.g., "projects/landslide-mapping"
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

export default function DynamicImageCarousel({
  folderPath,
  autoRotate = true,
  autoRotateInterval = 5000,
}: DynamicImageCarouselProps) {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/images?folder=${folderPath}`);
        if (!response.ok) throw new Error("Failed to load images");
        const data = await response.json();
        setImages(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading images");
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();

    // Optional: Poll for new images every 30 seconds
    const interval = setInterval(fetchImages, 30000);
    return () => clearInterval(interval);
  }, [folderPath]);

  // Auto-rotate logic
  useEffect(() => {
    if (!isAutoRotating || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isAutoRotating, images.length, autoRotateInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoRotating(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoRotating(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
        <p className="text-sm text-gray-400">Loading images...</p>
      </div>
    );
  }

  // Error state
  if (error || images.length === 0) {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl border border-white/10 bg-black/50">
        <p className="text-sm text-gray-400">
          {error || "No images found in folder"}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Main Carousel */}
      <div className="space-y-4">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].caption}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-emerald-500/80"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-emerald-500/80"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute right-3 top-3 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-emerald-500/80"
            aria-label="View fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-gray-300">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-sm text-gray-400">{images[currentIndex].caption}</p>
        </div>

        {/* Dot Indicators */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? "h-2 w-6 bg-emerald-400"
                    : "h-2 w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-rotate Toggle */}
        {autoRotate && images.length > 1 && (
          <div className="flex justify-center">
            <button
              onClick={toggleAutoRotate}
              className={`text-xs transition-all px-3 py-1 rounded-full ${
                isAutoRotating
                  ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                  : "bg-gray-700/50 text-gray-400 hover:bg-gray-600/50"
              }`}
            >
              {isAutoRotating ? "Pause" : "Resume"}
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <div className="relative h-full w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -right-12 top-0 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20"
              aria-label="Close fullscreen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].caption}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-emerald-500/80"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all hover:bg-emerald-500/80"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Fullscreen Dots */}
                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all ${
                        index === currentIndex
                          ? "h-2 w-6 bg-emerald-400"
                          : "h-2 w-2 bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Fullscreen Counter */}
                <div className="absolute bottom-6 right-6 rounded-full bg-black/70 px-4 py-2 text-sm text-gray-300">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}

            {/* Fullscreen Caption */}
            <div className="absolute bottom-6 left-6 max-w-md">
              <p className="text-sm text-gray-300">{images[currentIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
