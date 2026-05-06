import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

const PHONE = "+998 90 881 53 77";
const PHONE_HREF = "tel:+998908815377";
const INSTAGRAM = "@jasurbek_ziyodullayev_";
const INSTAGRAM_HREF = "https://instagram.com/jasurbek_ziyodullayev_";
const TELEGRAM = "@J_Ziyodullayev";
const TELEGRAM_HREF = "https://t.me/J_Ziyodullayev";
const FACEBOOK = "jasurbek.ziyodullayev";
const FACEBOOK_HREF = "https://www.facebook.com/jasurbek.ziyodullayev.908";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nt = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e8f0] bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">

          {/* Brand block */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center group-hover:bg-indigo-500 transition-colors shrink-0">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <span className="text-[#1a202c] font-semibold text-[15px]">{nt("title")}</span>
            </Link>
            <p className="text-[13px] text-[#64748b] leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">
              {t("navigation")}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-[14px] text-[#475569] hover:text-indigo-600 transition-colors">
                  {t("catalog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">
              {t("contact")}
            </p>
            <ul className="space-y-3">

              {/* Phone */}
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2.5 text-[14px] text-[#475569] hover:text-indigo-600 transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#f0f4f8] flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#64748b] group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  {PHONE}
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a href={INSTAGRAM_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[14px] text-[#475569] hover:text-pink-600 transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#f0f4f8] flex items-center justify-center shrink-0 group-hover:bg-pink-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#64748b] group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </span>
                  {INSTAGRAM}
                </a>
              </li>

              {/* Telegram */}
              <li>
                <a href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[14px] text-[#475569] hover:text-sky-500 transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#f0f4f8] flex items-center justify-center shrink-0 group-hover:bg-sky-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#64748b] group-hover:text-sky-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </span>
                  {TELEGRAM}
                </a>
              </li>

              {/* Facebook */}
              <li>
                <a href={FACEBOOK_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[14px] text-[#475569] hover:text-blue-600 transition-colors group">
                  <span className="w-7 h-7 rounded-lg bg-[#f0f4f8] flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#64748b] group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  {FACEBOOK}
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f0f4f8]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[12px] text-[#94a3b8]">
            © {year} Inomarka Hayda · {t("copyright")}
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-[12px] text-[#94a3b8]">Uzbekistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
