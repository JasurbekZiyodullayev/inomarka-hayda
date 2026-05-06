import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cars } from "@/data/cars";
import { carDetails } from "@/data/carDetails";
import CompareButton from "@/components/CompareButton";
import CarImageCarousel from "@/components/CarImageCarousel";
import ExpandableText from "@/components/ExpandableText";
import { SITE_URL, carDetailSuffix, carAlternates, type Locale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  const detail = carDetails.find((d) => d.slug === slug);
  if (!car || !detail) return {};

  const suffix = carDetailSuffix[(locale as Locale) ?? "uz"] ?? carDetailSuffix.uz;
  const title = `${car.brand} ${car.model} — ${suffix}`;
  const description = detail.description.slice(0, 160);
  const image = `${SITE_URL}${car.thumbnail}`;

  return {
    title,
    description,
    alternates: carAlternates(slug),
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/cars/${slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: `${car.brand} ${car.model}` }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const countryFlags: Record<string, string> = {
  JP: "🇯🇵", DE: "🇩🇪", US: "🇺🇸", KR: "🇰🇷", BR: "🇧🇷",
  FR: "🇫🇷", IT: "🇮🇹", GB: "🇬🇧", SE: "🇸🇪",
};

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("car");

  const car = cars.find((c) => c.slug === slug);
  const detail = carDetails.find((d) => d.slug === slug);

  if (!car || !detail) notFound();

  const flag = countryFlags[car.countryCode] ?? "🌍";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Car",
    name: `${car.brand} ${car.model}`,
    brand: { "@type": "Brand", name: car.brand },
    description: detail.description.slice(0, 300),
    image: `${SITE_URL}${car.thumbnail}`,
    vehicleEngine: {
      "@type": "EngineSpecification",
      engineDisplacement: {
        "@type": "QuantitativeValue",
        value: car.specs.engineCC,
        unitCode: "CMQ",
      },
      enginePower: {
        "@type": "QuantitativeValue",
        value: car.specs.horsePower,
        unitCode: "BHP",
      },
    },
    speed: {
      "@type": "QuantitativeValue",
      value: car.specs.topSpeed,
      unitCode: "KMH",
    },
    seatingCapacity: car.specs.seats,
    numberOfDoors: car.specs.doors,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[13px] text-[#64748b] hover:text-indigo-600 transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {t("back")}
      </Link>

      {/* Hero */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden mb-6">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <CarImageCarousel images={car.images} alt={`${car.brand} ${car.model}`} />
          <span className="absolute top-4 left-4 text-[11px] font-semibold text-indigo-700 bg-white border border-indigo-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm pointer-events-none z-10">
            {car.brand}
          </span>
        </div>
        <div className="px-6 sm:px-8 py-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a202c] mb-1">
            {car.brand} {car.model}
          </h1>
          <div className="mt-3">
            <ExpandableText text={detail.description} lines={3} />
          </div>
          <div className="mt-5">
            <CompareButton slug={car.slug} />
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("debut")}</p>
          <p className="text-lg font-bold text-indigo-600">{car.worldDebut}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("country")}</p>
          <p className="text-base font-semibold text-[#1a202c]">{flag} {car.country}</p>
        </div>
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("horsepower")}</p>
          <p className="text-lg font-bold text-[#1a202c]">{car.specs.horsePower} <span className="text-sm font-normal text-[#94a3b8]">HP</span></p>
        </div>
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("topSpeed")}</p>
          <p className="text-lg font-bold text-[#1a202c]">{car.specs.topSpeed} <span className="text-sm font-normal text-[#94a3b8]">km/h</span></p>
        </div>
        {detail.uzbekistanSince && (
          <div className="bg-indigo-50 rounded-xl border border-indigo-100 px-4 py-4 col-span-2">
            <p className="text-[11px] text-indigo-400 uppercase tracking-wider mb-1">{t("uzbekistanSince")}</p>
            <p className="text-lg font-bold text-indigo-700">{detail.uzbekistanSince} 🇺🇿</p>
          </div>
        )}
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("engine")}</p>
          <p className="text-lg font-bold text-[#1a202c]">{car.specs.engineCC.toLocaleString("en-US")} <span className="text-sm font-normal text-[#94a3b8]">cc</span></p>
        </div>
        <div className="bg-white rounded-xl border border-[#e2e8f0] px-4 py-4">
          <p className="text-[11px] text-[#94a3b8] uppercase tracking-wider mb-1">{t("seats")}</p>
          <p className="text-lg font-bold text-[#1a202c]">{car.specs.seats}</p>
        </div>
      </div>

      {/* Generations timeline */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] px-6 sm:px-8 py-6 mb-6">
        <h2 className="text-lg font-bold text-[#1a202c] mb-6">{t("generations")}</h2>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#e2e8f0] rounded-full" />
          <div className="space-y-6">
            {detail.generations.map((gen, i) => (
              <div key={i} className="flex gap-5">
                <div className="relative shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-indigo-400 z-10 relative" />
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-indigo-600 font-bold text-sm">{gen.year}</span>
                    <span className="text-[#1a202c] font-semibold text-sm">{gen.title}</span>
                  </div>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{gen.changes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun facts */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] px-6 sm:px-8 py-6">
        <h2 className="text-lg font-bold text-[#1a202c] mb-5">{t("funFacts")}</h2>
        <ol className="space-y-3">
          {detail.funFacts.map((fact, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[11px] font-bold text-indigo-600">
                {i + 1}
              </span>
              <p className="text-[14px] text-[#475569] leading-relaxed pt-0.5">{fact}</p>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}
