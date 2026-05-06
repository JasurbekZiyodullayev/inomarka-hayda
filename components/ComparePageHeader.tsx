"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Car } from "@/data/cars";
import CompareModal from "./CompareModal";
import CarImageCarousel from "./CarImageCarousel";

const countryFlags: Record<string, string> = {
  JP: "🇯🇵", DE: "🇩🇪", US: "🇺🇸", KR: "🇰🇷", BR: "🇧🇷",
  FR: "🇫🇷", IT: "🇮🇹", GB: "🇬🇧", SE: "🇸🇪",
};

const COLORS = ["#6366f1", "#f59e0b"];

export default function ComparePageHeader({ car1, car2 }: { car1: Car; car2: Car }) {
  const router = useRouter();
  const [modal, setModal] = useState<"car1" | "car2" | null>(null);

  function handleSelect(car: Car) {
    if (modal === "car1") {
      router.push(`/compare?car1=${car.slug}&car2=${car2.slug}` as "/compare");
    } else {
      router.push(`/compare?car1=${car1.slug}&car2=${car.slug}` as "/compare");
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[car1, car2].map((car, i) => (
          <button
            key={car.slug}
            onClick={() => setModal(i === 0 ? "car1" : "car2")}
            className="group text-left bg-white rounded-2xl border border-[#e2e8f0] p-5 hover:border-indigo-300 hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* change hint */}
            <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/[0.03] transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 right-3 text-[11px] font-semibold text-indigo-500 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full">
                O'zgartirish
              </span>
            </div>

            <div className="relative h-24 rounded-xl overflow-hidden mb-4">
              <CarImageCarousel images={car.images} alt={`${car.brand} ${car.model}`} />
            </div>
            <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: COLORS[i] }} />
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] mb-0.5">{car.brand}</p>
            <p className="text-base font-bold text-[#1a202c] group-hover:text-indigo-700 transition-colors">{car.model}</p>
            <p className="text-[12px] text-[#94a3b8] mt-1">
              {countryFlags[car.countryCode] ?? "🌍"} {car.country} · {car.worldDebut}
            </p>
          </button>
        ))}
      </div>

      {modal && (
        <CompareModal
          excludeSlug={modal === "car1" ? car1.slug : car2.slug}
          onSelect={handleSelect}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
