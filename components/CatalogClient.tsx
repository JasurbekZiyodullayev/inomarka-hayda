"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Car, brands, countries, yearRanges } from "@/data/cars";
import { Select, Button } from "@/components/ui";
import CarCard from "./CarCard";

interface FilterValues {
  brand: string;
  country: string;
  yearRange: string;
}

interface Props {
  cars: Car[];
  locale: string;
  t: {
    filterBrand: string;
    filterCountry: string;
    filterYear: string;
    allBrands: string;
    allCountries: string;
    allYears: string;
    readMore: string;
    debutYear: string;
    noResults: string;
  };
}

export default function CatalogClient({ cars, locale, t }: Props) {
  const { register, watch, reset, formState } = useForm<FilterValues>({
    defaultValues: { brand: "", country: "", yearRange: "" },
  });

  const values = watch();
  const hasFilter = values.brand || values.country || values.yearRange;

  const filtered = cars.filter((car) => {
    if (values.brand && car.brand !== values.brand) return false;
    if (values.country && car.country !== values.country) return false;
    if (values.yearRange) {
      const range = yearRanges.find((r) => r.label === values.yearRange);
      if (range && (car.worldDebut < range.min || car.worldDebut > range.max)) return false;
    }
    return true;
  });

  return (
    <div>
      <form className="flex flex-wrap items-end gap-3 mb-8 bg-white border border-[#e2e8f0] rounded-2xl px-5 py-4">
        <Select
          {...register("brand")}
          placeholder={t.filterBrand}
          options={brands.map((b) => ({ value: b, label: b }))}
        />
        <Select
          {...register("country")}
          placeholder={t.filterCountry}
          options={countries.map((c) => ({ value: c, label: c }))}
        />
        <Select
          {...register("yearRange")}
          placeholder={t.filterYear}
          options={yearRanges.map((r) => ({ value: r.label, label: r.label }))}
        />

        {hasFilter && (
          <>
            <Button
              type="button"
              variant="ghost"
              onClick={() => reset()}
            >
              ✕ Tozalash
            </Button>
            <span className="text-[#94a3b8] text-sm self-center ml-auto">
              {filtered.length} ta natija
            </span>
          </>
        )}
      </form>

      {filtered.length === 0 ? (
        <div className="text-center py-28 text-[#94a3b8]">
          <p className="text-4xl mb-4">🔍</p>
          <p>{t.noResults}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((car) => (
            <CarCard
              key={car.slug}
              car={car}
              locale={locale}
              readMoreLabel={t.readMore}
              debutLabel={t.debutYear}
            />
          ))}
        </div>
      )}
    </div>
  );
}
