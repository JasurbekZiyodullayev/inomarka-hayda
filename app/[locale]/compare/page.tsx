import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { cars } from "@/data/cars";
import ComparisonClient from "@/components/ComparisonClient";
import ComparePageHeader from "@/components/ComparePageHeader";

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ car1?: string; car2?: string }>;
}) {
  const { car1: slug1, car2: slug2 } = await searchParams;

  const car1 = cars.find((c) => c.slug === slug1);
  const car2 = cars.find((c) => c.slug === slug2);

  if (!car1 || !car2) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[13px] text-[#64748b] hover:text-indigo-600 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Katalogga qaytish
      </Link>

      <div className="mb-6">
        <p className="text-indigo-500 text-sm font-medium uppercase tracking-widest mb-2">Solishtirish</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a202c]">
          {car1.brand} {car1.model} <span className="text-[#94a3b8] font-normal mx-2">vs</span> {car2.brand} {car2.model}
        </h1>
        <p className="text-[13px] text-[#94a3b8] mt-2">Avtomobilni o'zgartirish uchun ustiga bosing</p>
      </div>

      <ComparePageHeader car1={car1} car2={car2} />

      <ComparisonClient car1={car1} car2={car2} />
    </div>
  );
}
