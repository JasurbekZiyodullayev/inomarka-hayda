"use client";

import { useState, useEffect } from "react";
import { cars, brands, Car } from "@/data/cars";
import CarImageCarousel from "./CarImageCarousel";

const countryFlags: Record<string, string> = {
  JP: "🇯🇵", DE: "🇩🇪", US: "🇺🇸", KR: "🇰🇷", BR: "🇧🇷",
  FR: "🇫🇷", IT: "🇮🇹", GB: "🇬🇧", SE: "🇸🇪",
};

interface Props {
  excludeSlug: string;
  onSelect: (car: Car) => void;
  onClose: () => void;
}

export default function CompareModal({ excludeSlug, onSelect, onClose }: Props) {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const filtered = cars.filter((c) => {
    if (c.slug === excludeSlug) return false;
    if (brand && c.brand !== brand) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        c.brand.toLowerCase().includes(q) ||
        c.model.toLowerCase().includes(q)
      );
    }
    return true;
  });

  function handleSelect(car: Car) {
    onSelect(car);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f0f4f8] shrink-0">
          <div>
            <h2 className="font-bold text-[#1a202c] text-base">Solishtirish uchun avtomobil tanlang</h2>
            <p className="text-[12px] text-[#94a3b8] mt-0.5">Tanlangan avtomobil bilan solishtiriladi</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#94a3b8] hover:bg-[#f0f4f8] hover:text-[#1a202c] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filters */}
        <div className="px-6 py-4 border-b border-[#f0f4f8] shrink-0 space-y-3">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              autoFocus
              type="text"
              placeholder="Brend yoki model nomi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#f8fafc] border border-[#e2e8f0] rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 placeholder:text-[#94a3b8] transition-all"
            />
          </div>

          {/* Brand pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setBrand("")}
              className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-all ${
                brand === ""
                  ? "bg-indigo-600 text-white"
                  : "bg-[#f0f4f8] text-[#64748b] hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              Barchasi
            </button>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b === brand ? "" : b)}
                className={`px-3 py-1 rounded-lg text-[12px] font-semibold transition-all ${
                  brand === b
                    ? "bg-indigo-600 text-white"
                    : "bg-[#f0f4f8] text-[#64748b] hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Car list */}
        <div className="overflow-y-auto flex-1 p-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-[#94a3b8]">
              <p className="text-3xl mb-3">🔍</p>
              <p className="text-sm">Hech narsa topilmadi</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filtered.map((car) => (
                <button
                  key={car.slug}
                  onClick={() => handleSelect(car)}
                  className="text-left bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-sm transition-all group"
                >
                  <div className="relative h-16 rounded-lg overflow-hidden mb-3">
                    <CarImageCarousel images={car.images} alt={`${car.brand} ${car.model}`} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] mb-0.5">{car.brand}</p>
                  <p className="text-sm font-bold text-[#1a202c] group-hover:text-indigo-700 transition-colors leading-tight">{car.model}</p>
                  <p className="text-[11px] text-[#94a3b8] mt-1">
                    {countryFlags[car.countryCode] ?? "🌍"} {car.worldDebut}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
