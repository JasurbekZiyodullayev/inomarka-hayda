export interface Generation {
  year: number;
  title: string;
  changes: string;
}

export interface CarDetail {
  slug: string;
  uzbekistanSince?: number;
  description: string;
  generations: Generation[];
  funFacts: string[];
}

export const carDetails: CarDetail[] = [
  {
    slug: "toyota-camry",
    uzbekistanSince: 2007,
    description:
      "Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi. Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi. Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi.",
    generations: [
      {
        year: 1982,
        title: "I avlod (V10)",
        changes:
          "Birinchi Camry — front-wheel drive platformasida, 1.8L dvigatel bilan chiqdi.",
      },
      {
        year: 1986,
        title: "II avlod (V20)",
        changes:
          "Kuzov kengaytirildi, 2.0L dvigatel qo'shildi, ichki bezak yaxshilandi.",
      },
      {
        year: 1991,
        title: "III avlod (V30)",
        changes:
          "Yangi platforma, 2.2L va 3.0L V6 dvigatellar, xavfsizlik sistemasi kuchaytirildi.",
      },
      {
        year: 1996,
        title: "IV avlod (V40)",
        changes:
          "Zamonaviy dizayn, dual airbag standart sifatida, avtomatik klimat-kontrol.",
      },
      {
        year: 2001,
        title: "V avlod (V30)",
        changes:
          "Ichki bezak tubdan yangilandi, 2.4L 4-silindrli va 3.0L V6 dvigatellar.",
      },
      {
        year: 2006,
        title: "VI avlod (V40)",
        changes:
          "Sportroq dizayn, 2.4L va 3.5L V6, birinchi marta gibrid versiya (AQSh uchun).",
      },
      {
        year: 2011,
        title: "VII avlod (V50)",
        changes:
          "Platforma yangidan qurild, 2.5L dvigatel, LED faralar, Toyota Safety Sense tizimi.",
      },
      {
        year: 2017,
        title: "VIII avlod (V70)",
        changes:
          "TNGA platformasi, tubdan o'zgargan dizayn, 2.5L gibrid versiya global bozorga chiqdi.",
      },
    ],
    funFacts: [
      '"Camry" nomi yaponcha "kanmuri" (toj) so\'zidan olingan.',
      "Dunyoda har minutda taxminan 3 ta Toyota Camry sotiladi.",
      "AQShda 20 yil davomida eng ko'p sotiladigan avtomobil unvonini saqlab keldi.",
      "O'zbekistonda 2007-yildan rasmiy sotuvga chiqdi va tez orada biznes sinf ramziga aylandi.",
    ],
  },
  {
    slug: "toyota-land-cruiser",
    uzbekistanSince: 1995,
    description:
      "Toyota Land Cruiser — dunyoning eng ishonchli va uzoq umrli off-road SUV lari qatorida. Qiyin yo'llarda ham bemalol yura olishi uni butun dunyo bo'ylab mashhur qilgan.",
    generations: [
      {
        year: 1951,
        title: "I avlod (BJ)",
        changes:
          "Birinchi Land Cruiser — Jeep CJ-3A ga o'xshash dizayn, harbiy maqsadlar uchun yaratilgan.",
      },
      {
        year: 1960,
        title: "FJ40 seriya",
        changes:
          "Ikonik to'rtburchak kuzov, off-road imkoniyatlari kengaytirildi, global eksportga chiqdi.",
      },
      {
        year: 1967,
        title: "FJ55 seriya",
        changes:
          "Birinchi marta oila uchun mo'ljallangan wagon kuzov, 7 o'rindig.",
      },
      {
        year: 1980,
        title: "BJ60/HJ60 seriya",
        changes:
          "Yangi platforma, dvizel dvigatel opsiyasi, luxe salon bezagi.",
      },
      {
        year: 1990,
        title: "80 seriya (FJ80)",
        changes:
          "Zamonaviy karobka, full-time 4WD, ABS tizimi, 7 o'rindig kengaytirildi.",
      },
      {
        year: 1998,
        title: "100 seriya",
        changes:
          "Adaptiv kruz-kontrol, tubdan yangi ichki bezak, V8 dvigatel opsiyasi.",
      },
      {
        year: 2007,
        title: "200 seriya",
        changes:
          "Yangi platforma, Kinetic Dynamic Suspension System, kuchli V8 4.5L turbodiezel.",
      },
      {
        year: 2021,
        title: "300 seriya",
        changes:
          "TNGA-F platformasi, V6 dvigatel (V8 o'rniga), 48V mild-hybrid tizimi, zamonaviy multimedia.",
      },
    ],
    funFacts: [
      "BM Tashkiloti, NATO va UNICEF o'z operatsiyalarida Land Cruiser dan faol foydalanadi.",
      "Avstraliyada eng ko'p sotiladigan SUV bo'lib, \"LC\" qisqartmasi mahalliy madaniyatga singib ketgan.",
      "70 seriya 1984-yildan buyon ishlab chiqarilmoqda va hali ham sotuvda.",
      "Land Cruiser ning qayta sotish qiymati boshqa SUV larga qaraganda eng yuqori hisoblanadi.",
    ],
  },
  {
    slug: "bmw-3-series",
    uzbekistanSince: 2000,
    description:
      "BMW 3 Seriya — sport sedan segmentining o'lchovi. Haydash zavqi, mukammal balans va zamonaviy texnologiyalar uning doimiy tamg'asidir.",
    generations: [
      {
        year: 1975,
        title: "E21 (I avlod)",
        changes:
          'Birinchi rasmiy "3 Seriya" nomi bilan chiqdi, 4-silindrli dvigatellar, sport dizayn.',
      },
      {
        year: 1982,
        title: "E30 (II avlod)",
        changes:
          "Ikonik kuzov dizayni, M3 sport versiyasi paydo bo'ldi, kabriolet varianti qo'shildi.",
      },
      {
        year: 1990,
        title: "E36 (III avlod)",
        changes:
          "Kengaytirilgan salon, VANOS dvigatel texnologiyasi, birinchi marta compact variant.",
      },
      {
        year: 1998,
        title: "E46 (IV avlod)",
        changes:
          "Tubdan yangi platforma, xavfsizlik tizimi kuchaytirildi, Dynamic Stability Control.",
      },
      {
        year: 2005,
        title: "E90 (V avlod)",
        changes:
          "iDrive multimedia tizimi, turbodiezel opsiyalar kengaytirildi, efficient dynamics dasturi.",
      },
      {
        year: 2012,
        title: "F30 (VI avlod)",
        changes:
          "Engil alyuminiy elementlar, EfficientDynamics texnologiyasi, 3-silindrli dvigatel varianti.",
      },
      {
        year: 2019,
        title: "G20 (VII avlod)",
        changes:
          "Yangi platforma, 48V mild-hybrid, BMW OS 7.0 multimedia, uzunlamasına kengaytirilgan salon.",
      },
    ],
    funFacts: [
      '"The Ultimate Driving Machine" — BMW ning 50 yillik shiorining asosi 3 Seriyadan boshlangan.',
      "E30 M3 bugungi kunda kolleksion avtomobil sifatida millionlab dollarga sotilmoqda.",
      "BMW 3 Seriya Germaniyada qayta ishlab chiqarishda rekord qo'ygan — 50 yilda 15 milliondan ortiq sotilgan.",
      "James Bond filmlarida BMW 3 Seriyaning turli avlodlari qatnashgan.",
    ],
  },
  {
    slug: "mercedes-e-class",
    uzbekistanSince: 1998,
    description:
      "Mercedes-Benz E-Class — biznes va comfort segmentining eng taniqli vakili. Texnologiya, xavfsizlik va hashamat uchlikka asoslanadi.",
    generations: [
      {
        year: 1953,
        title: "W120 Ponton",
        changes:
          'Birinchi zamonaviy Mercedes sedan dizayni — "Ponton" uslubi, 1.8L dvigatel.',
      },
      {
        year: 1961,
        title: "W110/W111 Fintail",
        changes:
          '"Fintail" qanotli dizayn, birinchi crumple zone xavfsizlik tizimi, dünyo miqyosidagi yengilik.',
      },
      {
        year: 1968,
        title: "W114/W115",
        changes:
          "Yangi platforma, ko'proq variantlar, injector dvigatel tizimi joriy etildi.",
      },
      {
        year: 1976,
        title: "W123",
        changes:
          "1 milliondan ortiq sotilgan dastlabki E-Class, ishonchlilik standarti o'rnatildi.",
      },
      {
        year: 1984,
        title: "W124",
        changes: 'Birinchi "E-Class" nomi, ABS, SRS airbag, galogen faralar.',
      },
      {
        year: 1995,
        title: "W210",
        changes:
          "Oval faralar dizayni, ESP birinchi marta seriyali avtomobilga o'rnatildi.",
      },
      {
        year: 2002,
        title: "W211",
        changes:
          "COMAND multimedia tizimi, PRE-SAFE texnologiyasi — inqilobiy xavfsizlik yechimi.",
      },
      {
        year: 2009,
        title: "W212",
        changes:
          "LED DRL faralar, BlueEFFICIENCY tizimi, yaxshilangan aerodynamika.",
      },
      {
        year: 2016,
        title: "W213",
        changes:
          "MBUX multimedia, E 350 e plug-in gibrid, 64 rangli ambient yoritish.",
      },
    ],
    funFacts: [
      "W123 avlodi hali ham ko'p mamlakatlarda taksi sifatida ishlatilmoqda.",
      "ESP (Electronic Stability Program) ni birinchi marta seriyali E-Class ga joriy etdi — bugun barcha avtomobillarda standart.",
      'E-Class ning "E" harfi Einspritzung (nemischa: injeksiya) so\'zidan kelib chiqqan.',
      "Mercedes-Benz dunyodagi eng qadimiy avtomobil kompaniyasi — 1886-yilda Karl Benz birinchi avtomobilni ixtiro qilgan.",
    ],
  },
  {
    slug: "honda-civic",
    uzbekistanSince: 2006,
    description:
      "Honda Civic — kompakt sedan segmentida to'rt o'n yildan ortiq yetakchi o'rinda turadi. Ishonchli, tejamkor va sport xususiyatli avtomobil.",
    generations: [
      {
        year: 1972,
        title: "I avlod (SB1)",
        changes:
          "Birinchi Civic — kichik, yengil, 1.2L dvigatel, Yaponiyadan tashqarida ham tez mashhur bo'ldi.",
      },
      {
        year: 1979,
        title: "II avlod",
        changes:
          "Kengaytirilgan kuzov, CVCC dvigatel texnologiyasi — ilk yoqilg'i tejovchi tizim.",
      },
      {
        year: 1983,
        title: "III avlod",
        changes:
          "Front-wheel drive to'liq joriy etildi, hatchback va sedan variantlari.",
      },
      {
        year: 1987,
        title: "IV avlod",
        changes:
          "Aerodynamik dizayn, DOHC dvigatel, Civic Si sport versiyasi chiqdi.",
      },
      {
        year: 1991,
        title: "V avlod",
        changes:
          "VTEC dvigatel texnologiyasi — past aylanishda tejamkorlik, yuqori aylanishda quvvat.",
      },
      {
        year: 1995,
        title: "VI avlod",
        changes:
          "Yaxshilangan xavfsizlik, Honda R&D markazi Swindon (Buyuk Britaniya)da ishlab chiqarishni boshladi.",
      },
      {
        year: 2000,
        title: "VII avlod",
        changes:
          "Yangi platforma, i-VTEC dvigatel, IMA gibrid versiyasi (Civic Hybrid) chiqdi.",
      },
      {
        year: 2005,
        title: "VIII avlod",
        changes:
          "Futuristik ichki dizayn, katta shisha sirt, 1.8L i-VTEC motor.",
      },
      {
        year: 2011,
        title: "IX avlod",
        changes: "Yoqilg'i sarfi kamaytirildi, Eco Assist tizimi qo'shildi.",
      },
      {
        year: 2015,
        title: "X avlod",
        changes:
          "Tubdan yangilandi, turbocharged 1.5L VTEC Turbo dvigatel, sportroq kuzov.",
      },
      {
        year: 2021,
        title: "XI avlod",
        changes:
          "Yangi platforma, HFCT texnologiyasi, Honda Sensing xavfsizlik paketi standart.",
      },
    ],
    funFacts: [
      "Honda Civic 50 yildan ortiq davomida 27 milliondan ziyod sotilgan.",
      "VTEC dvigatel texnologiyasi (1989) avtomobil dunyosida inqilob qildi — birinchi variabel supap vaqtlash tizimi.",
      'Civic Si versiyasi "tuning" madaniyatida ikonik o\'ringa ega, ayniqsa "Fast and Furious" filmidan keyin.',
      "Honda Civic dunyodagi eng ko'p o'g'irlanadigan avtomobillar ro'yxatiga yillar davomida kirib kelgan.",
    ],
  },
  {
    slug: "ford-mustang",
    uzbekistanSince: undefined,
    description:
      'Ford Mustang — "pony car" janrining asoschisi va Amerika avtomobil madaniyatining timsoli. Kuchli dvigatel, sport dizayn va erkinlik ramzi.',
    generations: [
      {
        year: 1964,
        title: "I avlod (1964–1973)",
        changes:
          'Birinchi Mustang — 2+2 konfigurasiya, 2.8L–7.0L dvigatel variantlari. "Pony car" tushunchasini yaratdi.',
      },
      {
        year: 1974,
        title: "II avlod (Mustang II)",
        changes:
          "Neft inqirozi tufayli kichiklashtirildi, 4-silindrli dvigatel. Eng munozarali avlod.",
      },
      {
        year: 1979,
        title: "III avlod (Fox body)",
        changes:
          "Yangi Fox platforma, 5.0L V8 opsiyasi, klassik sport imidj qaytdi.",
      },
      {
        year: 1994,
        title: "IV avlod (SN95)",
        changes:
          "Yangilangan Fox platforma, retro-zamonaviy dizayn, 3.8L V6 va 5.0L V8.",
      },
      {
        year: 1999,
        title: "IV.5 (New Edge)",
        changes:
          '"New Edge" dizayn — keskin burchaklar, GT va Cobra versiyalari kuchaytirildi.',
      },
      {
        year: 2005,
        title: "V avlod (S197)",
        changes:
          '"Retro-modern" dizayn inqilobi — 1960lardan ilhom, zamonaviy texnologiya. Juda mashhur bo\'ldi.',
      },
      {
        year: 2015,
        title: "VI avlod (S550)",
        changes:
          "Birinchi marta mustaqil orqa suspenziya, global bozorga chiqdi (o'ng rul opsiyasi), 2.3L EcoBoost turbo.",
      },
      {
        year: 2024,
        title: "VII avlod (S650)",
        changes:
          "Dark Horse versiyasi, 7-pog'onali manual KPP, 500 HP V8, raqamli kokpit.",
      },
    ],
    funFacts: [
      "Birinchi Mustang 1964-yil 17-aprelda New York World's Fair da taqdim etildi va 24 soat ichida 22,000 ta buyurtma keldi.",
      "\"Bullitt\" (1968) filmidagi Mustang GT390 ko'pur sahnasi avtomobil tarixidagi eng mashhur ta'qib sahnasi hisoblanadi.",
      'Mustang nomi II Jahon Urushidagi "P-51 Mustang" qiruvchi samolyotidan olingan.',
      "2015-yilda Ford Mustang ni birinchi marta o'ng rul bilan chiqardi — butun dunyo uchun.",
    ],
  },
  {
    slug: "chevrolet-gentra",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Gentra — O'zbekistonda UzAuto Motors tomonidan ishlab chiqariladigan eng mashhur avtomobillardan biri. Oddiy, arzon va ishlatish qulay sedani.",
    generations: [
      {
        year: 2013,
        title: "I avlod",
        changes:
          "1.5L DOHC dvigatel, 5-pog'onali mexanik KPP, UzAuto Motors da ishlab chiqarish boshlandi.",
      },
      {
        year: 2015,
        title: "Facelift",
        changes:
          "Yangilangan old qism dizayni, yaxshilangan salon bezagi, qo'shimcha xavfsizlik.",
      },
      {
        year: 2019,
        title: "II avlod",
        changes:
          "Yangi 1.5L dvigatel, 6-pog'onali avtomat KPP opsiyasi qo'shildi, zamonaviy multimedia tizimi.",
      },
      {
        year: 2022,
        title: "Yangilash",
        changes:
          "LED kunduzgi yorug'lik, yangi rang palitrasidagi opsiyalar, yaxshilangan NVH.",
      },
    ],
    funFacts: [
      "O'zbekistonda yillar davomida eng ko'p sotilgan avtomobil bo'lib kelgan.",
      "Gentra nomi Daewoo Nexia platformasiga asoslangan, Janubiy Koreyada ishlab chiqilgan.",
      "O'zbekistonda taksi va davlat xizmatlari uchun eng ko'p ishlatiladigan avtomobillar qatorida.",
      "UzAuto Motors yiliga 200,000 dan ortiq Gentra ishlab chiqarish quvvatiga ega.",
    ],
  },
  {
    slug: "chevrolet-cobalt",
    uzbekistanSince: 2011,
    description:
      "Chevrolet Cobalt — O'zbekiston uchun maxsus moslashtirilgan, tejamkor va kengroq salon bilan ajralib turadigan sedan. Oilaviy foydalanish uchun qulay.",
    generations: [
      {
        year: 2011,
        title: "I avlod (T250)",
        changes:
          "Braziliyada ishlab chiqilgan, Gamma II 1.5L dvigatel, keng salon, WGM Uzbekistan da ishlab chiqarish.",
      },
      {
        year: 2016,
        title: "Facelift",
        changes:
          "Yangilangan faralar va bamper dizayni, yangi multimedia tizimi.",
      },
      {
        year: 2020,
        title: "II avlod",
        changes:
          "Yangi platforma, yaxshilangan xavfsizlik tizimi, infotainment yangilandi.",
      },
      {
        year: 2023,
        title: "Yangilash",
        changes:
          "Yangi ranglar, yaxshilangan salon materiallari, Android Auto qo'shildi.",
      },
    ],
    funFacts: [
      "Cobalt O'zbekistonda maxsus kengaytirilgan salon bilan ishlab chiqariladi — Braziliya versiyasidan farqli.",
      "O'zbekistonda Gentra bilan birga eng ko'p sotiladigan avtomobil juftligini tashkil etadi.",
      "GM ning Global Emerging Markets (GEM) platformasida qurilgan — rivojlanayotgan bozorlar uchun maxsus.",
      "Cobalt nomi kimyoviy element — ko'k rangli metall kobaltdan olingan.",
    ],
  },
  {
    slug: "volkswagen-golf",
    uzbekistanSince: undefined,
    description:
      "Volkswagen Golf — Yevropa avtomobil bozorining eng mashhur hatchback'i. Sifat, qulay haydash va keng variantlar bilan 50 yildan ortiq yetakchilikni saqlamoqda.",
    generations: [
      {
        year: 1974,
        title: "I avlod (Mk1)",
        changes:
          "Legendary Giugiaro dizayni, birinchi GTI sport versiyasi (1976). VW Beetle o'rnini egalladi.",
      },
      {
        year: 1983,
        title: "II avlod (Mk2)",
        changes:
          "Kengaytirildi, G60 Supercharger texnologiyasi, Rallye Golf versiyasi.",
      },
      {
        year: 1991,
        title: "III avlod (Mk3)",
        changes:
          "Yaxshilangan xavfsizlik, TDI dvizel dvigatel — tejamkorlikda inqilob.",
      },
      {
        year: 1997,
        title: "IV avlod (Mk4)",
        changes:
          "Premium ichki bezak, 4MOTION AWD opsiyasi, R32 versiyasi 241 HP bilan.",
      },
      {
        year: 2003,
        title: "V avlod (Mk5)",
        changes:
          "Yangi platforma, DSG ikki muftali avtomat KPP — texnologik yutuq.",
      },
      {
        year: 2008,
        title: "VI avlod (Mk6)",
        changes:
          "Yaxshilangan sifat, GTI va R yaxshilangan versiyalari, bluemotion TDI.",
      },
      {
        year: 2012,
        title: "VII avlod (Mk7)",
        changes:
          "MQB platforma, kuchli ammo yengil (50 kg kamaydi), GTI 220 HP, GTE plug-in gibrid.",
      },
      {
        year: 2019,
        title: "VIII avlod (Mk8)",
        changes:
          "Raqamli kokpit, IQ.DRIVE xavfsizlik tizimi, plug-in gibrid va e-Golf versiyalari.",
      },
    ],
    funFacts: [
      "Golf dunyoda eng ko'p sotiladigan avtomobillar ro'yxatida (Toyota Corolla dan keyin ikkinchi o'rin, ba'zan birinchi).",
      'GTI versiyasi 1976-yilda "hot hatch" janrini yaratdi — kichik ammo tez avtomobil tushunchasining otasi.',
      "Golf Mk1 dizayni Giorgio Giugiaro tomonidan yaratilgan — avtomobil dizaynining eng mashhur yaratuvchilaridan biri.",
      "VW Golf haqida 35 dan ortiq kitob yozilgan — birorta ham avtomobil bunga erishgan emas.",
    ],
  },
];
