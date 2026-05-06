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

export const cars: Car[] = [
  {
    slug: "toyota-camry",
    brand: "Toyota",
    model: "Camry",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1982,
    thumbnail: "/images/cars/camry.jpg",
    images: ["/images/cars/camry.jpg", "/images/cars/camry-2.jpg", "/images/cars/camry-3.jpg"],
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
    thumbnail: "/images/cars/land-cruiser.jpg",
    images: ["/images/cars/land-cruiser.jpg", "/images/cars/land-cruiser-2.jpg", "/images/cars/land-cruiser-3.jpg"],
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
    thumbnail: "/images/cars/bmw-3.jpg",
    images: ["/images/cars/bmw-3.jpg", "/images/cars/bmw-3-2.jpg", "/images/cars/bmw-3-3.jpg"],
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
    thumbnail: "/images/cars/mercedes-e.jpg",
    images: ["/images/cars/mercedes-e.jpg", "/images/cars/mercedes-e-2.jpg", "/images/cars/mercedes-e-3.jpg"],
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
    thumbnail: "/images/cars/civic.jpg",
    images: ["/images/cars/civic.jpg", "/images/cars/civic-2.jpg", "/images/cars/civic-3.jpg"],
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
    thumbnail: "/images/cars/mustang.jpg",
    images: ["/images/cars/mustang.jpg", "/images/cars/mustang-2.jpg", "/images/cars/mustang-3.jpg"],
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
    thumbnail: "/images/cars/gentra.jpg",
    images: ["/images/cars/gentra.jpg", "/images/cars/gentra-2.jpg", "/images/cars/gentra-3.jpg"],
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
    thumbnail: "/images/cars/cobalt.jpg",
    images: ["/images/cars/cobalt.jpg", "/images/cars/cobalt-2.jpg", "/images/cars/cobalt-3.jpg"],
    tags: ["chevrolet", "sedan", "uzbekiston"],
    specs: { horsePower: 106, topSpeed: 178, engineCC: 1500, fuelConsumption: 7.8, seats: 5, doors: 4, weight: 1230 },
  },
  {
    slug: "volkswagen-golf",
    brand: "Volkswagen",
    model: "Golf",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1974,
    thumbnail: "/images/cars/golf.jpg",
    images: ["/images/cars/golf.jpg", "/images/cars/golf-2.jpg", "/images/cars/golf-3.jpg"],
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
