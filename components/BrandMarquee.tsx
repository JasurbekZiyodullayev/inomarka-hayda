"use client";

import { useState } from "react";
import { brands } from "@/data/cars";

const brandColors: Record<string, string> = {
  Toyota:          "#EB0A1E",
  BMW:             "#0066B1",
  "Mercedes-Benz": "#222222",
  Honda:           "#CC0000",
  Ford:            "#003087",
  Chevrolet:       "#D4AF37",
  Volkswagen:      "#001E50",
};

function BrandItem({ brand }: { brand: string }) {
  const color = brandColors[brand] ?? "#6366f1";
  return (
    <div className="flex items-center gap-3 bg-white border border-[#e2e8f0] rounded-xl px-5 py-3 shrink-0">
      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <span className="text-[14px] font-semibold text-[#1a202c] whitespace-nowrap tracking-wide">
        {brand}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden relative mb-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#f0f4f8] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#f0f4f8] to-transparent pointer-events-none" />

      {/* Track — ikki nusxa, -50% animatsiya bilan uzluksiz loop */}
      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: "marquee 18s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {brands.map((brand) => <BrandItem key={`a-${brand}`} brand={brand} />)}
        {brands.map((brand) => <BrandItem key={`b-${brand}`} brand={brand} />)}
      </div>
    </div>
  );
}
