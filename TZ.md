# Texnik Topshiriq — Inomarka Hayda

## 1. Loyha haqida

**Inomarka Hayda** — avtomobil modellari haqida ma'lumot beruvchi ensiklopediya sayti.
Foydalanuvchi har bir model haqida to'liq tarix o'qiy oladi: dunyo miqyosida qachon va qayerda chiqqan, yillar davomida qanday o'zgargan, qiziqarli faktlar.

Loyha faqat O'zbekiston bozori bilan cheklanmaydi — dunyodagi eng mashhur brendlarning (Toyota, BMW, Mercedes, Ford va h.k.) mashinalarini ham qamrab oladi.

---

## 2. Maqsad

Sodda, tez yuklanadigan va ma'lumotga boy sayt. Hozircha faqat katalog va model sahifalari. Kelajakda kengaytiriladi.

---

## 3. Foydalanuvchi kimlar

- Mashina sotib olishni rejalashtirayotganlar
- Avtomobil tarixi va texnikasiga qiziqqanlar
- O'zbekiston bozori va dunyo brendlari haqida ma'lumot izlayotganlar

---

## 4. Funksionallik

### 4.1 Katalog sahifasi `/`

- Barcha modellar kartochkalar ko'rinishida
- Har bir kartochkada: rasm, model nomi, ishlab chiqaruvchi, birinchi chiqgan yili
- **Select orqali filter:**
  - Markaga qarab (Chevrolet, Toyota, BMW, Mercedes va h.k.)
  - Mamlakatga qarab (Yaponiya, Germaniya, Koreya, AQSh va h.k.)
  - Yilga qarab (masalan: 1990–2000, 2000–2010, 2010–hozir)

### 4.2 Model sahifasi `/cars/[slug]`

Har bir model sahifasida quyidagilar bo'ladi:

**Umumiy ma'lumot:**
- Ishlab chiqaruvchi va model nomi
- Dunyo bo'yicha birinchi chiqish yili va mamlakatı
- O'zbekistonga kelgan bo'lsa — qachon kelgani

**Generatsiyalar tarixi (timeline ko'rinishida):**
- Yil — qanday o'zgarish bo'lgan (dizayn, motor, salon, xavfsizlik va h.k.)
- Har bir generatsiya uchun rasm (imkon bo'lsa)

**Qiziqarli faktlar:**
- Modelga oid qiziq va kam ma'lum faktlar
- Rekordlar, g'alati versiyalar, tarixiy voqealar
- O'zbekiston bozori uchun maxsus xususiyatlar (agar mavjud bo'lsa)

---

## 5. Ko'p tillilik

Sayt **3 tilda** ishlaydi:

| Til | Kod | URL |
|-----|-----|-----|
| O'zbekcha | `uz` | `/uz/...` |
| Русский | `ru` | `/ru/...` |
| English | `en` | `/en/...` |

- Next.js `i18n` (next-intl kutubxonasi) ishlatiladi
- Barcha kontent (matn, faktlar, generatsiyalar tavsifi) uchta tilda yoziladi
- Til almashtirish tugmasi header da bo'ladi

---

## 6. Tech Stack

| Qism | Texnologiya |
|------|-------------|
| Framework | Next.js 14 (App Router) |
| Stil | Tailwind CSS |
| Kontent | MDX fayllari |
| Ko'p tillilik | next-intl |
| Rasmlar | Next.js Image (optimizatsiya bilan) |
| Deploy | Vercel |

---

## 7. Papka tuzilmasi

```
inomarka-hayda/
├── app/
│   └── [locale]/
│       ├── page.tsx                  → Katalog (bosh sahifa)
│       └── cars/
│           └── [slug]/
│               └── page.tsx          → Model sahifasi
├── content/
│   └── cars/
│       ├── uz/
│       │   ├── gentra.mdx
│       │   ├── camry.mdx
│       │   └── e-class.mdx
│       ├── ru/
│       │   ├── gentra.mdx
│       │   └── ...
│       └── en/
│           ├── gentra.mdx
│           └── ...
├── components/
│   ├── CarCard.tsx                   → Katalog kartochkasi
│   ├── FilterSelect.tsx              → Select orqali filter
│   ├── GenerationTimeline.tsx        → Generatsiyalar tarixi
│   ├── FunFacts.tsx                  → Qiziqarli faktlar bloki
│   └── Header.tsx                    → Til almashtirish bilan
├── messages/
│   ├── uz.json                       → UI matnlari (O'zbekcha)
│   ├── ru.json                       → UI matnlari (Ruscha)
│   └── en.json                       → UI matnlari (Inglizcha)
├── public/
│   └── images/
│       └── cars/
└── data/
    └── cars.ts                       → Metadata (slug, brend, mamlakat, yil, filter uchun)
```

---

## 8. MDX fayl namunasi

```mdx
---
title: Chevrolet Gentra
manufacturer: Chevrolet (GM)
country: Janubiy Koreya
worldDebut: 2013
uzbekistanSince: 2013
thumbnail: /images/cars/gentra.jpg
tags: [chevrolet, koreya, sedan]
---

## Dunyo bo'yicha

Chevrolet Gentra birinchi marta 2013-yilda Janubiy Koreyada ishlab chiqarilgan...

## O'zbekistonda

UzAuto Motors tomonidan 2013-yildan boshlab ishlab chiqarilmoqda...

## Generatsiyalar

| Yil | O'zgarishlar |
|-----|--------------|
| 2013 | Birinchi versiya — 1.5L motor, mexanik KPP |
| 2015 | Facelift — yangilangan old qismi, salon yangilandi |
| 2019 | Yangi motor, avtomatik KPP qo'shildi |
| 2024 | LED faralar, yangi multimedia tizimi |

## Qiziqarli faktlar

- Gentra nomi "General" va "Transport" so'zlaridan olingan
- O'zbekistonda eng ko'p sotilgan avtomobillar ro'yxatiga kirgan
- 2019-yilgi versiyada birinchi marta zamonaviy xavfsizlik tizimi qo'shilgan
```

---

## 9. Modellar bo'yicha qamrov

### O'zbekiston bozori
- Chevrolet Gentra, Cobalt, Tracker, Equinox
- Hyundai Accent, Elantra, Tucson
- Kia K5, Sportage

### Dunyo mashhurlari
- Toyota Camry, Land Cruiser, Corolla
- BMW 3-series, 5-series, X5
- Mercedes-Benz E-class, C-class, S-class
- Ford Mustang, F-150
- Honda Civic, CR-V
- Volkswagen Golf, Passat

---

## 10. Birinchi bosqich (MVP)

- [x] TZ yozildi
- [x] Next.js loyihasi sozlash
- [x] Tailwind, MDX, next-intl o'rnatish
- [x] Bosh sahifa (katalog) — dizayn
- [x] Select filter (brend, mamlakat, yil)
- [ ] Model sahifasi — generatsiyalar timeline + qiziqarli faktlar
- [ ] 5 ta model uchun MDX kontent (3 tilda)
- [ ] Deploy (Vercel)

---

## 10.1 Solishtirish funksiyasi (2-bosqich)

### 10.1.1 Avtomobil tanlash
- [ ] `Car` modeliga texnik spesifikatsiyalar qo'shish (`horsePower`, `topSpeed`, `engineCC`, `fuelConsumption`, `seats`, `doors`, `weight`)
- [ ] `CompareContext` — React context, max 2 ta avtomobil slug ni saqlaydi
- [ ] Har bir `CarCard` da "+" tugmasi — tanlash/bekor qilish
- [ ] `CompareBar` — pastda floating panel: tanlangan mashinalar + "Solishtirish" tugmasi
- [ ] Layout da `CompareProvider` va `CompareBar` ni ulash

### 10.1.2 Solishtirish sahifasi `/compare`
- [ ] Route: `/[locale]/compare?car1=slug1&car2=slug2`
- [ ] Ikki avtomobil nomi va mamlakat bayrog'i — sarlavha
- [ ] **Radar chart** (umumiy ko'rinish): Quvvat, Tezlik, Tejamkorlik, Yengillik, Dvigatel hajmi (0–100 normalizatsiya)
- [ ] **Bar chart** (aniq qiymatlar): HP, km/h, cc, L/100km, kg — yon-yon taqqoslash
- [ ] Spesifikatsiyalar jadvali (side-by-side)
- [ ] "Katalogga qaytish" tugmasi
- [ ] 3 tilda tarjima (`uz.json`, `ru.json`, `en.json`)
- [ ] `recharts` kutubxonasini o'rnatish

---

## 11. Responsive dizayn

Sayt barcha qurilmalarda to'g'ri ko'rinishi shart.

### Breakpointlar (Tailwind CSS)

| Nom | Kenglik | Qurilma |
|-----|---------|---------|
| default | < 640px | Mobil (telefon) |
| `sm` | ≥ 640px | Katta telefon / kichik planshet |
| `md` | ≥ 768px | Planshet |
| `lg` | ≥ 1024px | Noutbuk |
| `xl` | ≥ 1280px | Desktop |

### Komponentlar bo'yicha talablar

**Header:**
- Mobilda: logo + til tugmalari bir qatorda sig'ishi kerak
- Kichik ekranda til tugmalari `UZ / RU / EN` qisqartirilgan holda ko'rinadi

**Katalog grid:**
- Mobil (< 640px): 1 ustun
- sm (≥ 640px): 2 ustun
- lg (≥ 1024px): 3 ustun
- xl (≥ 1280px): 4 ustun

**Filter paneli:**
- Mobilda: selectlar ustma-ust (vertical stack)
- md va undan katta: bir qatorda (horizontal)

**CarCard:**
- Barcha o'lchamlarda bir xil tuzilma, faqat kenglik o'zgaradi
- Rasm balandligi mobilda kamroq (`h-36` mobil, `h-44` desktop)

**Model sahifasi (generatsiyalar timeline):**
- Mobilda: vertikal chiziq, har bir generatsiya pastga ketadi
- Desktop: kengaytirilgan ko'rinish

**Solishtirish sahifasi `/compare`:**
- Mobilda: kartalar ustma-ust, chartlar to'liq kenglikda
- Jadval mobilda gorizontal scroll bilan
- md va undan katta: kartalar yon-yon

**CompareBar (floating):**
- Mobilda: balandroq (2 qator), tanlangan mashinalar nomi qisqartirilgan
- Desktop: 1 qatorda hamma narsa

### Umumiy qoidalar
- `min-width: 320px` — eng kichik qo'llab-quvvatlanadigan kenglik
- Touch-friendly: tugmalar kamida `44×44px` touch target
- Gorizontal scroll yo'q (faqat jadval ichida ruxsat)
- Rasm optimizatsiyasi: `next/image` bilan `sizes` atributi to'g'ri sozlanishi

### Tasklar
- [ ] Header mobil ko'rinishini tekshirish va tuzatish
- [ ] Filter panelini mobilda vertikal stack qilish
- [ ] CarCard grid breakpointlarini tekshirish
- [ ] CompareBar mobil ko'rinishi
- [ ] Solishtirish sahifasi mobil layout
- [ ] Barcha sahifalarni 320px, 375px, 768px, 1280px da test qilish

---

## 12. Kelajak rejalar (keyingi bosqichlar)

- Foydalanuvchi izohlari
- Admin panel (kontent qo'shish uchun)
- Qo'shimcha tillar
