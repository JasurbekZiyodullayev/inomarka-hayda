import Link from "next/link";
import { Car } from "@/data/cars";

const countryFlags: Record<string, string> = {
  JP: "🇯🇵",
  DE: "🇩🇪",
  US: "🇺🇸",
  KR: "🇰🇷",
  BR: "🇧🇷",
  FR: "🇫🇷",
  IT: "🇮🇹",
  GB: "🇬🇧",
  SE: "🇸🇪",
};

interface CarCardProps {
  car: Car;
  locale: string;
  readMoreLabel: string;
  debutLabel: string;
}

export default function CarCard({ car, locale, readMoreLabel, debutLabel }: CarCardProps) {
  return (
    <Link href={`/${locale}/cars/${car.slug}`} className="group block h-full">
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-200">
        <div className="relative h-44 bg-[#f0f4f8] flex items-center justify-center overflow-hidden">
          <span className="text-7xl opacity-10 select-none">🚗</span>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4f8]/60 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 text-[11px] font-semibold text-indigo-700 bg-white border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {car.brand}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-[#1a202c] font-bold text-[17px] leading-snug mb-4 group-hover:text-indigo-700 transition-colors">
            {car.brand} {car.model}
          </h3>

          <div className="mt-auto space-y-2">
            <div className="flex items-center gap-2 text-[13px] text-[#64748b]">
              <span>{countryFlags[car.countryCode] ?? "🌍"}</span>
              <span>{car.country}</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#64748b]">
              <span className="text-indigo-600 font-semibold">{car.worldDebut}</span>
              <span>— {debutLabel}</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#f0f4f8] flex items-center justify-between">
            <span className="text-[13px] text-indigo-600 font-medium group-hover:text-indigo-500 transition-colors">
              {readMoreLabel}
            </span>
            <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform text-sm">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
