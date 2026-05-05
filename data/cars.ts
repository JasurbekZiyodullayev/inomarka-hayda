export interface Car {
  slug: string;
  brand: string;
  model: string;
  country: string;
  countryCode: string;
  worldDebut: number;
  thumbnail: string;
  tags: string[];
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
    tags: ["toyota", "sedan", "yaponiya"],
  },
  {
    slug: "toyota-land-cruiser",
    brand: "Toyota",
    model: "Land Cruiser",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1951,
    thumbnail: "/images/cars/land-cruiser.jpg",
    tags: ["toyota", "suv", "yaponiya"],
  },
  {
    slug: "bmw-3-series",
    brand: "BMW",
    model: "3 Series",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1975,
    thumbnail: "/images/cars/bmw-3.jpg",
    tags: ["bmw", "sedan", "germaniya"],
  },
  {
    slug: "mercedes-e-class",
    brand: "Mercedes-Benz",
    model: "E-Class",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1953,
    thumbnail: "/images/cars/mercedes-e.jpg",
    tags: ["mercedes", "sedan", "germaniya"],
  },
  {
    slug: "honda-civic",
    brand: "Honda",
    model: "Civic",
    country: "Yaponiya",
    countryCode: "JP",
    worldDebut: 1972,
    thumbnail: "/images/cars/civic.jpg",
    tags: ["honda", "sedan", "yaponiya"],
  },
  {
    slug: "ford-mustang",
    brand: "Ford",
    model: "Mustang",
    country: "AQSh",
    countryCode: "US",
    worldDebut: 1964,
    thumbnail: "/images/cars/mustang.jpg",
    tags: ["ford", "coupe", "aqsh"],
  },
  {
    slug: "chevrolet-gentra",
    brand: "Chevrolet",
    model: "Gentra",
    country: "Janubiy Koreya",
    countryCode: "KR",
    worldDebut: 2013,
    thumbnail: "/images/cars/gentra.jpg",
    tags: ["chevrolet", "sedan", "koreya", "uzbekiston"],
  },
  {
    slug: "chevrolet-cobalt",
    brand: "Chevrolet",
    model: "Cobalt",
    country: "Braziliya",
    countryCode: "BR",
    worldDebut: 2011,
    thumbnail: "/images/cars/cobalt.jpg",
    tags: ["chevrolet", "sedan", "uzbekiston"],
  },
  {
    slug: "volkswagen-golf",
    brand: "Volkswagen",
    model: "Golf",
    country: "Germaniya",
    countryCode: "DE",
    worldDebut: 1974,
    thumbnail: "/images/cars/golf.jpg",
    tags: ["volkswagen", "hatchback", "germaniya"],
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
