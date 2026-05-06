"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchLocale(newLocale: string) {
    const qs = searchParams.toString();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    router.replace((qs ? `${pathname}?${qs}` : pathname) as any, { locale: newLocale });
  }

  return (
    <header className="border-b border-[#e2e8f0] bg-[#f0f4f8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
            <span className="text-white font-bold text-sm">AE</span>
          </div>
          <div>
            <p className="text-[#1a202c] font-semibold text-[15px] leading-tight">{t("title")}</p>
            <p className="hidden sm:block text-[#94a3b8] text-xs">{t("subtitle")}</p>
          </div>
        </Link>

        <div className="flex items-center gap-0.5 bg-white border border-[#e2e8f0] rounded-lg p-1 shadow-sm">
          {["uz", "ru", "en"].map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
                locale === loc
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-[#94a3b8] hover:text-[#1a202c]"
              }`}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
