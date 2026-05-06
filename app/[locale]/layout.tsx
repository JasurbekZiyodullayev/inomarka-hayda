import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompareBar from "@/components/CompareBar";
import { CompareProvider } from "@/context/CompareContext";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://inomarka-hayda.uz"
  ),
  title: {
    default: "Inomarka Hayda",
    template: "%s | Inomarka Hayda",
  },
  description:
    "Toyota, BMW, Mercedes, Ford va boshqa brendlar haqida to'liq ma'lumot. Generatsiyalar tarixi, texnik xususiyatlar, qiziqarli faktlar.",
  keywords: [
    "avtomobil", "ensiklopediya", "toyota", "bmw", "mercedes", "ford",
    "chevrolet", "honda", "volkswagen", "o'zbekiston", "inomarka",
  ],
  authors: [{ name: "Inomarka Hayda" }],
  openGraph: {
    type: "website",
    siteName: "Inomarka Hayda",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "uz" | "ru" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={geist.variable}>
      <body className="bg-[#f0f4f8] text-[#1a202c] min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          <CompareProvider>
            <Header />
            <main className="pb-24 sm:pb-20">{children}</main>
            <Footer />
            <CompareBar />
          </CompareProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
