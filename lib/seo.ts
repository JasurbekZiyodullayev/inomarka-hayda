export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://inomarka-hayda.uz";

export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const siteNames: Record<Locale, string> = {
  uz: "Inomarka Hayda",
  ru: "Inomarka Hayda",
  en: "Inomarka Hayda",
};

export const catalogMeta: Record<Locale, { title: string; description: string }> = {
  uz: {
    title: "Avtomobil Ensiklopediyasi — O'zbekiston va Dunyo Brendlari",
    description:
      "Toyota, BMW, Mercedes, Ford va boshqa brendlar haqida to'liq ma'lumot. Generatsiyalar tarixi, texnik xususiyatlar, qiziqarli faktlar.",
  },
  ru: {
    title: "Автомобильная Энциклопедия — Бренды Узбекистана и Мира",
    description:
      "Полная информация о Toyota, BMW, Mercedes, Ford и других брендах. История поколений, технические характеристики, интересные факты.",
  },
  en: {
    title: "Car Encyclopedia — Uzbekistan & World Brands",
    description:
      "Complete information on Toyota, BMW, Mercedes, Ford and more. Generation history, technical specs, fun facts.",
  },
};

export const carDetailSuffix: Record<Locale, string> = {
  uz: "Batafsil Ma'lumot va Generatsiyalar",
  ru: "Подробная Информация и Поколения",
  en: "Full Details & Generations",
};

export function carAlternates(slug: string) {
  return {
    canonical: `${SITE_URL}/uz/cars/${slug}`,
    languages: {
      uz: `${SITE_URL}/uz/cars/${slug}`,
      ru: `${SITE_URL}/ru/cars/${slug}`,
      en: `${SITE_URL}/en/cars/${slug}`,
      "x-default": `${SITE_URL}/uz/cars/${slug}`,
    },
  };
}

export function catalogAlternates(locale: string) {
  return {
    canonical: `${SITE_URL}/${locale}`,
    languages: {
      uz: `${SITE_URL}/uz`,
      ru: `${SITE_URL}/ru`,
      en: `${SITE_URL}/en`,
      "x-default": `${SITE_URL}/uz`,
    },
  };
}
