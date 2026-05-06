export interface CarSpecs {
  horsePower: number;
  topSpeed: number;
  engineCC: number;
  fuelConsumption: number;
  seats: number;
  doors: number;
  weight: number;
}

export interface Car {
  slug: string;
  brand: string;
  model: string;
  country: string;
  countryCode: string;
  worldDebut: number;
  thumbnail: string;
  images: string[];
  tags: string[];
  specs: CarSpecs;
}

function imgs(slug: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) => `/images/cars/${slug}/${i + 1}.jpg`);
}

export const cars: Car[] = [
  {
    slug: "toyota-camry",
    brand: "Toyota",
    model: "Camry",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1982,
    thumbnail: "/images/cars/toyota-camry/1.jpg",
    images: imgs("toyota-camry"),
    tags: ["toyota", "sedan", "yaponiya"],
    specs: { horsePower: 203, topSpeed: 210, engineCC: 2487, fuelConsumption: 8.1, seats: 5, doors: 4, weight: 1640 },
  },
  {
    slug: "toyota-land-cruiser",
    brand: "Toyota",
    model: "Land Cruiser",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1951,
    thumbnail: "/images/cars/toyota-land-cruiser/1.jpg",
    images: imgs("toyota-land-cruiser"),
    tags: ["toyota", "suv", "yaponiya"],
    specs: { horsePower: 415, topSpeed: 210, engineCC: 3445, fuelConsumption: 13.6, seats: 7, doors: 4, weight: 2550 },
  },
  {
    slug: "bmw-3-series",
    brand: "BMW",
    model: "3 Series",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1975,
    thumbnail: "/images/cars/bmw-3-series/1.jpg",
    images: imgs("bmw-3-series"),
    tags: ["bmw", "sedan", "germaniya"],
    specs: { horsePower: 258, topSpeed: 250, engineCC: 1998, fuelConsumption: 7.5, seats: 5, doors: 4, weight: 1620 },
  },
  {
    slug: "mercedes-e-class",
    brand: "Mercedes-Benz",
    model: "E-Class",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1953,
    thumbnail: "/images/cars/mercedes-e-class/1.jpg",
    images: imgs("mercedes-e-class"),
    tags: ["mercedes", "sedan", "germaniya"],
    specs: { horsePower: 258, topSpeed: 250, engineCC: 1999, fuelConsumption: 7.9, seats: 5, doors: 4, weight: 1835 },
  },
  {
    slug: "honda-civic",
    brand: "Honda",
    model: "Civic",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1972,
    thumbnail: "/images/cars/honda-civic/1.jpg",
    images: imgs("honda-civic"),
    tags: ["honda", "sedan", "yaponiya"],
    specs: { horsePower: 158, topSpeed: 219, engineCC: 1498, fuelConsumption: 7.1, seats: 5, doors: 4, weight: 1370 },
  },
  {
    slug: "ford-mustang",
    brand: "Ford",
    model: "Mustang",
    country: "AQSh",
    countryCode: "US",
    worldDebut: 1964,
    thumbnail: "/images/cars/ford-mustang/1.jpg",
    images: imgs("ford-mustang"),
    tags: ["ford", "coupe", "aqsh"],
    specs: { horsePower: 450, topSpeed: 250, engineCC: 5038, fuelConsumption: 14.8, seats: 4, doors: 2, weight: 1810 },
  },
  {
    slug: "chevrolet-gentra",
    brand: "Chevrolet",
    model: "Gentra",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 2013,
    thumbnail: "/images/cars/chevrolet-gentra/1.jpg",
    images: imgs("chevrolet-gentra"),
    tags: ["chevrolet", "sedan", "koreya", "uzbekiston"],
    specs: { horsePower: 106, topSpeed: 178, engineCC: 1500, fuelConsumption: 7.8, seats: 5, doors: 4, weight: 1218 },
  },
  {
    slug: "chevrolet-cobalt",
    brand: "Chevrolet",
    model: "Cobalt",
    country: "Braziliya",
    countryCode: "BR",
    worldDebut: 2011,
    thumbnail: "/images/cars/chevrolet-cobalt/1.jpg",
    images: imgs("chevrolet-cobalt"),
    tags: ["chevrolet", "sedan", "uzbekiston"],
    specs: { horsePower: 106, topSpeed: 178, engineCC: 1500, fuelConsumption: 7.8, seats: 5, doors: 4, weight: 1230 },
  },
  {
    slug: "chevrolet-spark",
    brand: "Chevrolet",
    model: "Spark",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 1998,
    thumbnail: "/images/cars/chevrolet-spark/1.jpg",
    images: imgs("chevrolet-spark"),
    tags: ["chevrolet", "hatchback", "uzbekiston", "kichik"],
    specs: { horsePower: 65, topSpeed: 155, engineCC: 995, fuelConsumption: 5.5, seats: 4, doors: 5, weight: 895 },
  },
  {
    slug: "chevrolet-nexia-3",
    brand: "Chevrolet",
    model: "Nexia 3",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 2016,
    thumbnail: "/images/cars/chevrolet-nexia-3/1.jpg",
    images: imgs("chevrolet-nexia-3"),
    tags: ["chevrolet", "sedan", "uzbekiston", "koreya"],
    specs: { horsePower: 106, topSpeed: 180, engineCC: 1500, fuelConsumption: 7.5, seats: 5, doors: 4, weight: 1100 },
  },
  {
    slug: "chevrolet-lacetti",
    brand: "Chevrolet",
    model: "Lacetti",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 2004,
    thumbnail: "/images/cars/chevrolet-lacetti/1.jpg",
    images: imgs("chevrolet-lacetti"),
    tags: ["chevrolet", "sedan", "uzbekiston", "koreya"],
    specs: { horsePower: 98, topSpeed: 180, engineCC: 1598, fuelConsumption: 8.0, seats: 5, doors: 4, weight: 1180 },
  },
  {
    slug: "chevrolet-malibu",
    brand: "Chevrolet",
    model: "Malibu",
    country: "AQSh",
    countryCode: "US",
    worldDebut: 1964,
    thumbnail: "/images/cars/chevrolet-malibu/1.jpg",
    images: imgs("chevrolet-malibu"),
    tags: ["chevrolet", "sedan", "aqsh", "uzbekiston"],
    specs: { horsePower: 150, topSpeed: 210, engineCC: 1998, fuelConsumption: 8.5, seats: 5, doors: 4, weight: 1495 },
  },
  {
    slug: "chevrolet-tracker",
    brand: "Chevrolet",
    model: "Tracker",
    country: "AQSh",
    countryCode: "US",
    worldDebut: 1989,
    thumbnail: "/images/cars/chevrolet-tracker/1.jpg",
    images: imgs("chevrolet-tracker"),
    tags: ["chevrolet", "suv", "crossover", "uzbekiston"],
    specs: { horsePower: 140, topSpeed: 185, engineCC: 1399, fuelConsumption: 8.2, seats: 5, doors: 5, weight: 1340 },
  },
  {
    slug: "chevrolet-captiva",
    brand: "Chevrolet",
    model: "Captiva",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 2006,
    thumbnail: "/images/cars/chevrolet-captiva/1.jpg",
    images: imgs("chevrolet-captiva"),
    tags: ["chevrolet", "suv", "koreya", "uzbekiston"],
    specs: { horsePower: 167, topSpeed: 200, engineCC: 2384, fuelConsumption: 10.5, seats: 7, doors: 5, weight: 1779 },
  },
  {
    slug: "chevrolet-equinox",
    brand: "Chevrolet",
    model: "Equinox",
    country: "AQSh",
    countryCode: "US",
    worldDebut: 2004,
    thumbnail: "/images/cars/chevrolet-equinox/1.jpg",
    images: imgs("chevrolet-equinox"),
    tags: ["chevrolet", "suv", "crossover", "aqsh", "uzbekiston"],
    specs: { horsePower: 170, topSpeed: 195, engineCC: 1500, fuelConsumption: 9.5, seats: 5, doors: 5, weight: 1640 },
  },
  {
    slug: "chevrolet-damas",
    brand: "Chevrolet",
    model: "Damas",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 1991,
    thumbnail: "/images/cars/chevrolet-damas/1.jpg",
    images: imgs("chevrolet-damas"),
    tags: ["chevrolet", "mikroavtobus", "uzbekiston"],
    specs: { horsePower: 51, topSpeed: 120, engineCC: 796, fuelConsumption: 6.5, seats: 8, doors: 4, weight: 770 },
  },
  {
    slug: "chevrolet-labo",
    brand: "Chevrolet",
    model: "Labo",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 1991,
    thumbnail: "/images/cars/chevrolet-labo/1.jpg",
    images: imgs("chevrolet-labo"),
    tags: ["chevrolet", "pickup", "uzbekiston"],
    specs: { horsePower: 43, topSpeed: 110, engineCC: 796, fuelConsumption: 6.0, seats: 2, doors: 2, weight: 720 },
  },
  {
    slug: "volkswagen-golf",
    brand: "Volkswagen",
    model: "Golf",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1974,
    thumbnail: "/images/cars/volkswagen-golf/1.jpg",
    images: imgs("volkswagen-golf"),
    tags: ["volkswagen", "hatchback", "germaniya"],
    specs: { horsePower: 150, topSpeed: 220, engineCC: 1498, fuelConsumption: 6.8, seats: 5, doors: 4, weight: 1404 },
  },
];

export const brands = [...new Set(cars.map((c) => c.brand))].sort();
export const countries = [...new Set(cars.map((c) => c.country))].sort();
export const yearRanges = [
  { label: "1950–1969", min: 1950, max: 1969 },
  { label: "1970–1989", min: 1970, max: 1989 },
  { label: "1990–2009", min: 1990, max: 2009 },
  { label: "2010–hozir", min: 2010, max: 9999 },
];
