import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { cars } from "@/data/cars";
import CatalogClient from "@/components/CatalogClient";
import BrandMarquee from "@/components/BrandMarquee";
import { catalogMeta, catalogAlternates, type Locale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = catalogMeta[(locale as Locale) ?? "uz"] ?? catalogMeta.uz;
  return {
    title: meta.title,
    description: meta.description,
    alternates: catalogAlternates(locale),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: catalogAlternates(locale).canonical,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("catalog");

  const translations = {
    filterBrand: t("filterBrand"),
    filterCountry: t("filterCountry"),
    filterYear: t("filterYear"),
    allBrands: t("allBrands"),
    allCountries: t("allCountries"),
    allYears: t("allYears"),
    readMore: t("readMore"),
    debutYear: t("debutYear"),
    noResults: t("noResults"),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 bg-white rounded-2xl border border-[#e2e8f0] px-8 py-8">
        <p className="text-indigo-500 text-sm font-medium uppercase tracking-widest mb-3">
          Ensiklopediya
        </p>
        <h1 className="text-4xl font-bold text-[#1a202c] mb-3 leading-tight">
          {t("title")}
        </h1>
        <p className="text-[#64748b] text-base max-w-xl">{t("subtitle")}</p>
        <div className="mt-5 w-12 h-[2px] bg-indigo-500 rounded-full" />
      </div>

      <BrandMarquee />
      <CatalogClient cars={cars} locale={locale} t={translations} />
    </div>
  );
}
