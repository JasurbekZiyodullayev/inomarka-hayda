"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import CompareModal from "./CompareModal";
import { Car } from "@/data/cars";

export default function CompareButton({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleSelect(car: Car) {
    router.push(`/compare?car1=${slug}&car2=${car.slug}` as "/compare");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-[#64748b] border border-[#e2e8f0] hover:border-indigo-300 hover:text-indigo-600 transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Solishtirish uchun qo'shish
      </button>

      {open && (
        <CompareModal
          excludeSlug={slug}
          onSelect={handleSelect}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
