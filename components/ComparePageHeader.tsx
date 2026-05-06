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

function CarSlot({
  car,
  colorIndex,
  onClick,
}: {
  car: Car;
  colorIndex: number;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      className="group cursor-pointer text-left bg-white rounded-2xl border border-[#e2e8f0] p-3 sm:p-5 hover:border-indigo-300 hover:shadow-md transition-all relative overflow-hidden w-full"
    >
      <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/[0.03] transition-colors pointer-events-none" />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-[11px] font-semibold text-indigo-500 bg-indigo-50 border border-indigo-100 px-1.5 sm:px-2 py-0.5 rounded-full z-10 pointer-events-none">
        O'zgartirish
      </span>

      <div className="relative h-36 sm:h-24 rounded-xl overflow-hidden mb-2 sm:mb-4">
        <CarImageCarousel images={car.images} alt={`${car.brand} ${car.model}`} />
      </div>
      <div className="w-2.5 h-2.5 rounded-full mb-1.5" style={{ backgroundColor: COLORS[colorIndex] }} />
      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#94a3b8] mb-0.5">{car.brand}</p>
      <p className="text-sm sm:text-base font-bold text-[#1a202c] group-hover:text-indigo-700 transition-colors leading-tight">{car.model}</p>
      <p className="text-[11px] sm:text-[12px] text-[#94a3b8] mt-1">
        {countryFlags[car.countryCode] ?? "🌍"} {car.country} · {car.worldDebut}
      </p>
    </div>
  );
}

function ArrowSeparator() {
  return (
    <div className="flex items-center justify-center py-1 sm:py-0 sm:px-1">
      <div className="w-9 h-9 rounded-full bg-[#f0f4f8] border border-[#e2e8f0] flex items-center justify-center">
        {/* swap icon: ↔ on desktop, ↕ on mobile (rotate 90°) */}
        <svg
          className="w-4 h-4 text-[#64748b] sm:rotate-90 transition-transform"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4 4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8v12m0 0 4-4m-4 4-4-4" />
        </svg>
      </div>
    </div>
  );
}

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
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4 mb-8">
        <CarSlot car={car1} colorIndex={0} onClick={() => setModal("car1")} />
        <ArrowSeparator />
        <CarSlot car={car2} colorIndex={1} onClick={() => setModal("car2")} />
      </div>

      {modal && (
        <CompareModal
          excludeSlug={modal === "car1" ? car2.slug : car1.slug}
          onSelect={handleSelect}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
