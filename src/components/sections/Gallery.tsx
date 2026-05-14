"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 1. Cleaned up paths (Make sure these files are in your 'public' folder!)
const galleryImages = [
  { id: 1, src: "/pic2.jpg", alt: "Photo Editing Work" },
  { id: 2, src: "/pic3.jpg", alt: "Video Thumbnail" },
  { id: 3, src: "/pic4.jpg", alt: "Graphic Design" },
  { id: 4, src: "/pic5.jpg", alt: "Web Development" },
  { id: 5, src: "/pic6.jpg", alt: "UI/UX Design" },
  { id: 7, src: "/pic8.jpg", alt: "Illustration" },
  { id: 8, src: "/pic9.jpg", alt: "Photography" },
];

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleCount = 5;
  
  // 2. Updated to use the actual length of your image list
  const PLACEHOLDER_COUNT = galleryImages.length;
  const maxStart = Math.max(0, PLACEHOLDER_COUNT - visibleCount);

  function prev() {
    setStartIndex((i) => (i <= 0 ? maxStart : i - 1));
  }

  function next() {
    setStartIndex((i) => (i >= maxStart ? 0 : i + 1));
  }

  return (
    <section id="gallery" className="border-b pt-2 pb-12 md:pt-3 md:pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          Gallery
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* 3. This is the single, clean Grid Div */}
          <div className="grid flex-1 grid-cols-5 gap-2">
            {galleryImages.slice(startIndex, startIndex + visibleCount).map((image, offset) => {
              const i = startIndex + offset;
              return (
                <Card
                  key={image.id}
                  className={cn(
                    "aspect-square cursor-pointer overflow-hidden transition hover:ring-2 hover:ring-primary",
                    activeIndex === i && "ring-2 ring-primary"
                  )}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <div className="relative h-full w-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                </Card>
              );
            })}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}