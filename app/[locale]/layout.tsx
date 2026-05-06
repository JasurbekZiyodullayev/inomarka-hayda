import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import CompareBar from "@/components/CompareBar";
import { CompareProvider } from "@/context/CompareContext";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Avto Ensiklopediya",
  description: "Avtomobillar tarixi va ma'lumotlari",
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
            <main className="pb-20">{children}</main>
            <CompareBar />
          </CompareProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
