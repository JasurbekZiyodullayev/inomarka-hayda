"use client";

import { useCompare } from "@/context/CompareContext";
import { useRouter } from "@/i18n/navigation";
import { cars } from "@/data/cars";

const countryFlags: Record<string, string> = {
  JP: "🇯🇵", DE: "🇩🇪", US: "🇺🇸", KR: "🇰🇷", BR: "🇧🇷",
  FR: "🇫🇷", IT: "🇮🇹", GB: "🇬🇧", SE: "🇸🇪",
};

export default function CompareBar() {
  const { selected, clear, toggle } = useCompare();
  const router = useRouter();

  if (selected.length === 0) return null;

  const selectedCars = selected
    .map((slug) => cars.find((c) => c.slug === slug))
    .filter(Boolean) as (typeof cars)[number][];

  function handleCompare() {
    router.push(`/compare?car1=${selected[0]}&car2=${selected[1]}` as "/compare");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e2e8f0] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-0 sm:h-16 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">

        {/* Chips row */}
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          <span className="text-[12px] text-[#64748b] font-medium shrink-0">
            {selected.length}/2
          </span>
          {selectedCars.map((car) => (
            <div key={car.slug} className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-lg px-2.5 py-1 shrink-0">
              <span className="text-sm">{countryFlags[car.countryCode] ?? "🌍"}</span>
              <span className="text-[12px] font-semibold text-indigo-700 whitespace-nowrap max-w-[110px] sm:max-w-none truncate">
                {car.brand} {car.model}
              </span>
              <button
                onClick={() => toggle(car.slug)}
                className="text-indigo-400 hover:text-indigo-600 transition-colors ml-0.5 text-xs leading-none"
              >
                ✕
              </button>
            </div>
          ))}
          {selected.length === 1 && (
            <div className="hidden sm:flex items-center border border-dashed border-[#cbd5e0] rounded-lg px-3 py-1.5 shrink-0">
              <span className="text-[13px] text-[#94a3b8] whitespace-nowrap">+ yana 1 ta qo'shing</span>
            </div>
          )}
        </div>

        {/* Buttons row */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={clear}
            className="text-[13px] text-[#94a3b8] hover:text-[#64748b] transition-colors px-2 py-1.5"
          >
            Tozalash
          </button>
          <button
            onClick={handleCompare}
            disabled={selected.length < 2}
            className="flex-1 sm:flex-none text-center bg-indigo-600 text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            Solishtirish →
          </button>
        </div>
      </div>
    </div>
  );
}
