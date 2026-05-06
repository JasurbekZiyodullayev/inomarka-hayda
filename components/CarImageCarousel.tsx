"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  alt: string;
}

export default function CarImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }

  return (
    <div className="relative h-full w-full bg-[#f0f4f8] overflow-hidden group/carousel">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="shrink-0 w-full h-full flex items-center justify-center">
            {imgError[i] ? (
              <span className="text-7xl opacity-10 select-none">🚗</span>
            ) : (
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                className="object-cover"
                onError={() => setImgError((prev) => ({ ...prev, [i]: true }))}
              />
            )}
          </div>
        ))}
      </div>

      {/* Arrows — faqat hover da ko'rinadi */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-sm hover:bg-white z-10"
          >
            <svg className="w-4 h-4 text-[#1a202c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity shadow-sm hover:bg-white z-10"
          >
            <svg className="w-4 h-4 text-[#1a202c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
              className={`rounded-full transition-all ${
                i === current
                  ? "w-4 h-1.5 bg-indigo-600"
                  : "w-1.5 h-1.5 bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
