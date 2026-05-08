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

// ─── GENERATION ARRAYS (barcha avlodlar ro'yxati) ────────────────────────────

const sparkGenerations: Generation[] = [
  { year: 1998, title: "I avlod (Daewoo Matiz)", changes: "Daewoo Matiz nomi bilan chiqdi. Suzuki Alto platformasiga asoslangan, 0.8L dvigatel, juda yengil va arzon." },
  { year: 2005, title: "II avlod (M200)", changes: "Birinchi rasmiy Chevrolet Spark brendi, 1.0L dvigatel, yangilangan dizayn, xavfsizlik yaxshilandi." },
  { year: 2010, title: "III avlod (M300)", changes: "Tubdan yangi dizayn, kengroq salon, 1.0L va 1.2L dvigatel opsiyalari, ESP qo'shildi." },
  { year: 2016, title: "IV avlod (M400)", changes: "Zamonaviy kuzov, Apple CarPlay, 4 yulduzli xavfsizlik reytingi, yaxshilangan NVH izolatsiyasi." },
];

const gentraGenerations: Generation[] = [
  { year: 2013, title: "I avlod", changes: "1.5L DOHC dvigatel, 5-pog'onali mexanik KPP, UzAuto Motors da ishlab chiqarish boshlandi." },
  { year: 2015, title: "Facelift", changes: "Yangilangan old qism dizayni, yaxshilangan salon bezagi, qo'shimcha xavfsizlik." },
  { year: 2019, title: "II avlod", changes: "Yangi 1.5L dvigatel, 6-pog'onali avtomat KPP opsiyasi qo'shildi, zamonaviy multimedia tizimi." },
  { year: 2022, title: "Yangilash", changes: "LED kunduzgi yorug'lik, yangi rang palitrasidagi opsiyalar, yaxshilangan NVH." },
];

const cobaltGenerations: Generation[] = [
  { year: 2011, title: "I avlod (T250)", changes: "Braziliyada ishlab chiqilgan, Gamma II 1.5L dvigatel, keng salon, WGM Uzbekistan da ishlab chiqarish." },
  { year: 2016, title: "Facelift", changes: "Yangilangan faralar va bamper dizayni, yangi multimedia tizimi." },
  { year: 2020, title: "II avlod", changes: "Yangi platforma, yaxshilangan xavfsizlik tizimi, infotainment yangilandi." },
  { year: 2023, title: "Yangilash", changes: "Yangi ranglar, yaxshilangan salon materiallari, Android Auto qo'shildi." },
];

const nexia3Generations: Generation[] = [
  { year: 2016, title: "I avlod", changes: "UzAuto Motors da ishlab chiqarish boshlandi. Chevrolet Aveo platformasi, 1.5L SOHC dvigatel, 5-pog'onali mexanik KPP." },
  { year: 2019, title: "Yangilash (I)", changes: "Multimedia tizimi yangilandi, Android Auto qo'shildi, ichki bezak yaxshilandi." },
  { year: 2022, title: "Yangilash (II)", changes: "LED kunduzgi yorug'liklar, yangi rang palitrasi, yaxshilangan ovoz izolatsiyasi." },
];

const lacettiGenerations: Generation[] = [
  { year: 2004, title: "I avlod (J200)", changes: "Daewoo Lacetti nomi bilan global bozorga chiqdi. 1.4L, 1.6L va 1.8L dvigatel variantlari, sedan va hatchback." },
  { year: 2009, title: "O'zbekiston versiyasi", changes: "UzAuto Motors da ishlab chiqarish boshlandi. Mahalliy yo'llarga moslashtirilgan suspenziya." },
  { year: 2014, title: "Facelift", changes: "Yangilangan old qism, yangi disk g'ildiraklari, ichki bezak yaxshilandi." },
  { year: 2019, title: "Yakuniy yangilash", changes: "Multimedia tizimi modernizatsiya qilindi, xavfsizlik sensori qo'shildi." },
];

const malibuGenerations: Generation[] = [
  { year: 1964, title: "I avlod (A-body)", changes: "Chevelle Malibu nomi bilan chiqdi — klassik Amerika muscle car davri." },
  { year: 1978, title: "IV avlod", changes: "Iqtisodiy inqiroz ta'sirida kichiklashtirildi, tejamkor dvigatellar." },
  { year: 1997, title: "V avlod (qayta tiklash)", changes: "Zamonaviy Malibu nomi qaytdi, front-wheel drive platforma." },
  { year: 2008, title: "VII avlod", changes: "Tubdan yangi dizayn, keng salon, 2.4L Ecotec dvigatel." },
  { year: 2013, title: "VIII avlod (O'zbekistonga keldi)", changes: "Yangi platforma, 2.0L turbodvigatel opsiyasi, MyLink multimedia." },
  { year: 2016, title: "IX avlod", changes: "Engillashtirildi, Teen Driver xavfsizlik tizimi, 8 ta havo yostiq." },
];

const trackerGenerations: Generation[] = [
  { year: 1989, title: "I avlod (Geo Tracker)", changes: "Off-road SUV sifatida boshlandi, Suzuki Vitara bilan umumiy platforma, to'liq yo'ldan tashqari imkoniyatlar." },
  { year: 1999, title: "II avlod", changes: "Kengaytirilgan salon, 4-eshikli variant, yaxshilangan interior." },
  { year: 2013, title: "III avlod (kompakt crossover)", changes: "Tubdan yangi — endi shahar crossover'i. 1.4L turbodvigatel, front-wheel drive asosiy variant." },
  { year: 2019, title: "IV avlod", changes: "Yangi platforma, 1.2T va 1.5T dvigatellar, CVT karobka, zamonaviy xavfsizlik tizimi." },
];

const captivaGenerations: Generation[] = [
  { year: 2006, title: "I avlod (C100)", changes: "Daewoo Winstorm nomi bilan ham chiqdi. GM ning Theta platformasi, 2.0L turbodiezel va 2.4L benzin." },
  { year: 2011, title: "Facelift", changes: "Yangilangan old faralar va bamper, yaxshilangan ichki bezak, yangi multimedia." },
  { year: 2016, title: "II avlod (C140)", changes: "Yangi platforma, yaxshilangan aerodinamika, kuchli xavfsizlik tizimi." },
];

const equinoxGenerations: Generation[] = [
  { year: 2004, title: "I avlod", changes: "Birinchi Equinox — Saturn Vue platformasi, 3.4L V6 dvigatel, AWD opsiya." },
  { year: 2010, title: "II avlod", changes: "Kengaytirilgan salon, 4-silindrli dvigatel qo'shildi, yoqilg'i sarfi kamaydi." },
  { year: 2018, title: "III avlod (O'zbekistonga keldi)", changes: "Engil platforma, 1.5T va 2.0T turbodvigatel, Wi-Fi hotspot, 8 ta havo yostiq standart." },
];

const damasGenerations: Generation[] = [
  { year: 1991, title: "I avlod (Daewoo Damas)", changes: "Suzuki Every litsenziyasi asosida Daewoo tomonidan ishlab chiqarildi. 0.8L dvigatel, 8 o'rindiq." },
  { year: 1996, title: "O'zbekistonga keldi", changes: "UzDaewoo (keyinchalik UzAuto Motors) tomonidan O'zbekistonda ishlab chiqarish boshlandi." },
  { year: 2013, title: "Chevrolet nomi ostida", changes: "UzAuto Motors Chevrolet brendi ostida chiqara boshladi. Texnik jihatlari asosan o'zgarmadi." },
  { year: 2019, title: "Yangilash", changes: "Xavfsizlik jihozlari yaxshilandi, yangi rang variantlari qo'shildi." },
];

const laboGenerations: Generation[] = [
  { year: 1991, title: "I avlod (Daewoo Labo)", changes: "Suzuki ST90 litsenziyasi asosida ishlab chiqarildi. 0.8L dvigatel, 2 o'rindiq, kichik yuk kuzovi." },
  { year: 1996, title: "O'zbekistonga keldi", changes: "UzDaewoo tomonidan O'zbekistonda ishlab chiqarish boshlandi." },
  { year: 2013, title: "Chevrolet nomi ostida", changes: "UzAuto Motors Chevrolet brendi bilan chiqara boshladi." },
];

// ─── CAR DETAILS ─────────────────────────────────────────────────────────────

export const carDetails: CarDetail[] = [
  // ─── DUNYO BRENDLARI ─────────────────────────────────────────────────────────
  {
    slug: "toyota-camry",
    uzbekistanSince: 2007,
    description:
      "Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi. Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi. Toyota Camry dunyoning eng ko'p sotiladigan o'rta sinf sedanlaridan biri. Ishonchlilik, qulay salon va tejamkor dvigatel uning asosiy afzalliklari hisoblanadi.",
    generations: [
      { year: 1982, title: "I avlod (V10)", changes: "Birinchi Camry — front-wheel drive platformasida, 1.8L dvigatel bilan chiqdi." },
      { year: 1986, title: "II avlod (V20)", changes: "Kuzov kengaytirildi, 2.0L dvigatel qo'shildi, ichki bezak yaxshilandi." },
      { year: 1991, title: "III avlod (V30)", changes: "Yangi platforma, 2.2L va 3.0L V6 dvigatellar, xavfsizlik sistemasi kuchaytirildi." },
      { year: 1996, title: "IV avlod (V40)", changes: "Zamonaviy dizayn, dual airbag standart sifatida, avtomatik klimat-kontrol." },
      { year: 2001, title: "V avlod (V30)", changes: "Ichki bezak tubdan yangilandi, 2.4L 4-silindrli va 3.0L V6 dvigatellar." },
      { year: 2006, title: "VI avlod (V40)", changes: "Sportroq dizayn, 2.4L va 3.5L V6, birinchi marta gibrid versiya (AQSh uchun)." },
      { year: 2011, title: "VII avlod (V50)", changes: "Platforma yangidan qurild, 2.5L dvigatel, LED faralar, Toyota Safety Sense tizimi." },
      { year: 2017, title: "VIII avlod (V70)", changes: "TNGA platformasi, tubdan o'zgargan dizayn, 2.5L gibrid versiya global bozorga chiqdi." },
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
      { year: 1951, title: "I avlod (BJ)", changes: "Birinchi Land Cruiser — Jeep CJ-3A ga o'xshash dizayn, harbiy maqsadlar uchun yaratilgan." },
      { year: 1960, title: "FJ40 seriya", changes: "Ikonik to'rtburchak kuzov, off-road imkoniyatlari kengaytirildi, global eksportga chiqdi." },
      { year: 1967, title: "FJ55 seriya", changes: "Birinchi marta oila uchun mo'ljallangan wagon kuzov, 7 o'rindiq." },
      { year: 1980, title: "BJ60/HJ60 seriya", changes: "Yangi platforma, dvizel dvigatel opsiyasi, luxe salon bezagi." },
      { year: 1990, title: "80 seriya (FJ80)", changes: "Zamonaviy karobka, full-time 4WD, ABS tizimi, 7 o'rindiq kengaytirildi." },
      { year: 1998, title: "100 seriya", changes: "Adaptiv kruz-kontrol, tubdan yangi ichki bezak, V8 dvigatel opsiyasi." },
      { year: 2007, title: "200 seriya", changes: "Yangi platforma, Kinetic Dynamic Suspension System, kuchli V8 4.5L turbodiezel." },
      { year: 2021, title: "300 seriya", changes: "TNGA-F platformasi, V6 dvigatel (V8 o'rniga), 48V mild-hybrid tizimi, zamonaviy multimedia." },
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
      { year: 1975, title: "E21 (I avlod)", changes: 'Birinchi rasmiy "3 Seriya" nomi bilan chiqdi, 4-silindrli dvigatellar, sport dizayn.' },
      { year: 1982, title: "E30 (II avlod)", changes: "Ikonik kuzov dizayni, M3 sport versiyasi paydo bo'ldi, kabriolet varianti qo'shildi." },
      { year: 1990, title: "E36 (III avlod)", changes: "Kengaytirilgan salon, VANOS dvigatel texnologiyasi, birinchi marta compact variant." },
      { year: 1998, title: "E46 (IV avlod)", changes: "Tubdan yangi platforma, xavfsizlik tizimi kuchaytirildi, Dynamic Stability Control." },
      { year: 2005, title: "E90 (V avlod)", changes: "iDrive multimedia tizimi, turbodiezel opsiyalar kengaytirildi, efficient dynamics dasturi." },
      { year: 2012, title: "F30 (VI avlod)", changes: "Engil alyuminiy elementlar, EfficientDynamics texnologiyasi, 3-silindrli dvigatel varianti." },
      { year: 2019, title: "G20 (VII avlod)", changes: "Yangi platforma, 48V mild-hybrid, BMW OS 7.0 multimedia, uzunlamasına kengaytirilgan salon." },
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
      { year: 1953, title: "W120 Ponton", changes: 'Birinchi zamonaviy Mercedes sedan dizayni — "Ponton" uslubi, 1.8L dvigatel.' },
      { year: 1961, title: "W110/W111 Fintail", changes: '"Fintail" qanotli dizayn, birinchi crumple zone xavfsizlik tizimi, dünyo miqyosidagi yengilik.' },
      { year: 1968, title: "W114/W115", changes: "Yangi platforma, ko'proq variantlar, injector dvigatel tizimi joriy etildi." },
      { year: 1976, title: "W123", changes: "1 milliondan ortiq sotilgan dastlabki E-Class, ishonchlilik standarti o'rnatildi." },
      { year: 1984, title: "W124", changes: 'Birinchi "E-Class" nomi, ABS, SRS airbag, galogen faralar.' },
      { year: 1995, title: "W210", changes: "Oval faralar dizayni, ESP birinchi marta seriyali avtomobilga o'rnatildi." },
      { year: 2002, title: "W211", changes: "COMAND multimedia tizimi, PRE-SAFE texnologiyasi — inqilobiy xavfsizlik yechimi." },
      { year: 2009, title: "W212", changes: "LED DRL faralar, BlueEFFICIENCY tizimi, yaxshilangan aerodynamika." },
      { year: 2016, title: "W213", changes: "MBUX multimedia, E 350 e plug-in gibrid, 64 rangli ambient yoritish." },
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
      { year: 1972, title: "I avlod (SB1)", changes: "Birinchi Civic — kichik, yengil, 1.2L dvigatel, Yaponiyadan tashqarida ham tez mashhur bo'ldi." },
      { year: 1979, title: "II avlod", changes: "Kengaytirilgan kuzov, CVCC dvigatel texnologiyasi — ilk yoqilg'i tejovchi tizim." },
      { year: 1983, title: "III avlod", changes: "Front-wheel drive to'liq joriy etildi, hatchback va sedan variantlari." },
      { year: 1987, title: "IV avlod", changes: "Aerodynamik dizayn, DOHC dvigatel, Civic Si sport versiyasi chiqdi." },
      { year: 1991, title: "V avlod", changes: "VTEC dvigatel texnologiyasi — past aylanishda tejamkorlik, yuqori aylanishda quvvat." },
      { year: 1995, title: "VI avlod", changes: "Yaxshilangan xavfsizlik, Honda R&D markazi Swindon (Buyuk Britaniya)da ishlab chiqarishni boshladi." },
      { year: 2000, title: "VII avlod", changes: "Yangi platforma, i-VTEC dvigatel, IMA gibrid versiyasi (Civic Hybrid) chiqdi." },
      { year: 2005, title: "VIII avlod", changes: "Futuristik ichki dizayn, katta shisha sirt, 1.8L i-VTEC motor." },
      { year: 2011, title: "IX avlod", changes: "Yoqilg'i sarfi kamaytirildi, Eco Assist tizimi qo'shildi." },
      { year: 2015, title: "X avlod", changes: "Tubdan yangilandi, turbocharged 1.5L VTEC Turbo dvigatel, sportroq kuzov." },
      { year: 2021, title: "XI avlod", changes: "Yangi platforma, HFCT texnologiyasi, Honda Sensing xavfsizlik paketi standart." },
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
      { year: 1964, title: "I avlod (1964–1973)", changes: 'Birinchi Mustang — 2+2 konfigurasiya, 2.8L–7.0L dvigatel variantlari. "Pony car" tushunchasini yaratdi.' },
      { year: 1974, title: "II avlod (Mustang II)", changes: "Neft inqirozi tufayli kichiklashtirildi, 4-silindrli dvigatel. Eng munozarali avlod." },
      { year: 1979, title: "III avlod (Fox body)", changes: "Yangi Fox platforma, 5.0L V8 opsiyasi, klassik sport imidj qaytdi." },
      { year: 1994, title: "IV avlod (SN95)", changes: "Yangilangan Fox platforma, retro-zamonaviy dizayn, 3.8L V6 va 5.0L V8." },
      { year: 1999, title: "IV.5 (New Edge)", changes: '"New Edge" dizayn — keskin burchaklar, GT va Cobra versiyalari kuchaytirildi.' },
      { year: 2005, title: "V avlod (S197)", changes: '"Retro-modern" dizayn inqilobi — 1960lardan ilhom, zamonaviy texnologiya. Juda mashhur bo\'ldi.' },
      { year: 2015, title: "VI avlod (S550)", changes: "Birinchi marta mustaqil orqa suspenziya, global bozorga chiqdi (o'ng rul opsiyasi), 2.3L EcoBoost turbo." },
      { year: 2024, title: "VII avlod (S650)", changes: "Dark Horse versiyasi, 7-pog'onali manual KPP, 500 HP V8, raqamli kokpit." },
    ],
    funFacts: [
      "Birinchi Mustang 1964-yil 17-aprelda New York World's Fair da taqdim etildi va 24 soat ichida 22,000 ta buyurtma keldi.",
      "\"Bullitt\" (1968) filmidagi Mustang GT390 ko'pur sahnasi avtomobil tarixidagi eng mashhur ta'qib sahnasi hisoblanadi.",
      'Mustang nomi II Jahon Urushidagi "P-51 Mustang" qiruvchi samolyotidan olingan.',
      "2015-yilda Ford Mustang ni birinchi marta o'ng rul bilan chiqardi — butun dunyo uchun.",
    ],
  },
  {
    slug: "volkswagen-golf",
    uzbekistanSince: undefined,
    description:
      "Volkswagen Golf — Yevropa avtomobil bozorining eng mashhur hatchback'i. Sifat, qulay haydash va keng variantlar bilan 50 yildan ortiq yetakchilikni saqlamoqda.",
    generations: [
      { year: 1974, title: "I avlod (Mk1)", changes: "Legendary Giugiaro dizayni, birinchi GTI sport versiyasi (1976). VW Beetle o'rnini egalladi." },
      { year: 1983, title: "II avlod (Mk2)", changes: "Kengaytirildi, G60 Supercharger texnologiyasi, Rallye Golf versiyasi." },
      { year: 1991, title: "III avlod (Mk3)", changes: "Yaxshilangan xavfsizlik, TDI dvizel dvigatel — tejamkorlikda inqilob." },
      { year: 1997, title: "IV avlod (Mk4)", changes: "Premium ichki bezak, 4MOTION AWD opsiyasi, R32 versiyasi 241 HP bilan." },
      { year: 2003, title: "V avlod (Mk5)", changes: "Yangi platforma, DSG ikki muftali avtomat KPP — texnologik yutuq." },
      { year: 2008, title: "VI avlod (Mk6)", changes: "Yaxshilangan sifat, GTI va R yaxshilangan versiyalari, bluemotion TDI." },
      { year: 2012, title: "VII avlod (Mk7)", changes: "MQB platforma, kuchli ammo yengil (50 kg kamaydi), GTI 220 HP, GTE plug-in gibrid." },
      { year: 2019, title: "VIII avlod (Mk8)", changes: "Raqamli kokpit, IQ.DRIVE xavfsizlik tizimi, plug-in gibrid va e-Golf versiyalari." },
    ],
    funFacts: [
      "Golf dunyoda eng ko'p sotiladigan avtomobillar ro'yxatida (Toyota Corolla dan keyin ikkinchi o'rin, ba'zan birinchi).",
      'GTI versiyasi 1976-yilda "hot hatch" janrini yaratdi — kichik ammo tez avtomobil tushunchasining otasi.',
      "Golf Mk1 dizayni Giorgio Giugiaro tomonidan yaratilgan — avtomobil dizaynining eng mashhur yaratuvchilaridan biri.",
      "VW Golf haqida 35 dan ortiq kitob yozilgan — birorta ham avtomobil bunga erishgan emas.",
    ],
  },

  // ─── AUDI TARIXIY VA KLASSIK ─────────────────────────────────────────────────
  {
    slug: "auto-union-type-c",
    description:
      "Auto Union Type C — 1936-yilda Ferdinand Porsche tomonidan loyihalashtirilgan va Grand Prix poyga tarixida inqilob qilgan mid-engine V16 poyga avtomobili. 520 HP, 340 km/h va Tazio Nuvolari kabi afsonaviy haydovchilar bilan Grand Prix poygalarini hukmronlik qilgan.",
    generations: [
      { year: 1934, title: "Type A", changes: "Birinchi Auto Union GP avtomobili. 4.4L V16, 295 HP. Avus poygasida 317 km/h." },
      { year: 1935, title: "Type B", changes: "5.0L V16, 375 HP. Hans Stuck bilan qator g'alabalar." },
      { year: 1936, title: "Type C", changes: "6.0L V16, 520 HP. Bernd Rosemeyer va Tazio Nuvolari — afsonaviy haydovchilar." },
      { year: 1938, title: "Type D", changes: "3.0L V12 supercharged. Yangi formula uchun moslashtirilgan." },
    ],
    funFacts: [
      "Ferdinand Porsche — Auto Union poyga avtomobillarini loyihalagan. Keyinchalik Porsche kompaniyasini qurdi.",
      "Type C — 340 km/h. 1936-yilda dunyo tezlik rekordini o'rnatdi. Bu rekord 10 yil davomida ushlab turildi.",
      "Tazio Nuvolari — Auto Union Type C bilan 1936 German Grand Prix da 'muzlat' g'alaba qozondi.",
      "4 halqali Audi logotipi 1932-yilgi Auto Union birlashmasini ifodalaydi: Audi, Horch, DKW, Wanderer.",
    ],
  },
  {
    slug: "audi-100-c1",
    description:
      "Audi 100 C1 — 1968-yilda Audi ning zamonaviy tarixini boshlagan va kompaniyani mustaqil brend sifatida qayta shakllantirgan model. Ludwig Kraus tomonidan yashirincha ishlab chiqilgan bu sedan Volkswagen rahbariyatining rozilligisiz taqdim etildi.",
    generations: [
      { year: 1968, title: "C1 (I avlod)", changes: "1.8L dvigatel, 80 HP. VW rahbariyatiga sir saqlab ishlab chiqilgan. Audi ning zamonaviy boshlanishi." },
      { year: 1976, title: "C2 (II avlod)", changes: "Yangi platforma, 1.6L va 2.0L dvigatellar, Avant (kombi) varianti." },
      { year: 1982, title: "C3 (III avlod)", changes: "Aerodynamik dizayn (Cd 0.30 — rekord), quattro AWD opsiyasi." },
      { year: 1991, title: "C4 (IV avlod)", changes: "Oxirgi Audi 100 — 1994-yildan A6 nomi oldi." },
    ],
    funFacts: [
      "Audi 100 C1 VW rahbariyatidan yashirincha ishlab chiqildi — Audi muhandislari sir saqlab ishladi.",
      "C3 avlodi (1982) Cd 0.30 aerodynamika koeffitsienti — o'sha davr uchun dunyo rekordi.",
      "Audi 100 C3 Audi ning 'Vorsprung durch Technik' (Texnologiya orqali yetakchilik) shiorini mashhur qildi.",
      "1994-yildan Audi 100 A6 nomini oldi — raqamli nomlash tizimiga o'tish.",
    ],
  },
  {
    slug: "audi-quattro",
    description:
      "Audi Quattro — 1980-yilda to'liq g'ildirak haydash tizimi (AWD) bilan qurollangan birinchi seriyali yo'l avtomobili. Rally poygalarida hukmronlik qilib, avtomobil sanoatini tubdan o'zgartirgan bu model 'Quattro' nomini eng mashhur AWD tizimi nomiga aylantirdi.",
    generations: [
      { year: 1980, title: "Audi Quattro (asl)", changes: "2.1L 5 silindrli turbo, 200 HP, permanent AWD. Rally poygalari uchun homologatsiya modeli." },
      { year: 1984, title: "Sport Quattro", changes: "Qisqartirilgan asos (77.4 sm), 2.1L turbo 306 HP. Rally B-Group uchun." },
      { year: 1987, title: "Oxirgi versiya", changes: "RR (right-hand drive) va yangilangan interior. 1991-yilda ishlab chiqarish tugadi." },
    ],
    funFacts: [
      "Audi Quattro — seriyali yo'l avtomobilida permanent AWD birinchi marta. Hannes Mikkola bilan 1981 Rally tatb etildi.",
      "Stig Blomqvist Quattro bilan 1984 World Rally Championship ni yutdi — rallida hukmronlik davri.",
      "Atigi 11,452 ta Quattro ishlab chiqarilgan. Bugungi kunda klassik kolleksion: 100,000–200,000 dollar.",
      "'Quattro' so'zi italyanca 'to'rt' demak. Hozir barcha Audi AWD modellari shu nomni oladi.",
    ],
  },
  {
    slug: "audi-sport-quattro",
    description:
      "Audi Sport Quattro — 1984-yilda World Rally Championship B-Group homologatsiyasi uchun ishlab chiqarilgan 306 HP li poyga modeli. 77.4 sm qisqartirilgan asos, karbon va kevlar kuzov va eng zo'r rally texnologiyasi bilan jihozlangan bu model rallida afsonaga aylandi.",
    generations: [
      { year: 1984, title: "Sport Quattro (yo'l versiyasi)", changes: "2.1L turbo 306 HP, qisqartirilgan asos 77.4 sm, karbon/kevlar kuzov elementlari. Atigi 224 ta." },
      { year: 1984, title: "Sport Quattro S1 (poyga)", changes: "E2 versiyasi: 500+ HP, WRC B-Group hukmronligi — Audi ichida afsonaviy model." },
    ],
    funFacts: [
      "Sport Quattro S1 E2 — 500 HP +, o'sha davr uchun inqilobiy poyga avtomobili.",
      "Atigi 224 ta Sport Quattro yo'l versiyasi ishlab chiqarilgan. Bugungi kunda 400,000–700,000 dollar.",
      "Walter Röhrl Sport Quattro bilan Pikes Peak hillclimb rekordini 1987-yilda qo'ydi: 10:47.85.",
      "Sport Quattro qisqa asosi tufayli 'biraz qo'rqinchli' haydash xususiyatiga ega deb tanilgan.",
    ],
  },

  // ─── AUDI A-SERIYALARI ────────────────────────────────────────────────────────
  {
    slug: "audi-a1",
    uzbekistanSince: undefined,
    description:
      "Audi A1 — 2010-yilda premium kichik hatchback segmentida taqdim etilgan eng kichik Audi modeli. Mini Cooper va Polo GTI ga raqobat sifatida yaratilgan A1 premium materiallar, quattro AWD opsiyasi va S1 versiyasida 231 HP bilan kichik sinf uchun noodatiy xususiyatlar taklif etdi.",
    generations: [
      { year: 2010, title: "8X (I avlod)", changes: "3 eshikli hatchback. 1.2T, 1.4T, 1.6 TDI. S1 — 2.0T quattro, 231 HP." },
      { year: 2018, title: "GB (II avlod)", changes: "Faqat 5 eshikli. Virtual Cockpit, 25 TFSI va 35 TFSI. S1 yo'q — discontinued." },
    ],
    funFacts: [
      "A1 S1 — 231 HP, 5.8 soniya 0-100 km/h. Kichik hatchback sinfida juda tez.",
      "A1 II avlodida S1 varianti bekor qilindi — hatchback sifatida quattro AWD yo'q.",
      "A1 Virtual Cockpit (raqamli panelni): birinchi marta kichik sinf uchun taklif etildi.",
      "A1 nin ichki bezagi A4 va A6 dan past emas — premium materiallar kichik sinf uchun ham.",
    ],
  },
  {
    slug: "audi-a3",
    uzbekistanSince: undefined,
    description:
      "Audi A3 — 1996-yildan boshlab kompakt premium hatchback va sedan segmentida BMW 1/2 Seriya va Mercedes C-Class ga raqobat qilayotgan model. Golf platformasida qurilgan A3 quattro AWD, S3 va RS3 versiyalari bilan sport haydash dinamikasini taklif etadi.",
    generations: [
      { year: 1996, title: "8L (I avlod)", changes: "Golf IV platformasi, 3 va 5 eshikli. 1.8T quattro — 180 HP." },
      { year: 2003, title: "8P (II avlod)", changes: "Golf V platformasi, S3 — 265 HP, DSG ikki muftali karobka." },
      { year: 2012, title: "8V (III avlod)", changes: "MQB platformasi, sedan varianti paydo bo'ldi, RS3 — 367 HP." },
      { year: 2020, title: "8Y (IV avlod)", changes: "Yangi platforma, OLED chiroqlar, RS3 — 400 HP, 0-100 km/h 3.8 soniya." },
    ],
    funFacts: [
      "RS3 (IV avlod) — 400 HP, 2.5L 5 silindrli turbo. Nürburgring kompakt sedan rekordi: 7:40.748.",
      "A3 Golf platformasida qurilgani siri emas — Audi VA (Volkswagen Auto Group) ichida.",
      "A3 sedan — Golf ning premium sedan analogi. Lekin premium narxda.",
      "A3 g-tron — metan gazida ishlaydigan varianti. Germaniyada gaz stansiyalarida to'ldirish mumkin.",
    ],
  },
  {
    slug: "audi-a4",
    uzbekistanSince: 2003,
    description:
      "Audi A4 — 1994-yildan boshlab o'rta sinf sedanlar segmentida BMW 3 Seriya va Mercedes C-Class bilan 30 yillik raqobat olib borayotgan model. S4 va RS4 versiyalari sport haydash, quattro AWD esa barcha sharoit imkonini beradi.",
    generations: [
      { year: 1994, title: "B5 (I avlod)", changes: "Birinchi A4 — Audi 80 ni almashtirdi. 1.8T, 2.8 V6, S4 biturbo — 265 HP." },
      { year: 2000, title: "B6 (II avlod)", changes: "Yangi platforma, ESP standard, RS4 — 380 HP V8 biturbo." },
      { year: 2004, title: "B7 (III avlod)", changes: "Facelift, RS4 — 420 HP V8. B7 RS4 ko'pchilik 'eng yaxshi RS4' deydi." },
      { year: 2007, title: "B8 (IV avlod)", changes: "Yangi MLB platforma, S4 — 333 HP V6 supercharged, A4 allroad." },
      { year: 2015, title: "B9 (V avlod)", changes: "Virtual Cockpit, S4 3.0T biturbo — 354 HP, RS4 — 450 HP." },
      { year: 2023, title: "B10 (VI avlod)", changes: "Plug-in hybrid standart. RS4 avaklanadi — RS5 ni birlashtiradi." },
    ],
    funFacts: [
      "B7 RS4 — 420 HP 4.2L V8, 8300 ob/min. Ko'pchilik 'barcha davrlarning eng yaxshi RS4' deydi.",
      "A4 allroad — A4 kombi ning off-road versiyasi. Real yerlift va quattro bilan.",
      "A4 B8 dan Virtual Cockpit (raqamli panel) dunyoda birinchi marta joriy etildi.",
      "30 yildan beri BMW 3 Seriya ning eng yaqin raqobatchisi — ular o'rtasidagi raqobat sanoat afsonasiga aylangan.",
    ],
  },
  {
    slug: "audi-a5",
    uzbekistanSince: undefined,
    description:
      "Audi A5 — 2007-yilda A4 platformasida qurilgan va Ingolstadt dizayn studiyasining shoh asari deb tan olingan coupe. S5 va RS5 versiyalari bilan sport haydash dinamikasini chiroyli dizayn bilan birlashtirgan model.",
    generations: [
      { year: 2007, title: "8T (I avlod)", changes: "2.0T va 3.0T TFSI, S5 — 354 HP V8, RS5 — 450 HP V8." },
      { year: 2016, title: "F5 (II avlod)", changes: "Yangi MLB platforma, S5 — 354 HP biturbo V6, RS5 — 450 HP biturbo V6." },
    ],
    funFacts: [
      "Audi A5 dizayneri Walter de Silva — keyinchalik Volkswagen Group dizayn direktori bo'ldi.",
      "A5 Sportback — 4 eshikli coupe. CLA va CLS ga raqobatchi, lekin Audi uslubida.",
      "RS5 II avlod — 450 HP V6 biturbo, 0-100 km/h 3.9 soniya. V8 bo'lmasa ham xuddi tez.",
      "A5 Cabriolet — tkanli tom bilan ochiq kabrio varianti.",
    ],
  },
  {
    slug: "audi-a6",
    uzbekistanSince: 2005,
    description:
      "Audi A6 — 1994-yildan boshlab biznes sedan segmentida BMW 5 Seriya va Mercedes E-Class bilan raqobat qilib kelayotgan model. RS6 Avant versiyasi — 600+ HP li sport kombi sifatida avtomobil dunyosining eng mashhur 'sleeper' modeli.",
    generations: [
      { year: 1994, title: "C4 (Audi 100 dan A6 ga)", changes: "Birinchi A6 nomi. 1994-yildan A6 nomi qo'llana boshlandi. 2.0L va 2.6L V6." },
      { year: 1997, title: "C5 (II avlod)", changes: "Yangi platforma, allroad quattro variant, RS6 — 450 HP V8 biturbo." },
      { year: 2004, title: "C6 (III avlod)", changes: "Matrix LED prototip, 5.2L V10 S6 — 435 HP." },
      { year: 2011, title: "C7 (IV avlod)", changes: "Alyuminiy kuzov elementlari, RS6 Avant — 560 HP V8." },
      { year: 2018, title: "C8 (V avlod)", changes: "48V mild-hybrid, Virtual Cockpit Plus, RS6 — 600 HP, 0-100 km/h 3.6 soniya." },
    ],
    funFacts: [
      "RS6 Avant C8 — 600 HP, 305 km/h, kombi kuzov. 'Dunyo eng tez oilaviy avtomobili' — hakiqiy.",
      "RS6 Avant — 'sleeper' (ko'rinishda oddiy, lekin ichida supercar) avtomobilining timsoli.",
      "A6 allroad — kombi va SUV o'rtasidagi tushuncha. Baland, quattro, va amaliy.",
      "C7 A6 alyuminiy kuzov elementlari kuzov og'irligini 80 kg ga kamaytirdi.",
    ],
  },
  {
    slug: "audi-a7",
    uzbekistanSince: undefined,
    description:
      "Audi A7 — 2010-yilda CLS va Panamera ga raqobat sifatida yaratilgan '4 eshikli sportback coupe'. A6 platformasida qurilgan, ammo coupe silueti, keng salon va RS7 versiyasida 630 HP bilan Audi ning eng chiroyli modellaridan biri.",
    generations: [
      { year: 2010, title: "4G (I avlod)", changes: "A6 platformasi, 4 eshikli sportback. S7 — 420 HP, RS7 — 560 HP V8 biturbo." },
      { year: 2018, title: "4K (II avlod)", changes: "48V mild-hybrid, RS7 — 630 HP, 0-100 km/h 3.6 soniya. 21 dyuymli disk opsiyasi." },
    ],
    funFacts: [
      "RS7 II avlod — 630 HP, 305 km/h (limited). 'Praktik supercar' — katta yuk joyi bilan.",
      "A7 Sportback — CLS va Panamera ga raqobat. Audi uslubida eng chiroyli praktik model.",
      "A7 II avlod 48V mild-hybrid — tormozlash energiyasini qayta ishlatadi, tejamkorlik.",
      "RS7 'sleeper' sifatida tanilgan — ko'rinishda biznes sedan, ichida supercar.",
    ],
  },
  {
    slug: "audi-a8",
    uzbekistanSince: 2007,
    description:
      "Audi A8 — 1994-yildan boshlab flagman sedan sifatida BMW 7 Seriya va Mercedes S-Class ga raqobat qilib kelayotgan model. Birinchi alyuminiy space frame kuzovli seriyali sedan bo'lgan A8 texnologik innovatsiyalarda Audi ning peshqadam ekotipini namoyon etadi.",
    generations: [
      { year: 1994, title: "D2 (I avlod)", changes: "Birinchi seriyali alyuminiy space frame sedan. 2.8L V6 dan 6.0L W12 gacha." },
      { year: 2002, title: "D3 (II avlod)", changes: "Uzaytirilgan L variant, W12 600 HP — A8 ning eng kuchli motor opsiyasi." },
      { year: 2009, title: "D4 (III avlod)", changes: "Matrix LED faralar birinchi marta, night vision, torque vectoring." },
      { year: 2017, title: "D5 (IV avlod)", changes: "Traffic Jam Pilot — Level 3 avtopilot (Germaniyada). 48V mild-hybrid standart." },
    ],
    funFacts: [
      "D2 A8 (1994) — birinchi seriyali alyuminiy space frame sedan. Kuzov 40% yengil, ammo ikki baravar qattiq.",
      "W12 A8 — 6.0L 12 silindrli dvigatel, 500+ HP. VW Group ning W seriyali dvigateli.",
      "Matrix LED faralar — birinchi marta A8 D4 da joriy etildi. Endi barcha Audi modellarida standart.",
      "A8 D5 Traffic Jam Pilot: 60 km/h gacha haydovchisiz avtomatik harakatlanadi (Germaniya yo'llarida).",
    ],
  },

  // ─── AUDI Q-SERIYALARI ────────────────────────────────────────────────────────
  {
    slug: "audi-q2",
    uzbekistanSince: undefined,
    description:
      "Audi Q2 — 2016-yilda subcompact crossover segmentida taqdim etilgan Audi ning eng kichik SUV modeli. Geometrik dizayn va cross bar elementlari bilan ajralib turuvchi Q2 RS Q2 versiyasida 300 HP taklif etadi.",
    generations: [
      { year: 2016, title: "GA (I avlod)", changes: "A3 platformasi, RS Q2 — 300 HP, 0-100 km/h 4.5 soniya. 'Cross bar' dizayn elementi." },
      { year: 2020, title: "GA facelift", changes: "Virtual Cockpit, yangi motor linyasi, e-tron versiyasi yo'q." },
    ],
    funFacts: [
      "RS Q2 — 300 HP, 4.5 soniya 0-100. Kichik crossover uchun juda tez — kategoriyada rekord quvvat.",
      "Q2 'cross bar' dizayn elementi — C-ustundan bamper gacha uzluksiz bir chiziq. Noyob identifikatsiya.",
      "Q2 Audi ning eng kichik SUV modeli — shahar harakati uchun ideal o'lcham.",
      "Subcompact premium crossover segmentida GLA, X1 va Q3 bilan raqobat.",
    ],
  },
  {
    slug: "audi-q3",
    uzbekistanSince: undefined,
    description:
      "Audi Q3 — 2011-yilda kompakt crossover segmentida taqdim etilgan model. MQB platformasida qurilgan II avlod Q3 kengaytirilgan salon, virtual cockpit va RS Q3 versiyasida 400 HP gacha quvvat bilan segmentda yetakchi o'rinni egallamoqda.",
    generations: [
      { year: 2011, title: "8U (I avlod)", changes: "Golf VI/VII platformasi, 2.0 TFSI quattro — 211 HP, RS Q3 — 310 HP." },
      { year: 2018, title: "F3 (II avlod)", changes: "MQB platformasi, kengaytirilgan salon, Virtual Cockpit, RS Q3 — 400 HP." },
    ],
    funFacts: [
      "RS Q3 II avlod — 400 HP, 0-100 km/h 4.5 soniya. Kompakt crossover uchun juda tez.",
      "Q3 Sportback — coupe siluetli Q3 varianti. X2 va GLC Coupe ga raqobat.",
      "II avlod salon hajmi sezilarli oshdi — B segmentiga yaqin, C segment quyligi.",
      "Q3 Audi ning global miqyosda eng ko'p sotiladigan modellaridan biri.",
    ],
  },
  {
    slug: "audi-q5",
    uzbekistanSince: 2010,
    description:
      "Audi Q5 — 2008-yilda taqdim etilgan o'rta kompakt crossover. MLB platformasida qurilgan Q5 BMW X3 va Mercedes GLC ga to'g'ridan-to'g'ri raqobat sifatida sport haydash dinamikasini SUV quyligi bilan birlashtiradi.",
    generations: [
      { year: 2008, title: "8R (I avlod)", changes: "MLB platforma, 2.0 TFSI quattro — 211 HP, 3.0 TDI — 239 HP. SQ5 — 354 HP." },
      { year: 2016, title: "FY (II avlod)", changes: "Alyuminiy kuzov elementlari, Virtual Cockpit, SQ5 — 354 HP biturbo V6." },
    ],
    funFacts: [
      "Q5 Audi ning eng ko'p sotiladigan modeli — A4 dan ham ko'p.",
      "SQ5 — 354 HP V6 biturbo, yer usti quyligi bilan. 'Sport va amaliylik' birlashmasi.",
      "Q5 plug-in hybrid (Q5 55 TFSI e) — 50 km sof elektr yurishi, jami 367 HP.",
      "II avlod alyuminiy elementlari kuzov og'irligini 90 kg ga kamaytirdi.",
    ],
  },
  {
    slug: "audi-q7",
    uzbekistanSince: 2008,
    description:
      "Audi Q7 — 2005-yilda taqdim etilgan yirik 7 o'rindiqli SUV. MLB evo platformasida qurilgan zamonaviy avlod alyuminiy kuzov, 48V mild-hybrid va SQ7 versiyasida 500 HP gacha quvvat taklif etadi.",
    generations: [
      { year: 2005, title: "4L (I avlod)", changes: "7 o'rindiqli, 4.2L V8 va 3.0L V6 TDI. Birinchi Audi yirik SUV." },
      { year: 2015, title: "4M (II avlod)", changes: "Alyuminiy MLB evo platforma — 325 kg yengillashdi. SQ7 — 435 HP TDI, elektr kompressor." },
    ],
    funFacts: [
      "SQ7 TDI — 435 HP dizel SUV. Elektr kompressor birinchi marta seriyali dizel avtomobilga.",
      "II avlod 325 kg yengillashdi — alyuminiy va ultra-yengil po'lat kombinatsiyasi.",
      "Q7 Wolfsburg (VW Group) MLB evo platformasida: Porsche Cayenne va Lamborghini Urus bilan bitta platforma.",
      "Q7 Audi ning birinchi yirik SUV — 2005-yilgacha Audi SUV sektida yo'q edi.",
    ],
  },
  {
    slug: "audi-q8",
    uzbekistanSince: undefined,
    description:
      "Audi Q8 — 2018-yilda taqdim etilgan Q7 platformasida qurilgan sport coupe SUV. X6 va GLE Coupe ga raqobat sifatida yaratilgan Q8 RS Q8 versiyasida 600 HP bilan segmentdagi eng kuchli sport SUV hisoblanadi.",
    generations: [
      { year: 2018, title: "4MN (I avlod)", changes: "Q7 MLB evo platformasi, 48V mild-hybrid, RS Q8 — 600 HP V8 biturbo. Lamborghini Urus bilan bitta platforma." },
    ],
    funFacts: [
      "RS Q8 — 600 HP, 0-100 km/h 3.8 soniya, 305 km/h. Nürburgring SUV rekordi: 7:42.25.",
      "Lamborghini Urus va Porsche Cayenne Turbo S bilan bitta platforma — barchasi MLB evo.",
      "Q8 48V mild-hybrid: tormozlash va inertiya energiyasi batareyaga saqlanadi.",
      "RS Q8 Nürburgring rekordi 2022-yilda qo'yildi — 'Dunyo eng tez seriyali SUV'.",
    ],
  },

  // ─── AUDI SPORT SERIYALARI ────────────────────────────────────────────────────
  {
    slug: "audi-tt",
    uzbekistanSince: undefined,
    description:
      "Audi TT — 1998-yilda Bauhaus dizayn ruhida taqdim etilgan va kompakt sport coupe segmentida ikonik o'ringa ega bo'lgan model. TT RS versiyasida 400 HP va 5 silindrli turbo dvigatel bilan Audi sport meros an'anasini davom ettirdi.",
    generations: [
      { year: 1998, title: "8N (I avlod)", changes: "1.8T va 3.2L V6 quattro, 225 HP. Ikonik Bauhaus dizayni. TT Roadster varianti." },
      { year: 2006, title: "8J (II avlod)", changes: "Yangi platforma, 2.0T quattro, TT RS — 340 HP 5 silindrli." },
      { year: 2014, title: "8S (III avlod)", changes: "Virtual Cockpit birinchi marta, TT RS — 400 HP 5 silindrli. Oxirgi TT avlodi." },
    ],
    funFacts: [
      "TT dizayni Bauhaus harakatidan ilhom olgan — oddiy geometrik shakllar, funksionallik va chiroyli bir arada.",
      "TT RS 5 silindrli 2.5L turbo dvigatel — Audi Quattro meroschisi. O'ziga xos tovush.",
      "TT ishlab chiqarish 2023-yilda tugatildi — elektr TT tayyorlanmoqda.",
      "Birinchi TT (8N) chiqishida og'irlik taqsimoti muammosi — zadniy spoyler standart qilinishiga olib keldi.",
    ],
  },
  {
    slug: "audi-r8",
    uzbekistanSince: undefined,
    description:
      "Audi R8 — 2006-yilda Le Mans poyga g'alababarlaridan ilhom olgan va Audi ning yagona o'rta motorli supercar modeli. 5.2L V10 va 570 HP bilan jihozlangan R8 V10 Plus — 330 km/h va 3.2 soniya 0-100 km/h bilan Porsche 911 Turbo S va Ferrari 488 darajasidagi raqobatchi.",
    generations: [
      { year: 2006, title: "Typ 42 (I avlod)", changes: "4.2L V8, 420 HP. 2008-dan V10 — 525 HP. Lamborghini Gallardo bilan bitta platforma." },
      { year: 2015, title: "Typ 4S (II avlod)", changes: "5.2L V10 Plus: 610 HP, 0-100 km/h 3.2 soniya, 330 km/h. Karbon fiber kuzov elementlari." },
    ],
    funFacts: [
      "Audi R8 V10 Plus — 610 HP, 330 km/h. Lamborghini Huracan bilan bitta V10 dvigatel va platforma.",
      "R8 e-tron (2015) — elektr supercar. Atigi 100 ta ishlab chiqarilgan. Lekin seriyali o'tmadi.",
      "Le Mans 24 Soat poygasidagi R10 TDI va R18 dan ilhom olgan dizayn.",
      "R8 Audi R-series poyga avtomobillarining yo'l versiyasi — LMP1 texnologiyasini ko'chaga olib chiqdi.",
    ],
  },
  {
    slug: "audi-rs6",
    uzbekistanSince: undefined,
    description:
      "Audi RS6 Avant — 2002-yildan boshlab 'oilaviy supercar' konsepsiyasini ifodalab kelayotgan sport kombi. V8 yoki V10 dvigatel, quattro AWD va kombi kuzov kombinatsiyasi RS6 Avant ni 'dunyo eng tez oilaviy avtomobili' unvoniga loyiq qildi.",
    generations: [
      { year: 2002, title: "C5 RS6 (I avlod)", changes: "4.2L V8 biturbo, 450 HP. Birinchi RS6 — Avant va sedan variantlari." },
      { year: 2008, title: "C6 RS6 (II avlod)", changes: "5.0L V10 biturbo, 580 HP. Lamborghini Gallardo dvigateli asosida. Faqat Avant." },
      { year: 2012, title: "C7 RS6 (III avlod)", changes: "4.0L V8 biturbo, 560 HP. Cylinder on demand: 4 silindrda tejamkor yurish." },
      { year: 2019, title: "C8 RS6 (IV avlod)", changes: "4.0L V8 biturbo MHEV, 600 HP, 305 km/h. 0-100 km/h 3.6 soniya. Eng tez RS6." },
    ],
    funFacts: [
      "C6 RS6 — 5.0L V10 Lamborghini Gallardo asosida. 580 HP, kombi kuzovda. 'Sleeper' ni yaratdi.",
      "C8 RS6 600 HP mild-hybrid — akseleratsiya elektr yordami bilan yaxshilanadi.",
      "RS6 Avant — Amerika da sotish 2020-yildan boshlandi. Amerikanlar ko'cha kombi modelini sevib qoldi.",
      "Nürburgring Nordschleife — RS6 C8 kombi kuzovli avtomobillar orasida rekord: 7:25.",
    ],
  },

  // ─── AUDI ELEKTR SERIYALARI ───────────────────────────────────────────────────
  {
    slug: "audi-e-tron",
    uzbekistanSince: undefined,
    description:
      "Audi e-tron — 2018-yilda taqdim etilgan Audi ning birinchi seriyali elektr SUV modeli. Tesla Model X va Jaguar I-Pace ga raqobat sifatida yaratilgan e-tron keyinchalik Q8 e-tron nomi bilan yangilandi.",
    generations: [
      { year: 2018, title: "GE (I avlod)", changes: "95 kWh batareya, 408 HP, 264 WLTP km. Audi virtual mirrors (kamera yon ko'zgular opsiyasi)." },
      { year: 2021, title: "e-tron Sportback", changes: "Coupe siluet varianti. 50 quattro: 313 HP, 379 km." },
      { year: 2023, title: "Q8 e-tron (qayta nomlash)", changes: "Yangi batareya: 106 kWh, Q8 e-tron — 600 km WLTP. RS Q8 e-tron — 600 HP." },
    ],
    funFacts: [
      "Audi e-tron virtual mirrors — kamera ko'zgular birinchi marta seriyali avtomobilga. Lekin ko'pchilik oddiy ko'zgu qoldirdi.",
      "Q8 e-tron 600 km WLTP — elektr SUV sinfida eng uzoq yurish masofalaridan biri.",
      "RS Q8 e-tron — 600 HP, 0-100 km/h 3.4 soniya. Elektr RS model.",
      "e-tron Graz (Avstriya) zavodida ishlab chiqariladi — G-Class bilan bir xil shahar!",
    ],
  },
  {
    slug: "audi-e-tron-gt",
    uzbekistanSince: undefined,
    description:
      "Audi e-tron GT — 2021-yilda Porsche Taycan bilan bitta J1 platfosmasida qurilgan elektr gran turismo. RS e-tron GT versiyasida 646 HP va 0-100 km/h 3.3 soniya bilan Audi tarixidagi eng tez seriyali model.",
    generations: [
      { year: 2021, title: "FW (I avlod)", changes: "e-tron GT quattro: 476 HP, 488 km. RS e-tron GT: 646 HP, 0-100 km/h 3.3 soniya." },
      { year: 2024, title: "FW facelift", changes: "RS e-tron GT Performance: 912 HP, 0-100 km/h 2.5 soniya. Batareya yaxshilandi." },
    ],
    funFacts: [
      "RS e-tron GT 2024 Performance — 912 HP. Audi tarixidagi eng kuchli seriyali model.",
      "Porsche Taycan bilan bitta J1 platforma — lekin boshqacha sozlash, boshqacha haydash hissi.",
      "e-tron GT 800V zaryadlash arxitekturasi — 5 daqiqada 100 km uchun quvvat.",
      "e-tron GT dizayni Concept tarzda (2018) taqdim etilgan — seriyali versiya deyarli o'zgarmadi.",
    ],
  },
  {
    slug: "audi-q4-e-tron",
    uzbekistanSince: undefined,
    description:
      "Audi Q4 e-tron — 2021-yilda Volkswagen MEB platformasida qurilgan kompakt elektr crossover. ID.4 bilan bir platformada, ammo Audi premium interior va quattro AWD bilan farqlanadi.",
    generations: [
      { year: 2021, title: "FZ (I avlod)", changes: "MEB platforma, Q4 35 e-tron: 170 HP, 341 km. Q4 50 e-tron quattro: 299 HP, 341 km." },
    ],
    funFacts: [
      "Q4 e-tron VW ID.4 bilan bitta platforma — lekin Audi interior va brend premium narxda.",
      "Q4 Sportback — coupe siluetli varianti. Kichikroq Q8 e-tron Sportback.",
      "Audi ning elektr modellarida eng arzon — Q4 e-tron Audi'ga kirish nuqtasi (elektr uchun).",
      "MEB platforma — Volkswagen Group ning barcha mass-market elektr modellari uchun yagona asos.",
    ],
  },

  // ─── MERCEDES-BENZ TARIXIY (1928–1963) ───────────────────────────────────────
  {
    slug: "mercedes-ssk",
    description:
      "Mercedes-Benz SSK — 1928-1932 yillarda ishlab chiqarilgan va 'barcha davrlarning eng chiroyli poyga avtomobili' unvonini olib kelgan supercharged roadster. Ferdinand Porsche tomonidan loyihalashtirilgan SSK — 225 HP va 190 km/h bilan o'z davrining eng tez avtomobili edi.",
    generations: [
      { year: 1927, title: "Benz S (asos)", changes: "Ferdinand Porsche loyihalagan S-seriyaning poydevori." },
      { year: 1928, title: "SSK (Super Sport Kurz)", changes: "7.0L 6 silindrli kompressor dvigatel, 225 HP. 'Kurz' — qisqa kolyor, yengilroq. Birinchi poyga g'alabalari." },
      { year: 1930, title: "SSKL (super-yengil)", changes: "Alyuminiy qismlar — 180 kg yengilroq. Mille Miglia 1931 g'olibi." },
    ],
    funFacts: [
      "SSK — Ferdinand Porsche Mercedes-Benz uchun loyihalashtirilgan so'nggi model. Keyin o'z Porsche kompaniyasini qurdi.",
      "Atigi 40 ta SSK ishlab chiqarilgan. Bugungi kunda har biri 10–15 million dollar.",
      "SSK nomi: Super Sport Kurz (nemischa: o'ta sport, qisqa). Kuchli va yengil kombinatsiya.",
      "1931-yilgi Mille Miglia da SSKL versiyasi barcha raqiblarni ortda qoldirdi.",
    ],
  },
  {
    slug: "mercedes-540k",
    description:
      "Mercedes-Benz 540K — 1936-1940 yillarda ishlab chiqarilgan va o'z davrining eng hashamatli, eng qimmat va eng chiroyli avtomobili hisoblangan supercharged gran turismo. Hitlerdening shaxsiy avtomobili va Hollywood yulduzlarining tanlovi bo'lgan bu model bugungi kunda auksionlarda rekord narxlarda sotiladi.",
    generations: [
      { year: 1934, title: "500K (asos)", changes: "5.0L kompressor dvigatel, 160 HP. 540K ning prototipi." },
      { year: 1936, title: "540K", changes: "5.4L kompressor dvigatel, 180 HP. Cabriolet A, B, C va Coupe variantlari. O'sha davrning eng qimmat avtomobili." },
    ],
    funFacts: [
      "Adolf Hitler va Herman Göring shaxsiy 540K ishlataganlar. Bu model II Jahon urushining timsoli bo'lib qoldi.",
      "2012-yilgi auksionda 540K Special Roadster $11.7 million — o'sha yilning rekord narxi.",
      "Atigi 419 ta 540K ishlab chiqarilgan. Har biri 3-6 oy davomida qo'lda yig'ilgan.",
      "Kompressor 'wail' tovushi — uning o'ziga xos belgisi. Hali ham eshitganda tanib olish mumkin.",
    ],
  },
  {
    slug: "mercedes-300sl",
    description:
      "Mercedes-Benz 300 SL 'Gullwing' — 1954-yilda taqdim etilgan va avtomobil tarixining eng ikonik modellaridan biri. Qanotdek yuqoriga ochiladigan eshiklari ('gullwing'), birinchi to'g'ridan-to'g'ri benzin in'eksiyasi va 260 km/h tezligi bilan o'z davrining eng texnologik avtomobili edi.",
    generations: [
      { year: 1952, title: "W194 Poyga (prototip)", changes: "Le Mans, Mille Miglia va Carrera Panamericana g'olibi. Seriyali versiya uchun asos." },
      { year: 1954, title: "W198 Gullwing Coupe", changes: "Birinchi to'g'ridan-to'g'ri benzin in'eksiyali seriyali avtomobil. 215 HP, 260 km/h. Atigi 1400 ta." },
      { year: 1957, title: "W198 Roadster", changes: "Gullwing Coupe o'rnini egalladi. Konvensional eshiklar, disk tormozlar qo'shildi." },
    ],
    funFacts: [
      "300 SL — seriyali avtomobillarda birinchi to'g'ridan-to'g'ri benzin in'eksiyasi (Bosch). Bu texnologiya 50 yil ichida barcha avtomobillarga tarqaldi.",
      "Gullwing eshik nomi shu modeldan kelib chiqqan — barcha qanotsimon eshiklar shu belgiga qarab ataladi.",
      "Clark Gable, Yul Brynner, Sophia Loren — Hollywood yulduzlarining 300 SL ga egaligi ma'lum.",
      "Bugungi kunda yaxshi saqlanilgan 300 SL Gullwing: 1–1.5 million dollar. Roadster: 1.5–2 million dollar.",
    ],
  },
  {
    slug: "mercedes-190sl",
    description:
      "Mercedes-Benz 190 SL — 1955-1963 yillarda 300 SL bilan parallel ishlab chiqarilgan, lekin ancha arzon va kundalik foydalanish uchun mo'ljallangan sport roadster. Nafis dizayni va qulay haydash xususiyatlari bilan Yevropa va Amerikada juda mashhur bo'lgan.",
    generations: [
      { year: 1955, title: "W121 190 SL", changes: "1.9L 4 silindrli, 105 HP. 300 SL dan ilhom olgan dizayn, lekin arzonroq narx." },
    ],
    funFacts: [
      "190 SL 300 SL bilan bir xil chassis da emas — arzonroq platforma. Lekin dizayn jihatdan juda o'xshash.",
      "25,881 ta 190 SL ishlab chiqarilgan — 300 SL dan 18 baravar ko'p.",
      "Bugungi kunda yaxshi saqlanilgan 190 SL: 80,000–150,000 dollar. Klassik kollektsion.",
      "Coco Chanel, Dean Martin va boshqa mashhurlar 190 SL ishlataganlar.",
    ],
  },
  {
    slug: "mercedes-600",
    description:
      "Mercedes-Benz 600 'Grosser' — 1963-1981 yillarda ishlab chiqarilgan va dunyodagi eng hashamatli, eng texnologik seriyali avtomobil unvonini ushlab turgan model. Papalar, shohlar, diktatorlar va rok yulduzlarining avtomobili bo'lgan bu 'Buyuk Mercedes' avtomobil tarixining cho'qqisi hisoblanadi.",
    generations: [
      { year: 1963, title: "W100 (standart)", changes: "6.3L V8, 250 HP. Gidravlik eshiklar, oynalar, o'rindiq va lyuk boshqaruvi. 5.1 metr uzunlik." },
      { year: 1965, title: "Pullman (cho'zilgan)", changes: "6.2 metr uzunlik, 6 eshik. Shohlar va prezidentlar uchun maxsus versiya." },
    ],
    funFacts: [
      "Mercedes 600 Grosser egalari: Papa Ioann XXIII, Mao Zedong, Fidel Castro, Brejnev, John Lennon, Elvis Presley.",
      "Har bir avtomobil 3-6 oy davomida qo'lda yig'ilgan. Atigi 2677 ta ishlab chiqarilgan.",
      "Gidravlik tizim — eshiklar, oynalar, o'rindiqlar, lyuk: hammasi bir tugma bilan. 1963-yil uchun inqilobiy.",
      "Hozirgi bozor narxi: 200,000–600,000 dollar. Pullman versiyasi — 1 million dollargacha.",
    ],
  },

  // ─── MERCEDES-BENZ PASSENGER SERIYALARI ──────────────────────────────────────
  {
    slug: "mercedes-a-class",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz A-Class — 1997-yilda taqdim etilgan Mercedes ning kompakt hatchback modeli. 'Moose test' inqirozidan omon o'tib, zamonaviy avlodida AMG A45 S — 421 HP bilan kichik hatchback sinfida rekord quvvatga ega bo'ldi.",
    generations: [
      { year: 1997, title: "W168 (I avlod)", changes: "Sandwich platforma — motor ostida. Moose test sinovi muvaffaqiyatsiz — ESP kiritildi." },
      { year: 2004, title: "W169 (II avlod)", changes: "Konvensional platforma, sport dizayn, Avantgarde paket." },
      { year: 2012, title: "W176 (III avlod)", changes: "Tubdan yangi — premium compact. A 45 AMG — 360 HP, keyinchalik 381 HP." },
      { year: 2018, title: "W177 (IV avlod)", changes: "MBUX multimedia, A 35 AMG va A 45 S AMG — 421 HP." },
    ],
    funFacts: [
      "W168 moose testida ag'darildi (1997) — skandal. ESP zudlik bilan standart sifatida qo'shildi.",
      "AMG A45 S — 421 HP, 2.0L 4 silindrli. Dunyodagi eng kuchli seriyali 4 silindrli dvigatel.",
      "W176 dan boshlab A-Class to'liq premium compact sifatida qayta yaratildi.",
      "A-Class Mercedes ning eng ko'p sotiladigan modeli — G yoki S dan ham.",
    ],
  },
  {
    slug: "mercedes-b-class",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz B-Class — 2005-yilda A-Class platformasida qurilgan oilaviy kompakt MPV. Baland salon, keng yuk bo'shlig'i va qulay o'tirish holati bilan oilalar va katta yoshli haydovchilar uchun mo'ljallangan.",
    generations: [
      { year: 2005, title: "W245 (I avlod)", changes: "A-Class platforma, baland o'tiradigan pozitsiya, keng salon." },
      { year: 2011, title: "W246 (II avlod)", changes: "Yangi platforma, turbodvigatellar, B 200 CDI dizel opsiyasi." },
      { year: 2018, title: "W247 (III avlod)", changes: "MBUX multimedia, elektr B-Class EQ versiyasi qo'shildi." },
    ],
    funFacts: [
      "B-Class — A-Class ga nisbatan 15 sm balandroq o'tiradigan pozitsiya: katta yoshlilar uchun qulay.",
      "Electric Drive versiyasi (2014) — Tesla texnologiyasi bilan jihozlangan. Tesla Motors raqobatchisi.",
      "Yevropa da ailalar orasida juda mashhur — shahar va yo'l sayohati uchun universal.",
      "B-Class o'zining moslashuvchan saloni tufayli wheelchair (nogironlar aravachasi) egalariga ham qulay.",
    ],
  },
  {
    slug: "mercedes-c-class",
    uzbekistanSince: 2000,
    description:
      "Mercedes-Benz C-Class — 1993-yildan boshlab 190-E o'rnini egallagan va E-Class dan kichikroq bo'lgan o'rta segment sedani. AMG C63 versiyasida 476 HP gacha quvvat taklif etib, sport sedan segmentida BMW 3 Seriya va Audi A4 ga to'g'ridan-to'g'ri raqobat qiladi.",
    generations: [
      { year: 1993, title: "W202 (I avlod)", changes: "190-E o'rnini egalladi. 4 va 6 silindrli dvigatellar, sedan va estate." },
      { year: 2000, title: "W203 (II avlod)", changes: "Sport Coupe varianti, C32 AMG kompressor — 349 HP." },
      { year: 2007, title: "W204 (III avlod)", changes: "C63 AMG V8 — 457 HP. Yangi dizayn, 7G-Tronic avtomat." },
      { year: 2014, title: "W205 (IV avlod)", changes: "S-Class darajasidagi salon, C63 AMG S — 510 HP, Burmester audio." },
      { year: 2021, title: "W206 (V avlod)", changes: "Yangi platforma, MBUX Hyperscreen opsiyasi, C63 plug-in hybrid — 680 HP." },
    ],
    funFacts: [
      "C63 AMG W204 — 6.2L V8 457 HP. Ko'pchilik 'hamma davrlarning eng yaxshi C-Class' deydi.",
      "W206 C63 AMG plug-in hybrid: 4 silindrli turbodvigatel + elektr motor = 680 HP. V8 yo'q.",
      "C-Class dunyo bo'ylab eng ko'p sotiladigan lux kompakt sedan sifatida S-Class dan ko'p sotiladi.",
      "C-Class Coupe va Cabriolet variantlari ham mavjud — to'liq model oilasi.",
    ],
  },
  {
    slug: "mercedes-cla",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz CLA — 2013-yilda A-Class platformasida qurilgan 4 eshikli coupe. S-Class styling elementlarini arzonroq narxda taklif etib, yosh haydovchilar orasida juda mashhur bo'ldi. CLA 45 AMG versiyasida 421 HP gacha quvvat taklif etadi.",
    generations: [
      { year: 2013, title: "C117 (I avlod)", changes: "A-Class platformasi, 4 eshikli coupe kuzov. CLA 45 AMG — 360 HP." },
      { year: 2019, title: "C118 (II avlod)", changes: "MBUX multimedia, yangi motor linyasi, CLA 45 S AMG — 421 HP." },
    ],
    funFacts: [
      "CLA — Mercedes ning eng aerodynamik modeli. Cd koeffitsienti 0.23 — rekord yengilroq havo qarshiligi.",
      "CLA 45 AMG 2.0L turbo: 360–421 HP, 0-100 km/h 4.0 soniya. Kompakt sport modeli uchun rekord.",
      "CLA Shooting Brake (kombi kuzov) ham mavjud — praktik va chiroyli kombinatsiya.",
      "CLA S-Class dizayn elementlarini eng arzon Mercedes modelida taklif etadi.",
    ],
  },
  {
    slug: "mercedes-cls",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz CLS — 2004-yilda '4 eshikli coupe' yangi kuzov sinfini yaratgan model. CLA dan katta, E-Class bilan bir platformada qurilgan CLS zamonaviy avtomobil dizayniga katta ta'sir ko'rsatdi — Panamera, A7, 6 Series Gran Coupe barchasi shu yo'lni ko'chirishga urindi.",
    generations: [
      { year: 2004, title: "C219 (I avlod)", changes: "Yangi '4 eshikli coupe' segment yaratdi. CLS 55 AMG kompressor — 476 HP." },
      { year: 2010, title: "C218 (II avlod)", changes: "Yangi turbodvigatellar, CLS 63 AMG — 557 HP." },
      { year: 2018, title: "C257 (III avlod)", changes: "Shooting Brake varianti, CLS 53 AMG mild-hybrid, yangi dizayn." },
    ],
    funFacts: [
      "CLS '4 eshikli coupe' segmentini yaratdi — bugungi kunda Panamera, A7, 6 Series GT bari shu yo'lda.",
      "CLS 55 AMG (2004) — 476 HP kompressor V8. O'sha davrning eng tez sedan-coupelaridan biri.",
      "CLS Shooting Brake (kombi) — eng chiroyli kombi avtomobil unvoni uchun ko'p mukofot olgan.",
      "Dizayner Stephane Jansson — keyinchalik Rolls-Royce dizayn direktori bo'ldi.",
    ],
  },
  {
    slug: "mercedes-s-class",
    uzbekistanSince: 2003,
    description:
      "Mercedes-Benz S-Class — 1972-yildan boshlab flagman sedan sifatida barcha avtomobil texnologiyalarini birinchi bo'lib joriy etib kelgan model. ABS, airbag, ESP, xenon, Night View, Pre-Safe, Distronic — barchasi avval S-Class da paydo bo'lgan.",
    generations: [
      { year: 1972, title: "W116 (birinchi S-Class)", changes: "Birinchi rasmiy S-Class nomi. ABS opciyasi (1978). 450 SEL 6.9 — 286 HP V8." },
      { year: 1979, title: "W126", changes: "SRS airbag birinchi marta (1980). 420 SEL, 560 SEL. 18 yil ishlab chiqarildi." },
      { year: 1991, title: "W140", changes: "V12 600 SEL, massiv dizayn. Elektron tizimlarning ko'payishi." },
      { year: 1998, title: "W220", changes: "Airmatic havo suspenziyasi, Distronic kruz-kontrol, infraqizil Night View." },
      { year: 2005, title: "W221", changes: "Pre-Safe passiv xavfsizlik, PRE-SAFE Brake, Magic Body Control prototip." },
      { year: 2013, title: "W222", changes: "Magic Body Control (kamerada yo'l ko'radi, suspenziya tayyorlanadi), 360° kamera." },
      { year: 2020, title: "W223", changes: "MBUX Hyperscreen (141 sm), E-Active Body Control, avtopilot Level 3 sertifikati." },
    ],
    funFacts: [
      "S-Class W116 dan buyon har avlod kamida 1 ta texnologik inqilobni keltirgan — ABS, airbag, ESP, Distronic, Night View...",
      "Magic Body Control: S-Class yo'lni stereo kamera orqali oldindan o'qib, har bir g'ildirak suspenziyasini sozlaydi.",
      "W223 Level 3 avtopilot sertifikati olgan birinchi avtomobil — haydovchi to'liq qo'l olishi mumkin.",
      "Brejnev, Elizaveta II, Obama, Putin — barcha davlat rahbarlari S-Class ishlatadilar.",
    ],
  },
  {
    slug: "mercedes-sl",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz SL — 1954-yildan boshlab chiqib kelayotgan va 'Sport Leicht' (sport-yengil) nomini olgan ikonik roadster seriyasi. 300 SL Gullwing dan zamonaviy R232 gacha 70 yillik roadster an'anasini davom ettirib kelmoqda.",
    generations: [
      { year: 1954, title: "W198 (300 SL / 190 SL)", changes: "Gullwing — birinchi injektor dvigatel. 190 SL — arzonroq yuldosh modeli." },
      { year: 1963, title: "W113 Pagoda", changes: "'Pagoda' ichiga qarab egilgan tom. 230 SL, 250 SL, 280 SL." },
      { year: 1971, title: "R107", changes: "17 yil ishlab chiqarildi — eng uzoq umrli SL. 350 SL dan 560 SL gacha." },
      { year: 1989, title: "R129", changes: "Avtomatik roll bar — ag'darilganda 0.3 soniyada chiqadi. 73 kg SL 500 — rekord." },
      { year: 2001, title: "R230", changes: "Qattiq tom kabrio, AMG SL65 V12 Biturbo — 612 HP." },
      { year: 2012, title: "R231", changes: "Karbon fibre qotishmasi, Magic Vision Control — oynada issiqlik." },
      { year: 2021, title: "R232", changes: "AMG ishlab chiqardi. 4MATIC AWD birinchi marta. AMG SL63 — 585 HP." },
    ],
    funFacts: [
      "SL 70 yildan ortiq uzluksiz ishlab chiqarilmoqda — eng uzoq davom etayotgan Mercedes model seriyasi.",
      "R107 SL — 1971-1989. 17 yil bir model! Hech o'zgartirmasdan sotilgan — shuncha sifatli edi.",
      "R129 avtomatik roll bar: sensor ag'darilishni sezib, 0.3 soniyada metall halqa ko'tariladi.",
      "2021-yilgi R232 birinchi marta AMG tarafidan to'liq ishlab chiqarildi — M GmbH kabi SL uchun.",
    ],
  },
  {
    slug: "mercedes-amg-gt",
    uzbekistanSince: undefined,
    description:
      "Mercedes-AMG GT — 2014-yilda SLS AMG o'rnini egallagan va AMG ning o'z sport modeli sifatida yaratilgan supercar. Handbuilt 4.0L V8 biturbo dvigatel, 510 HP dan 720 HP (Black Series) gacha quvvat va Nürburgring'dagi rekord vaqtlar bilan AMG ning sport identitetini belgilaydi.",
    generations: [
      { year: 2014, title: "C190 AMG GT", changes: "4.0L V8 biturbo, 462 HP. GT S: 510 HP, GT R: 585 HP, GT R Pro: 585 HP motorsport versiyasi." },
      { year: 2023, title: "X290 AMG GT (II avlod)", changes: "Yangi platforma, 4 eshikli ham mavjud. GT 63: 585 HP, GT 63 E Performance PHEV: 843 HP." },
    ],
    funFacts: [
      "AMG GT Black Series — 720 HP, Nürburgring Nordschleife seriyali avtomobillar rekordi: 6:43.616.",
      "AMG GT R 'Green Hell Magno' — Nürburgring uchun maxsus rang. Poyga avtomobilidan ilhom.",
      "Handbuilt: har bir AMG dvigatel bitta usta tomonidan yig'iladi. Dvigatel qopqog'ida uning imzosi.",
      "AMG GT 4-Door Coupe — 4 eshikli, ammo sedan emas. Panamera va Taycan ning raqobatchisi.",
    ],
  },

  // ─── MERCEDES-BENZ SUV SERIYALARI ─────────────────────────────────────────────
  {
    slug: "mercedes-g-class",
    uzbekistanSince: 2005,
    description:
      "Mercedes-Benz G-Class — 1979-yilda harbiy maqsadlar uchun yaratilgan va 45 yildan ortiq deyarli o'zgarmagan tashqi ko'rinish bilan ishlab chiqarilayotgan ikonik off-road model. Shohlar, harbiylar va ro'yxatda kutilayotgan millionerlar avtomobili sifatida tanilgan.",
    generations: [
      { year: 1979, title: "W460 (harbiy)", changes: "Steyr-Daimler-Puch bilan birgalikda yaratilgan. Harbiy versiyalar: G 240, G 300. Asosiy maqsad off-road." },
      { year: 1990, title: "W463 (luxury)", changes: "Premium versiyalar paydo bo'ldi. Salon yaxshilandi. AMG versiyalar boshlanadi." },
      { year: 2018, title: "W463A (zamonaviy)", changes: "Tubdan yangi ichki qism va platforma. AMG G63 — 585 HP V8 biturbo. Tashqi — deyarli o'zgarmagan." },
    ],
    funFacts: [
      "G-Class tashqi ko'rinishi 1979-yildan beri deyarli o'zgarmagan — brendning identifikatsiya kuchi shu.",
      "AMG G63 — 585 HP V8, lekin 2.5 tonnalik SUV. 0-100 km/h — 4.5 soniya. Fizika qonunlariga qarshi.",
      "Abu Dhabi politsiyasi, Papal Guard, ko'plab harbiy kuchlar G-Class ishlatadilar.",
      "G-Class Graz (Avstriya) shahrida ishlab chiqariladi — 45 yildan beri bir xil zavod.",
    ],
  },
  {
    slug: "mercedes-gla",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz GLA — 2013-yilda A-Class platformasida qurilgan kichik kompakt crossover. Shahar harakati uchun qulay o'lchami va premium bezagi bilan yosh haydovchilar uchun Mercedes'ga kirish modeli hisoblanadi.",
    generations: [
      { year: 2013, title: "X156 (I avlod)", changes: "A-Class platformasi, 4MATIC AWD opsiyasi. GLA 45 AMG — 381 HP." },
      { year: 2020, title: "H247 (II avlod)", changes: "Balandroq kuzov (EQA bilan umumiy platforma), MBUX, GLA 45 S AMG — 421 HP." },
    ],
    funFacts: [
      "GLA Mercedes ning eng kichik crossover modeli — shahar uchun ideal o'lcham.",
      "GLA 45 S AMG 421 HP — kichik crossover sinfida rekord quvvat.",
      "EQA — GLA ning to'liq elektr versiyasi, 426 km yurish masofasi bilan.",
      "GLA Yevropa, AQSh va Xitoyda Mercedes ning eng ko'p sotiladigan crossover modellaridan biri.",
    ],
  },
  {
    slug: "mercedes-glc",
    uzbekistanSince: 2016,
    description:
      "Mercedes-Benz GLC — 2015-yilda GLK o'rnini egallagan o'rta kompakt crossover. C-Class platformasida qurilgan GLC C-Class ning crossover versiyasi sifatida sport haydash dinamikasini SUV formatida taklif etadi.",
    generations: [
      { year: 2015, title: "X253 (I avlod)", changes: "GLK o'rnini egalladi. C-Class platforma, 9G-Tronic avtomat, GLC 43 AMG — 367 HP." },
      { year: 2022, title: "X254 (II avlod)", changes: "48V mild-hybrid standart, GLC 63 AMG plug-in hybrid — 680 HP, GLC 400 e PHEV." },
    ],
    funFacts: [
      "GLC — Mercedes ning global miqyosda eng ko'p sotiladigan modeli (2018-2022 oralig'ida).",
      "GLC 63 AMG II avlod: 4 silindrli PHEV — 680 HP. Eski V8 dan kuchliroq, lekin munozarali.",
      "GLC Coupe varianti ham mavjud — X6 kabi suv-kesilgan orqa qism.",
      "GLC ishlab chiqarilishini Bremen zavodida — G-Class ning Graz zavodiga qarshi.",
    ],
  },
  {
    slug: "mercedes-gle",
    uzbekistanSince: 2007,
    description:
      "Mercedes-Benz GLE — 1997-yilda 'M-Class' nomi bilan boshlangan va 2015-yildan GLE deb nomlanayotgan o'rta o'lchamli SUV. ML320 da 1997-yilgi Jurassic Park filmida ko'rinishidan tortib GLE 63 AMG S 585 HP gacha boy tarixga ega.",
    generations: [
      { year: 1997, title: "W163 M-Class (I avlod)", changes: "Birinchi Mercedes SUV. AQSh Tuscaloosa zavodida. Jurassic Park filmida mashhur bo'ldi." },
      { year: 2005, title: "W164 M-Class (II avlod)", changes: "7G-Tronic avtomat, 4MATIC standard, ML 63 AMG — 510 HP." },
      { year: 2011, title: "W166 M-Class (III avlod)", changes: "Yaxshilangan interior, ML 350 BlueTEC — chempion tejamkorlik." },
      { year: 2015, title: "W166 GLE (nom o'zgarishi)", changes: "M-Class GLE ga aylandi. GLE 450 AMG — 367 HP." },
      { year: 2019, title: "V167 GLE (yangi avlod)", changes: "E-Active Body Control — 4 g'ildirak mustaqil yuradi. GLE 63 S — 612 HP." },
    ],
    funFacts: [
      "ML320 Jurassic Park II va III filmlarida qatnashgan — Mercedes ning eng mashhur kino roli.",
      "GLE 450 E-Active Body Control — har bir g'ildirak mustaqil yuqori-pastga harakatlanadi. Off-road va yo'lda sehrli ishlash.",
      "Tuscaloosa (Alabama) zavodi: barcha M-Class va GLE shu yerda ishlab chiqarilgan.",
      "GLE 63 AMG S: 612 HP, 2.5 tonna SUV, 0-100 km/h — 3.8 soniya.",
    ],
  },
  {
    slug: "mercedes-gls",
    uzbekistanSince: 2009,
    description:
      "Mercedes-Benz GLS — 2006-yilda GL nomi bilan boshlangan va 7 o'rindiqli Mercedes flagman SUV modeli. 'S-Class of SUVs' laqabi bilan tanilgan GLS GLE dan katta, BMW X7 va Audi Q7 ga to'g'ridan-to'g'ri raqobatchi.",
    generations: [
      { year: 2006, title: "X164 GL (I avlod)", changes: "Birinchi Mercedes 7 o'rindiqli SUV. GL 320, GL 450, GL 550 versiyalari." },
      { year: 2012, title: "X166 GL (II avlod)", changes: "Yaxshilangan interior, GL 500, GL 63 AMG — 557 HP." },
      { year: 2016, title: "X166 GLS (nom o'zgarishi)", changes: "GL GLS ga aylandi. GLS 63 AMG — 577 HP." },
      { year: 2019, title: "X167 GLS (yangi avlod)", changes: "48V mild-hybrid, Burmester 3D audio, GLS 580 — 489 HP V8, AMG GLS 63 — 630 HP." },
    ],
    funFacts: [
      "'S-Class of SUVs' — GLS ning rasmiy laqabi. S-Class quyligi, G-Class yo'l qobulyati.",
      "GLS 580 48V mild-hybrid — 489 HP, lekin benzin sarfi yaxshilangan.",
      "7 o'rindiqli salon biznes sinf quyligi bilan: 3-qator massaj o'rindiqlar opsiyasi mavjud.",
      "GLS Tuscaloosa zavodida ishlab chiqariladi — GLE va barcha yirik Mercedes SUV lar.",
    ],
  },

  // ─── MERCEDES-BENZ ELEKTR SERIYALARI ─────────────────────────────────────────
  {
    slug: "mercedes-eqs",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz EQS — 2021-yilda taqdim etilgan S-Class ekvivalenti to'liq elektr flagman sedan. MBUX Hyperscreen (141 sm uzunlikdagi ekran paneli), 770 km yurish masofasi va aerodynamikadagi rekord (Cd 0.20) bilan elektr sedan sinfining cho'qqisi.",
    generations: [
      { year: 2021, title: "V297 EQS (I avlod)", changes: "EQS 450+: 333 HP, 770 km. EQS 580 4MATIC: 523 HP, 678 km. MBUX Hyperscreen." },
      { year: 2022, title: "AMG EQS 53", changes: "658 HP, 0-100 km/h 3.4 soniya. Elektr AMG flagmani." },
    ],
    funFacts: [
      "EQS Cd 0.20 — dunyo bo'yicha seriyali avtomobillardagi eng past havo qarshiligi koeffitsiyenti.",
      "MBUX Hyperscreen: bitta uzluksiz 141 sm shisha panel ichida 3 ta ekran. Faqat shisha ko'rinadi.",
      "EQS 450+ — 770 km WLTP yurish masofasi. Elektr sedan sinfida rekord.",
      "EQS chassisi keyinchalik EQE, EQS SUV va EQE SUV uchun ham ishlatildi.",
    ],
  },
  {
    slug: "mercedes-eqe",
    uzbekistanSince: undefined,
    description:
      "Mercedes-Benz EQE — 2022-yilda taqdim etilgan E-Class ekvivalenti to'liq elektr sedan. EQS bilan umumiy EVA2 platformasida qurilgan EQE arzonroq narxda 680 km yurish masofasi va MBUX Hyperscreen opsiyasini taklif etadi.",
    generations: [
      { year: 2022, title: "V295 EQE (I avlod)", changes: "EQE 350+: 292 HP, 654 km. EQE 500 4MATIC: 408 HP. AMG EQE 53: 677 HP." },
    ],
    funFacts: [
      "EQE EQS ning kichik qardoshi — narxi ~$30,000 arzonroq, lekin texnologiya deyarli bir xil.",
      "MBUX Hyperscreen EQE da ham opsiya sifatida mavjud.",
      "AMG EQE 53 — 677 HP, 0-100 km/h 3.3 soniya. Elektr sport sedan sinfida rekord.",
      "EQE SUV va EQE 4MATIC+ variantlari ham ishlab chiqarilmoqda.",
    ],
  },

  // ─── BMW TARIXIY (1928–1968) ─────────────────────────────────────────────────
  {
    slug: "bmw-dixi",
    description:
      "BMW Dixi — Bayerische Motoren Werke ning birinchi avtomobili. Austin 7 litsenziyasi asosida qurilgan bu kichik avtomobil BMW ning transport vositasi ishlab chiqarishdagi birinchi qadami bo'ldi. 'Dixi' lotincha 'men aytdim' ma'nosini anglatadi.",
    generations: [
      { year: 1927, title: "Austin 7 litsenziyasi", changes: "Ingliz Austin 7 ning litsenzion ishlab chiqarilishi — BMW ning avtomobil sohasiga kirish shartnomasi." },
      { year: 1928, title: "BMW Dixi 3/15 DA-1", changes: "Birinchi BMW brendli avtomobil, 748 kub sm dvigatel, 15 HP, kabriolet va sedan variantlari." },
      { year: 1929, title: "DA-2 (yaxshilangan)", changes: "Yaxshilangan tormoz tizimi va yangilangan kuzov variantlari." },
    ],
    funFacts: [
      "BMW Dixi — kompaniyaning birinchi avtomobili, avvaliga faqat samolyot dvigatellari ishlab chiqargan BMW uchun yangi davr boshlandi.",
      "Austin 7 ning litsenziyasi BMW ga 1928-yilda 748,000 Reyxsmark evaziga sotilgan.",
      "Dixi nomi lotincha 'men aytdim' degan ma'noni anglatadi — ishonch va qat'iyatning belgisi.",
      "BMW ning mashhur ko'k-oq gerbi samolyot vintining aylanishini ifodalaydi — aviatsiya merosidan.",
    ],
  },
  {
    slug: "bmw-303",
    description:
      "BMW 303 — BMW ning eng muhim kashfiyotlaridan birini belgilovchi model: birinchi marta ikonik ikki böbrak grilli (kidney grille) qo'llanildi va birinchi marta BMW 6 silindrli dvigatelga ega bo'ldi. Bu dizayn 90 yildan ortiq BMW identifikatsiyasining belgisi bo'lib qolmoqda.",
    generations: [
      { year: 1933, title: "BMW 303", changes: "Birinchi kidney grille va birinchi 6 silindrli BMW dvigateli (1.2L). Zamonaviy BMW dizaynining boshlanishi." },
      { year: 1934, title: "BMW 309", changes: "303 ning 4 silindrli iqtisodiy varianti, arzonroq segment uchun." },
    ],
    funFacts: [
      "BMW 303 birinchi marta ikki böbrak (kidney) grillini taqdim etdi — bu dizayn 90 yildan ortiq BMW ning belgisi bo'lib qolmoqda.",
      "Birinchi BMW 6 silindrli dvigateli — avvaliga faqat 4 silindrli ishlab chiqargan kompaniya uchun texnik sakrash.",
      "303 BMW ni o'sha davrning eng zamonaviy Yevropa avtomobillari qatoriga olib kirdi.",
      "Kidney grille dizayni hozirda ham barcha BMW modellarida saqlanib qolgan — brendning eng taniqli belgisi.",
    ],
  },
  {
    slug: "bmw-326",
    description:
      "BMW 326 — 1936-yilda taqdim etilgan va o'z davridagi texnologik yutuqlarni ifodalagan model. Gidravlik tormozlar, to'liq yopiq kuzov va kuchli 2.0L 6 silindrli dvigatel bilan jihozlangan bu sedan BMW ning premuim segment yo'nalishini belgilab berdi.",
    generations: [
      { year: 1936, title: "BMW 326", changes: "2.0L 6 silindrli dvigatel, 50 HP. Gidravlik tormozlar — o'sha davr uchun texnologik yutuq. Sedan va kabriolet variantlari." },
      { year: 1937, title: "Touring variant", changes: "Yopiq touring kuzov varianti qo'shildi." },
    ],
    funFacts: [
      "BMW 326 — o'sha davr uchun juda zamonaviy gidravlik tormozlarga ega bo'lgan birinchi BMW modellaridan.",
      "2.0L 6 silindrli dvigatel Yevropa standartlari bo'yicha yuqori texnologiya hisoblanardi.",
      "Urushdan oldingi BMW modellarining eng mashhuri — ishlab chiqarilgan 15,000 ta ushbu klassik.",
      "326 ning platforma va dvigateli keyinchalik 327 va 328 modellariga asos bo'ldi.",
    ],
  },
  {
    slug: "bmw-328",
    description:
      "BMW 328 — 1936-1940 yillarda ishlab chiqarilgan va sport avtomobil tarixida inqilob qilgan model. Le Mans, Mille Miglia va boshqa nufuzli poygalarda g'alaba qozongan bu roadster hozir ham avtomobil tarixining eng muhim modellaridan biri hisoblanadi.",
    generations: [
      { year: 1936, title: "BMW 328 Roadster", changes: "2.0L 6 silindrli dvigatel, 80 HP. Alyuminiy kuzov, uch karbyuratorli tizim — 1936-yilning eng tez sport avtomobili." },
      { year: 1939, title: "Poyga versiyalari", changes: "Aerodinamika yaxshilangan maxsus poyga versiyalari — Mille Miglia 1940 g'olibi." },
    ],
    funFacts: [
      "BMW 328 — 1940-yilgi Mille Miglia poygasida mutlaq g'olib. Bugungi kunda 1936 modellari millionlab dollarga sotilmoqda.",
      "Atigi 464 ta 328 ishlab chiqarilgan — har biri bugungi kunda behisob qimmatbaho kolleksion avtomobil.",
      "Alyuminiy kuzov va uch karbyuratorli dvigatel o'sha davr uchun inqilobiy texnologiya edi.",
      "1936-yilgi Olimpiada poygasi avtomobili sifatida ham mashhur — Berlin musobaqalarida namoyish etilgan.",
    ],
  },
  {
    slug: "bmw-501",
    description:
      "BMW 501 — Ikkinchi Jahon Urushidan keyin BMW ning tiklanishini belgilagan birinchi model. 'Barockengel' (Barokko Farishta) laqabi bilan tanilgan bu katta sedan BMW ning premium segment yo'nalishini tikladi.",
    generations: [
      { year: 1952, title: "BMW 501 (2.0L 6 silindrli)", changes: "Urushdan keyingi birinchi BMW. 65 HP, 2.0L 6 silindrli dvigatel. 'Barockengel' dizayni." },
      { year: 1954, title: "BMW 501 V8", changes: "Birinchi Yevropa ishlab chiqaruvchilari orasida 2.6L V8 dvigatel, 95 HP — texnologik yutuq." },
      { year: 1958, title: "BMW 502 V8 3.2L", changes: "3.2L V8, 120-140 HP — Germaniyaning eng kuchli seriyali avtomobillaridan biri." },
    ],
    funFacts: [
      "'Barockengel' (Barokko Farishta) laqabi yumshoq, egrilik chiziqli dizayni tufayli berilgan.",
      "BMW 501 V8 — Yevropa ishlab chiqaruvchilari orasida urushdan keyingi birinchi V8 dvigatelga ega model.",
      "Ishlab chiqarilishi qimmatga tushgani sababli BMW moliyaviy inqirozga yuz tutdi — Isetta dan keyin qutildi.",
      "Bugungi kunda BMW 501 kollektsionerlar orasida juda qimmatbaho klassik hisoblanadi.",
    ],
  },
  {
    slug: "bmw-isetta",
    description:
      "BMW Isetta — 1950-yillarning iqtisodiy inqirozi davrida BMW ni bankrotlikdan qutqargan mikroavtomobil. Italyan dizayni asosida yaratilgan va old eshikdan kirish tizimi bilan ajralib turgan bu kichkina avtomobil tarixdagi eng g'ayrioddiy BMW modellaridan biri.",
    generations: [
      { year: 1955, title: "Isetta 250", changes: "250 kub sm dvigatel, 12 HP. Italyan Iso kompaniyasi litsenziyasi. Old eshikdan kiradigan yagona kapsula." },
      { year: 1956, title: "Isetta 300", changes: "300 kub sm dvigatel, 13 HP. Yaxshilangan isitish tizimi va yangi rang variantlari." },
      { year: 1957, title: "Isetta 600 (to'rt o'rindiqli)", changes: "600 kub sm, 4 o'rindiq, yon eshik qo'shildi — kengaytirilgan versiya." },
    ],
    funFacts: [
      "BMW Isetta — 'dunyo eng kichik seriyali avtomobili' unvonini ushlab turgan model.",
      "Old eshikdan kirish: eshik ochilganda rul ham ochiladi — o'sha davr uchun juda g'ayrioddiy yechim.",
      "BMW ni 1950-lardagi moliyaviy inqirozdan qutqargan — 160,000 dan ortiq sotilgan.",
      "Bugungi kunda BMW Isetta deyarli har doim 50,000–100,000 dollar oralig'ida sotiladi.",
    ],
  },
  {
    slug: "bmw-503",
    description:
      "BMW 503 — mashhur dizayner Albrecht Goertz tomonidan yaratilgan va 1956-1959 yillarda ishlab chiqarilgan hashamatli gran turismo. 3.2L V8 dvigatel va 140 HP quvvat bilan o'z davrining eng chiroyli Yevropa avtomobillaridan biri hisoblangan.",
    generations: [
      { year: 1956, title: "BMW 503 Coupe/Cabriolet", changes: "3.2L V8 dvigatel, 140 HP. Albrecht Goertz dizayni. Coupe va kabriolet variantlari. Atigi 412 ta ishlab chiqarilgan." },
    ],
    funFacts: [
      "Atigi 412 ta BMW 503 ishlab chiqarilgan — bugungi kunda eng noyob BMW modellaridan biri.",
      "Dizayner Albrecht Goertz — bu davrda 507 ni ham yaratgan. Keyinchalik Nissan Z Series dizayniga ham hissa qo'shgan.",
      "1956-yilgi Frankfurt Motor Show ning eng muhim namoyishi bo'lgan.",
      "Bugungi kunda yaxshi saqlanilgan BMW 503 million dollar dan oshib ketadi.",
    ],
  },
  {
    slug: "bmw-507",
    description:
      "BMW 507 — 1956-1959 yillarda Albrecht Goertz tomonidan yaratilgan va avtomobil tarixining eng chiroyli roadsterlaridan biri sifatida tan olingan model. Elvis Presley ning shaxsiy avtomobili bo'lgan bu ikki o'rindiqli open-top 3.2L V8 bilan jihozlangan.",
    generations: [
      { year: 1956, title: "BMW 507 Roadster", changes: "3.2L V8 dvigatel, 150 HP, 220 km/h. Albrecht Goertz dizayni. Atigi 252 ta ishlab chiqarilgan." },
    ],
    funFacts: [
      "Elvis Presley 507 ning eng mashhur egalaridan biri — uning shaxsiy 507 si hozir san'at asari sifatida saqlanmoqda.",
      "Atigi 252 ta BMW 507 ishlab chiqarilgan — barchasi bugungi kunda tasdiqlangan va kuzatilgan.",
      "Bugungi bozorda yaxshi saqlanilgan 507: 2–4 million dollar. BMW tarixining eng qimmatbaho modeli.",
      "BMW 507 iqtisodiy jihatdan zarar keltirgan — narxi juda yuqori qo'yilgandi. Ammo brendning presijini ko'tardi.",
    ],
  },
  {
    slug: "bmw-neue-klasse",
    description:
      "BMW Neue Klasse (1500) — 1962-yilda BMW ni yana bir bor bankrotlikdan qutqargan va zamonaviy BMW ning poydevorini qurgan model. Bu platforma 3 Seriya, 5 Seriya va boshqa barcha zamonaviy BMW modellarining ajdodidir.",
    generations: [
      { year: 1962, title: "BMW 1500", changes: "1.5L 4 silindrli SOHC dvigatel, 80 HP. Yangi platforma — zamonaviy BMW ning poydevori." },
      { year: 1964, title: "BMW 1800", changes: "1.8L dvigatel, 90 HP. 1800 TI sport versiyasi 110 HP bilan." },
      { year: 1966, title: "BMW 2000", changes: "2.0L dvigatel, 100 HP. Eng mashhur Neue Klasse modeli." },
      { year: 1968, title: "BMW 2002", changes: "2 eshikli sport sedan — Neue Klasse ning eng ikonik hosilasi." },
    ],
    funFacts: [
      "BMW Neue Klasse BMW ni 1960-lardagi inqirozdan qutqargan va zamonaviy kompaniyaning poydevorini qurgan.",
      "Bu platforma hamma zamonaviy BMW sedan seriyalarining (3, 5, 7 Seriya) ajdodi hisoblanadi.",
      "1.5L SOHC dvigatel o'sha davr uchun texnologik yutuq edi — BMW muhandisligining namunasi.",
      "Neue Klasse BMW ni 'haydovchi uchun avtomobil' konsepsiyasini joriy etdi.",
    ],
  },
  {
    slug: "bmw-2002",
    description:
      "BMW 2002 — 'sport sedan' konsepsiyasini yaratgan va zamonaviy BMW ning ruhini belgilagan model. 1968-1976 yillarda ishlab chiqarilgan bu ikki eshikli sedan BMW ni butun dunyo bo'ylab sport avtomobil brendiga aylantirdi.",
    generations: [
      { year: 1968, title: "BMW 2002", changes: "2.0L dvigatel, 100 HP. Kuchli ammo yengil kuzov — sport sedan formulasi." },
      { year: 1971, title: "BMW 2002 tii", changes: "Kugelfischer mexanik injeksiya, 130 HP — o'sha davr uchun inqilobiy texnologiya." },
      { year: 1973, title: "BMW 2002 Turbo", changes: "Birinchi Yevropa turbo avtomobili, 170 HP. 2002 Turbo — Yevropa seriyali turbosining pioneri." },
    ],
    funFacts: [
      "BMW 2002 Turbo (1973) — Yevropa seriyali ishlab chiqarishidagi birinchi turbodvigatelga ega avtomobil.",
      "'Haydovchi uchun avtomobil' — BMW ning hali ham ishlatiladigan ushbu shior 2002 dan boshlangan.",
      "Car and Driver jurnali BMW 2002 ni '20-asrning 10 ta eng muhim avtomobili' ro'yxatiga kirgazgan.",
      "2002 BMW ni sport avtomobil brendiga aylantirdi — Porsche va Alfa Romeodan arzonroq alternativ.",
    ],
  },

  // ─── BMW ZAMONAVIY RAQAMLI SERIYALAR ─────────────────────────────────────────
  {
    slug: "bmw-1-series",
    uzbekistanSince: undefined,
    description:
      "BMW 1 Seriya — 2004-yilda taqdim etilgan kompakt hatchback. BMW ning 'haydovchi uchun avtomobil' falsafasini kichik o'lchamda mujassamlashtirgan bu model Yevropa bozorida Golf va A-Class ga raqobat qilish uchun yaratilgan.",
    generations: [
      { year: 2004, title: "E87 (I avlod)", changes: "Birinchi BMW hatchback. Orqa g'ildirakni haydash — kichik sinf uchun g'ayriodatiy. 5 eshikli standart." },
      { year: 2011, title: "F20 (II avlod)", changes: "Yangi platforma, turbodvigatellar standart, M135i 320 HP sport versiyasi." },
      { year: 2019, title: "F40 (III avlod)", changes: "Front-wheel drive platformaga o'tildi — muhim o'zgarish. Kichraytirilgan kidney grille, yangi M135i xDrive." },
    ],
    funFacts: [
      "BMW 1 Seriya birinchi BMW hatchback — oldingi avlodlar faqat sedan va coupe chiqarardi.",
      "E87 avlodida orqa g'ildirak haydash tizimi — kichik sinf uchun noyob sport xususiyati.",
      "F40 dan boshlab old g'ildirak haydashga o'tildi — 'haydovchi uchun' e'tiqodchilari norozi bo'ldi.",
      "M135i versiyasi 300+ HP — kichik hatchback sinfida rekord quvvat.",
    ],
  },
  {
    slug: "bmw-2-series",
    uzbekistanSince: undefined,
    description:
      "BMW 2 Seriya — 2013-yilda 1 Seriya Coupe o'rnini egallagan ikki eshikli sport model. 3 Seriya ning kichik coupe analogi sifatida M240i versiyasida 340 HP gacha quvvat taklif etadi.",
    generations: [
      { year: 2013, title: "F22 (I avlod)", changes: "1 Seriya Coupe o'rnini egalladi. 220i, 228i, M235i versiyalari. Orqa g'ildirak haydash." },
      { year: 2021, title: "G42 (II avlod)", changes: "Katta kidney grille, yangi platforma. M240i xDrive 374 HP bilan." },
      { year: 2022, title: "2 Active Tourer", changes: "Front-wheel drive minivan variant — oilalar uchun kengaytirilgan 2 Seriya." },
    ],
    funFacts: [
      "BMW 2 Seriya M235i — 0-100 km/h ni 4.8 soniyada bosib o'tadigan 'kichik raketa'.",
      "G42 avlodi katta kidney grille bilan chiqqanda dizayn bo'yicha katta munozara bo'ldi.",
      "2 Seriya Gran Coupe — 4 eshikli versiyasi ham mavjud, aslida 2 Seriya nomini olgan 4 eshikli sedan.",
      "M2 versiyasi — 460 HP bilan eng kuchli kichik BMW sport modeli.",
    ],
  },
  {
    slug: "bmw-4-series",
    uzbekistanSince: undefined,
    description:
      "BMW 4 Seriya — 2013-yilda 3 Seriya Coupe dan ajratib chiqarilgan ikki eshikli premium model. Katta o'lchamdagi böbrak grill bilan jihozlangan zamonaviy avlodi dizayn bo'yicha eng ko'p muhokama qilingan BMW modellaridan biri bo'ldi.",
    generations: [
      { year: 2013, title: "F32 (I avlod)", changes: "3 Seriya Coupe o'rnini egalladi. 420i dan 440i gacha. Cabrio va Gran Coupe variantlari." },
      { year: 2020, title: "G22 (II avlod)", changes: "Ulkan böbrak grill — avtomobil dunyosidagi eng katta grilllardan biri. M440i xDrive 374 HP." },
    ],
    funFacts: [
      "BMW 4 Seriya G22 ning katta grilli internetda butun bir 'grillgate' munozarasini boshladi.",
      "4 Seriya Gran Coupe — 4 eshikli, lekin coupe siluetiga ega elegant model.",
      "M4 versiyasi: 510 HP, 0-100 km/h — 3.9 soniya. Track uchun mo'ljallangan shahar avtomobili.",
      "Cabrio versiyasi qattiq tom bilan — yozda open-top, qishda yopiq salon.",
    ],
  },
  {
    slug: "bmw-5-series",
    uzbekistanSince: 2002,
    description:
      "BMW 5 Seriya — 1972-yildan boshlab ishlab chiqarilayotgan va biznes sedan segmentining o'lchovi hisoblanuvchi model. Har avlodda yangi texnologiyalarni joriy etib kelgan 5 Seriya E39 avlodi ko'pchilik mutaxassislar tomonidan 'eng mukammal sedan' deb tan olinadi.",
    generations: [
      { year: 1972, title: "E12 (I avlod)", changes: "Birinchi 5 Seriya — Neue Klasse merosxo'ri. 4 va 6 silindrli dvigatellar, zamonaviy platforma." },
      { year: 1981, title: "E28 (II avlod)", changes: "M535i sport versiyasi, ABS birinchi marta qo'shildi." },
      { year: 1987, title: "E34 (III avlod)", changes: "Touring variant, DOHC dvigatel, M5 — 315 HP bilan." },
      { year: 1995, title: "E39 (IV avlod)", changes: "Alyuminiy old ko'prik, 4.9L V8 M5 — 394 HP. Ko'pchilik mutaxassislar 'eng mukammal 5 Seriya' deb hisoblaydi." },
      { year: 2003, title: "E60 (V avlod)", changes: "Chris Bangle dizayni — munozarali, ammo ta'sirchan. iDrive multimedia birinchi marta." },
      { year: 2010, title: "F10 (VI avlod)", changes: "Turbo dvigatellar standart, Head-Up Display, aktiv kruz-kontrol." },
      { year: 2017, title: "G30 (VII avlod)", changes: "48V mild-hybrid, geshturar boshqaruv, lazer faralar, M550i xDrive 462 HP." },
      { year: 2024, title: "G60 (VIII avlod)", changes: "Yangi platforma. M5 plug-in hybrid: 727 HP — 5 Seriya tarixidagi rekord." },
    ],
    funFacts: [
      "E39 M5 (1998) — ko'pchilik mutaxassislar tomonidan 'barcha davrlarning eng mukammal sedan'i deb tan olingan.",
      "BMW 5 Seriya 50 yildan ortiq davomida biznes sedan standartini belgilab kelmoqda.",
      "2024-yilgi M5 plug-in hybrid — 727 HP, lekin hali ham avtomatik tormozlash tizimiga ega.",
      "5 Seriya Touring versiyasi Yevropa da biznes vakillari orasida eng mashhur vagon hisoblanadi.",
    ],
  },
  {
    slug: "bmw-6-series",
    uzbekistanSince: undefined,
    description:
      "BMW 6 Seriya — 1976-yilda E24 nomi bilan chiqqan va BMW ning gran turismo merosini ifodalovchi coupe va kabriolet model. E24 avlodi (1976-1989) avtomobil dizaynining masterpiece asari sifatida tan olinadi.",
    generations: [
      { year: 1976, title: "E24 (I avlod)", changes: "635CSi, M635CSi — 286 HP. Klassik BMW coupe dizayni. Paul Bracq yaratgan." },
      { year: 2003, title: "E63 (II avlod)", changes: "V8 dvigatel, SMG karobka, 645Ci va M6 versiyalari." },
      { year: 2011, title: "F12/F13 (III avlod)", changes: "Cabrio, Coupe va Gran Coupe. M6 Competition — 600 HP." },
      { year: 2018, title: "8 Seriya bilan almashinadi", changes: "6 Seriya tugatildi, o'rnini 8 Seriya egalladi." },
    ],
    funFacts: [
      "BMW 6 Seriya E24 — Paul Bracq ning shoh asari. Ko'pchilik dizaynerlar uni 'barcha davrlarning eng chiroyli BMW'si deb atashadi.",
      "E24 M635CSi Le Mans poygasi avtomobili sifatida ishlatilgan.",
      "6 Seriya 2018-yilda 8 Seriya ga o'z o'rnini bo'shatib berdi.",
      "Asal rang (Alpina sariq) E24 bugungi kunda kolleksionerlar orasida eng qimmat rengli 6 Seriya.",
    ],
  },
  {
    slug: "bmw-7-series",
    uzbekistanSince: 2005,
    description:
      "BMW 7 Seriya — 1977-yildan boshlab BMW ning hashamatli flagman sedani. Har avlodda eng yangi texnologiyalarni birinchi bo'lib joriy etib kelgan 7 Seriya iDrive (2001), Head-Up Display, lazer faralar va boshqa ko'plab innovatsiyalarning beshigi bo'ldi.",
    generations: [
      { year: 1977, title: "E23 (I avlod)", changes: "Birinchi 7 Seriya. ABS opciyasi (1979). 745i turbo — 252 HP." },
      { year: 1986, title: "E32 (II avlod)", changes: "V12 dvigatel (750iL), telefon birinchi marta qo'shildi, yon havo yostiqlar." },
      { year: 1994, title: "E38 (III avlod)", changes: "DVD navigatsiya, ortopedik o'rindiqlar, xenon faralar birinchi seriyali avtomobilga." },
      { year: 2001, title: "E65 (IV avlod)", changes: "iDrive multimedia tizimi — inqilobiy ammo dastlab chalkash. Chris Bangle dizayni." },
      { year: 2008, title: "F01 (V avlod)", changes: "Gestur nazorat, night vision, 760Li V12 544 HP." },
      { year: 2015, title: "G11 (VI avlod)", changes: "Karbon fibre kuzov, lazer faralar, touchscreen, 750i xDrive 450 HP." },
      { year: 2022, title: "G70 (VII avlod)", changes: "Yangi davr dizayni. i7 elektr versiyasi — 544 HP, 625 km yurish masofasi." },
    ],
    funFacts: [
      "BMW 7 Seriya E32 (1986) — dunyodagi birinchi V12 dvigatelga ega seriyali sedan.",
      "iDrive (2001) hozir barcha avtomobil brendlari tomonidan o'xshashtirilgan multimedia tizimidir.",
      "Xenon faralar (1994) — birinchi marta E38 da joriy etildi, keyin butun sanoatga tarqaldi.",
      "7 Seriya i7 — 8K ekranli arqa o'rindiq teatri: 31 dyuymli ekran. Xayriyat, haydovchi uchun emas.",
    ],
  },
  {
    slug: "bmw-8-series-e31",
    uzbekistanSince: undefined,
    description:
      "BMW 8 Seriya E31 — 1989-1999 yillarda ishlab chiqarilgan va o'z davrining eng ilg'or texnologiyalarini o'zida jamlagan gran turismo. V12 dvigatel, fly-by-wire tormoz va gaz tizimi bilan jihozlangan bu model bugungi kunda klassik kolleksion avtomobil.",
    generations: [
      { year: 1989, title: "E31 840/850", changes: "840Ci: 4.0L V8, 286 HP. 850Ci: 5.0L V12, 300 HP. Fly-by-wire tizimi — elektronik gaz pedali." },
      { year: 1992, title: "850CSi", changes: "5.6L V12, 380 HP — BMW ning eng kuchli seriyali modeli (o'sha davrda). Atigi 1510 ta." },
      { year: 1995, title: "840i facelift", changes: "Yangilangan ichki bezak, yangi 4.4L V8 dvigatel." },
    ],
    funFacts: [
      "BMW 8 Seriya E31 — seriyali avtomobilda birinchi fly-by-wire elektron gaz pedali.",
      "850CSi atigi 1510 ta ishlab chiqarilgan — bugungi kunda har biri 150,000–250,000 dollar.",
      "E31 ning V12 dvigateli Rolls-Royce va McLaren F1 ga ham asos bo'ldi.",
      "James Bond filmlarida qatnashmagan — lekin The Avengers va boshqa filmlarda ko'ringan.",
    ],
  },
  {
    slug: "bmw-8-series-g15",
    uzbekistanSince: undefined,
    description:
      "BMW 8 Seriya G15 — 2018-yilda E31 dan 20 yil o'tib qaytgan zamonaviy gran turismo. Kuchli 3.0L va 4.4L dvigatellar, M850i versiyasida 530 HP va xDrive to'liq g'ildirak haydash tizimi bilan jihozlangan hashamatli sport coupe.",
    generations: [
      { year: 2018, title: "G15 (Coupe)", changes: "840i, 840d, M850i xDrive (530 HP). Lazer faralar, M Sport differentsial." },
      { year: 2019, title: "G14 (Cabrio) va G16 (Gran Coupe)", changes: "Ochiq tom va 4 eshikli variantlar qo'shildi." },
      { year: 2020, title: "M8 Competition", changes: "4.4L V8, 625 HP. 0-100 km/h — 3.2 soniya. Poyga avtomobili — yo'l uchun." },
    ],
    funFacts: [
      "M8 Competition 625 HP — bugungi kunda BMW ning eng kuchli M modellaridan biri.",
      "8 Seriya G15 — BMW ning Nürburgring da 8:12 vaqt ko'rsatgan birinchi seriyali sedani.",
      "Lazer faralar 600 metr masofani yoritadi — oddiy LED faralardan 2 barobar ko'proq.",
      "8 Seriya G15 GTE Le Mans poygasida ham ishtirok etdi — zavodning rasmiy poyga dasturi.",
    ],
  },

  // ─── BMW X SERIYALARI ─────────────────────────────────────────────────────────
  {
    slug: "bmw-x1",
    uzbekistanSince: undefined,
    description:
      "BMW X1 — 2009-yilda taqdim etilgan BMW ning eng kichik crossover modeli. X5 va X3 ning kichik qardoshi sifatida kompakt SUV segmentida 'haydovchi uchun' xususiyatlarni saqlab qolgan model.",
    generations: [
      { year: 2009, title: "E84 (I avlod)", changes: "3 Seriya platformasida, xDrive AWD opsiyasi, 1.8i dan 2.8i gacha." },
      { year: 2015, title: "F48 (II avlod)", changes: "Front-wheel drive platformaga o'tdi (UKL). Kengaytirilgan salon, yangi turbodvigatellar." },
      { year: 2022, title: "U11 (III avlod)", changes: "Katta kidney grille, iX3 bilan umumiy platforma, elektr X1 (iX1) versiyasi." },
    ],
    funFacts: [
      "BMW X1 Yevropa da BMW ning eng ko'p sotiladigan modellaridan biri.",
      "F48 avlodida front-wheel drive ga o'tish 'haydovchi uchun' imidjiga zarar etdi degan munozara bo'ldi.",
      "iX1 — elektr versiyasi, 313 HP va 440 km yurish masofasi bilan.",
      "X1 BMW X seriyalarining eng arzon kirish nuqtasi hisoblanadi.",
    ],
  },
  {
    slug: "bmw-x3",
    uzbekistanSince: 2005,
    description:
      "BMW X3 — 2003-yilda taqdim etilgan o'rta o'lchamli kompakt SUV. X5 ning kichik qardoshi sifatida sport haydash dinamikasini SUV quyligi bilan uyg'unlashtirgan ushbu model doimiy ravishda eng ko'p sotiladigan BMW modellar qatorida.",
    generations: [
      { year: 2003, title: "E83 (I avlod)", changes: "Birinchi X3. 3 Seriya platformasi, xDrive AWD, 2.0i va 3.0i." },
      { year: 2010, title: "F25 (II avlod)", changes: "Yangi platforma, kengaytirilgan salon, 8-pog'onali avtomat, M Sport paketi." },
      { year: 2017, title: "G01 (III avlod)", changes: "M40i — 360 HP. Head-Up Display, lazer faralar opsiyasi. xDrive30e plug-in hybrid." },
      { year: 2024, title: "G45 (IV avlod)", changes: "Yangi platforma. iX3 elektr versiyasi 494 km yurish masofasi bilan." },
    ],
    funFacts: [
      "BMW X3 — BMW X seriyalarining eng ko'p sotiladigan modeli global miqyosda.",
      "X3 M40i (360 HP) — 'M' versiyasi bo'lmagan holda, M Performance paketidagi eng tez X3.",
      "X3 ni Stefan Sielaff dizayn qilgan — keyinchalik Volkswagen Group ga o'tgan.",
      "2024-yilgi iX3 — to'liq elektr, 494 km yurish masofasi va 286 HP.",
    ],
  },
  {
    slug: "bmw-x5",
    uzbekistanSince: 2004,
    description:
      "BMW X5 — 1999-yilda 'SAV' (Sport Activity Vehicle) konsepsiyasini yaratgan va butun premium SUV segmentini o'zgartirgan model. 'Asfalтga mo'ljallangan SUV' tushunchasini joriy etib, Cayenne, GL va MDX kabi raqobatchilarga yo'l ochgan.",
    generations: [
      { year: 1999, title: "E53 (I avlod)", changes: "Birinchi X5 — 'SAV' konsepsiyasi. 3.0i va 4.4i V8. E38 7 Seriya platformasi asosida." },
      { year: 2006, title: "E70 (II avlod)", changes: "7 o'rindiqli variant, xDrive AWD yaxshilandi, V8 4.8i — 355 HP." },
      { year: 2013, title: "F15 (III avlod)", changes: "Engillashtirildi, plug-in hybrid (xDrive40e), M50d — 3.0L tri-turbo dizel." },
      { year: 2018, title: "G05 (IV avlod)", changes: "48V mild-hybrid, lazer faralar, M50i — 530 HP V8. xDrive45e 87 km elektr yurishi." },
    ],
    funFacts: [
      "BMW X5 1999-yilda avtomobil sanoatini o'zgartirib yubordi — 'premium SUV haydash zavqi bilan' tushunchasini yaratdi.",
      "E53 (birinchi X5) — Land Rover Defender yoki G-Wagen ga raqobat emas, Mercedes E-Class ga raqobat uchun yaratilgan.",
      "X5 M — 600 HP, 0-100 km/h 3.8 soniya. SUV formatida sport avtomobili tezligi.",
      "X5 Spartanburg (Janubiy Karolina) zavodida ishlab chiqariladi — BMW ning AQShdagi yagona zavodi.",
    ],
  },
  {
    slug: "bmw-x6",
    uzbekistanSince: 2010,
    description:
      "BMW X6 — 2008-yilda 'Sport Activity Coupe' yangi segmentini yaratgan model. SUV ning balandligi va quyligi bilan coupe ning dinamik siluetini birlashtirgan bu g'ayrioddiy yechim dastlab katta munozara bo'ldi, ammo keyinchalik ko'plab raqobatchilar (GLE Coupe, Q8) tomonidan ko'chirildi.",
    generations: [
      { year: 2008, title: "E71 (I avlod)", changes: "Birinchi 'Sport Activity Coupe'. xDrive35i va xDrive50i V8. Noyob egg-shape siluet." },
      { year: 2014, title: "F16 (II avlod)", changes: "M50d tri-turbo dizel, M Performance paket. Yaxshilangan interior." },
      { year: 2019, title: "G06 (III avlod)", changes: "M60i V8 530 HP. Yangi dizayn, kattaroq kidney grille, ambient yoritish." },
    ],
    funFacts: [
      "BMW X6 birinchi 'Sport Activity Coupe' — bu format keyin Mercedes GLE Coupe, Audi Q8 va boshqalar tomonidan ko'chirildi.",
      "X6 chiqishida ko'p tanqid oldi — ammo sotuvda juda muvaffaqiyatli bo'lib chiqdi.",
      "X6 M (I avlod) — 555 HP, SUV sifatida ko'p nisbati ishlari uchun rekord vaqtlar ko'rsatdi.",
      "Vantablack rangdagi X6 — dunyodagi eng qorong'i avtomobil. Yorug'likning 99.9% ini yutadi.",
    ],
  },
  {
    slug: "bmw-x7",
    uzbekistanSince: 2019,
    description:
      "BMW X7 — 2018-yilda taqdim etilgan BMW ning flagman 7 o'rindiqli SUV modeli. X5 va X6 dan katta bo'lgan X7 Rolls-Royce bilan bir platformani baham ko'radi va BMW ning eng hashamatli SUV modeli hisoblanadi.",
    generations: [
      { year: 2018, title: "G07 (I avlod)", changes: "7 o'rindiq, xDrive40i va M50i (523 HP). Rolls-Royce Ghost bilan umumiy platforma CLAR." },
      { year: 2022, title: "G07 LCI (Facelift)", changes: "Split faralar — ikonik yangi dizayn. i7 bilan umumiy faralar konsepsiyasi. M60i — 530 HP." },
    ],
    funFacts: [
      "BMW X7 Rolls-Royce Ghost bilan bitta CLAR platformasini baham ko'radi.",
      "X7 M60i — 530 HP V8, 7 o'rindiqli SUV uchun rekord quvvat.",
      "2022-yilgi facelift split faralar bilan chiqdi — avtomobil dunyosida katta munozara bo'ldi.",
      "Spartanburg zavodida ishlab chiqariladi — X5 va X6 bilan bir xil joy.",
    ],
  },

  // ─── BMW Z SERIYALARI ─────────────────────────────────────────────────────────
  {
    slug: "bmw-z3",
    uzbekistanSince: undefined,
    description:
      "BMW Z3 — 1995-yilda James Bond filmida ('GoldenEye') birinchi ko'rinishi bilan dunyo e'tiborini jalb etgan ikonik roadster. Amerikadagi BMW Spartanburg zavodida ishlab chiqarilgan birinchi BMW, 1.8L dan 3.2L M gacha turli dvigatel variantlari bilan taklif etilgan.",
    generations: [
      { year: 1995, title: "E36/7 Z3 Roadster", changes: "1.8L, 2.0L va 2.8L variantlar. Birinchi AQShda ishlab chiqarilgan BMW." },
      { year: 1997, title: "Z3 M Roadster", changes: "3.2L S50/S52 dvigatel, 321 HP. Eng kuchli kichik BMW roadster." },
      { year: 1997, title: "Z3 Coupe", changes: "Roadster dan yaratilgan coupe kuzov varianti — g'ayrioddiy va noyob dizayn." },
    ],
    funFacts: [
      "BMW Z3 James Bond 'GoldenEye' (1995) filmida birinchi ko'rinishi bilan ommaviy shuhrat qozondi.",
      "Birinchi BMW Spartanburg (AQSh) zavodida ishlab chiqarildi — BMW ning AQSh ishlab chiqarishiga kirishining belgisi.",
      "Z3 Coupe — 'bread van' laqabi bilan tanilgan g'ayrioddiy, ammo juda noyob variant. Bugungi kunda kollektsionerlar uchun qadrli.",
      "Z3 M Roadster — o'z davrida eng tez ishlab chiqariladigan BMW'lardan biri (0-100: 5.4 soniya).",
    ],
  },
  {
    slug: "bmw-z4",
    uzbekistanSince: undefined,
    description:
      "BMW Z4 — 2002-yilda Z3 o'rnini egallagan va zamonaviy BMW roadster an'anasini davom ettirgan model. Hozirgi G29 avlodi Toyota GR Supra bilan umumiy platformada qurilgan va 382 HP gacha quvvat taklif etadi.",
    generations: [
      { year: 2002, title: "E85 Z4 (I avlod)", changes: "Chris Bangle dizayni. 2.2i dan 3.0si gacha. M Roadster: 343 HP." },
      { year: 2009, title: "E89 Z4 (II avlod)", changes: "Qattiq tom kabrio — roadster va coupe o'rtasidagi yechim. sDrive35is: 340 HP." },
      { year: 2019, title: "G29 Z4 (III avlod)", changes: "Toyota GR Supra bilan umumiy platforma. sDrive40i: 340 HP. M40i: 382 HP." },
    ],
    funFacts: [
      "BMW Z4 G29 Toyota GR Supra bilan bitta platformada — BMW/Toyota hamkorligi mahsuli.",
      "Z4 M40i — 382 HP, 0-100 km/h 4.5 soniya. Eng tez 4-silindrli BMW.",
      "E89 Z4 ning qattiq tom kabrio mexanizmi 19 soniyada ishlaydi — texnologik masterpiece.",
      "Z4 G29 ni davra poygasida Supra dan 2-3 soniya tez bo'lgan — bir platforma, farqli sozlash.",
    ],
  },

  // ─── BMW M SERIYALARI ─────────────────────────────────────────────────────────
  {
    slug: "bmw-m3",
    uzbekistanSince: undefined,
    description:
      "BMW M3 — 1986-yildan boshlab chiqib kelayotgan va 'sport sedan' standartini belgilab turgan model. DTM poygalarida muvaffaqiyatli bo'lgan E30 M3 dan tortib 510 HP li hozirgi G80 gacha har avlod sport sedan sinfida benchmark hisoblanadi.",
    generations: [
      { year: 1986, title: "E30 M3", changes: "2.3L 4 silindrli, 200 HP. DTM chempionligi. Atigi 17,970 ta. Bugungi kunda 150,000–300,000 dollar." },
      { year: 1992, title: "E36 M3", changes: "3.0L 6 silindrli, 286 HP. Birinchi marta 4 eshikli M3." },
      { year: 2000, title: "E46 M3", changes: "3.2L S54, 343 HP. Ko'pchilik 'eng yaxshi M3' deb hisoblaydi." },
      { year: 2007, title: "E90/E92 M3", changes: "4.0L V8 420 HP — yagona V8 M3. 8200 ob/min gacha." },
      { year: 2014, title: "F80 M3", changes: "3.0L turbodvigatel, 431 HP. Birinchi turbo M3 — munozarali." },
      { year: 2021, title: "G80 M3", changes: "510 HP, xDrive AWD opsiyasi. Katta grille — dizayn bahsi. M3 Competition: 530 HP." },
    ],
    funFacts: [
      "E30 M3 — DTM, WTCC va Touring Car poygalarida 1987-1992 yillarda qirol. Bugungi kunda 300,000 dollar+.",
      "E46 M3 ko'pchilik avtomobil jurnalistlari tomonidan 'barcha davrlarning eng yaxshi sport sedani' deb tan olingan.",
      "E90/E92 M3 — yagona V8 M3. 4.0L 420 HP dvigatel 8200 ob/min — motosikl dvigateli darajasida.",
      "G80 M3 ning katta grille — 'grillgate' munozarasi boshladi. Ammo 530 HP uni tez unutdirar.",
    ],
  },
  {
    slug: "bmw-m5",
    uzbekistanSince: undefined,
    description:
      "BMW M5 — 1984-yildan boshlab 'super sedan' konsepsiyasini ifodalab kelayotgan model. E28 M5 ning qo'lda yig'ilgan dvigateli va hozirgi F90 M5 CS ning 635 HP quvvati orasida 40 yillik innovatsiyalar tarixi yotadi.",
    generations: [
      { year: 1984, title: "E28 M5", changes: "3.5L 6 silindrli, 286 HP. Har biri qo'lda yig'ilgan. Dunyoning eng tez seriyali sedani." },
      { year: 1988, title: "E34 M5", changes: "3.6L–3.8L 6 silindrli, 340 HP. Touring variant ham chiqdi." },
      { year: 1998, title: "E39 M5", changes: "5.0L V8, 400 HP. Ko'pchilik 'hamma davrlarning eng yaxshi sedani' deydi." },
      { year: 2005, title: "E60 M5", changes: "5.0L V10, 507 HP. 8250 ob/min. Formula 1 texnologiyasi — seriyali sedanda." },
      { year: 2011, title: "F10 M5", changes: "4.4L V8 biturbo, 560 HP. Birinchi turbo M5." },
      { year: 2018, title: "F90 M5", changes: "4.4L V8, 600 HP. Birinchi xDrive M5. M5 CS: 635 HP — rekord." },
      { year: 2024, title: "G90 M5", changes: "Plug-in hybrid: 4.4L V8 + elektr motor. Jami 727 HP — tarix rekord." },
    ],
    funFacts: [
      "E28 M5 (1984) — o'z davrida dunyodagi eng tez seriyali sed: 245 km/h. Har biri qo'lda yig'ilgan.",
      "E60 M5 V10 dvigatel 8250 ob/min — bu Formula 1 darajasidagi texnologiya seriyali sedan uchun.",
      "E39 M5 — Car and Driver jurnalining 'barcha davrlarning eng yaxshi 10 ta avtomobili' ro'yxatida.",
      "G90 M5 plug-in hybrid: 727 HP va 76 km sof elektr yurishi. 'Yashil super sedan' davri boshlandi.",
    ],
  },

  // ─── BMW ELEKTR SERIYALARI ────────────────────────────────────────────────────
  {
    slug: "bmw-i3",
    uzbekistanSince: undefined,
    description:
      "BMW i3 — 2013-yilda BMW ning elektr mobilligi yo'nalishidagi birinchi maxsus yaratilgan modeli. Karbon fibre kuzov, qayta ishlangan materiallardan yasalgan salon va shahar foydalanishi uchun mo'ljallangan dizayn bilan elektr avtomobil sanoatining pioneri bo'ldi.",
    generations: [
      { year: 2013, title: "i3 (60 Ah)", changes: "22 kWh batareya, 150 km yurish masofasi. Karbon fibre kuzov — engillashtirilgan elektr platform." },
      { year: 2016, title: "i3 (94 Ah)", changes: "33 kWh, 200 km. Rex (range extender) opsiyasi — kichik benzin generator." },
      { year: 2018, title: "i3 120 Ah", changes: "42 kWh, 260 km. Birinchi marta 200+ km real yurish masofasi." },
      { year: 2022, title: "Ishlab chiqarish tugadi", changes: "BMW i3 ishlab chiqarish to'xtatildi. 250,000 dan ortiq sotilgan." },
    ],
    funFacts: [
      "BMW i3 — 50% karbon fibre kuzov, 25% qayta ishlangan materiallar. Ekologik avtomobil sanoatining ramzi.",
      "BMW Leipzig zavodida quyosh panellari va shamol turbinalari energiyasi bilan ishlab chiqarilgan.",
      "Rex versiyasi — kichik 650cc 2 silindrli generator bilan qo'shimcha 100+ km.",
      "2013-yilda i3 Tesla Model S bilan raqobat qildi. Biroq shahar uchun mo'ljallanib, tashqarida qoldi.",
    ],
  },
  {
    slug: "bmw-i4",
    uzbekistanSince: undefined,
    description:
      "BMW i4 — 2021-yilda taqdim etilgan to'liq elektr gran coupe. Tesla Model 3 va Mercedes EQE ga to'g'ridan-to'g'ri raqobat sifatida yaratilgan i4 M50 versiyasida 544 HP va 0-100 km/h ni 3.9 soniyada bosib o'tish qobiliyatiga ega.",
    generations: [
      { year: 2021, title: "G26 i4 (I avlod)", changes: "eDrive40: 340 HP, 590 km. M50 xDrive: 544 HP, 520 km. BMW ning eng diapazoni keng elektr sedani." },
    ],
    funFacts: [
      "BMW i4 M50 — 544 HP, 0-100 km/h 3.9 soniya. Elektr BMW uchun M seriyasi performans darajasida.",
      "i4 eDrive40 — 590 km WLTP yurish masofasi. Shu sinfda rekord ko'rsatkichlardan biri.",
      "BMW i4 5 Seriya Gran Coupe bilan bir xil platformada — ICE va BEV versiyalari parallel ishlab chiqariladi.",
      "i4 ning sha'ni — 100,000 ta buyurtma birinchi oyda. Kompaniyaning eng kutilgan elektr modeli.",
    ],
  },
  {
    slug: "bmw-ix",
    uzbekistanSince: undefined,
    description:
      "BMW iX — 2021-yilda taqdim etilgan BMW ning flagman elektr SUV modeli. Yangi texnologiyalar testbedi sifatida yaratilgan iX — yangi BMW OS 8, 5G aloqa va butunlay yangi ichki dizayn konsepsiyasi bilan jihozlangan.",
    generations: [
      { year: 2021, title: "G06 iX (I avlod)", changes: "xDrive40: 326 HP, 425 km. xDrive50: 523 HP, 630 km. M60: 619 HP, 560 km." },
    ],
    funFacts: [
      "BMW iX M60 — 619 HP, 0-100 km/h 3.8 soniya. Eng tez BMW SUV.",
      "iX — 6G aloqaga tayyor texnologiya platformasi. Kelajak uchun 'testbed' avtomobili.",
      "Salon dizayni butunlay yangi — fizik tugmalar minimallashtirildi, yirik geksa 'BMW Curved Display'.",
      "BMW iX batareyasi 90% qayta ishlash imkoniyatiga ega — ekologik tsikl yopiladi.",
    ],
  },

  // ─── SPARK / MATIZ ───────────────────────────────────────────────────────────
  {
    slug: "daewoo-matiz",
    uzbekistanSince: 1998,
    description:
      "Daewoo Matiz — O'zbekistonda 'Matiz' nomini mashhur qilgan asl model. Suzuki Alto platformasida qurilgan bu kichkina avtomobil arzon narxi va tejamkor dvigateli bilan keng ommaga yo'l topdi. O'zbekistonda hozir ham 'Matiz' nomi kichik avtomobillarning umumiy nomi sifatida ishlatiladi.",
    generations: sparkGenerations,
    funFacts: [
      "O'zbekistonda 'Matiz' so'zi barcha kichik avtomobillarning umumiy nomiga aylangan.",
      "Suzuki Alto platformasi asosida qurilgan — Yaponiya dizayni, Koreya ishlab chiqarishi.",
      "0.8L dvigatel bilan ishlaydi — o'sha davrda eng iqtisodiy variantlardan biri.",
      "Daewoo kompaniyasi tugagandan so'ng model Chevrolet nomi bilan davom ettirildi.",
    ],
  },
  {
    slug: "chevrolet-spark-ii",
    uzbekistanSince: 2005,
    description:
      "Chevrolet Spark II avlod — Daewoo Matiz dan Chevrolet brendi ostiga o'tgan birinchi model. 1.0L dvigatel va yangilangan xavfsizlik tizimlari bilan jihozlangan bu avlod O'zbekistonda eski 'Matiz' o'rnini egallay boshladi.",
    generations: sparkGenerations,
    funFacts: [
      "Birinchi rasmiy 'Chevrolet Spark' brendi — Daewoo dan GM ga o'tishning belgisi.",
      "1.0L dvigatel qo'shilishi bilan quvvat sezilarli oshdi — 38 HP dan 65 HP ga.",
      "O'zbekistonda shaharda foydalanish uchun eng tejamkor variantlardan biri sifatida tanildi.",
      "Spark nomi inglizcha 'uchqun' degan ma'noni anglatadi.",
    ],
  },
  {
    slug: "chevrolet-spark-iii",
    uzbekistanSince: 2010,
    description:
      "Chevrolet Spark III avlod — tubdan yangilangan dizayn va kengaytirilgan salon bilan chiqqan model. ESP (Electronic Stability Program) tizimi standart sifatida qo'shildi, bu O'zbekiston yo'llarida xavfsizlikni sezilarli oshirdi.",
    generations: sparkGenerations,
    funFacts: [
      "ESP tizimi birinchi marta Spark ga standart sifatida qo'shildi — xavfsizlikda muhim qadam.",
      "Kengroq salon oldingi avlodga nisbatan ichki bo'shliqni 8% ga oshirdi.",
      "1.2L dvigatel varianti ham qo'shildi — quvvat va tejamkorlik o'rtasida yaxshi muvozanat.",
      "Dizayni zamonaviyroq bo'lib, yoshlar orasida mashhurroq bo'ldi.",
    ],
  },
  {
    slug: "chevrolet-spark-iv",
    uzbekistanSince: 2016,
    description:
      "Chevrolet Spark IV avlod — eng zamonaviy va xavfsiz Spark versiyasi. Apple CarPlay qo'llab-quvvatlashi va 4 yulduzli xavfsizlik reytingi bilan jihozlangan bu model kichik avtomobillar sinfida yangi standart o'rnatdi.",
    generations: sparkGenerations,
    funFacts: [
      "Apple CarPlay birinchi marta Spark ga qo'shildi — kichik sinf uchun katta texnologiya.",
      "4 yulduzli xavfsizlik reytingi — kichik avtomobillar uchun rekord.",
      "Ayollar orasida eng mashhur avtomobil — kichik o'lchami va parklanish qulayligi tufayli.",
      "O'zbekistonda qayta sotish narxi eng tez tushadigan modellardan biri sifatida tanilgan.",
    ],
  },

  // ─── GENTRA ──────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-gentra-i",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Gentra I avlod — UzAuto Motors tomonidan 2013-yilda ishlab chiqarish boshlangan dastlabki Gentra. 1.5L DOHC dvigatel va 5-pog'onali mexanik KPP bilan jihozlangan bu model arzon narxi va ishonchli mexanikasi bilan keng ommaga mo'ljallangan.",
    generations: gentraGenerations,
    funFacts: [
      "O'zbekistonda yillar davomida eng ko'p sotilgan avtomobil bo'lib kelgan.",
      "Gentra nomi Daewoo Nexia platformasiga asoslangan, Janubiy Koreyada ishlab chiqilgan.",
      "O'zbekistonda taksi va davlat xizmatlari uchun eng ko'p ishlatiladigan avtomobillar qatorida.",
      "UzAuto Motors yiliga 200,000 dan ortiq Gentra ishlab chiqarish quvvatiga ega.",
    ],
  },
  {
    slug: "chevrolet-gentra-facelift",
    uzbekistanSince: 2015,
    description:
      "Chevrolet Gentra Facelift — 2015-yilda yangilangan old qism dizayni va yaxshilangan salon bezagi bilan chiqdi. Xavfsizlik jihozlari kuchaytirildi, bu versiya I avlodga nisbatan sezilarli takomillashgan holda bozorga kirdi.",
    generations: gentraGenerations,
    funFacts: [
      "Facelift versiyasi old qismi tubdan o'zgartirildi — yangi faralar va bamper dizayni.",
      "Salon bezagi I avlodga nisbatan sifatliroq materiallar bilan yangilandi.",
      "Xavfsizlik jihozlari kuchaytirildi — qo'shimcha airbag opsiyasi qo'shildi.",
      "O'zbekiston bozorida Gentra ning eng mashhur versiyalaridan biri bo'ldi.",
    ],
  },
  {
    slug: "chevrolet-gentra-ii",
    uzbekistanSince: 2019,
    description:
      "Chevrolet Gentra II avlod — 2019-yilda yangi 1.5L dvigatel va 6-pog'onali avtomat KPP opsiyasi bilan chiqqan muhim yangilanish. Zamonaviy multimedia tizimi va yaxshilangan qurollanish darajasi bilan O'zbekiston bozorida yangi standart o'rnatdi.",
    generations: gentraGenerations,
    funFacts: [
      "6-pog'onali avtomat KPP — Gentra tarixida birinchi marta avtomat karobka qo'shildi.",
      "Yangi multimedia tizimi Android Auto va Apple CarPlay ni qo'llab-quvvatlaydi.",
      "O'zbekistonda eng ko'p sotiladigan avtomobil unvonini ushlab turdi.",
      "Yoqilg'i sarfi I avlodga nisbatan 0.2 l/100km ga kamaydi.",
    ],
  },
  {
    slug: "chevrolet-gentra-2022",
    uzbekistanSince: 2022,
    description:
      "Chevrolet Gentra 2022 yangilanishi — LED kunduzgi yorug'liklar va yangi rang palitrasi bilan modernizatsiya qilingan versiya. NVH (shovqin va tebranish) ko'rsatkichlari yaxshilanib, salon quyligi sezilarli oshdi.",
    generations: gentraGenerations,
    funFacts: [
      "LED DRL faralar birinchi marta Gentra ga standart sifatida qo'shildi.",
      "Yangi rang palitrasi 8 ta rang variantini o'z ichiga oladi.",
      "NVH yaxshilanishi shahar shovqinini salonga o'tishini sezilarli kamaytirdi.",
      "2022-yilgi Gentra O'zbekistonda eng arzon yangi avtomobillardan biri bo'lib qoldi.",
    ],
  },

  // ─── COBALT ──────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-cobalt-i",
    uzbekistanSince: 2011,
    description:
      "Chevrolet Cobalt I avlod — Braziliyada ishlab chiqilgan va O'zbekistonda maxsus kengaytirilgan salon bilan taqdim etilgan model. Gamma II 1.5L dvigatel va keng oilaviy salon bilan katta oilalar uchun mo'ljallangan.",
    generations: cobaltGenerations,
    funFacts: [
      "Cobalt O'zbekistonda maxsus kengaytirilgan salon bilan ishlab chiqariladi — Braziliya versiyasidan farqli.",
      "GM ning Global Emerging Markets (GEM) platformasida qurilgan — rivojlanayotgan bozorlar uchun maxsus.",
      "O'zbekistonda Gentra bilan birga eng ko'p sotiladigan avtomobil juftligini tashkil etadi.",
      "Cobalt nomi kimyoviy element — ko'k rangli metall kobaltdan olingan.",
    ],
  },
  {
    slug: "chevrolet-cobalt-facelift",
    uzbekistanSince: 2016,
    description:
      "Chevrolet Cobalt Facelift — 2016-yilda yangilangan faralar va bamper dizayni bilan chiqdi. Yangi multimedia tizimi qo'shildi, bu versiya I avlodning modernizatsiyalangan ko'rinishi sifatida O'zbekiston bozorida o'rnini mustahkamladi.",
    generations: cobaltGenerations,
    funFacts: [
      "Yangilangan old qism dizayni Cobalt ni yanada zamonaviy ko'rinishga olib keldi.",
      "Yangi multimedia tizimi navigator funksiyasini o'z ichiga oldi.",
      "O'zbekistonda Cobalt ning facelift versiyasi ko'cha taksilarida keng tarqalgan.",
      "Bumper va faralar dizayni Chevrolet ning global uslubiga mostirildi.",
    ],
  },
  {
    slug: "chevrolet-cobalt-ii",
    uzbekistanSince: 2020,
    description:
      "Chevrolet Cobalt II avlod — 2020-yilda yangi platforma va yaxshilangan xavfsizlik tizimi bilan chiqqan muhim yangilanish. Infotainment tizimi modernizatsiya qilinib, salonning umumiy sifati sezilarli oshirildi.",
    generations: cobaltGenerations,
    funFacts: [
      "Yangi platforma salondagi bo'shliqni 5% ga oshirdi.",
      "Xavfsizlik tizimi yangilandi — oldingi to'qnashuv ogohlantirish tizimi qo'shildi.",
      "II avlod infotainment tizimi Android Auto ni qo'llab-quvvatlaydi.",
      "O'zbekistonda ommabop taksi va oilaviy avtomobil sifatida tanilgan.",
    ],
  },
  {
    slug: "chevrolet-cobalt-2023",
    uzbekistanSince: 2023,
    description:
      "Chevrolet Cobalt 2023 — Android Auto va yangi rang palitrasi bilan jihozlangan eng so'nggi yangilanish. Salon materiallari sifati oshirildi, bu versiya Cobalt ning hozirgi bozordagi eng zamonaviy ko'rinishi hisoblanadi.",
    generations: cobaltGenerations,
    funFacts: [
      "Android Auto birinchi marta Cobalt ga standart sifatida qo'shildi.",
      "Yangi rang variantlari — 6 ta yangi rang palitrasida taklif etiladi.",
      "Salon materiallari yaxshilandi — yumshoqroq plastik va yangi to'qima.",
      "2023-yilgi Cobalt O'zbekistonda eng arzon avtomat KPP li avtomobil sifatida tanildi.",
    ],
  },

  // ─── NEXIA 3 ─────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-nexia-3-i",
    uzbekistanSince: 2016,
    description:
      "Chevrolet Nexia 3 I avlod — 2016-yilda UzAuto Motors tomonidan Chevrolet Aveo platformasida ishlab chiqarila boshlagan model. 1.5L SOHC dvigatel va 5-pog'onali mexanik KPP bilan jihozlangan, arzon va ishonchli sedan.",
    generations: nexia3Generations,
    funFacts: [
      "'Nexia' nomi O'zbekistonda ikonik bo'lib, har qanday kichik sedanni 'Nexia' deb atash odati paydo bo'lgan.",
      "UzAuto Motors Nexia 3 ni yiliga 100,000 dan ortiq miqdorda ishlab chiqaradi.",
      "O'zbekistonda eng ko'p sotiladigan avtomobillar ro'yxatida doimo yuqori o'rinda turadi.",
      "Taxi va yuk tashish uchun ham keng qo'llaniladi — mustahkam konstruksiyasi tufayli.",
    ],
  },
  {
    slug: "chevrolet-nexia-3-2019",
    uzbekistanSince: 2019,
    description:
      "Chevrolet Nexia 3 (2019) — multimedia tizimi yangilangan va Android Auto qo'shilgan versiya. Ichki bezak ham yaxshilanib, bu yangilanish Nexia 3 ni O'zbekiston bozorida yanada raqobatbardosh qildi.",
    generations: nexia3Generations,
    funFacts: [
      "Android Auto qo'shilishi Nexia 3 ni texnologik jihatdan yangi darajaga ko'tardi.",
      "Yangilangan ichki bezak salon sifatini sezilarli oshirdi.",
      "O'zbekistonda eng ko'p sotiladigan modellar ro'yxatidagi o'rnini saqlab qoldi.",
      "Yoqilg'i sarfi I avlodga nisbatan bir oz kamaydi — 7.5 dan 7.4 l/100km ga.",
    ],
  },
  {
    slug: "chevrolet-nexia-3-2022",
    uzbekistanSince: 2022,
    description:
      "Chevrolet Nexia 3 (2022) — LED kunduzgi yorug'liklar va yangi rang palitrasi bilan modernizatsiyalangan eng so'nggi versiya. Yaxshilangan ovoz izolatsiyasi bilan salon qulayligi oshirildi.",
    generations: nexia3Generations,
    funFacts: [
      "LED kunduzgi yorug'liklar birinchi marta Nexia 3 ga standart sifatida qo'shildi.",
      "Yangi rang palitrasi yangi uslub variantlarini taklif etadi.",
      "Ovoz izolatsiyasi yaxshilanishi yo'l shovqinini 15% ga kamaytirdi.",
      "2022-yilgi Nexia 3 O'zbekistonda eng arzon yangi sedan sifatida reytingda qoldi.",
    ],
  },

  // ─── LACETTI ─────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-lacetti-i",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Lacetti I avlod — 2004-yilda Janubiy Koreyada Daewoo tomonidan ishlab chiqilgan global model. 1.4L, 1.6L va 1.8L dvigatel variantlari bilan sedan va hatchback kuzovlarida taqdim etilgan.",
    generations: lacettiGenerations,
    funFacts: [
      "Lacetti nomi lotincha 'lac' (ko'l) so'zidan kelib chiqqan — go'zallik va tiniqlik ramzi.",
      "Global bozorda 50 dan ortiq mamlakatta sotilgan.",
      "GM ning J-platforma asosida qurilgan — Opel Astra J bilan umumiy texnik yechimlar.",
      "1.6L dvigatel varianti jahonda eng mashhur bo'ldi.",
    ],
  },
  {
    slug: "chevrolet-lacetti-uzb",
    uzbekistanSince: 2009,
    description:
      "Chevrolet Lacetti O'zbekiston versiyasi — 2009-yilda UzAuto Motors tomonidan mahalliy ishlab chiqarish boshlangan va O'zbekiston yo'llariga moslashtirilgan suspenziya bilan jihozlangan model.",
    generations: lacettiGenerations,
    funFacts: [
      "O'zbekiston yo'llariga moslashtirilgan suspenziya — mahalliy yo'l sharoitini hisobga olgan.",
      "UzAuto Motors da ishlab chiqarish O'zbekistonda narxni sezilarli tushirdi.",
      "O'zbekistonda taksi sifatida eng ko'p foydalanilgan avtomobillardan biri.",
      "Sedan varianti O'zbekistonda hatchback dan ancha mashhur bo'ldi.",
    ],
  },
  {
    slug: "chevrolet-lacetti-facelift",
    uzbekistanSince: 2014,
    description:
      "Chevrolet Lacetti Facelift — 2014-yilda yangilangan old qism va yangi disk g'ildiraklari bilan chiqdi. Ichki bezak yaxshilanib, bu versiya Lacetti ning O'zbekiston bozorida mavqeini mustahkamladi.",
    generations: lacettiGenerations,
    funFacts: [
      "Yangilangan old qism dizayni Lacetti ga zamonaviyroq ko'rinish berdi.",
      "Yangi disk g'ildiraklari va lak qoplamalar vizual jozibani oshirdi.",
      "Salon bezagida yangi to'qima materiallari ishlatildi.",
      "Facelift versiyasi O'zbekistonda Lacetti ning eng ko'p sotiladigan varianti bo'ldi.",
    ],
  },
  {
    slug: "chevrolet-lacetti-2019",
    uzbekistanSince: 2019,
    description:
      "Chevrolet Lacetti (2019) — multimedia tizimi modernizatsiya qilingan va xavfsizlik sensori qo'shilgan yakuniy yangilanish. Bu versiya Lacetti ning O'zbekiston bozorida faol bo'lgan eng so'nggi iteratsiyasi hisoblanadi.",
    generations: lacettiGenerations,
    funFacts: [
      "Modernizatsiyalangan multimedia tizimi Bluetooth va USB ni qo'llab-quvvatlaydi.",
      "Orqa parkovka sensori birinchi marta standart sifatida qo'shildi.",
      "Lacetti 2019 yildan keyin sekin-asta yangi modellar bilan almashtirildi.",
      "O'zbekistonda Lacetti ishlatilgan avtomobil bozorida hali ham mashhur.",
    ],
  },

  // ─── MALIBU ──────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-malibu-i",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Malibu I avlod — 1964-yilda 'Chevelle Malibu' nomi bilan chiqqan klassik Amerika sedani. Kuchli 3.2L dvigatel va keng kuzov bilan Amerika avtomobil sanoatining oltin davrini ifodalaydi.",
    generations: malibuGenerations,
    funFacts: [
      "'Malibu' nomi Kaliforniyadagi mashhur plyaj shaharchasidan olingan.",
      "1964-yilgi I avlod klassik Amerika 'muscle car' madaniyatining belgisi bo'ldi.",
      "Keng kuzov va kuchli V8 dvigatel uning asosiy xususiyatlari edi.",
      "AQShda 1960-lardagi avtomobil ishlab chiqarish qadriyatlarini ifodalaydi.",
    ],
  },
  {
    slug: "chevrolet-malibu-iv",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Malibu IV avlod — 1978-yildagi neft inqirozi ta'sirida kichiklashtirilgan va tejamkor dvigatellar bilan jihozlangan versiya. Bu avlod Amerika avtomobil sanoatining iqtisodiy inqirozga moslashish davrini ifodalaydi.",
    generations: malibuGenerations,
    funFacts: [
      "1973-yilgi neft inqirozi ta'sirida Malibu kichiklashtirildi va yengilroq qilindi.",
      "Tejamkor dvigatellar o'sha davrning iqtisodiy talabiga javob berdi.",
      "IV avlod Malibu ning kamroq mashhur, ammo tarixiy jihatdan muhim versiyasi.",
      "Bu davr Amerika avtomobillari uchun o'tish davri hisoblandi.",
    ],
  },
  {
    slug: "chevrolet-malibu-v",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Malibu V avlod — 1997-yilda 'Malibu' nomining qaytishi. Front-wheel drive platforma bilan yangilangan bu model zamonaviy Malibu silsilasinig boshlanishini belgiladi.",
    generations: malibuGenerations,
    funFacts: [
      "1997-yil 'Malibu' nomining 1983-yildan keyin qayta tiklanishi bo'ldi.",
      "Front-wheel drive platforma zamonaviy avtomobil standartlariga mos keldi.",
      "V avlod Malibu ning zamonaviy davri boshlanishini anglatadi.",
      "AQShda o'rta sinf sedanlari bozorida raqobatbardosh bo'lish uchun yangilandi.",
    ],
  },
  {
    slug: "chevrolet-malibu-vii",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Malibu VII avlod — 2008-yilda tubdan yangilangan dizayn va keng salon bilan chiqqan model. 2.4L Ecotec dvigatel va zamonaviy ichki bezak bilan o'rta sinf sedan segmentida yangi o'ringa ega bo'ldi.",
    generations: malibuGenerations,
    funFacts: [
      "2.4L Ecotec dvigatel tejamkorlik va quvvatni muvozanatlashtirishda muvaffaqiyatli bo'ldi.",
      "Yangi dizayn Malibu ga Yevropa sedanlariga raqobat qilish imkonini berdi.",
      "Keng salon oilaviy foydalanish uchun qulay bo'lib qoldi.",
      "VII avlod Chevrolet ning 'yengilash' dasturining bir qismi edi.",
    ],
  },
  {
    slug: "chevrolet-malibu-viii",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Malibu VIII avlod — 2013-yilda O'zbekistonga kelgan va biznes vakillari orasida mashhur bo'lgan model. Yangi platforma, 2.0L turbodvigatel opsiyasi va MyLink multimedia tizimi bilan jihozlangan premium sedan.",
    generations: malibuGenerations,
    funFacts: [
      "O'zbekistonda Malibu biznes sinfi va davlat xizmatchilarining avtomobili sifatida tanilgan.",
      "2013-yilgi avlod O'zbekistonda juda mashhur bo'lib, ko'chada eng ko'p uchraydigan premium sedanlardan biri.",
      "MyLink multimedia tizimi o'sha davr uchun zamonaviy va qulay edi.",
      "2.0L turbodvigatel opsiyasi Malibu ga sport sedan imidji berdi.",
    ],
  },
  {
    slug: "chevrolet-malibu-ix",
    uzbekistanSince: 2016,
    description:
      "Chevrolet Malibu IX avlod — 2016-yilda engillashtirilgan va Teen Driver xavfsizlik tizimi qo'shilgan yangilangan versiya. 8 ta havo yostiq standart sifatida o'rnatildi, bu xavfsizlik ko'rsatkichlarini sezilarli oshirdi.",
    generations: malibuGenerations,
    funFacts: [
      "180 kg yengillashtirish yoqilg'i sarfini 8.5 dan 8.2 l/100km ga tushirdi.",
      "Teen Driver xavfsizlik tizimi yangi haydovchilar uchun maxsus mo'ljallangan.",
      "8 ta havo yostiq standart sifatida — xavfsizlik reytingida 5 yulduz.",
      "O'zbekistonda IX avlod ham keng tarqalgan premium sedan bo'ldi.",
    ],
  },

  // ─── TRACKER ─────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-tracker-i",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Tracker I avlod — 1989-yilda 'Geo Tracker' nomi bilan chiqqan off-road SUV. Suzuki Vitara bilan umumiy platforma asosida qurilgan, to'liq yo'ldan tashqari imkoniyatlari bilan ajralib turgan.",
    generations: trackerGenerations,
    funFacts: [
      "'Tracker' inglizcha 'kuzatuvchi' ma'nosini anglatadi.",
      "Geo Tracker — GM ning Geo brendi ostida chiqarilgan, Suzuki bilan birgalikda yaratilgan.",
      "Off-road SUV sifatida boshlangan, keyinchalik shahar crossover'iga aylandi.",
      "I avlod engil vazni tufayli off-road uchun juda mos keldi.",
    ],
  },
  {
    slug: "chevrolet-tracker-ii",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Tracker II avlod — 1999-yilda kengaytirilgan salon va 4-eshikli variant bilan chiqqan yangilangan model. Yaxshilangan interior va ko'proq qulay variant Tracker ni oilaviy foydalanish uchun yanada mos qildi.",
    generations: trackerGenerations,
    funFacts: [
      "4-eshikli variant birinchi marta II avlodda taqdim etildi.",
      "Kengaytirilgan salon oilaviy foydalanish uchun qulay bo'ldi.",
      "II avlod Tracker AQShda hamda rivojlanayotgan bozorlarda keng tarqaldi.",
      "1.8L va 2.0L dvigatel variantlari taklif etildi.",
    ],
  },
  {
    slug: "chevrolet-tracker-iii",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Tracker III avlod — 2013-yilda to'liq yangilangan kompakt crossover. Off-road SUV dan shahar crossover'iga o'tishni anglatuvchi bu model 1.4L turbodvigatel va front-wheel drive bilan O'zbekiston yoshlari orasida mashhur bo'ldi.",
    generations: trackerGenerations,
    funFacts: [
      "2013-yilgi avlod off-road SUV dan shahar crossover'iga to'liq o'tishni anglatadi.",
      "O'zbekistonda 1.4T turbodvigatel versiyasi eng ommabop — tejamkor va quvvatli.",
      "Tracker O'zbekistonda yoshlar va faol hayot kechiruvchilar orasida mashhur.",
      "Shahar crossover segmentida O'zbekiston bozorida muhim o'rinni egalladi.",
    ],
  },
  {
    slug: "chevrolet-tracker-iv",
    uzbekistanSince: 2019,
    description:
      "Chevrolet Tracker IV avlod — 2019-yilda yangi platforma, 1.2T va 1.5T dvigatellar va CVT karobka bilan chiqqan eng so'nggi versiya. Zamonaviy xavfsizlik tizimlari va yangilangan dizayn bilan O'zbekiston bozorida kuchli mavqeni saqlab qoldi.",
    generations: trackerGenerations,
    funFacts: [
      "CVT karobka birinchi marta Tracker ga qo'shildi — yumshoq va tejamkor haydash.",
      "Yangi xavfsizlik tizimi — avtomatik favqulodda tormozlash qo'shildi.",
      "Dizayn tubdan yangilandi — zamonaviy Chevrolet uslubiga mos.",
      "O'zbekistonda IV avlod ham Tracker ning mashhurligini saqlab qoldi.",
    ],
  },

  // ─── CAPTIVA ─────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-captiva-i",
    uzbekistanSince: 2007,
    description:
      "Chevrolet Captiva I avlod — 2006-yilda Daewoo Winstorm nomi bilan ham chiqarilgan o'rta o'lchamli SUV. GM ning Theta platformasida qurilgan, 2.0L turbodiezel va 2.4L benzin dvigatel opsiyalari bilan 7 o'rindiqli salon taqdim etildi.",
    generations: captivaGenerations,
    funFacts: [
      "Captiva Opel Antara bilan bitta platforma va zavodda ishlab chiqarilgan.",
      "Janubiy Koreyaning Incheon zavodida ishlab chiqarilgan — GM Korea mahsuloti.",
      "7 o'rindiqli versiyasi O'zbekistonda eng mashhur — katta oilalar uchun qulay.",
      "'Captiva' nomi ispancha 'asirga olingan' ma'nosini anglatadi.",
    ],
  },
  {
    slug: "chevrolet-captiva-facelift",
    uzbekistanSince: 2011,
    description:
      "Chevrolet Captiva Facelift — 2011-yilda yangilangan old faralar va bamper bilan modernizatsiyalangan versiya. Yaxshilangan ichki bezak va yangi multimedia tizimi bilan Captiva ning raqobatbardoshligi oshirildi.",
    generations: captivaGenerations,
    funFacts: [
      "Yangilangan old faralar va bamper Captiva ga zamonaviyroq ko'rinish berdi.",
      "Yangi multimedia tizimi navigatsiya va Bluetooth ni o'z ichiga oldi.",
      "O'zbekistonda facelift versiyasi I avlodga nisbatan ko'proq xavfsizlik jihozlari bilan keldi.",
      "Facelift versiyasi O'zbekistonda mashhur oilaviy SUV sifatida o'rnini saqlab qoldi.",
    ],
  },
  {
    slug: "chevrolet-captiva-ii",
    uzbekistanSince: 2016,
    description:
      "Chevrolet Captiva II avlod — 2016-yilda yangi platforma va yaxshilangan aerodinamika bilan chiqqan zamonaviy SUV. Kuchli xavfsizlik tizimi va 2.4L benzin dvigatel bilan O'zbekiston oilaviy SUV bozorida yetakchi o'rinni egallaydi.",
    generations: captivaGenerations,
    funFacts: [
      "Yangi platforma yoqilg'i sarfini kamaytirdi va haydash sifatini oshirdi.",
      "Yaxshilangan aerodinamika yuqori tezliklarda barqarorlikni ta'minladi.",
      "Kuchli xavfsizlik tizimi — 6 ta havo yostiq standart sifatida.",
      "O'zbekistonda katta oilalar uchun birinchi tanlov sifatida tanilgan.",
    ],
  },

  // ─── EQUINOX ─────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-equinox-i",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Equinox I avlod — 2004-yilda Saturn Vue platformasida chiqarilgan birinchi Equinox. 3.4L V6 dvigatel va AWD opsiyasi bilan jihozlangan, kuchli va yirik crossover sifatida tanilgan.",
    generations: equinoxGenerations,
    funFacts: [
      "'Equinox' astronomik atama — Yer quyosh atrofida aylanishida kun va tunning tenglanish nuqtasi.",
      "Saturn Vue platformasida qurilgan — GM ning o'sha davrdagi kompakt crossover platformasi.",
      "3.4L V6 dvigatel I avlod uchun juda kuchli edi.",
      "AWD tizimi off-road sharoitlarda ham ishlatish imkonini berdi.",
    ],
  },
  {
    slug: "chevrolet-equinox-ii",
    uzbekistanSince: undefined,
    description:
      "Chevrolet Equinox II avlod — 2010-yilda kengaytirilgan salon va 4-silindrli dvigatel opsiyasi bilan yangilangan model. Yoqilg'i sarfi kamaydi va salon bo'shlig'i I avlodga nisbatan sezilarli oshdi.",
    generations: equinoxGenerations,
    funFacts: [
      "4-silindrli dvigatel qo'shilishi yoqilg'i sarfini sezilarli kamaytirdi.",
      "Salon bo'shlig'i I avlodga nisbatan sezilarli oshdi.",
      "II avlod Equinox ning global bozorda raqobatbardoshligini oshirdi.",
      "Yaxshilangan NVH izolatsiyasi salon qulayligini yangi darajaga olib chiqdi.",
    ],
  },
  {
    slug: "chevrolet-equinox-iii",
    uzbekistanSince: 2018,
    description:
      "Chevrolet Equinox III avlod — 2018-yilda O'zbekistonga kelgan yangi avlod. Engil platforma (180 kg yengilroq), 1.5T turbodvigatel, Wi-Fi hotspot va 8 ta standart havo yostiq bilan jihozlangan zamonaviy crossover.",
    generations: equinoxGenerations,
    funFacts: [
      "III avlod o'zidan oldingi versiyaga nisbatan 180 kg yengilroq — yoqilg'i sarfini kamaytiradi.",
      "O'zbekistonda 2018-yildan boshlab sotila boshlagan yangi avlod crossover.",
      "1.5T turbodvigateli 170 HP bersa-da, yoqilg'i sarfi 2.0L naturally aspirated ga tenglashadi.",
      "Wi-Fi hotspot — O'zbekistonda shu sinfda birinchilardan biri.",
    ],
  },

  // ─── DAMAS ───────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-damas-i",
    uzbekistanSince: undefined,
    description:
      "Daewoo Damas I avlod — 1991-yilda Suzuki Every litsenziyasi asosida Daewoo tomonidan ishlab chiqarilgan asl model. 0.8L dvigatel va 8 o'rindiqli salon bilan bozor va kichik biznes uchun universal yordamchi sifatida yaratilgan.",
    generations: damasGenerations,
    funFacts: [
      "Suzuki Every ning litsenzion ishlab chiqarilishi — original Yaponiya dizayni.",
      "8 o'rindiqli versiyasi shahar marshrutkasi sifatida keng ishlatiladi.",
      "O'zbekistonda 'Damas' so'zi har qanday kichik mikrofurgonning umumiy nomi bo'lib qolgan.",
      "I avlod hali ham ba'zi joylarda eski versiya sifatida topiladi.",
    ],
  },
  {
    slug: "chevrolet-damas-1996",
    uzbekistanSince: 1996,
    description:
      "Daewoo Damas (1996) — UzDaewoo tomonidan O'zbekistonda mahalliy ishlab chiqarish boshlangan versiya. Bu qadam O'zbekistonda Damas ning ommalashishida muhim rol o'ynadi va narxini sezilarli tushirdi.",
    generations: damasGenerations,
    funFacts: [
      "O'zbekistonda mahalliy ishlab chiqarish Damas narxini sezilarli tushirdi.",
      "UzDaewoo korxonasi keyinchalik UzAuto Motors ga aylandi.",
      "Mahalliy ishlab chiqarish O'zbekiston iqtisodiy mustaqilligida muhim qadam bo'ldi.",
      "O'zbekiston bozorlarida, qishloqlarda va xizmat sohasida eng ko'p uchraydigan avtomobil.",
    ],
  },
  {
    slug: "chevrolet-damas-ii",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Damas II avlod — 2013-yilda UzAuto Motors Chevrolet brendi ostida chiqara boshlagan versiya. Texnik jihatlari asosan o'zgarmagan bo'lsa-da, yangi brend nomi va kichik takomillashuvlar bilan bozorga kirdi.",
    generations: damasGenerations,
    funFacts: [
      "Chevrolet brendi ostida chiqarish Damas ning rasmiy imidjini yangiladi.",
      "Texnik xususiyatlar asosan I avlod bilan bir xil qoldi — ishonchli mexanika.",
      "O'zbekiston bozorida Damas ning eng ko'p tarqalgan versiyasi.",
      "8 o'rindiqli versiyasi hali ham shahar marshrutkalarida faol ishlatiladi.",
    ],
  },
  {
    slug: "chevrolet-damas-2019",
    uzbekistanSince: 2019,
    description:
      "Chevrolet Damas (2019) — xavfsizlik jihozlari yaxshilangan va yangi rang variantlari qo'shilgan eng so'nggi yangilanish. 30 yildan ortiq xizmat qilib kelgan Damas ning hozirgi bozordagi eng zamonaviy ko'rinishi.",
    generations: damasGenerations,
    funFacts: [
      "30 yildan ortiq ishlab chiqarilishiga qaramay, Damas O'zbekistonda hali ham mashhur.",
      "Xavfsizlik yaxshilanishlari zamonaviy standartlarga moslashishga qadam.",
      "Yangi rang variantlari Damas ga yanada chiroyli ko'rinish berdi.",
      "O'zbekistonda 'Damas' iborasi til va madaniyatning bir qismiga aylangan.",
    ],
  },

  // ─── LABO ────────────────────────────────────────────────────────────────────
  {
    slug: "chevrolet-labo-i",
    uzbekistanSince: undefined,
    description:
      "Daewoo Labo I avlod — 1991-yilda Suzuki ST90 litsenziyasi asosida ishlab chiqarilgan kichik yuk mashinasi. 0.8L dvigatel, 2 o'rindiq va kichik yuk kuzovi bilan qishloq va shahar chekkasi uchun mo'ljallangan.",
    generations: laboGenerations,
    funFacts: [
      "Labo O'zbekistondagi eng yengilvaznli yuk mashinalaridan biri — atigi 715 kg.",
      "Suzuki ST90 litsenziyasida ishlab chiqarilgan — Yaponiya muhandisligi, Koreya texnologiyasi.",
      "Qishloq xo'jaligida sabzavot va meva tashish uchun ideal — tor yo'llarda ham bemalol o'tadi.",
      "Damas bilan bitta dvigatelni baham ko'radi — 0.8L.",
    ],
  },
  {
    slug: "chevrolet-labo-1996",
    uzbekistanSince: 1996,
    description:
      "Daewoo Labo (1996) — UzDaewoo tomonidan O'zbekistonda mahalliy ishlab chiqarish boshlangan versiya. Qishloq va shahar chekkasi qo'shnilarining iqtisodiy yordamchisi sifatida O'zbekiston bozorida o'rnini topdi.",
    generations: laboGenerations,
    funFacts: [
      "O'zbekistonda mahalliy ishlab chiqarish Labo ni yanada arzonroq qildi.",
      "Qishloq xo'jaligida keng qo'llanildi — meva-sabzavot tashishda ideal.",
      "O'zbekistonda 'Labo' so'zi kichik yuk mashinasining umumiy nomi bo'lib qolgan.",
      "Damas bilan bir zavodda, bir dvigatel bilan ishlab chiqarilgan.",
    ],
  },
  {
    slug: "chevrolet-labo-ii",
    uzbekistanSince: 2013,
    description:
      "Chevrolet Labo II avlod — 2013-yilda UzAuto Motors Chevrolet brendi bilan chiqara boshlagan versiya. Damas kabi texnik jihatlari asosan o'zgarmagan, ammo yangi brand nomi bilan modernizatsiyalangan kichik yuk mashinasi.",
    generations: laboGenerations,
    funFacts: [
      "Chevrolet Labo — O'zbekistondagi eng arzon yangi Chevrolet model.",
      "Damas bilan bitta zavod va bitta dvigatelni baham ko'radi.",
      "Qishloq xo'jaligi va mayda savdo uchun hali ham eng tejamkor yechim.",
      "O'zbekistonda kichik biznes uchun birinchi avtomobil tanlovi bo'lib qolmoqda.",
    ],
  },

  // ─── NISSAN TARIXIY (1935–1969) ───────────────────────────────────────────
  {
    slug: "datsun-14",
    description:
      "Datsun 14 — Nissan kompaniyasining 1930-yillardagi ilk modellaridan biri. 'DAT' nomidan kelib chiqqan 'Datsun' brendi kichik, arzon avtomobillar uchun yaratilgan. Bu model Yaponiya avtomobil sanoatining dastlabki qadamlaridan birini ifodalaydi.",
    generations: [
      { year: 1931, title: "Datsun Type 11", changes: "Birinchi Datsun — DAT Motors dan ajralib chiqqan kichik avtomobil bo'limi. Ingliz Austin Seven bazasida." },
      { year: 1933, title: "Datsun Type 12", changes: "Kuzov kengaytirildi, dvigatel hajmi oshirildi." },
      { year: 1935, title: "Datsun 14", changes: "722 cc dvigatel, yaxshilangan kuzov, Yaponiya bozori uchun moslashtirildi." },
      { year: 1938, title: "Datsun 17", changes: "Yangi platforma, kuchliroq dvigatel, ko'proq jixozlar." },
    ],
    funFacts: [
      "'Datsun' nomi 'DAT son' — ya'ni 'DAT ning o'g'li' ma'nosini anglatadi.",
      "Nissan 1934-yilda Datsun kompaniyasini sotib oldi va bu brendni saqlab qoldi.",
      "Datsun brendi 2012-yilda qayta jonlantirildi — arzon bozorlar uchun.",
      "1930-yillar Datsun modellari Yaponiya avtomobil sanoatining poydevori hisoblanadi.",
    ],
  },
  {
    slug: "nissan-patrol-fj40",
    description:
      "Nissan Patrol (60 seriya) — 1958-yilda ishlab chiqarilgan va qiyin yo'llarda tengsiz bo'lgan off-road SUV. Toyota Land Cruiser bilan raqobatda bo'lgan bu model jangovar va qidiruv operatsiyalarida ham faol ishlatilgan.",
    generations: [
      { year: 1951, title: "4W60 (Birinchi Patrol)", changes: "Harbiy maqsadlar uchun yaratilgan, to'liq yo'ldan tashqari imkoniyatlar, 3.7L benzin dvigatel." },
      { year: 1958, title: "60 seriya", changes: "Fuqarolik bozori uchun moslashtirildi, 7 o'rindiqli versiya, dvizel dvigatel opsiyasi." },
      { year: 1980, title: "160 seriya", changes: "Kengaytirilgan salon, coil spring suspenziya, yaxshilangan ichki bezak." },
      { year: 1987, title: "260 seriya", changes: "Yangi platforma, kuchli TD42 turbodiezel dvigatel, zamonaviy xavfsizlik tizimi." },
    ],
    funFacts: [
      "Nissan Patrol harbiy maqsadlar uchun ishlab chiqilgan — ko'plab mamlakatlar armiyasi foydalangan.",
      "Afrika va Avstraliyada eng ishonchli off-road avtomobil sifatida mashhur.",
      "60 seriya 1980-yilgacha ishlab chiqarildi — 22 yillik xizmat muddati.",
      "Patrol dvizel dvigati tuning hamjamiyatida juda mashhur — chidamlilik uchun.",
    ],
  },
  {
    slug: "nissan-bluebird-510",
    description:
      "Nissan Bluebird 510 — 1967-yilda Nissan Sochiro Yoshida rahbarligida yaratilgan va avtomobil dizaynida inqilob qilgan kompakt sedan. Pininfarina tomonidan yordamlashib yaratilgan, ushbu model Yaponiya avtomobillarini G'arb bozorlarida tan olindirdi.",
    generations: [
      { year: 1957, title: "110 seriya (I avlod)", changes: "Birinchi Bluebird — oddiy dizayn, 1.0L dvigatel, Yaponiya ichki bozori." },
      { year: 1959, title: "210 seriya (II avlod)", changes: "Kengaytirilgan kuzov, yaxshilangan komfort, eksport bozorlariga chiqdi." },
      { year: 1963, title: "310 seriya (III avlod)", changes: "Finlandir dizayn ta'siri, yaxshilangan performance." },
      { year: 1967, title: "510 seriya (IV avlod)", changes: "Ikonik model — Pininfarina aerodinamik dizayn, MacPherson strut suspenziya, sportroq haydash." },
      { year: 1973, title: "610 seriya (V avlod)", changes: "Kengaytirildi, yaxshilangan xavfsizlik, V6 dvigatel opsiyasi." },
    ],
    funFacts: [
      "Bluebird 510 AQSh bozorida katta muvaffaqiyat qozondi — Yaponiya avtomobillarining G'arbga kirib kelishi.",
      "Pininfarina dizayn elementi — Italiya uslubida Yaponiya muhandisligi.",
      "510 seriya tuning madaniyatida ikonik — drift va rally muxlislarining sevimli modeli.",
      "Bluebird nomi Maeterlinck tomonidan yozilgan 'Ko'k qush' pyesasidan ilhomlanib qo'yilgan.",
    ],
  },
  {
    slug: "nissan-fairlady-z-s30",
    description:
      "Nissan Fairlady Z (S30) — 1969-yilda AQSh bozorida 240Z nomi bilan mashhur bo'lgan sport kupesi. Yoshi Katayama tomonidan Amerika bozori uchun maxsus yaratilgan va Yaponiya sport avtomobillarini global darajaga olib chiqqan model.",
    generations: [
      { year: 1969, title: "S30 (240Z)", changes: "Birinchi Z-seriya — 2.4L inline-6, McPherson strut. Yaponiya sport avtomobillarida inqilob." },
      { year: 1974, title: "S30 (260Z)", changes: "2.6L dvigatel, uzunlashtirilgan 2+2 versiya, yaxshilangan xavfsizlik." },
      { year: 1975, title: "S30 (280Z)", changes: "Fuel injection, bumper kengaytirildi, kuchliroq dvigatel." },
      { year: 1978, title: "S130 (280ZX)", changes: "Yangi platforma, T-bar tomi, turbocharged versiya paydo bo'ldi." },
    ],
    funFacts: [
      "240Z birinchi yilida 16,215 ta sotildi — Yaponiya sport avtomobili rekord.",
      "Road & Track jurnali 1970-yilda 240Z ni 'Yilning eng yaxshi avtomobili' deb e'lon qildi.",
      "Z-seriya bugungacha davom etmoqda — 2022-yilda Z (RZ34) yangi avlod chiqdi.",
      "240Z narxi 1969-yilda 3,526 dollar — o'sha davr uchun juda arzon sport avtomobil.",
    ],
  },

  // ─── NISSAN SKYLINE / GT-R SERIYALARI ─────────────────────────────────────
  {
    slug: "nissan-skyline-c10",
    description:
      "Nissan Skyline GT-R (C10) — 1969-yilda chiqarilgan va 'Hakosuka' (quti-Skyline) nomi bilan mashhur bo'lgan ikonik Yaponiya sport sedani. S20 inline-6 dvigatel bilan qurollangan va JTCC (Yaponiya Touring Car Championship) da hech kimga yengilmagan.",
    generations: [
      { year: 1957, title: "ALSI (I avlod)", changes: "Birinchi Skyline — Prince Motors tomonidan yaratilgan, luxury sedan." },
      { year: 1963, title: "S50 (II avlod)", changes: "GT versiyasi paydo bo'ldi, birinchi sport Skyline." },
      { year: 1968, title: "C10 (III avlod)", changes: "Birinchi 'GT-R' versiyasi — S20 2.0L DOHC, 160 HP, 52 ta poyga g'alabasi." },
      { year: 1972, title: "C110 (IV avlod)", changes: "'Kenmeri' Skyline — ko'proq comfort, GT-R versiyasi ham chiqdi." },
    ],
    funFacts: [
      "C10 GT-R — JTCC da 52 ta ketma-ket g'alaba, bir marta ham yengilmagan.",
      "'Hakosuka' — qutisimon kuzov shaklidan kelib chiqqan mashhur laqab.",
      "S20 dvigatel Toyota 7R bilan raqobatda maxsus ishlab chiqarilgan.",
      "C10 GT-R faqat 1945 ta ishlab chiqarilgan — bugungi kunda juda qimmatbaho kolleksion avtomobil.",
    ],
  },
  {
    slug: "nissan-skyline-r32",
    description:
      "Nissan Skyline GT-R R32 — 1989-yilda 16 yillik pauza'dan keyin qaytgan va 'Godzilla' laqabini olgan afsonaviy poyga avtomobili. ATTESA ET-S AWD va Super HICAS to'rt g'ildirakli ruletka tizimi bilan avto dunyo tarixiga kirdi.",
    generations: [
      { year: 1989, title: "R32 GT-R", changes: "ATTESA ET-S AWD, RB26DETT twin-turbo 2.6L, rasmiy 280 HP (aslida ~320+). JTCC da hukmronlik." },
      { year: 1993, title: "R32 GT-R V-spec", changes: "ATTESA Pro tizimi, sport quyi korpus, Brembo tormozlar." },
    ],
    funFacts: [
      "'Godzilla' laqabi Avstraliyadagi motorsport muxlislaridan kelib chiqqan — barcha raqiblarini yeydi.",
      "R32 GT-R 1990–1993 yillarda JTCC da barcha raqiblarini mag'lub etdi — 29 ta g'alaba.",
      "Yaponiyada rasmiy 280 HP cheklov siyosati (Gentleman's Agreement) bo'lgan — aslida kuchliroq edi.",
      "R32 2014-yilda Gran Turismo video o'yinida 'Eng yaxshi GT-R' tanlovida birinchi o'rin oldi.",
    ],
  },
  {
    slug: "nissan-skyline-r34",
    description:
      "Nissan Skyline GT-R R34 — GT-R seriyasining so'nggi Skyline platformasida yaratilgan va 'Fast and Furious' filmida mashhur bo'lgan model. RB26DETT twin-turbo dvigatel, multi-function display va Nürburgring da 7:59 vaqt bilan tarix yozgan.",
    generations: [
      { year: 1999, title: "R34 GT-R", changes: "RB26DETT twin-turbo, 6-pog'onali manual KPP, MFD (multi-function display) bortida." },
      { year: 2000, title: "R34 GT-R V-spec II", changes: "Karbon fiber kuzov elementlar, NISMO sport suspenziya, yaxshilangan aerodinamika." },
      { year: 2002, title: "R34 GT-R M-spec", changes: "Komfort versiyasi — yumshoq suspenziya, Bose audio tizimi, oxirgi R34 GT-R." },
    ],
    funFacts: [
      "Paul Walker ning 'Fast and Furious 2' filmida R34 GT-R ishtiroki modelni jahon mashhurligiga olib chiqdi.",
      "R34 GT-R AQShda 25 yillik qoida tufayli 2024-yildan import qilish mumkin.",
      "Nürburgring da 7:59.68 vaqt — o'sha davr uchun rekord.",
      "R34 GT-R faqat 11,578 ta ishlab chiqarilgan — joriy bozor narxi 150,000+ dollar.",
    ],
  },
  {
    slug: "nissan-gt-r-r35",
    description:
      "Nissan GT-R R35 — 2007-yilda 'Godzilla' ning yangi avlodi sifatida taqdim etilgan va supercar lar bilan bellashadigan texnologik mo'jiza. VR38DETT twin-turbo V6, ATTESA ET-S AWD va Nürburgring da 7:26 vaqt bilan avtomobil dunyosini larzaga soldi.",
    generations: [
      { year: 2007, title: "R35 GT-R (bazaviy)", changes: "VR38DETT 3.8L twin-turbo V6, 480 HP, ATTESA ET-S AWD, Brembo tormozlar." },
      { year: 2011, title: "GT-R Black Edition", changes: "Titanium egzoz, NISMO suspenziya kalibrlash, qo'shimcha aerodinamik elementlar." },
      { year: 2014, title: "GT-R Track Edition", changes: "Nurburgring-sozlangan suspenziya, yaxshilangan cooling tizimi, 545 HP." },
      { year: 2017, title: "GT-R NISMO", changes: "600 HP, karbon fiber panellar, GT3 yarish texnologiyalari, 7:08 Nurburgring vaqt." },
    ],
    funFacts: [
      "R35 GT-R Top Gear da Ferrari ve Lamborghini dan arzonroq bo'lishiga qaramay ulardan tezroq edi.",
      "VR38DETT dvigatel har bir qo'l bilan yig'iladi — 'Takumi' mühendisi imzosi dvigatelda.",
      "Nürburgring da 7:08.679 — 2017-yil NISMO versiyasi bilan.",
      "2024-yil GT-R R36 yangi avlod kutilmoqda — elektr yoki gibrid texnologiya bilan.",
    ],
  },

  // ─── NISSAN ZAMONAVIY SERIYALARI ─────────────────────────────────────────
  {
    slug: "nissan-patrol-y62",
    uzbekistanSince: 2012,
    description:
      "Nissan Patrol Y62 — 2010-yilda taqdim etilgan va full-size SUV segmentida hashamat bilan qudratni birlashtirgan model. 5.6L V8 VK56VD dvigatel, Hydraulic Body Motion Control suspenziya va 8 o'rindiqli salon bilan O'zbekistonda ham mashhur.",
    generations: [
      { year: 1997, title: "Y61 (avvalgi avlod)", changes: "TD42 turbodiezel, qattiq osma old va orqa. Off-road klassikasi." },
      { year: 2010, title: "Y62 (joriy avlod)", changes: "5.6L V8 benzin, Hydraulic Body Motion Control, 8 o'rindiq, DVD entertainment." },
      { year: 2014, title: "Y62 Facelift I", changes: "Yangilangan faralar, yangi multimedia tizimi, qo'shimcha xavfsizlik." },
      { year: 2020, title: "Y62 Facelift II", changes: "ProPilot 2.0 tizimi, 12.3\" raqamli asboblar paneli, yaxshilangan shovqin izolyatsiyasi." },
    ],
    funFacts: [
      "Y62 Patrol O'zbekistonda 'Prado dan kattasi' sifatida tanilgan — boylik va kuch ramzi.",
      "5.6L V8 dvigatel — Nismo versiyasida 428 HP ga yetadi.",
      "Hydraulic Body Motion Control (HBMC) suspenziya — off-road va shahar uchun avtomatik moslashadi.",
      "Arab mamlakatlari, Avstraliya va O'rta Osiyoda eng mashhur full-size SUV.",
    ],
  },
  {
    slug: "nissan-altima-i",
    description:
      "Nissan Altima I avlod — 1992-yilda Stanza o'rniga kelgan va o'rta sinf sedan segmentida mustahkam o'ringa ega bo'lgan model. GA dvigatel texnologiyasi va qulay salon bilan AQSh bozorida tez mashhur bo'ldi.",
    generations: [
      { year: 1992, title: "I avlod (L30)", changes: "Stanza o'rniga keldi, GA16DE va KA24DE dvigatellar, front-wheel drive, zamonaviy dizayn." },
      { year: 1997, title: "II avlod (L31)", changes: "Kengaytirilgan salon, SE versiyasi sport bezaklari bilan, yaxshilangan xavfsizlik." },
      { year: 2002, title: "III avlod (L31)", changes: "3.5L V6 opsiyasi, CVT avtomat KPP birinchi marta, Bose audio tizimi." },
      { year: 2007, title: "IV avlod (L32)", changes: "Yangi platforma, Coupe versiyasi qo'shildi, 2.5L va 3.5L dvigatellar." },
      { year: 2013, title: "V avlod (L33)", changes: "Aerodynamik dizayn, Connect multimedia tizimi, Around View Monitor." },
    ],
    funFacts: [
      "Altima AQShda yillar davomida top-5 ko'p sotiladigan avtomobillar orasida.",
      "CVT (Continuously Variable Transmission) ni Altima popular qildi — hozir ko'plab brendlar foydalanadi.",
      "Altima nomi inglizcha 'ultimate' (eng yaxshi) so'zidan kelib chiqqan.",
      "III avlod Altima 3.5L V6 bilan 0-100 km/h ni 6.2 sekundda bosib o'tgan.",
    ],
  },
  {
    slug: "nissan-altima-vi",
    uzbekistanSince: 2018,
    description:
      "Nissan Altima VI avlod — 2018-yilda taqdim etilgan va VC-Turbo (variable compression turbo) dvigatel texnologiyasi bilan inqilob qilgan zamonaviy sedan. O'zbekiston bozorida ham mashhur bo'lgan bu model qulay salon va tejamkor dvigatel bilan ajralib turadi.",
    generations: [
      { year: 2018, title: "VI avlod (L34)", changes: "VC-Turbo 2.0L dvigatel (dunyo birinchisi), ProPilot Assist, AWD opsiyasi." },
      { year: 2022, title: "Facelift", changes: "Yangilangan faralar va bamper, yangi multimedia, qo'shimcha xavfsizlik jihozlari." },
    ],
    funFacts: [
      "VC-Turbo — siqish nisbatini o'zi o'zgartira oladigan dunyo birinchi seriyali dvigatel.",
      "VI avlodda birinchi marta AWD (barcha g'ildirak haydash) opsiyasi paydo bo'ldi.",
      "ProPilot Assist — qisman avtonom haydash tizimi, Yaponiyadan import.",
      "O'zbekistonda Nissan Altima biznes sinfi vakili sifatida qaraladi.",
    ],
  },
  {
    slug: "nissan-qashqai-i",
    description:
      "Nissan Qashqai I avlod — 2006-yilda taqdim etilgan va 'kompakt crossover' segmentini yaratgan model. Shahar haydash qulayi va SUV ning baland pozitsiyasini birlashtirgan bu model Yevropa bozorida katta muvaffaqiyat qozondi.",
    generations: [
      { year: 2006, title: "I avlod (J10)", changes: "Kompakt crossover trendinig boshlanishi — 2.0L benzin va 1.6L/2.0L dvizel, shahar uchun ideal." },
      { year: 2010, title: "I avlod Facelift", changes: "Yangilangan dizayn, yaxshilangan multimedia, EcoMode tizimi." },
    ],
    funFacts: [
      "Qashqai 'kompakt crossover' segmentining asoschisi — bu avloddan oldin bu segment mavjud emas edi.",
      "Qashqai nomi Eron ko'chmanchi qabilasidan olingan.",
      "Birinchi yilda 100,000 ta buyurtma — Nissan Yevropa tarixi rekordi.",
      "Qashqai Buyuk Britaniyada ishlab chiqariladi — Sunderland zavodi.",
    ],
  },
  {
    slug: "nissan-qashqai-iii",
    description:
      "Nissan Qashqai III avlod — 2021-yilda yangi CMF-C platformada qurilgan va e-POWER gibrid texnologiyasi bilan jihozlangan zamonaviy crossover. Yevropa bozorida eng mashhur crossover o'rnini saqlab qoldi.",
    generations: [
      { year: 2013, title: "II avlod (J11)", changes: "Yangi platforma, kattaroq salon, 360° Around View Camera, yaxshilangan NVH." },
      { year: 2021, title: "III avlod (J12)", changes: "CMF-C platforma, e-POWER 1.5L mild-hybrid, ProPilot 2.0, raqamli kokpit." },
    ],
    funFacts: [
      "e-POWER tizimi — dvigatel faqat generator sifatida ishlaydi, g'ildiraklarni to'liq elektr motor haydaydi.",
      "III avlod Nürburgring da 200+ saatlik test o'tgan.",
      "Qashqai Yevropa da Nissan ning eng ko'p sotiladigan modeli.",
      "ProPilot 2.0 — avtobanda to'liq avtonom haydash imkoniyati.",
    ],
  },
  {
    slug: "nissan-x-trail-i",
    description:
      "Nissan X-Trail I avlod — 2000-yilda taqdim etilgan va yuk sig'imi hamda off-road imkoniyatlarini qulay salonla birlashtirgan kompakt SUV. Yevropa va Osiyo bozorlarida katta muvaffaqiyat qozondi.",
    generations: [
      { year: 2000, title: "I avlod (T30)", changes: "All-Mode 4x4 tizimi, keng yuk bo'limi, 2.0L va 2.5L benzin, dvizel opsiyasi." },
      { year: 2007, title: "II avlod (T31)", changes: "Kengaytirilgan salon, CVT KPP opsiyasi, yaxshilangan xavfsizlik." },
    ],
    funFacts: [
      "X-Trail nomi 'cross-trail' ning qisqartmasi — yo'ldan tashqari va yo'lda haydash.",
      "I avlod All-Mode 4x4 tizimi real vaqtda 2WD/4WD/4WD Lock rejimlarini tanlash imkonini beradi.",
      "X-Trail Rossiya va O'rta Osiyo bozorlarida juda mashhur — ishonchlilik va qulaylik.",
      "Yaponiya va Britaniyada ishlab chiqariladi.",
    ],
  },
  {
    slug: "nissan-x-trail-iv",
    uzbekistanSince: 2021,
    description:
      "Nissan X-Trail IV avlod — 2021-yilda CMF-C platformada qurilgan va e-POWER gibrid tizimi bilan jihozlangan zamonaviy SUV. 7 o'rindiqli versiyasi va ProPilot 2.0 tizimi bilan O'zbekistonda ham mashhur bo'ldi.",
    generations: [
      { year: 2013, title: "III avlod (T32)", changes: "Yangi aerodinamik kuzov, Around View Monitor, Connect multimedia tizimi." },
      { year: 2021, title: "IV avlod (T33)", changes: "CMF-C platforma, e-POWER 1.5L, ProPilot 2.0, 7 o'rindiq, raqamli kokpit." },
    ],
    funFacts: [
      "IV avlod e-POWER tizimi — yoqilg'i sarfini 30% kamaytiradi.",
      "7 o'rindiqli versiya oilaviy SUV sifatida O'zbekistonda mashhur.",
      "ProPilot 2.0 birinchi marta X-Trail ga o'rnatildi.",
      "X-Trail IV avlod Yaponiyada 2021-yil eng ko'p sotiladigan SUV.",
    ],
  },
  {
    slug: "nissan-murano-i",
    description:
      "Nissan Murano I avlod — 2002-yilda taqdim etilgan va krossoverkupelarning kashshofi bo'lgan model. Noodatiy dizayni, 3.5L V6 va CVT avtomat KPP bilan bozorda yangi segment ochdi.",
    generations: [
      { year: 2002, title: "I avlod (Z50)", changes: "Krossover-kupe trendinig boshlanishi — panoramik tom, 3.5L V6, CVT karobka." },
      { year: 2008, title: "II avlod (Z51)", changes: "Kengaytirilgan salon, Bose audio, Around View Monitor, yaxshilangan dinamika." },
    ],
    funFacts: [
      "Murano nomi Italiyaning mashhur shisha ishlab chiqarish oroli Murano dan olingan.",
      "CVT karobka birinchi SUV da Muranodan boshlandi.",
      "Panoramik tom Muranodan targ'ib bo'ldi — hozir deyarli barcha SUV larda mavjud.",
      "I avlod Murano dizayni hozir ham ko'pchilikka zamonaviy ko'rinadi.",
    ],
  },
  {
    slug: "nissan-murano-iii",
    uzbekistanSince: 2015,
    description:
      "Nissan Murano III avlod — 2014-yilda taqdim etilgan va yangi V-Motion dizayn tili bilan Nissan ning premium imijini mustahkamlagan crossover. O'zbekistonda biznes sinf crossover sifatida mashhur.",
    generations: [
      { year: 2014, title: "III avlod (Z52)", changes: "V-Motion grille, yuk bo'limi kengaytirildi, ProPilot Assist, EcoMode, yangi multimedia." },
      { year: 2019, title: "III avlod Facelift", changes: "Yangilangan faralar, ProPilot va xavfsizlik paket yaxshilandi, yangi ranglar." },
    ],
    funFacts: [
      "V-Motion dizayn tili — Nissan ning barcha modellariga joriy etilgan yangi identitet.",
      "III avlod Murano Shimoliy Amerikada eng mashhur mid-size crossover.",
      "3.5L VQ35DE dvigatel — Nissan ning eng ishonchli dvigatellaridan biri.",
      "O'zbekistonda Murano 'yuqori sinf' ramzi sifatida qaraladi.",
    ],
  },
  {
    slug: "nissan-leaf-i",
    description:
      "Nissan Leaf I avlod — 2010-yilda dunyo bozorlariga chiqarilgan va ommaviy elektr avtomobil davrini ochgan tarixiy model. 100% elektr, zero emission va 200 km yurish masofasi bilan elektromobil sanoatini o'zgartirdi.",
    generations: [
      { year: 2010, title: "I avlod (ZE0)", changes: "24 kWh batareya, 109 HP, 200 km yurish masofasi, CHAdeMO tezkor zaryad." },
      { year: 2013, title: "I avlod Facelift (AZE0)", changes: "Yangilangan dizayn, 6.6 kW bortli zaryad, yaxshilangan salon." },
    ],
    funFacts: [
      "Nissan Leaf dunyo tarixida eng ko'p sotilgan elektr avtomobil (2023-gacha).",
      "CHAdeMO tezkor zaryad tizimi Leaf bilan mashhur bo'ldi — 30 minutda 80% zaryad.",
      "2010-yilda 'Yilning eng yaxshi avtomobili' mukofoti — Europa va Yaponiyada.",
      "Leaf nomi 'Leading, Environmentally-friendly, Affordable, Family car' qisqartmasi.",
    ],
  },
  {
    slug: "nissan-leaf-ii",
    description:
      "Nissan Leaf II avlod — 2017-yilda yangi platforma, yaxshilangan batareya va ProPilot tizimi bilan chiqarilgan zamonaviy elektr hatchback. 40 kWh va 62 kWh batareya variantlari bilan yurish masofasini sezilarli oshirdi.",
    generations: [
      { year: 2017, title: "II avlod (ZE1)", changes: "40 kWh batareya, 150 HP, ProPilot Assist, e-Pedal (bir pedal boshqaruv)." },
      { year: 2019, title: "II avlod Plus", changes: "62 kWh batareya, 214 HP, 385 km yurish masofasi, ProPilot 2.0." },
    ],
    funFacts: [
      "e-Pedal texnologiyasi — faqat gaz pedalida sekinlashish va to'liq to'xtash imkoniyati.",
      "II avlod Leaf e-Pedal bilan regenerativ tormozlash samaradorligini 2x oshirdi.",
      "ProPilot Assist birinchi marta ommaviy elektr avtomobilga Leaf da o'rnatildi.",
      "62 kWh batareya versiyasi — Tokyo dan Osaka gacha to'xtamasdan yetib boradi (500+ km).",
    ],
  },

  // ─── HYUNDAI TARIXIY (1967–1990) ─────────────────────────────────────────────
  {
    slug: "hyundai-pony",
    description:
      "Hyundai Pony — 1975-yilda taqdim etilgan va Koreya ning birinchi o'zi ishlab chiqargan avtomobili. Giorgio Giugiaro dizayni va Mitsubishi texnologiyasi asosida qurilgan bu model Hyundai kompaniyasini jahon bozorlariga olib chiqdi.",
    generations: [
      { year: 1975, title: "I avlod", changes: "Birinchi Koreya milliy avtomobili — Giugiaro dizayni, Mitsubishi 1.2L dvigatel, ford KPP." },
      { year: 1982, title: "II avlod (Pony 2)", changes: "Yangilangan dizayn, 1.4L dvigatel, Kanada eksporti boshlandi." },
      { year: 1985, title: "Excel (Pony 3)", changes: "Pony bazasida Excel (X3) nomi bilan chiqdi, front-wheel drive platforma." },
    ],
    funFacts: [
      "Hyundai Pony — Yaponiyadan tashqarida Osiyo ning birinchi o'z avtomobili.",
      "1986-yilda Koreya dan AQSh ga eksport boshlandi — birinchi yilida 168,882 ta sotildi.",
      "Giorgio Giugiaro — VW Golf, Maserati Bora va Hyundai Pony ni bir vaqtda loyihalagan.",
      "Pony nomi inglizcha 'kichik ot' — kichik, arzon va ishonchli avtomobil ramzi.",
    ],
  },
  {
    slug: "hyundai-excel",
    description:
      "Hyundai Excel (X3) — 1985-yilda taqdim etilgan va AQSh bozorida 'yilning eng yaxshi qiymati' deb e'lon qilingan kompakt hatchback. Arzon narxi va zamonaviy dizayni bilan Hyundai ni global brend sifatida tanittirdi.",
    generations: [
      { year: 1985, title: "I avlod (X3)", changes: "Front-wheel drive, 1.5L 4-silindrli dvigatel, hatchback va sedan variantlari. AQSh da 168,882 ta birinchi yil." },
      { year: 1989, title: "II avlod (X2)", changes: "Kuzov yangilandi, 1.5L SOHC dvigatel, yaxshilangan xavfsizlik." },
    ],
    funFacts: [
      "Excel 1986-yilda AQSh da birinchi yil eng ko'p sotiladigan import avtomobil bo'ldi.",
      "Time jurnali 'Yilning eng yaxshi mahsuloti' ni Excel ga berdi.",
      "Excel eng arzon yangi avtomobil sifatida $4,995 narxda sotildi (1986).",
      "Excel muvaffaqiyati Hyundai ni global brendga aylantirgan asosiy qadam.",
    ],
  },
  {
    slug: "hyundai-stellar",
    description:
      "Hyundai Stellar — 1983-yilda taqdim etilgan va Hyundai ning birinchi premium sedani sifatida yaratilgan model. Mitsubishi Sigma platformasi asosida qurilgan bo'lib, Koreya biznes sinfi uchun mo'ljallangan.",
    generations: [
      { year: 1983, title: "I avlod", changes: "Mitsubishi Sigma platformasi, 1.6L va 2.0L dvigatel, Koreya biznes sinfi uchun." },
      { year: 1987, title: "Facelift", changes: "Yangilangan faralar, yaxshilangan salon, kuchli 2.0L dvigatel." },
    ],
    funFacts: [
      "Stellar — Hyundai ning birinchi yuqori sinf sedani, Sonata dan oldin.",
      "Mitsubishi bilan hamkorlik Hyundai ning texnologik rivojlanishida muhim rol o'ynadi.",
      "Stellar Koreya hukumati avtomobillarida va taksilarda keng ishlatilgan.",
      "Stellar nomi lotincha 'yulduzli' ma'nosini anglatadi.",
    ],
  },

  // ─── HYUNDAI ELANTRA SERIYASI ─────────────────────────────────────────────
  {
    slug: "hyundai-elantra-i",
    description:
      "Hyundai Elantra I avlod — 1990-yilda taqdim etilgan va kompakt sedan segmentida Hyundai ning asosiy vakili bo'lgan model. 'Lantra' nomi bilan Yevropa bozorlarida ham sotilgan va Hyundai ning sifatga e'tibori ortishiga hissa qo'shgan.",
    generations: [
      { year: 1990, title: "I avlod (J1)", changes: "1.5L va 1.6L dvigatel, front-wheel drive, Yevropa da 'Lantra' nomi." },
      { year: 1995, title: "II avlod (J2)", changes: "Aerodynamik kuzov, 1.5L DOHC dvigatel, ABS opsiyasi." },
      { year: 2000, title: "III avlod (XD)", changes: "Yangi platforma, 1.6L va 2.0L dvigatel, zamonaviy dizayn." },
      { year: 2006, title: "IV avlod (HD)", changes: "Kengaytirilgan salon, 1.6L va 2.0L CVVT dvigatel, Elantra ning mashhur avlodi." },
    ],
    funFacts: [
      "Elantra nomi ispan tilidan 'erkinlik' ma'nosini anglatadi.",
      "IV avlod Elantra (HD) O'zbekistonda Daewoo Nexia bilan raqobatlashgan.",
      "Elantra 30 yildan ortiq davomida kompakt sedan segmentining top modeli.",
      "VI avlod Elantra Motor Trend jurnalida 'Yilning avtomobili' unvonini olgan (2021).",
    ],
  },
  {
    slug: "hyundai-elantra-vii",
    uzbekistanSince: 2021,
    description:
      "Hyundai Elantra VII avlod — 2020-yilda tubdan yangilangan va 'Parametrik Dinamizm' dizayn tili bilan chiqarilgan zamonaviy sedan. Motor Trend 'Yilning avtomobili' unvonini olgan bu model O'zbekistonda ham keng tarqalgan.",
    generations: [
      { year: 2015, title: "VI avlod (AD)", changes: "Yangi dizayn tili, 1.6L va 2.0L dvigatel, Hyundai SmartSense xavfsizlik paketi." },
      { year: 2020, title: "VII avlod (CN7)", changes: "Parametrik Dinamizm dizayn, 1.6L turbo va 2.0L, IVT karobka, Motor Trend Car of the Year." },
    ],
    funFacts: [
      "VII avlod 2021-yil Motor Trend 'Car of the Year' — Hyundai uchun tarixiy yutuq.",
      "Parametrik Dinamizm dizayn tili — keskin chiziqlar va futuristik ko'rinish.",
      "N Line sport versiyasi 1.6T turbodvigatel bilan 204 HP beradi.",
      "O'zbekistonda Elantra biznes sinfi uchun qulay narxdagi tanlov sifatida mashhur.",
    ],
  },

  // ─── HYUNDAI SONATA SERIYASI ─────────────────────────────────────────────
  {
    slug: "hyundai-sonata-i",
    description:
      "Hyundai Sonata I avlod — 1985-yilda taqdim etilgan va Hyundai ning o'rta sinf sedan segmentidagi dastlabki modeli. Mitsubishi platformasi asosida qurilgan bo'lib, Koreya biznes sinfining avtomobiliga aylandi.",
    generations: [
      { year: 1985, title: "I avlod (Y1)", changes: "Mitsubishi Sigma/Galant platformasi, 1.8L va 2.0L dvigatel, Koreya va eksport bozori." },
      { year: 1988, title: "II avlod (Y2)", changes: "Yangi platforma, front-wheel drive, 2.0L dvigatel, zamonaviy dizayn." },
      { year: 1993, title: "III avlod (Y3)", changes: "Aerodynamik kuzov, Mitsubishi bilan hamkorlik tugadi, mustaqil rivojlanish." },
    ],
    funFacts: [
      "Sonata nomi italyan musiqiy atamasi — yumshoq va keng harakatni bildiradi.",
      "II avloddan Hyundai Mitsubishi texnologiyasidan mustaqil bo'la boshladi.",
      "Sonata AQShda Toyota Camry va Honda Accord bilan raqobatlashgan.",
      "Sonata Koreya da eng mashhur biznes sedan — 35+ yillik tarix.",
    ],
  },
  {
    slug: "hyundai-sonata-dn8",
    uzbekistanSince: 2020,
    description:
      "Hyundai Sonata DN8 — 2019-yilda taqdim etilgan va 'Sensuous Sportiness' dizayn tili bilan chiqarilgan zamonaviy sedan. Solar Roof gibrid tizimi va raqamli kokpit bilan zamonaviy texnologiyalarni birlashtirib, O'zbekistonda biznes sinfi sedani sifatida mashhur bo'ldi.",
    generations: [
      { year: 2009, title: "VI avlod (YF)", changes: "Fluidic Sculpture dizayn, 2.0L va 2.4L GDI dvigatel, zamonaviy multimedia." },
      { year: 2014, title: "VII avlod (LF)", changes: "Yangilangan Fluidic Sculpture 2.0, 1.6T va 2.0L dvigatel, Qi simsiz zaryad." },
      { year: 2019, title: "VIII avlod (DN8)", changes: "Sensuous Sportiness dizayn, Solar Roof gibrid, 1.6T va 2.5T, 12.3\" raqamli kokpit." },
    ],
    funFacts: [
      "Solar Roof — Sonata ning tomi quyosh paneli, harakatlanish masofasini 1,300 km/yil oshiradi.",
      "DN8 birinchi Sonata bo'lib 2.5L turbodvigatel (N Line) bilan chiqdi — 290 HP.",
      "12.3\" raqamli kokpit va 10.25\" multimedia — Hyundai ning yangi texnologiya standarti.",
      "O'zbekistonda Sonata biznes odam avtomobili sifatida keng tanilgan.",
    ],
  },

  // ─── HYUNDAI TUCSON SERIYASI ─────────────────────────────────────────────
  {
    slug: "hyundai-tucson-i",
    description:
      "Hyundai Tucson I avlod — 2004-yilda taqdim etilgan va Hyundai ning birinchi kompakt crossover modeli. Santa Fe ning kichik ukasi sifatida yaratilgan bu model kompakt SUV segmentida mustahkam o'rin egalladi.",
    generations: [
      { year: 2004, title: "I avlod (JM)", changes: "Birinchi Tucson — 2.0L va 2.7L V6 dvigatel, AWD opsiyasi, 5 o'rindiq." },
      { year: 2009, title: "II avlod (LM/IX35)", changes: "Yangi platforma, ix35 nomi Yevropa uchun, 1.6L turbo opsiyasi qo'shildi." },
      { year: 2015, title: "III avlod (TL)", changes: "Yangi Fluidic Sculpture 2.0 dizayni, 1.6T va 2.0L, torque vectoring AWD." },
    ],
    funFacts: [
      "Tucson nomi Arizona shtatidagi Tucson shahridan olingan.",
      "I avlod Tucson kompakt crossover segmentini kengaytirishga hissa qo'shdi.",
      "Tucson Yevropa da ix35 nomi bilan sotildi — regional branding strategiyasi.",
      "II avlod ix35 Yevropa Koreya avtomobillarining ommaviy tarqalishida muhim rol.",
    ],
  },
  {
    slug: "hyundai-tucson-iv",
    uzbekistanSince: 2021,
    description:
      "Hyundai Tucson IV avlod — 2020-yilda tubdan yangilangan va 'Parametrik Dinamizm' dizayn tili bilan chiqarilgan eng zamonaviy kompakt SUV. Gizlangan dastaklar, panoramik tom va gibrid versiya bilan segment lideriga aylandi.",
    generations: [
      { year: 2020, title: "IV avlod (NX4)", changes: "Parametrik Dinamizm dizayn, yashirin dastaklar, 1.6T Hybrid va PHEV, panoramik tom." },
      { year: 2023, title: "IV avlod Facelift", changes: "Yangilangan faralar, yangi multimedia interfeysi, qo'shimcha xavfsizlik jihozlari." },
    ],
    funFacts: [
      "Yashirin (flush) dastaklar dizayni — Tucson IV ni ikonik qilgan xususiyat.",
      "1.6T Hybrid versiyasi 265 HP — kompakt SUV uchun juda kuchli.",
      "Tucson IV avlod 2021-yil 'World Car of the Year' finalistlaridan biri.",
      "O'zbekistonda Tucson oilaviy crossover sifatida eng mashhur Hyundai modeli.",
    ],
  },

  // ─── HYUNDAI SANTA FE SERIYASI ────────────────────────────────────────────
  {
    slug: "hyundai-santa-fe-i",
    description:
      "Hyundai Santa Fe I avlod — 2000-yilda taqdim etilgan va Hyundai ning birinchi to'liq qiyofali SUV modeli. Kompakt va o'rta o'lchamdagi oilaviy SUV segmentida mustahkam o'rin egalladi.",
    generations: [
      { year: 2000, title: "I avlod (SM)", changes: "Birinchi Santa Fe — 2.4L va 2.7L V6 dvigatel, AWD opsiyasi, oilaviy SUV." },
      { year: 2006, title: "II avlod (CM)", changes: "Kengaytirilgan platforma, 2.7L va 3.3L V6, 7 o'rindiq versiyasi." },
      { year: 2012, title: "III avlod (DM)", changes: "Fluidic Sculpture dizayn, 2.0T va 2.4L dvigatel, yaxshilangan xavfsizlik tizimi." },
    ],
    funFacts: [
      "Santa Fe nomi Nyu-Meksiko shtatidagi Santa Fe shahridan olingan.",
      "I avlod Santa Fe Hyundai ning SUV strategiyasining asosi bo'ldi.",
      "Santa Fe AQSh da Toyota RAV4 va Honda CR-V bilan raqobatlashgan.",
      "III avlod Santa Fe Yevropa da ham juda mashhur bo'ldi.",
    ],
  },
  {
    slug: "hyundai-santa-fe-v",
    uzbekistanSince: 2023,
    description:
      "Hyundai Santa Fe V avlod — 2023-yilda box-style dizayn bilan tubdan yangilangan va off-road imkoniyatlari kuchaytirilgan mid-size SUV. HTRAC AWD tizimi va 2.5L turbodvigatel bilan O'zbekistonda ham taqdim etildi.",
    generations: [
      { year: 2018, title: "IV avlod (TM)", changes: "Yangi platforma, 2.0T va 2.4L dvigatel, Hyundai SmartSense standart, HTRAC AWD." },
      { year: 2023, title: "V avlod (MX5)", changes: "Box-style dizayn, 2.5T HTRAC, off-road rejimi, raqamli kokpit, panoramik tom." },
    ],
    funFacts: [
      "V avlod box-style dizayni — Land Rover Defender dan ilhomlanib yaratilgan kutilmagan o'zgarish.",
      "HTRAC AWD tizimi — real vaqtda old va orqa o'qlar orasida kuch taqsimlaydi.",
      "Santa Fe V avlod Hyundai ning birinchi 7 o'rindiqli off-road qobiliyatli SUV.",
      "O'zbekistonda V avlod 2023-yildan rasmiy sotuvga kiritildi.",
    ],
  },

  // ─── HYUNDAI PALISADE ─────────────────────────────────────────────────────
  {
    slug: "hyundai-palisade",
    uzbekistanSince: 2020,
    description:
      "Hyundai Palisade — 2018-yilda taqdim etilgan va Hyundai ning eng yirik va luxe full-size SUV modeli. 3.8L V6 Lambda dvigatel, 8 o'rindiq va HTRAC AWD tizimi bilan Koreya SUV larining eng tepasidir.",
    generations: [
      { year: 2018, title: "I avlod (LX2)", changes: "3.8L V6 Lambda, 8 o'rindiq, HTRAC AWD, Calligraphy luxe versiyasi, 12.3\" kokpit." },
      { year: 2023, title: "I avlod Facelift", changes: "Yangilangan dizayn, 2.2L dvizel opsiyasi qo'shildi, yaxshilangan multimedia." },
    ],
    funFacts: [
      "Palisade nomi San-Diego yaqinidagi hashamatli Palisades hududi nomidan olingan.",
      "3.8L V6 — 291 HP, 355 Nm — Hyundai SUV lar ichida eng kuchli dvigatel.",
      "Calligraphy versiyasi Hyundai ning eng qimmat seriyali modeli.",
      "O'zbekistonda Palisade 'Koreya Patrol'i' sifatida tanilgan.",
    ],
  },

  // ─── HYUNDAI SPORT / COUPE ────────────────────────────────────────────────
  {
    slug: "hyundai-tiburon",
    description:
      "Hyundai Tiburon — 1996-yilda taqdim etilgan va Koreya ning birinchi sport kupesi. 'Coupe' nomi bilan Yevropa da sotilgan bu model Hyundai ning dizayn va texnologik imkoniyatlarini namoyish etdi.",
    generations: [
      { year: 1996, title: "I avlod (RD)", changes: "Birinchi Koreya sport kupesi — 1.8L va 2.0L DOHC dvigatel, aerodinamik kuzov." },
      { year: 2001, title: "II avlod (GK)", changes: "Yangi platforma, 2.0L va 2.7L V6, Tiburon GT versiyasi, yaxshilangan dinamika." },
      { year: 2007, title: "Yakuniy versiya", changes: "2.0L CVVT va 2.7L V6, yangilangan dizayn, 2008-yilda ishlab chiqarish tugadi." },
    ],
    funFacts: [
      "Tiburon nomi ispancha 'akula' ma'nosini anglatadi — tezlik va qudrat ramzi.",
      "Yevropa da 'Coupe' nomi bilan sotildi — ikki nom bir model.",
      "Tiburon Gran Turismo va Need for Speed video o'yinlarida mashhur.",
      "II avlod Tiburon 2.7L V6 bilan 0-100 km/h ni 7.4 sekundda bosib o'tgan.",
    ],
  },
  {
    slug: "hyundai-ioniq-5",
    description:
      "Hyundai IONIQ 5 — 2021-yilda taqdim etilgan va Koreya elektr avtomobil inqilobini boshlagan model. E-GMP platforma, 800V tezkor zaryad tizimi va retro-futuristik dizayni bilan uch tomondan 'Yilning avtomobili' unvonini oldi.",
    generations: [
      { year: 2021, title: "I avlod", changes: "E-GMP platforma, 58 kWh va 77 kWh batareya, 800V zaryad, 0-100 km/h 5.1 sek (AWD)." },
      { year: 2023, title: "N versiyasi", changes: "650 HP twin-motor, drift mode, N Grin Boost texnologiyasi." },
    ],
    funFacts: [
      "IONIQ 5 — birinchi avtomobil bo'lib 'World Car', 'World EV', 'World Car Design' uchala unvonni oldi.",
      "800V zaryad — 18 minutda 10-80% zaryad (350 kW tezkor zaryadchi bilan).",
      "Dizayn 1974-yilgi Pony Concept dan ilhomlanib yaratilgan.",
      "E-GMP (Electric-Global Modular Platform) — Hyundai va Kia ning maxsus EV platformasi.",
    ],
  },
  {
    slug: "hyundai-ioniq-6",
    description:
      "Hyundai IONIQ 6 — 2022-yilda taqdim etilgan va aerodinamikada rekord qo'ygan elektr sedan. Cd 0.21 koeffitsienti bilan dunyo seriyali avtomobillari orasida eng aerodinamik model unvonini oldi.",
    generations: [
      { year: 2022, title: "I avlod", changes: "E-GMP platforma, 53 kWh va 77 kWh batareya, Cd 0.21 rekord, 614 km yurish masofasi (WLTP)." },
      { year: 2024, title: "Facelift", changes: "Yangi rang variantlari, yaxshilangan multimedia, yangi xavfsizlik jihozlari." },
    ],
    funFacts: [
      "Cd 0.21 — Mercedes EQS dan ham past (0.20), dunyo eng aerodinamik seriyali elektr sedan.",
      "614 km yurish masofasi — bitta zaryadda Toshkentdan Samarqandga va orqaga yetib boradi.",
      "IONIQ 6 dizayni 'Streamliner' kontseptsiyasidan ilhom olgan — 1930-yillar bugungi kunda.",
      "2023-yil 'World Car of the Year' — IONIQ 5 dan keyin ketma-ket ikki yil Hyundai g'alaba qozondi.",
    ],
  },

  // ─── BYD TARIXIY (2005–2015) ─────────────────────────────────────────────────
  {
    slug: "byd-f3",
    description:
      "BYD F3 — 2005-yilda taqdim etilgan va BYD kompaniyasini global avtomobil brendiga aylantirgan birinchi katta muvaffaqiyat. Toyota Corolla E120 dan ilhomlanib yaratilgan bu sedan arzon narxi va ishonchlilik bilan Xitoy bozorini zabt etdi.",
    generations: [
      { year: 2005, title: "I avlod", changes: "1.5L va 1.6L Mitsubishi-litsenziyali dvigatel, 5-pog'onali mexanik KPP. Xitoyning eng arzon sedani." },
      { year: 2009, title: "F3R (hatchback)", changes: "Hatchback kuzov varianti qo'shildi, yaxshilangan multimedia tizimi." },
      { year: 2013, title: "F3 New (facelift)", changes: "Yangilangan faralar va grille, yaxshilangan salon bezagi." },
    ],
    funFacts: [
      "BYD F3 bir necha yil davomida Xitoyda eng ko'p sotiladigan avtomobil bo'ldi.",
      "F3 dizayni Toyota Corolla E120 ga juda o'xshash — bu qonuniy bahslarga olib keldi.",
      "BYD nomi 'Build Your Dreams' qisqartmasi — Warren Buffett 2008-yilda kompaniyaga sarmoya kiritdi.",
      "F3 BYD ning avtomobildan batareyaga o'tishidagi tayanch modeli.",
    ],
  },
  {
    slug: "byd-s6",
    description:
      "BYD S6 — 2011-yilda taqdim etilgan va BYD ning birinchi to'liq qiyofali SUV modeli. 2.4L dvigatel va 7 o'rindiqli salon bilan Xitoy SUV bozorida mustahkam o'rin egalladi.",
    generations: [
      { year: 2011, title: "I avlod", changes: "2.4L benzin va 2.0T turbo dvigatel, 7 o'rindiq, AWD opsiyasi, Xitoy uchun mo'ljallangan." },
      { year: 2014, title: "S6 EV", changes: "Elektr versiyasi chiqdi — BYD ning gibrid/EV strategiyasiga birinchi SUV qadam." },
    ],
    funFacts: [
      "S6 BYD ning SUV segmentiga kirishidagi asosiy model.",
      "S6 EV versiyasi BYD ning elektr SUV yo'lini boshladi.",
      "Xitoy taksi kompaniyalari S6 ni keng ishlatdi.",
      "S6 dan keyin BYD barcha modellarini elektr yoki gibrid qilishga qaror qildi.",
    ],
  },
  {
    slug: "byd-tang-i",
    description:
      "BYD Tang I avlod — 2015-yilda taqdim etilgan va Xitoyning birinchi plug-in gibrid SUV i. 2.0T benzin + 2 elektr motor = 505 HP va 0-100 km/h ni 4.9 sekundda bosib o'tgan — o'sha davr uchun SUV rekord.",
    generations: [
      { year: 2015, title: "I avlod (DM)", changes: "2.0T + dual elektr motor, 505 HP, 0-100 km/h 4.9 sek, PHEV tizimi, 7 o'rindiq." },
      { year: 2018, title: "Tang EV", changes: "To'liq elektr versiyasi — 90 kWh batareya, 500 km yurish masofasi." },
    ],
    funFacts: [
      "Tang DM — Xitoyning birinchi 500+ HP li seriyali SUV i.",
      "Tang nomi Xitoy ning Tang sulolasidan (618–907 yillar) olingan — buyuklik ramzi.",
      "BYD Dynasty seriyasi: Han, Tang, Song, Qin — barchasi Xitoy sulolalari nomlari.",
      "Tang BYD ni premium segment brendiga aylantirgan model.",
    ],
  },

  // ─── BYD DYNASTY SERIYASI ─────────────────────────────────────────────────
  {
    slug: "byd-han",
    uzbekistanSince: 2023,
    description:
      "BYD Han — 2020-yilda taqdim etilgan va BYD ning flagman elektr sedani. Xitoy ning birinchi elektr flagman sedani sifatida Cd 0.233 aerodinamika, Blade Battery (pichoq batareya) va 517 HP bilan Tesla Model 3 ga to'g'ridan-to'g'ri raqib sifatida yaratildi.",
    generations: [
      { year: 2020, title: "I avlod EV", changes: "Blade Battery 77 kWh, 517 HP twin-motor, 0-100 km/h 3.9 sek, 605 km yurish masofasi." },
      { year: 2020, title: "Han DM (PHEV)", changes: "2.0T + elektr, 321 HP, PHEV, 81 km elektr yurish masofasi." },
      { year: 2023, title: "Han EV facelift", changes: "Yangilangan dizayn, DiLink 4.0 multimedia, 100 kWh batareya opsiyasi." },
    ],
    funFacts: [
      "Han Blade Battery — alohida pichoq shaklidagi batareya hujayralari, Nail Penetration testida xavfsiz.",
      "Han nomi Xitoyning eng buyuk sulolasi — Han sulolasi (206 BC–220 AD) dan olingan.",
      "BYD Han Xitoyda Tesla Model 3 ni sotishda ortda qoldirdi.",
      "O'zbekistonga 2023-yildan rasmiy Hyundai dilerligiga o'xshash tarqatish tizimi orqali keldi.",
    ],
  },
  {
    slug: "byd-tang-ev",
    uzbekistanSince: 2023,
    description:
      "BYD Tang EV — 2018-yilda taqdim etilgan va Xitoy ning birinchi seriyali elektr 7 o'rindiqli SUV i. 90 kWh Blade Battery, twin-motor AWD va 500 km yurish masofasi bilan oilaviy EV segmentida rahbar.",
    generations: [
      { year: 2018, title: "Tang EV600", changes: "90 kWh batareya, 469 HP twin-motor, 500 km yurish masofasi, 7 o'rindiq." },
      { year: 2021, title: "Tang EV facelift", changes: "Yangilangan dizayn, DiLink 3.0, yaxshilangan NVH, 600 km yurish masofasi." },
      { year: 2023, title: "Tang EV II avlod", changes: "Yangi platforma, 108 kWh batareya, 620 km yurish masofasi, 0-100 km/h 4.6 sek." },
    ],
    funFacts: [
      "Tang EV Xitoyda birinchi yil 50,000 ta sotildi — elektr SUV rekord.",
      "7 o'rindiqli elektr SUV lar orasida dunyo eng ko'p sotiladigan modeli.",
      "Blade Battery tizimi 90 kWh da 500 km — yoqilg'i tejamkorligi bo'yicha rekord.",
      "O'zbekistonda oilaviy EV tanlov sifatida mashhur.",
    ],
  },
  {
    slug: "byd-song-plus",
    uzbekistanSince: 2022,
    description:
      "BYD Song Plus — 2020-yilda taqdim etilgan va BYD ning eng ko'p sotiladigan kompakt SUV modeli. DM-i texnologiyasi bilan 1,200+ km umumiy yurish masofasi va elektr faqat rejimda 100+ km — samaradorlikda inqilob.",
    generations: [
      { year: 2020, title: "Song Plus DM-i", changes: "1.5L Xiaoyun dvigatel + elektr motor, DM-i tizimi, 100 km elektr, 1,200 km umumiy." },
      { year: 2021, title: "Song Plus EV", changes: "To'liq elektr versiya, 60.48 kWh batareya, 505 km yurish masofasi." },
      { year: 2023, title: "Song Plus facelift", changes: "Yangilangan DiLink 4.0, yangi faralar dizayni, qo'shimcha xavfsizlik jihozlari." },
    ],
    funFacts: [
      "Song Plus DM-i Xitoyda 2021-yil eng ko'p sotiladigan yangi energiya avtomobili.",
      "DM-i tizimi — dvigatel asosan generator, elektr motor g'ildiraklarni haydaydi.",
      "1,200 km umumiy yurish masofasi — Toshkentdan Moskvaga deyarli to'xtamasdan.",
      "Song nomi Xitoy ning Song sulolasidan (960–1279) olingan.",
    ],
  },
  {
    slug: "byd-qin-plus",
    description:
      "BYD Qin Plus — 2021-yilda taqdim etilgan va DM-i tizimi bilan yoqilg'i tejamkorligida inqilob qilgan kompakt sedan. 3.8L/100 km yoqilg'i sarfi va 120 km elektr yurish masofasi bilan ommaviy EV bozorni ochdi.",
    generations: [
      { year: 2021, title: "Qin Plus DM-i", changes: "1.5L + elektr, 3.8L/100 km yoqilg'i sarfi, 120 km elektr, 0-100 km/h 7.3 sek." },
      { year: 2021, title: "Qin Plus EV", changes: "To'liq elektr, 47.5 kWh va 57.6 kWh batareya, 420/490 km yurish masofasi." },
      { year: 2023, title: "Qin Plus facelift", changes: "Yangilangan dizayn, DiLink 4.0, yangi rang palitralari." },
    ],
    funFacts: [
      "Qin Plus DM-i — Xitoyda 2021-yil eng arzon yangi energiya sedani.",
      "Qin nomi Xitoyni birlashtirilgan Qin sulolasidan (221–206 BC) olingan.",
      "3.8L/100 km — benzin dvigatellar orasida dunyo eng tejamkor seriyali sedan.",
      "Qin Plus Xitoyda uchta avlod davomida yiliga 200,000+ ta sotilmoqda.",
    ],
  },

  // ─── BYD OCEAN SERIYASI ───────────────────────────────────────────────────
  {
    slug: "byd-atto-3",
    uzbekistanSince: 2022,
    description:
      "BYD Atto 3 (Yuan Plus) — 2021-yilda taqdim etilgan va BYD ning global eksport flagmani bo'lgan kompakt elektr SUV. e-Platform 3.0 da qurilgan, 58.56 kWh va 60.48 kWh batareya variantlari bilan 60+ mamlakatga eksport qilinmoqda.",
    generations: [
      { year: 2021, title: "I avlod", changes: "e-Platform 3.0, 204 HP, 58.56 kWh va 60.48 kWh batareya, 420/480 km yurish masofasi." },
      { year: 2024, title: "Atto 3 facelift", changes: "Yangilangan dizayn, yaxshilangan batareya tizimi, yangi xavfsizlik jihozlari." },
    ],
    funFacts: [
      "Atto 3 BYD ning birinchi global eksport modeli — 60+ mamlakatda sotiladi.",
      "Yevropa da BYD ning eng ko'p sotiladigan modeli (2023).",
      "Salon dizayni 'fitness' mavzusida — rulevoy va eshik bezaklari sport naqsh.",
      "O'zbekistonda eng mashhur Xitoy elektr SUV.",
    ],
  },
  {
    slug: "byd-seal",
    uzbekistanSince: 2023,
    description:
      "BYD Seal — 2022-yilda taqdim etilgan va e-Platform 3.0 CTB (Cell-to-Body) texnologiyasi bilan yaratilgan sport elektr sedan. Batareya kuzov tuzilmasining bir qismiga aylangan bu model boshqaruvchanlikda inqilob qildi.",
    generations: [
      { year: 2022, title: "I avlod", changes: "e-Platform 3.0 CTB, 82.56 kWh batareya, 530 HP twin-motor AWD, 0-100 km/h 3.8 sek, 700 km yurish." },
      { year: 2024, title: "Seal facelift", changes: "Yangilangan multimedia, yangi rang variantlari, yaxshilangan xavfsizlik tizimi." },
    ],
    funFacts: [
      "CTB (Cell-to-Body) — batareya kuzovning tagi sifatida ishlaydi, torsion rigidity 40% oshadi.",
      "BYD Seal Tesla Model 3 ning to'g'ridan-to'g'ri raqibi sifatida yaratilgan.",
      "Cd 0.219 — BYD ning eng aerodinamik modeli.",
      "0-100 km/h 3.8 sek AWD versiyasi bilan — porshdan arzon, porshdan tez (narx/tezlik nisbati).",
    ],
  },
  {
    slug: "byd-dolphin",
    description:
      "BYD Dolphin — 2021-yilda taqdim etilgan va kompakt elektr hatchback segmentida arzon narxi bilan mashhur bo'lgan model. e-Platform 3.0 da qurilgan, BYD ning keng bozorga yetkazish strategiyasining asosi.",
    generations: [
      { year: 2021, title: "I avlod", changes: "e-Platform 3.0, 44.9 kWh va 60.48 kWh batareya, 177 HP, 340/430 km yurish masofasi." },
      { year: 2023, title: "Dolphin facelift", changes: "Yangilangan dizayn elementlari, yaxshilangan DiLink multimedia." },
    ],
    funFacts: [
      "Dolphin BYD ning eng arzon global eksport modeli — Avropada €30,000 dan.",
      "Xitoyda Dolphin birinchi yilida 150,000+ ta sotildi.",
      "Dolphin dizayni 'dengiz havosi' mavzusida — yumaloq chiziqlar, ko'k rang palitralari.",
      "Yevropa da VW ID.3 va Renault Zoe bilan to'g'ridan-to'g'ri raqobatlashadi.",
    ],
  },
  {
    slug: "byd-seagull",
    description:
      "BYD Seagull — 2023-yilda taqdim etilgan va eng arzon seriyali elektr avtomobil rekordini o'rnatgan micro EV. Xitoy ichki bozorida $10,000 dan past narxda sotilgan bu model elektr avtomobilni hammaga yetkazish g'oyasini amalga oshirdi.",
    generations: [
      { year: 2023, title: "I avlod", changes: "30.08 kWh batareya, 74 HP, 405 km yurish masofasi, Xitoy ichki narxi 69,800 yuan (~$10,000)." },
      { year: 2024, title: "Seagull eksport versiyasi", changes: "Yaxshilangan xavfsizlik Yevropa standartlari uchun, yangi multimedia." },
    ],
    funFacts: [
      "Seagull dunyo eng arzon seriyali elektr avtomobili — $10,000 dan past (Xitoy bozori).",
      "Yevropa da narxi $20,000 ga yaqin — bojxona va moslashuv xarajatlari sababli.",
      "Seagull Xitoy shahar elektr avtomobil bozorini yakkahokimlik bilan egalladi.",
      "BYD Seagull Yevropa muhandislarini dizassembl qilishda shok qoldirdi — sifat/narx nisbati.",
    ],
  },
  {
    slug: "byd-sea-lion-6",
    uzbekistanSince: 2024,
    description:
      "BYD Sea Lion 6 — 2023-yilda taqdim etilgan va DM-i texnologiyasi bilan qurollangan zamonaviy kompakt SUV. 1,500 km umumiy yurish masofasi va 100+ km elektr yurish masofasi bilan oilaviy SUV segmentida eng yaxshi umumiy yurish masofasiga ega model.",
    generations: [
      { year: 2023, title: "I avlod DM-i", changes: "1.5L DM-i tizimi, 390 HP, 100 km elektr, 1,500 km umumiy yurish masofasi." },
      { year: 2023, title: "Sea Lion 6 EV", changes: "To'liq elektr versiya, 87.3 kWh batareya, 520 km yurish masofasi." },
    ],
    funFacts: [
      "Sea Lion 6 — BYD Ocean seriyasining flagman crossover i.",
      "1,500 km umumiy yurish masofasi — Toshkentdan Moskvagacha to'xtamasdan.",
      "Ocean seriyasi nomlari: Seal, Dolphin, Seagull, Sea Lion — dengiz hayvonlari.",
      "DM-i tizimi 5-avlod — samaradorlik va quvvat muvozanatida yangi standart.",
    ],
  },

  // ─── ZEEKR SERIYASI ───────────────────────────────────────────────────────
  {
    slug: "zeekr-001",
    uzbekistanSince: 2023,
    description:
      "Zeekr 001 — 2021-yilda Geely ning premium elektr brendi Zeekr tomonidan taqdim etilgan flagman shooting-brake EV. SEA (Sustainable Experience Architecture) platformasida qurilgan, 100 kWh batareya va 544 HP bilan premium segment uchun yaratilgan.",
    generations: [
      { year: 2021, title: "I avlod", changes: "SEA platforma, 100 kWh batareya, 544 HP twin-motor AWD, 0-100 km/h 3.8 sek, 712 km yurish masofasi." },
      { year: 2023, title: "Facelift / Performance versiya", changes: "Yangilangan faralar, 800V zaryad versiyasi, 1000+ HP Performance Edition." },
    ],
    funFacts: [
      "Zeekr 001 — Geely ning premium elektr brendi birinchi modeli, Volvo va Polestar bilan umumiy platforma.",
      "SEA platforma — Geely, Volvo, Lynk & Co va Zeekr uchun umumiy elektr arxitekturasi.",
      "712 km yurish masofasi — Xitoy standartiga ko'ra dunyo rekordi (2021).",
      "Zeekr nomi 'Geek' (texnologiya muxlisi) so'zidan kelib chiqqan — texnologiyaga oshiqlar uchun.",
    ],
  },
  {
    slug: "zeekr-009",
    uzbekistanSince: 2023,
    description:
      "Zeekr 009 — 2022-yilda taqdim etilgan va premium elektr MPV segmentida inqilob qilgan luxury minivan. 140 kWh batareya, falcon wing eshiklar va 6 o'rindiqli ultra-komfort saloni bilan 'elektr Maybach MPV' sifatida tanilgan.",
    generations: [
      { year: 2022, title: "I avlod", changes: "SEA platforma, 140 kWh batareya, 544 HP twin-motor, falcon wing eshiklar, 6 o'rindiq." },
      { year: 2024, title: "009 Grand", changes: "Yangilangan salon, 800V tezkor zaryad, yangi xavfsizlik tizimi." },
    ],
    funFacts: [
      "Falcon wing eshiklar — Tesla Model X dan ilhomlanib yaratilgan, lekin kengroq ochiladi.",
      "140 kWh batareya — dunyo eng katta batareyali seriyali MPV.",
      "009 ning birinchi partiyasi Xitoyda bir kechada sotib bo'lindi.",
      "O'zbekistonda VIP transport va oilaviy luxury EV sifatida mashhur.",
    ],
  },
  {
    slug: "zeekr-x",
    description:
      "Zeekr X — 2023-yilda taqdim etilgan va Zeekr ning birinchi kompakt elektr SUV i. Yevropa bozorini maqsad qilgan bu model minimalist dizayn, 272 HP va 440 km yurish masofasi bilan premium kompakt EV segmentiga kirdi.",
    generations: [
      { year: 2023, title: "I avlod", changes: "SEA platforma, 66 kWh batareya, 272 HP, 440 km yurish masofasi, Yevropa va Xitoy eksporti." },
    ],
    funFacts: [
      "Zeekr X Yevropa da Smart #1 va Volvo EX30 bilan raqobatlashadi.",
      "Xitoy ichki bozorida Zeekr X 200,000 yuan (~$28,000) dan boshlanadi.",
      "SEA platforma tufayli Volvo bilan umumiy xavfsizlik tizimi.",
      "Zeekr X Yevropa da Geely ning premium EV strategiyasining bosh modeli.",
    ],
  },
  {
    slug: "zeekr-007",
    uzbekistanSince: 2024,
    description:
      "Zeekr 007 — 2023-yilda taqdim etilgan va 800V ultra-tezkor zaryad tizimi bilan jihozlangan premium elektr sedan. Cd 0.197 aerodinamika koeffitsienti — dunyo seriyali elektromobillari orasida eng yaxshi ko'rsatkich.",
    generations: [
      { year: 2023, title: "I avlod", changes: "800V zaryad, 75 kWh va 100 kWh batareya, Cd 0.197, 544 HP AWD, 0-100 km/h 3.7 sek." },
      { year: 2024, title: "007 GT versiyasi", changes: "Yaxshilangan aerodinamik kit, sport suspenziya, 640 HP." },
    ],
    funFacts: [
      "Cd 0.197 — dunyo seriyali elektr sedanlari orasida eng past aerodinamik qarshilik koeffitsienti.",
      "800V zaryad — 10 minutda 300 km yurish masofasi (480 kW zaryadchi bilan).",
      "007 nomi James Bond filmidan ilhom olgan — razvedkachi emas, texnologiya agenti.",
      "Zeekr 007 BYD Seal va Tesla Model 3 ning to'g'ridan-to'g'ri raqibi.",
    ],
  },
  {
    slug: "zeekr-7x",
    uzbekistanSince: 2024,
    description:
      "Zeekr 7X — 2024-yilda taqdim etilgan va Zeekr ning eng kuchli elektr SUV i. 800V zaryad, 644 HP twin-motor va 0-100 km/h 3.8 sekundlik tezlanishi bilan premium sport SUV segmentida yangi standart o'rnatdi.",
    generations: [
      { year: 2024, title: "I avlod", changes: "800V SEA platforma, 75 kWh va 100 kWh batareya, 644 HP, 0-100 km/h 3.8 sek, 780 km yurish masofasi." },
    ],
    funFacts: [
      "Zeekr 7X Porsche Cayenne va BMW X5 ning narxi bilan raqobatlashadi, lekin elektr.",
      "800V / 480 kW zaryad — dunyo eng tezkor zaryadlanadigan seriyali SUV.",
      "100 kWh batareya bilan 780 km — Xitoy dan Qozog'istongacha to'xtamasdan.",
      "Zeekr 7X O'zbekistonda 2024-yildan rasmiy distribyutor orqali sotilmoqda.",
    ],
  },
  {
    slug: "zeekr-mix",
    description:
      "Zeekr Mix — 2024-yilda taqdim etilgan va 'monovolume' kontseptsiyasini qayta ixtiro qilgan futuristik elektr MPV. Sliding front eshiklar (siljuvchi old eshiklar), flat floor va modulli salon bilan shaharda yurish va oilaviy sayohat uchun ideal.",
    generations: [
      { year: 2024, title: "I avlod", changes: "SEA platforma, siljuvchi old eshiklar, 422 HP, 6 o'rindiq, flat floor, 600 km yurish masofasi." },
    ],
    funFacts: [
      "Siljuvchi old eshiklar — dunyodagi birinchi seriyali MPV da bunday dizayn yechimi.",
      "Flat floor — batareya pol tagida joylashgan, salon ichida qadamlash ostoni yo'q.",
      "Zeekr Mix Xitoyda 'shahar MPV inqilobi' deb e'lon qilindi.",
      "Mix nomi 'aralash' ya'ni shahar + yo'l + oila hayotini birlashtirish ma'nosida.",
    ],
  },

  // ─── KIA TARIXIY (1974–1996) ─────────────────────────────────────────────────
  {
    slug: "kia-brisa",
    description:
      "Kia Brisa — 1974-yilda taqdim etilgan va Koreya ning birinchi ommaviy ishlab chiqarilgan avtomobili. Mazda 1000 litsenziyasi asosida yaratilgan bu sedan Kia kompaniyasini ikki g'ildirakli transport vositalaridan to'rt g'ildirakli avtomobillarga o'tishida asosiy qadam bo'ldi.",
    generations: [
      { year: 1974, title: "Brisa I", changes: "Mazda 1000 litsenziyasi, 985 cc dvigatel, Koreya ning birinchi seriyali avtomobili." },
      { year: 1977, title: "Brisa II", changes: "Kuzov kengaytirildi, yangi rang variantlari, yaxshilangan salon." },
    ],
    funFacts: [
      "Kia Brisa — Koreya ning birinchi seriyali ishlab chiqarilgan to'rt g'ildirakli avtomobili.",
      "Kia 1944-yilda velosiped ishlab chiqaruvchi sifatida boshlangan — Brisa katta sakrash.",
      "Brisa nomi ispancha 'shabada' ma'nosini anglatadi.",
      "Kia Hyundai bilan raqobat qilish o'rniga keyinroq Hyundai tomonidan sotib olindi (1998).",
    ],
  },
  {
    slug: "kia-pride",
    description:
      "Kia Pride — 1987-yilda Ford Festiva platformasida yaratilgan va Koreya ning eng mashhur subkompakt avtomobili. Ford, Kia va Mazda uchligi hamkorligida yaratilgan bu model O'zbekistonda ham keng tarqalgan.",
    generations: [
      { year: 1987, title: "I avlod (DA)", changes: "Ford Festiva / Mazda 121 bilan umumiy platforma, 1.1L va 1.3L dvigatel, hatchback." },
      { year: 1993, title: "Facelift", changes: "Yangilangan faralar va bamper, 1.3L dvigatel, sedan varianti qo'shildi." },
    ],
    funFacts: [
      "Kia Pride O'zbekistonda keng tarqalgan — arzon narxi va tejamkor dvigateli tufayli.",
      "Ford, Kia va Mazda birgalikda ishlab chiqargan — xalqaro hamkorlik namunasi.",
      "Pride nomi inglizcha 'g'urur' — arzon ammo sifatli avtomobil g'ururi.",
      "Kia Pride 1987–2000 yillar orasida 1 milliondan ortiq sotildi.",
    ],
  },
  {
    slug: "kia-sephia",
    description:
      "Kia Sephia — 1992-yilda Mazda 323 platformasida qurilgan va Kia ning birinchi mustaqil dizayndagi sedani. Kia ning global bozorga chiqishidagi muhim qadam bo'ldi.",
    generations: [
      { year: 1992, title: "I avlod (FA)", changes: "Mazda 323 platformasi, 1.5L DOHC dvigatel, Kia ning birinchi zamonaviy sedani." },
      { year: 1998, title: "II avlod (FB)", changes: "Mustaqil platforma, 1.5L va 1.8L dvigatel, yaxshilangan xavfsizlik." },
    ],
    funFacts: [
      "Sephia AQShda birinchi yil 30,000 ta sotildi — Kia ning Amerika debüti.",
      "Mazda bilan hamkorlik Kia ni texnologik jihatdan tez rivojlantirdi.",
      "Sephia nomi 'sepia' — qo'ng'ir rang, klassik fotografiya uslubida.",
      "II avlod Sephia Kia ning mustaqil muhandislik yo'lini boshladi.",
    ],
  },

  // ─── KIA CERATO / FORTE SERIYASI ─────────────────────────────────────────
  {
    slug: "kia-cerato-i",
    description:
      "Kia Cerato I avlod — 2004-yilda taqdim etilgan va Kia ning kompakt sedan segmentidagi asosiy modeli. Elantra platformasida qurilgan bu model Hyundai-Kia guruhining texnologik yuksalishini namoyish etdi.",
    generations: [
      { year: 2004, title: "I avlod (LD)", changes: "Hyundai Elantra bilan umumiy platforma, 1.6L va 2.0L dvigatel, sedan va hatchback." },
      { year: 2008, title: "II avlod (TD)", changes: "Forte nomi AQSh uchun, yangi platforma, 1.6L GDI va 2.0L dvigatel." },
      { year: 2013, title: "III avlod (YD)", changes: "Yangi dizayn, 1.6L turbo opsiyasi, Kia ning birinchi DCT karobkasi." },
    ],
    funFacts: [
      "Cerato nomi lotincha 'shox' ma'nosini anglatadi — mustahkam va ishonchli.",
      "AQSh bozorida 'Forte' nomi bilan sotiladi — regional branding.",
      "III avlod Cerato Kia ning 'Tiger Nose' dizayn tilini joriy etdi.",
      "Cerato O'zbekistonda Hyundai Elantra bilan doimo raqobatda.",
    ],
  },
  {
    slug: "kia-cerato-iv",
    uzbekistanSince: 2018,
    description:
      "Kia Cerato IV avlod — 2018-yilda taqdim etilgan va Kia ning eng ko'p sotiladigan kompakt sedani. Zamonaviy 'Signature' dizayn tili, 1.6L turbo va keng xavfsizlik paketi bilan segment lideriga aylandi.",
    generations: [
      { year: 2018, title: "IV avlod (BD)", changes: "Signature dizayn, 1.6L va 2.0L MPI, 1.6L turbo opsiya, 10.25\" multimedia, Lane Keep Assist." },
      { year: 2021, title: "IV avlod Facelift", changes: "Yangilangan faralar, yangi grille dizayni, yaxshilangan multimedia tizimi." },
    ],
    funFacts: [
      "IV avlod Cerato 2019-yil Koreya da eng ko'p sotiladigan kompakt sedan.",
      "1.6T versiyasi 204 HP — kompakt sedan uchun juda kuchli.",
      "O'zbekistonda Cerato biznes sinfi uchun iqtisodiy tanlov.",
      "Kia Cerato IV 'World Car Awards' da finalistlar qatorida.",
    ],
  },

  // ─── KIA K-SERIYASI (SEDAN) ───────────────────────────────────────────────
  {
    slug: "kia-k5",
    uzbekistanSince: 2020,
    description:
      "Kia K5 (Optima III) — 2019-yilda taqdim etilgan va Kia ning o'rta sinf sedan flagmani. AWD opsiyasi birinchi marta, 2.0L turbodvigatel va keskin sport dizayn bilan Toyota Camry va Honda Accord bilan bellashdi.",
    generations: [
      { year: 2010, title: "I avlod (TF)", changes: "Birinchi K5/Optima — 2.0L va 2.4L GDI dvigatel, Kia ning yangi dizayn tili." },
      { year: 2015, title: "II avlod (JF)", changes: "Sportroq dizayn, 1.6T va 2.0L, GT versiyasi 245 HP bilan." },
      { year: 2019, title: "III avlod (DL3)", changes: "AWD birinchi marta, 2.5T 290 HP GT versiyasi, 12.3\" raqamli kokpit." },
    ],
    funFacts: [
      "K5 GT AWD — Kia ning birinchi AWD sedani, 290 HP, 0-100 km/h 5.8 sek.",
      "K5 nomi Koreyada, 'Optima' nomi AQSh da — bir xil avtomobil.",
      "II avlod K5 GT Nürburgring da koreya sedanlari rekordi qo'ydi.",
      "O'zbekistonda K5 biznes sinfi sedani sifatida mashhur.",
    ],
  },
  {
    slug: "kia-k8",
    uzbekistanSince: 2022,
    description:
      "Kia K8 — 2021-yilda taqdim etilgan va Kia ning birinchi to'liq flagship luxury sedani. K900 o'rniga kelgan bu model 3.5L V6 va 1.6T gibrid opsiyalari bilan Kia brendini premium segmentga olib chiqdi.",
    generations: [
      { year: 2021, title: "I avlod", changes: "Birinchi Kia flagship sedan — 3.5L V6 Lambda, 1.6T gibrid, 12.3\" kokpit, CCNC dizayn." },
      { year: 2023, title: "Facelift", changes: "Yangilangan faralar, yaxshilangan multimedia, yangi rang palitralari." },
    ],
    funFacts: [
      "K8 K900 ni almashtirdi — Kia ning flagship sedan vorisiyati.",
      "CCNC (Complete Continuity & Natural Concept) dizayn — bir nafas kuzov chizig'i.",
      "3.5L V6 Atkinson tsikli — tejamkorlik va quvvat muvozanati.",
      "O'zbekistonda K8 Sonata va Grandeur ning raqibi sifatida tanilgan.",
    ],
  },

  // ─── KIA SPORTAGE SERIYASI ────────────────────────────────────────────────
  {
    slug: "kia-sportage-i",
    description:
      "Kia Sportage I avlod — 1993-yilda taqdim etilgan va Kia ning birinchi SUV modeli. Retro dizayn, 2.0L dvigatel va real off-road imkoniyatlari bilan Kia ni SUV segmentiga kiritdi.",
    generations: [
      { year: 1993, title: "I avlod (JA)", changes: "Birinchi Kia SUV — 2.0L benzin va dvizel, 4WD, 3-eshikli va 5-eshikli variant." },
      { year: 1998, title: "Facelift", changes: "Yangilangan dizayn, yaxshilangan salon bezagi." },
    ],
    funFacts: [
      "Sportage I avlod 1993-yil Frankfurt Auto Show da taqdim etildi.",
      "Kia ning birinchi SUV va hozir Kia ning eng ko'p sotiladigan modeli.",
      "I avlod Sportage Land Rover Defender ga o'xshash dizayn bilan diqqatni tortdi.",
      "Sportage nomi inglizcha 'sport' va 'carriage' — sport aravasidan keladi.",
    ],
  },
  {
    slug: "kia-sportage-v",
    uzbekistanSince: 2022,
    description:
      "Kia Sportage V avlod — 2021-yilda tubdan yangilangan va 'Opposites United' dizayn tili bilan chiqarilgan zamonaviy kompakt SUV. Panoramik ekran, gibrid opsiyasi va PHEV versiyasi bilan segment lideri.",
    generations: [
      { year: 2015, title: "IV avlod (QL)", changes: "Yangi Tiger Nose grille, 1.6T va 2.0L dvigatel, 7-DCT karobka." },
      { year: 2021, title: "V avlod (NQ5)", changes: "Opposites United dizayn, 12.3\"+12.3\" panoramik ekran, 1.6T PHEV, HTRAC AWD." },
    ],
    funFacts: [
      "V avlod 12.3\"+12.3\" dual ekran — segment da birinchi marta.",
      "Sportage V avlod 2022-yil 'World Car of the Year' finalistlari orasida.",
      "PHEV versiyasi 265 HP va 50 km elektr yurish masofasi.",
      "O'zbekistonda Sportage kompakt crossover segmentining top tanlovi.",
    ],
  },

  // ─── KIA SORENTO SERIYASI ─────────────────────────────────────────────────
  {
    slug: "kia-sorento-i",
    description:
      "Kia Sorento I avlod — 2002-yilda taqdim etilgan va Kia ning birinchi yirik SUV modeli. Qattiq ramka platformasi, 2.5L dvizel va real off-road imkoniyatlari bilan body-on-frame SUV segmentida o'rin egalladi.",
    generations: [
      { year: 2002, title: "I avlod (BL)", changes: "Body-on-frame platforma, 2.4L benzin va 2.5L CRDi dvizel, 4WD, 5/7 o'rindiq." },
      { year: 2006, title: "Facelift", changes: "Yangilangan dizayn, yaxshilangan salon, yangi multimedia." },
    ],
    funFacts: [
      "Sorento I — Kia ning birinchi body-on-frame SUV, haqiqiy off-road qobiliyati.",
      "Sorento nomi Italiyaning Napoli yaqinidagi Sorrento shahridan olingan.",
      "I avlod 2.5L CRDi dvizel O'rta Osiyoda mashhur bo'ldi.",
      "Sorento AQSh bozorida Kia ning eng muvaffaqiyatli debütlaridan biri.",
    ],
  },
  {
    slug: "kia-sorento-iv",
    uzbekistanSince: 2021,
    description:
      "Kia Sorento IV avlod — 2020-yilda yangi platforma va 'Opposites United' dizayn tili bilan chiqarilgan mid-size SUV. PHEV versiyasi, 7 o'rindiq va HTRAC AWD bilan oilaviy SUV segmentida rahbar.",
    generations: [
      { year: 2014, title: "III avlod (UM)", changes: "Yangi platforma, 2.0T va 2.2L dvizel, HTRAC AWD, 7 o'rindiq, yangi dizayn." },
      { year: 2020, title: "IV avlod (MQ4)", changes: "Yangi platforma, 1.6T gibrid va PHEV, Opposites United dizayn, 12.3\" kokpit." },
    ],
    funFacts: [
      "IV avlod PHEV versiyasi 265 HP va 57 km elektr yurish masofasi.",
      "Sorento IV avlod 2021-yil 'World Car of the Year' g'olibi.",
      "7 o'rindiqli PHEV — dunyo birinchi 7 o'rindiqli plug-in gibrid SUV.",
      "O'zbekistonda Sorento oilaviy SUV ning eng mashhur tanlovi.",
    ],
  },

  // ─── KIA TELLURIDE VA MOHAVE ─────────────────────────────────────────────
  {
    slug: "kia-telluride",
    uzbekistanSince: 2020,
    description:
      "Kia Telluride — 2019-yilda taqdim etilgan va Kia ning birinchi full-size luxury SUV i. 3.8L V6, 8 o'rindiq va premium salon bilan Kia brendining yuqori segmentga ko'tarilishini e'lon qildi.",
    generations: [
      { year: 2019, title: "I avlod", changes: "3.8L Lambda V6, 291 HP, 8 o'rindiq, AWD, 10.25\" multimedia, Kia luxury segment debüti." },
      { year: 2023, title: "Facelift", changes: "Yangilangan faralar va grille, yangi multimedia, qo'shimcha xavfsizlik." },
    ],
    funFacts: [
      "Telluride — 2020-yil 'World Car of the Year', 'North American Utility Vehicle of the Year' — ikki unvon.",
      "Telluride nomi Kolorado shtatidagi Telluride tog' kurortidan olingan.",
      "Kia Telluride Hyundai Palisade bilan umumiy platforma — aka-uka modellar.",
      "O'zbekistonda Telluride premium oilaviy SUV tanlovi sifatida mashhur.",
    ],
  },
  {
    slug: "kia-mohave",
    uzbekistanSince: 2009,
    description:
      "Kia Mohave — 2008-yilda taqdim etilgan va Kia ning yagona body-on-frame SUV modeli. 3.8L V6 va 3.0L dvizel bilan real off-road imkoniyatlari, 7 o'rindiq va hashamatli salon birlikda. O'zbekistonda keng tarqalgan.",
    generations: [
      { year: 2008, title: "I avlod (HM)", changes: "Body-on-frame platforma, 3.8L V6 va 3.0L CRDi dvizel, 7 o'rindiq, Borrego nomi AQSh da." },
      { year: 2019, title: "Facelift", changes: "Yangilangan dizayn, 3.0L dvizel, zamonaviy multimedia, yangi xavfsizlik jihozlari." },
    ],
    funFacts: [
      "Mohave — Kia ning hozirgi assortimentida yagona body-on-frame SUV.",
      "Mohave nomi Kaliforniyadagi Mojave cho'lidan olingan.",
      "AQSh da 'Borrego' nomi bilan sotildi — baza turidagi savdo yaxshi ketmadi.",
      "O'zbekistonda Mohave qishloq va tog' yo'llari uchun asosiy tanlov.",
    ],
  },

  // ─── KIA CARNIVAL ────────────────────────────────────────────────────────
  {
    slug: "kia-carnival-i",
    description:
      "Kia Carnival I avlod — 1998-yilda taqdim etilgan va Kia ning birinchi minivan modeli. 2.5L V6 va 8 o'rindiqli salon bilan oilaviy minivan segmentida Kia ni munosib vakil sifatida tanitdi.",
    generations: [
      { year: 1998, title: "I avlod (GQ)", changes: "Birinchi Carnival — 2.5L V6 va 2.9L dvizel, 8 o'rindiq, Sedona nomi AQSh da." },
      { year: 2006, title: "II avlod (VQ)", changes: "Yangi platforma, kengaytirilgan salon, 2.7L V6 va 2.9L CRDi dvizel." },
      { year: 2014, title: "III avlod (YP)", changes: "Zamonaviy dizayn, 2.2L dvizel, 11 o'rindiq opsiyasi, yaxshilangan xavfsizlik." },
    ],
    funFacts: [
      "Carnival — Kia ning eng uzoq umrli model nomlaridan biri, 25+ yil.",
      "AQSh da 'Sedona' nomi bilan sotildi — 2021-yildan 'Carnival' ga o'tildi.",
      "I avlod Carnival Koreya da taksi va transfer uchun keng ishlatildi.",
      "Carnival nomi braziliyalik 'karnaval' bayramidan ilhom olgan.",
    ],
  },
  {
    slug: "kia-carnival-iv",
    uzbekistanSince: 2021,
    description:
      "Kia Carnival IV avlod — 2020-yilda 'Grand Utility Vehicle' kontseptsiyasi bilan taqdim etilgan va SUV hamda minivanning eng yaxshi tomonlarini birlashtirgan model. 11 o'rindiq va VIP versiyasi bilan oilaviy luxury transport.",
    generations: [
      { year: 2020, title: "IV avlod (KA4)", changes: "SUV-minivan dizayn, 3.5L V6 va 2.2L dvizel, 7/8/11 o'rindiq, VIP lounge paketi." },
      { year: 2023, title: "Facelift", changes: "Yangilangan dizayn, yangi multimedia, PHEV versiyasi qo'shildi." },
    ],
    funFacts: [
      "IV avlod SUV-minivan kontseptsiyasi — Kia 'Grand Utility Vehicle' yangi janri.",
      "VIP lounge paketi — orqa o'rindiqlar biznes klass samolyot kreslolariga o'xshash.",
      "11 o'rindiqli versiyasi Osiyodagi korporativ transport uchun mashhur.",
      "O'zbekistonda Carnival oilaviy transport va VIP xizmat uchun tanlovi.",
    ],
  },

  // ─── KIA STINGER ─────────────────────────────────────────────────────────
  {
    slug: "kia-stinger",
    description:
      "Kia Stinger — 2017-yilda taqdim etilgan va BMW 4 Series Gran Coupe bilan raqobatlashgan Kia ning birinchi sport grand tourer sedani. Albert Biermann (sobiq BMW M rahbari) tomonidan sozlangan suspenziya bilan Nürburgring da koreya rekordini o'rnatdi.",
    generations: [
      { year: 2017, title: "I avlod (CK)", changes: "3.3T twin-turbo V6 370 HP, RWD va AWD, 0-100 km/h 4.9 sek, 5-eshikli fastback." },
      { year: 2022, title: "Facelift", changes: "Yangilangan faralar, 8\" HUD, yangi multimedia, 2.5T va 3.3T dvigatellar." },
    ],
    funFacts: [
      "Stinger Albert Biermann tomonidan sozlangan — sobiq BMW M bo'limi rahbari.",
      "Nürburgring da 7:52 vaqt — koreya seriyali avtomobili rekordi (2017).",
      "Stinger GT 3.3T — 366 HP va 510 Nm, 0-100 km/h 4.9 sek.",
      "Stinger 2018-yil 'World Car Design of the Year' — Kia birinchi marta.",
    ],
  },

  // ─── KIA ELEKTR SERIYASI ─────────────────────────────────────────────────
  {
    slug: "kia-ev6",
    uzbekistanSince: 2022,
    description:
      "Kia EV6 — 2021-yilda E-GMP platformasida qurilgan va Kia ning elektr kelajagini boshlab bergan crossover EV. 800V ultra-tezkor zaryad, 0-100 km/h 3.5 sek va 2022-yil 'World Car of the Year' unvoni bilan segment lideriga aylandi.",
    generations: [
      { year: 2021, title: "I avlod", changes: "E-GMP platforma, 77.4 kWh batareya, 800V zaryad, 325 HP AWD, 0-100 km/h 3.5 sek, 528 km yurish." },
      { year: 2023, title: "EV6 GT", changes: "585 HP, drift mode, 0-100 km/h 3.5 sek, Brembo tormozlar." },
    ],
    funFacts: [
      "EV6 — 2022-yil 'World Car of the Year', Kia birinchi marta bu unvonni oldi.",
      "800V zaryad — 18 minutda 10-80% zaryad.",
      "EV6 GT 585 HP — Kia tarixidagi eng kuchli seriyali model.",
      "EV6 va Hyundai IONIQ 5 umumiy E-GMP platforma — dizayn va texnologiya farqli.",
    ],
  },
  {
    slug: "kia-ev9",
    uzbekistanSince: 2024,
    description:
      "Kia EV9 — 2023-yilda taqdim etilgan va Kia ning birinchi elektr full-size SUV i. E-GMP platforma, 99.8 kWh batareya va 7 o'rindiqli salon bilan oilaviy elektr SUV segmentida flagman.",
    generations: [
      { year: 2023, title: "I avlod", changes: "E-GMP platforma, 99.8 kWh batareya, 384 HP AWD, 7 o'rindiq, 541 km yurish masofasi, V2L tizimi." },
    ],
    funFacts: [
      "EV9 — 2024-yil 'World Car of the Year' va 'World Electric Vehicle of the Year' ikki unvon.",
      "V2L (Vehicle-to-Load) — avtomobil manba sifatida tashqi qurilmalarni energiya bilan ta'minlaydi.",
      "Kia EV9 va Hyundai IONIQ 9 umumiy platforma — Koreya EV strategiyasi.",
      "EV9 birinchi marta Kia-Hyundai uni uch yil ketma-ket 'World Car' unvoniga ega qildi.",
    ],
  },
];
