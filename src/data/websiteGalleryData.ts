export interface WebsiteImage {
  id: string;
  filename: string;
  src: string;
  width: number;
  height: number;
  ratio: number;
  title: string;
  category: string;
}

export const WEBSITE_CATEGORIES = [
  'Alle Werke',
  'Schwibbögen & Lichtkunst',
  'Epoxidharzlampen',
  'Gartenmöbel & Holzbau',
  'Personalisierte Unikate',
  'Lichterspitzen & Tradition',
  'Werkstatt & Entstehung',
] as const;

export type WebsiteCategory = (typeof WEBSITE_CATEGORIES)[number];

export const WEBSITE_GALLERY: WebsiteImage[] = [
  {
    "id": "img-1",
    "filename": "1775485307496.png",
    "src": "/gallery/1775485307496.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "Acrylglas-Schwibbogen »Haamitland Arzgebirg« mit Bergparade",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-2",
    "filename": "1790141401993.png",
    "src": "/gallery/1790141401993.png",
    "width": 1374,
    "height": 768,
    "ratio": 1.79,
    "title": "Personalisierter Familienschwibbogen mit Teelichtern",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-3",
    "filename": "1790267330679.png",
    "src": "/gallery/1790267330679.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "Acrylglas-Schwibbogen mit Bergparade & Eichensockel (Detailansicht)",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-4",
    "filename": "20251122_135500.jpg",
    "src": "/gallery/20251122_135500.jpg",
    "width": 1868,
    "height": 1105,
    "ratio": 1.69,
    "title": "Moderner Sci-Fi LED-Schwibbogen »Galaxie«",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-5",
    "filename": "20251122_210705.jpg",
    "src": "/gallery/20251122_210705.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Moderner Sci-Fi LED-Schwibbogen »Galaxie«",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-6",
    "filename": "20251201_205127.jpg",
    "src": "/gallery/20251201_205127.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-7",
    "filename": "20251201_211759.jpg",
    "src": "/gallery/20251201_211759.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-8",
    "filename": "20251201_212003.jpg",
    "src": "/gallery/20251201_212003.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-9",
    "filename": "20251204_183128.jpg",
    "src": "/gallery/20251204_183128.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Traditioneller Bergmann- & Handwerkerschwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-10",
    "filename": "20251204_183151.jpg",
    "src": "/gallery/20251204_183151.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Traditioneller Bergmann- & Handwerkerschwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-11",
    "filename": "20251204_183353.jpg",
    "src": "/gallery/20251204_183353.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Traditioneller Bergmann- & Handwerkerschwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-12",
    "filename": "20251205_060036.jpg",
    "src": "/gallery/20251205_060036.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-13",
    "filename": "20251205_202640.jpg",
    "src": "/gallery/20251205_202640.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-14",
    "filename": "20251205_202744.jpg",
    "src": "/gallery/20251205_202744.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-15",
    "filename": "20251205_202803.jpg",
    "src": "/gallery/20251205_202803.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-16",
    "filename": "20251210_204524.jpg",
    "src": "/gallery/20251210_204524.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-17",
    "filename": "20251210_204528.jpg",
    "src": "/gallery/20251210_204528.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-18",
    "filename": "20251210_205030.jpg",
    "src": "/gallery/20251210_205030.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-19",
    "filename": "20251210_205050.jpg",
    "src": "/gallery/20251210_205050.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-20",
    "filename": "20251215_202104.jpg",
    "src": "/gallery/20251215_202104.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-21",
    "filename": "20251215_202128.jpg",
    "src": "/gallery/20251215_202128.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-22",
    "filename": "20251216_062151.jpg",
    "src": "/gallery/20251216_062151.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-23",
    "filename": "20251216_062232.jpg",
    "src": "/gallery/20251216_062232.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Erzgebirgischer Traditions-Schwibbogen",
    "category": "Lichterspitzen & Tradition"
  },
  {
    "id": "img-24",
    "filename": "20251220_160625.jpg",
    "src": "/gallery/20251220_160625.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-25",
    "filename": "20251220_160637.jpg",
    "src": "/gallery/20251220_160637.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-26",
    "filename": "20251220_160827.jpg",
    "src": "/gallery/20251220_160827.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-27",
    "filename": "20251229_182719 - Kopie.jpg",
    "src": "/gallery/20251229_182719%20-%20Kopie.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-28",
    "filename": "20251229_182719.jpg",
    "src": "/gallery/20251229_182719.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-29",
    "filename": "20251229_182723.jpg",
    "src": "/gallery/20251229_182723.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-30",
    "filename": "20251229_182729.jpg",
    "src": "/gallery/20251229_182729.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-31",
    "filename": "20251229_182808.jpg",
    "src": "/gallery/20251229_182808.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-32",
    "filename": "20251229_182816 - Kopie.jpg",
    "src": "/gallery/20251229_182816%20-%20Kopie.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-33",
    "filename": "20251229_182816.jpg",
    "src": "/gallery/20251229_182816.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-34",
    "filename": "20251229_182928.jpg",
    "src": "/gallery/20251229_182928.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-35",
    "filename": "20251229_182937.jpg",
    "src": "/gallery/20251229_182937.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-36",
    "filename": "20251229_183027.jpg",
    "src": "/gallery/20251229_183027.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-37",
    "filename": "20251229_185235.jpg",
    "src": "/gallery/20251229_185235.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-38",
    "filename": "20251229_190756.jpg",
    "src": "/gallery/20251229_190756.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-39",
    "filename": "20251229_190800.jpg",
    "src": "/gallery/20251229_190800.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Jubiläums-Motorrad aus Vollholz (TGA Büro Chemnitz)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-40",
    "filename": "20251230_171036 - Kopie.jpg",
    "src": "/gallery/20251230_171036%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2376,
    "ratio": 0.79,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-41",
    "filename": "20251230_171036.jpg",
    "src": "/gallery/20251230_171036.jpg",
    "width": 1868,
    "height": 2376,
    "ratio": 0.79,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-42",
    "filename": "20251230_171039 - Kopie.jpg",
    "src": "/gallery/20251230_171039%20-%20Kopie.jpg",
    "width": 1635,
    "height": 2754,
    "ratio": 0.59,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-43",
    "filename": "20251230_171039.jpg",
    "src": "/gallery/20251230_171039.jpg",
    "width": 1635,
    "height": 2754,
    "ratio": 0.59,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-44",
    "filename": "20251230_171045 - Kopie.jpg",
    "src": "/gallery/20251230_171045%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2973,
    "ratio": 0.63,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-45",
    "filename": "20251230_171045.jpg",
    "src": "/gallery/20251230_171045.jpg",
    "width": 1868,
    "height": 2973,
    "ratio": 0.63,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-46",
    "filename": "20251230_171106 - Kopie.jpg",
    "src": "/gallery/20251230_171106%20-%20Kopie.jpg",
    "width": 1835,
    "height": 2889,
    "ratio": 0.64,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-47",
    "filename": "20251230_171106.jpg",
    "src": "/gallery/20251230_171106.jpg",
    "width": 1835,
    "height": 2889,
    "ratio": 0.64,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-48",
    "filename": "20251230_171109 - Kopie.jpg",
    "src": "/gallery/20251230_171109%20-%20Kopie.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-49",
    "filename": "20251230_171109.jpg",
    "src": "/gallery/20251230_171109.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-50",
    "filename": "20251230_171341 - Kopie.jpg",
    "src": "/gallery/20251230_171341%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2410,
    "ratio": 0.78,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-51",
    "filename": "20251230_171341.jpg",
    "src": "/gallery/20251230_171341.jpg",
    "width": 1868,
    "height": 2410,
    "ratio": 0.78,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-52",
    "filename": "20251230_171354.jpg",
    "src": "/gallery/20251230_171354.jpg",
    "width": 1868,
    "height": 2759,
    "ratio": 0.68,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-53",
    "filename": "20251230_171412 - Kopie.jpg",
    "src": "/gallery/20251230_171412%20-%20Kopie.jpg",
    "width": 1868,
    "height": 3036,
    "ratio": 0.62,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-54",
    "filename": "20251230_171412.jpg",
    "src": "/gallery/20251230_171412.jpg",
    "width": 1868,
    "height": 3036,
    "ratio": 0.62,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-55",
    "filename": "20251230_171415 - Kopie.jpg",
    "src": "/gallery/20251230_171415%20-%20Kopie.jpg",
    "width": 1639,
    "height": 2882,
    "ratio": 0.57,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-56",
    "filename": "20251230_171415.jpg",
    "src": "/gallery/20251230_171415.jpg",
    "width": 1639,
    "height": 2882,
    "ratio": 0.57,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-57",
    "filename": "20251230_171444 - Kopie.jpg",
    "src": "/gallery/20251230_171444%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2833,
    "ratio": 0.66,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-58",
    "filename": "20251230_171444.jpg",
    "src": "/gallery/20251230_171444.jpg",
    "width": 1868,
    "height": 2833,
    "ratio": 0.66,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-59",
    "filename": "20251230_171447.jpg",
    "src": "/gallery/20251230_171447.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "Massivholz-Hocker & Konstruktion",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-60",
    "filename": "20260102_185437.jpg",
    "src": "/gallery/20260102_185437.jpg",
    "width": 2640,
    "height": 1868,
    "ratio": 1.41,
    "title": "Handwerk & Werkstattdetail #60",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-61",
    "filename": "20260102_185520.jpg",
    "src": "/gallery/20260102_185520.jpg",
    "width": 3525,
    "height": 1868,
    "ratio": 1.89,
    "title": "Handwerk & Werkstattdetail #61",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-62",
    "filename": "20260102_185524.jpg",
    "src": "/gallery/20260102_185524.jpg",
    "width": 1868,
    "height": 2768,
    "ratio": 0.67,
    "title": "Handwerk & Werkstattdetail #62",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-63",
    "filename": "20260103_153900.jpg",
    "src": "/gallery/20260103_153900.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #63",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-64",
    "filename": "20260112_193404.jpg",
    "src": "/gallery/20260112_193404.jpg",
    "width": 3314,
    "height": 1868,
    "ratio": 1.77,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-65",
    "filename": "20260112_193454.jpg",
    "src": "/gallery/20260112_193454.jpg",
    "width": 3094,
    "height": 1868,
    "ratio": 1.66,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-66",
    "filename": "20260112_193536.jpg",
    "src": "/gallery/20260112_193536.jpg",
    "width": 3257,
    "height": 1868,
    "ratio": 1.74,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-67",
    "filename": "20260112_193553.jpg",
    "src": "/gallery/20260112_193553.jpg",
    "width": 3200,
    "height": 1868,
    "ratio": 1.71,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-68",
    "filename": "20260112_193610.jpg",
    "src": "/gallery/20260112_193610.jpg",
    "width": 3103,
    "height": 1868,
    "ratio": 1.66,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-69",
    "filename": "20260112_193659.jpg",
    "src": "/gallery/20260112_193659.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-70",
    "filename": "20260112_193822.jpg",
    "src": "/gallery/20260112_193822.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-71",
    "filename": "20260112_193831.jpg",
    "src": "/gallery/20260112_193831.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-72",
    "filename": "20260112_193940.jpg",
    "src": "/gallery/20260112_193940.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Graviertes Holzservierbrett »Der Leyendecker«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-73",
    "filename": "20260114_202649.jpg",
    "src": "/gallery/20260114_202649.jpg",
    "width": 2834,
    "height": 1868,
    "ratio": 1.52,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-74",
    "filename": "20260114_202739.jpg",
    "src": "/gallery/20260114_202739.jpg",
    "width": 2780,
    "height": 1868,
    "ratio": 1.49,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-75",
    "filename": "20260114_202807.jpg",
    "src": "/gallery/20260114_202807.jpg",
    "width": 2885,
    "height": 1868,
    "ratio": 1.54,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-76",
    "filename": "20260114_202813.jpg",
    "src": "/gallery/20260114_202813.jpg",
    "width": 3168,
    "height": 1868,
    "ratio": 1.7,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-77",
    "filename": "20260114_202838.jpg",
    "src": "/gallery/20260114_202838.jpg",
    "width": 2656,
    "height": 1868,
    "ratio": 1.42,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-78",
    "filename": "20260114_202857.jpg",
    "src": "/gallery/20260114_202857.jpg",
    "width": 2864,
    "height": 1868,
    "ratio": 1.53,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-79",
    "filename": "20260114_203037.jpg",
    "src": "/gallery/20260114_203037.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Graviertes Holzbrett »Coffee & Pizza – Herzenssache«",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-80",
    "filename": "20260401_203245.jpg",
    "src": "/gallery/20260401_203245.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-81",
    "filename": "20260401_203253.jpg",
    "src": "/gallery/20260401_203253.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-82",
    "filename": "20260405_090853.jpg",
    "src": "/gallery/20260405_090853.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-83",
    "filename": "20260405_090906.jpg",
    "src": "/gallery/20260405_090906.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-84",
    "filename": "20260405_091658.jpg",
    "src": "/gallery/20260405_091658.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-85",
    "filename": "20260405_091701.jpg",
    "src": "/gallery/20260405_091701.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-86",
    "filename": "20260405_091706.jpg",
    "src": "/gallery/20260405_091706.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-87",
    "filename": "20260405_091714.jpg",
    "src": "/gallery/20260405_091714.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-88",
    "filename": "20260405_091719.jpg",
    "src": "/gallery/20260405_091719.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-89",
    "filename": "20260405_091805.jpg",
    "src": "/gallery/20260405_091805.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-90",
    "filename": "20260405_091807.jpg",
    "src": "/gallery/20260405_091807.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "CNC-Frästeile, Rohlinge & Schichtaufbau",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-91",
    "filename": "20260406_160904.jpg",
    "src": "/gallery/20260406_160904.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Acrylglas-Schwibbogen »Haamitland Arzgebirg«",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-92",
    "filename": "20260406_160919.jpg",
    "src": "/gallery/20260406_160919.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-93",
    "filename": "20260406_161200.jpg",
    "src": "/gallery/20260406_161200.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-94",
    "filename": "20260406_161209.jpg",
    "src": "/gallery/20260406_161209.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-95",
    "filename": "20260406_163633.jpg",
    "src": "/gallery/20260406_163633.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "Großformat-Lichtmonument auf der Werkbank",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-96",
    "filename": "20260521_164621.jpg",
    "src": "/gallery/20260521_164621.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Präzisionsgefräster LED-Lichtbogen",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-97",
    "filename": "20260525_115254.jpg",
    "src": "/gallery/20260525_115254.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Handveredelter Schwibbogen mit Sockelbeleuchtung",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-98",
    "filename": "20260525_115302.jpg",
    "src": "/gallery/20260525_115302.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Handveredelter Schwibbogen mit Sockelbeleuchtung",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-99",
    "filename": "20260525_160853.jpg",
    "src": "/gallery/20260525_160853.jpg",
    "width": 3350,
    "height": 1868,
    "ratio": 1.79,
    "title": "Handveredelter Schwibbogen mit Sockelbeleuchtung",
    "category": "Schwibbögen & Lichtkunst"
  },
  {
    "id": "img-100",
    "filename": "20260921_200248.jpg",
    "src": "/gallery/20260921_200248.jpg",
    "width": 1886,
    "height": 1142,
    "ratio": 1.65,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-101",
    "filename": "20260922_182809.jpg",
    "src": "/gallery/20260922_182809.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-102",
    "filename": "20260924_181056.jpg",
    "src": "/gallery/20260924_181056.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-103",
    "filename": "20260924_181107.jpg",
    "src": "/gallery/20260924_181107.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-104",
    "filename": "20260924_181804.jpg",
    "src": "/gallery/20260924_181804.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-105",
    "filename": "20260924_181818.jpg",
    "src": "/gallery/20260924_181818.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "Werkstattatmosphäre & Detailaufnahmen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-106",
    "filename": "6528717790516077.jpg",
    "src": "/gallery/6528717790516077.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-107",
    "filename": "6528717873849402.jpg",
    "src": "/gallery/6528717873849402.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-108",
    "filename": "6528717977182725.jpg",
    "src": "/gallery/6528717977182725.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-109",
    "filename": "6528718053849384.jpg",
    "src": "/gallery/6528718053849384.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-110",
    "filename": "6528718117182711.jpg",
    "src": "/gallery/6528718117182711.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-111",
    "filename": "6528718230516033.jpg",
    "src": "/gallery/6528718230516033.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-112",
    "filename": "6528718317182691.jpg",
    "src": "/gallery/6528718317182691.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-113",
    "filename": "6528718390516017.jpg",
    "src": "/gallery/6528718390516017.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-114",
    "filename": "6528718487182674.jpg",
    "src": "/gallery/6528718487182674.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-115",
    "filename": "6528718563849333.jpg",
    "src": "/gallery/6528718563849333.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-116",
    "filename": "6528718653849324.jpg",
    "src": "/gallery/6528718653849324.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-117",
    "filename": "6528718747182648.jpg",
    "src": "/gallery/6528718747182648.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-118",
    "filename": "6528718803849309.jpg",
    "src": "/gallery/6528718803849309.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-119",
    "filename": "6528718877182635.jpg",
    "src": "/gallery/6528718877182635.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-120",
    "filename": "6528718977182625.jpg",
    "src": "/gallery/6528718977182625.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-121",
    "filename": "6528719070515949.jpg",
    "src": "/gallery/6528719070515949.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-122",
    "filename": "6528719163849273.jpg",
    "src": "/gallery/6528719163849273.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-123",
    "filename": "6528719230515933.jpg",
    "src": "/gallery/6528719230515933.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-124",
    "filename": "6528719323849257.jpg",
    "src": "/gallery/6528719323849257.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-125",
    "filename": "6528719433849246.jpg",
    "src": "/gallery/6528719433849246.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-126",
    "filename": "6528719517182571.jpg",
    "src": "/gallery/6528719517182571.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-127",
    "filename": "6528719647182558.jpg",
    "src": "/gallery/6528719647182558.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-128",
    "filename": "6528719703849219.jpg",
    "src": "/gallery/6528719703849219.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-129",
    "filename": "6528719803849209.jpg",
    "src": "/gallery/6528719803849209.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-130",
    "filename": "6528719863849203.jpg",
    "src": "/gallery/6528719863849203.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-131",
    "filename": "6528719980515858.jpg",
    "src": "/gallery/6528719980515858.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-132",
    "filename": "6528720120515844.jpg",
    "src": "/gallery/6528720120515844.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-133",
    "filename": "6528720247182498.jpg",
    "src": "/gallery/6528720247182498.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-134",
    "filename": "6528720400515816.jpg",
    "src": "/gallery/6528720400515816.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-135",
    "filename": "6528720497182473.jpg",
    "src": "/gallery/6528720497182473.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-136",
    "filename": "6528720663849123.jpg",
    "src": "/gallery/6528720663849123.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-137",
    "filename": "6528720797182443.jpg",
    "src": "/gallery/6528720797182443.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-138",
    "filename": "6528720927182430.jpg",
    "src": "/gallery/6528720927182430.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-139",
    "filename": "6528721020515754.jpg",
    "src": "/gallery/6528721020515754.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-140",
    "filename": "6528721110515745.jpg",
    "src": "/gallery/6528721110515745.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-141",
    "filename": "6528721207182402.jpg",
    "src": "/gallery/6528721207182402.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-142",
    "filename": "6528721307182392.jpg",
    "src": "/gallery/6528721307182392.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-143",
    "filename": "6528721387182384.jpg",
    "src": "/gallery/6528721387182384.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-144",
    "filename": "6528721480515708.jpg",
    "src": "/gallery/6528721480515708.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-145",
    "filename": "6528721593849030.jpg",
    "src": "/gallery/6528721593849030.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-146",
    "filename": "6528721710515685.jpg",
    "src": "/gallery/6528721710515685.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-147",
    "filename": "6528721807182342.jpg",
    "src": "/gallery/6528721807182342.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-148",
    "filename": "6528721950515661.jpg",
    "src": "/gallery/6528721950515661.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-149",
    "filename": "6528722180515638.jpg",
    "src": "/gallery/6528722180515638.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-150",
    "filename": "6528722283848961.jpg",
    "src": "/gallery/6528722283848961.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-151",
    "filename": "6528722400515616.jpg",
    "src": "/gallery/6528722400515616.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-152",
    "filename": "6528722503848939.jpg",
    "src": "/gallery/6528722503848939.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-153",
    "filename": "6528722557182267.jpg",
    "src": "/gallery/6528722557182267.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-154",
    "filename": "6528722653848924.jpg",
    "src": "/gallery/6528722653848924.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-155",
    "filename": "6528722720515584.jpg",
    "src": "/gallery/6528722720515584.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-156",
    "filename": "6528722797182243.jpg",
    "src": "/gallery/6528722797182243.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-157",
    "filename": "6528723060515550.jpg",
    "src": "/gallery/6528723060515550.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-158",
    "filename": "6528723193848870.jpg",
    "src": "/gallery/6528723193848870.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-159",
    "filename": "6528723920515464.jpg",
    "src": "/gallery/6528723920515464.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-160",
    "filename": "6528724123848777.jpg",
    "src": "/gallery/6528724123848777.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-161",
    "filename": "6528724260515430.jpg",
    "src": "/gallery/6528724260515430.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-162",
    "filename": "6528724350515421.jpg",
    "src": "/gallery/6528724350515421.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-163",
    "filename": "6528724490515407.jpg",
    "src": "/gallery/6528724490515407.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-164",
    "filename": "6528724623848727.jpg",
    "src": "/gallery/6528724623848727.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-165",
    "filename": "6528724730515383.jpg",
    "src": "/gallery/6528724730515383.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-166",
    "filename": "6528724833848706.jpg",
    "src": "/gallery/6528724833848706.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-167",
    "filename": "6528724967182026.jpg",
    "src": "/gallery/6528724967182026.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-168",
    "filename": "6528725070515349.jpg",
    "src": "/gallery/6528725070515349.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-169",
    "filename": "6528725190515337.jpg",
    "src": "/gallery/6528725190515337.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-170",
    "filename": "6528725310515325.jpg",
    "src": "/gallery/6528725310515325.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-171",
    "filename": "6528725443848645.jpg",
    "src": "/gallery/6528725443848645.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-172",
    "filename": "6528725550515301.jpg",
    "src": "/gallery/6528725550515301.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-173",
    "filename": "6528725690515287.jpg",
    "src": "/gallery/6528725690515287.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-174",
    "filename": "6528725797181943.jpg",
    "src": "/gallery/6528725797181943.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-175",
    "filename": "6528725900515266.jpg",
    "src": "/gallery/6528725900515266.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-176",
    "filename": "6528726000515256.jpg",
    "src": "/gallery/6528726000515256.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-177",
    "filename": "6528726117181911.jpg",
    "src": "/gallery/6528726117181911.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-178",
    "filename": "6528726207181902.jpg",
    "src": "/gallery/6528726207181902.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-179",
    "filename": "6528726310515225.jpg",
    "src": "/gallery/6528726310515225.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-180",
    "filename": "6528726407181882.jpg",
    "src": "/gallery/6528726407181882.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-181",
    "filename": "6528726513848538.jpg",
    "src": "/gallery/6528726513848538.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Werkstatt: Holzkonstruktion & Passungen",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-182",
    "filename": "6529602813760908.jpg",
    "src": "/gallery/6529602813760908.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-183",
    "filename": "6529602953760894.jpg",
    "src": "/gallery/6529602953760894.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-184",
    "filename": "6529603063760883.jpg",
    "src": "/gallery/6529603063760883.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-185",
    "filename": "6529633610424495.jpg",
    "src": "/gallery/6529633610424495.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-186",
    "filename": "6529633697091153.jpg",
    "src": "/gallery/6529633697091153.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-187",
    "filename": "6529633810424475.jpg",
    "src": "/gallery/6529633810424475.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-188",
    "filename": "6529633967091126.jpg",
    "src": "/gallery/6529633967091126.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-189",
    "filename": "6529634093757780.jpg",
    "src": "/gallery/6529634093757780.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-190",
    "filename": "6529634233757766.jpg",
    "src": "/gallery/6529634233757766.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-191",
    "filename": "6529634360424420.jpg",
    "src": "/gallery/6529634360424420.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-192",
    "filename": "6529634480424408.jpg",
    "src": "/gallery/6529634480424408.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-193",
    "filename": "6529634683757721.jpg",
    "src": "/gallery/6529634683757721.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-194",
    "filename": "6529634840424372.jpg",
    "src": "/gallery/6529634840424372.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-195",
    "filename": "6529634947091028.jpg",
    "src": "/gallery/6529634947091028.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-196",
    "filename": "6529635073757682.jpg",
    "src": "/gallery/6529635073757682.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-197",
    "filename": "6529635223757667.jpg",
    "src": "/gallery/6529635223757667.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-198",
    "filename": "6529637347090788.jpg",
    "src": "/gallery/6529637347090788.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-199",
    "filename": "6529637530424103.jpg",
    "src": "/gallery/6529637530424103.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-200",
    "filename": "6529637687090754.jpg",
    "src": "/gallery/6529637687090754.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-201",
    "filename": "6529637827090740.jpg",
    "src": "/gallery/6529637827090740.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-202",
    "filename": "6529637933757396.jpg",
    "src": "/gallery/6529637933757396.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-203",
    "filename": "6529638110424045.jpg",
    "src": "/gallery/6529638110424045.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-204",
    "filename": "6529638257090697.jpg",
    "src": "/gallery/6529638257090697.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-205",
    "filename": "6529638403757349.jpg",
    "src": "/gallery/6529638403757349.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-206",
    "filename": "6529638630423993.jpg",
    "src": "/gallery/6529638630423993.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-207",
    "filename": "6529638787090644.jpg",
    "src": "/gallery/6529638787090644.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-208",
    "filename": "6529638907090632.jpg",
    "src": "/gallery/6529638907090632.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-209",
    "filename": "6529639030423953.jpg",
    "src": "/gallery/6529639030423953.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-210",
    "filename": "6529639123757277.jpg",
    "src": "/gallery/6529639123757277.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-211",
    "filename": "6529639267090596.jpg",
    "src": "/gallery/6529639267090596.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-212",
    "filename": "6529639400423916.jpg",
    "src": "/gallery/6529639400423916.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-213",
    "filename": "6529639537090569.jpg",
    "src": "/gallery/6529639537090569.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-214",
    "filename": "6529639703757219.jpg",
    "src": "/gallery/6529639703757219.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-215",
    "filename": "6529639843757205.jpg",
    "src": "/gallery/6529639843757205.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-216",
    "filename": "6529640000423856.jpg",
    "src": "/gallery/6529640000423856.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "Fertigung einer Raumspartreppe (Sambatreppe)",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-217",
    "filename": "6569889836398872.jpg",
    "src": "/gallery/6569889836398872.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-218",
    "filename": "6569889936398862.jpg",
    "src": "/gallery/6569889936398862.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-219",
    "filename": "6569890026398853.jpg",
    "src": "/gallery/6569890026398853.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-220",
    "filename": "6569890153065507.jpg",
    "src": "/gallery/6569890153065507.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-221",
    "filename": "6569890249732164.jpg",
    "src": "/gallery/6569890249732164.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-222",
    "filename": "6569890319732157.jpg",
    "src": "/gallery/6569890319732157.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-223",
    "filename": "6569890399732149.jpg",
    "src": "/gallery/6569890399732149.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-224",
    "filename": "6569890573065465.jpg",
    "src": "/gallery/6569890573065465.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-225",
    "filename": "6569890676398788.jpg",
    "src": "/gallery/6569890676398788.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-226",
    "filename": "6569890803065442.jpg",
    "src": "/gallery/6569890803065442.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-227",
    "filename": "6569890986398757.jpg",
    "src": "/gallery/6569890986398757.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Geflammtes Holzregal mit Edelstahlstreben",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-228",
    "filename": "6572274559493733.jpg",
    "src": "/gallery/6572274559493733.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Handwerk & Werkstattdetail #228",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-229",
    "filename": "6572274652827057.jpg",
    "src": "/gallery/6572274652827057.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Handwerk & Werkstattdetail #229",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-230",
    "filename": "6636873219700533.jpg",
    "src": "/gallery/6636873219700533.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-231",
    "filename": "6636873306367191.jpg",
    "src": "/gallery/6636873306367191.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-232",
    "filename": "6636873389700516.jpg",
    "src": "/gallery/6636873389700516.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-233",
    "filename": "6636873459700509.jpg",
    "src": "/gallery/6636873459700509.jpg",
    "width": 1152,
    "height": 2048,
    "ratio": 0.56,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-234",
    "filename": "6636873546367167.jpg",
    "src": "/gallery/6636873546367167.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-235",
    "filename": "6636873626367159.jpg",
    "src": "/gallery/6636873626367159.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-236",
    "filename": "6636873683033820.jpg",
    "src": "/gallery/6636873683033820.jpg",
    "width": 1152,
    "height": 2048,
    "ratio": 0.56,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-237",
    "filename": "6636873736367148.jpg",
    "src": "/gallery/6636873736367148.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-238",
    "filename": "6636873799700475.jpg",
    "src": "/gallery/6636873799700475.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-239",
    "filename": "6636873859700469.jpg",
    "src": "/gallery/6636873859700469.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-240",
    "filename": "6636873933033795.jpg",
    "src": "/gallery/6636873933033795.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-241",
    "filename": "6636874039700451.jpg",
    "src": "/gallery/6636874039700451.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-242",
    "filename": "6636874129700442.jpg",
    "src": "/gallery/6636874129700442.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-243",
    "filename": "6636874206367101.jpg",
    "src": "/gallery/6636874206367101.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-244",
    "filename": "6636874296367092.jpg",
    "src": "/gallery/6636874296367092.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-245",
    "filename": "6636874396367082.jpg",
    "src": "/gallery/6636874396367082.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-246",
    "filename": "6636874503033738.jpg",
    "src": "/gallery/6636874503033738.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-247",
    "filename": "6636874646367057.jpg",
    "src": "/gallery/6636874646367057.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-248",
    "filename": "6636874743033714.jpg",
    "src": "/gallery/6636874743033714.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-249",
    "filename": "6636874893033699.jpg",
    "src": "/gallery/6636874893033699.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-250",
    "filename": "6636874983033690.jpg",
    "src": "/gallery/6636874983033690.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-251",
    "filename": "6636875093033679.jpg",
    "src": "/gallery/6636875093033679.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-252",
    "filename": "6636875186367003.jpg",
    "src": "/gallery/6636875186367003.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-253",
    "filename": "6636875319700323.jpg",
    "src": "/gallery/6636875319700323.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-254",
    "filename": "6636875483033640.jpg",
    "src": "/gallery/6636875483033640.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-255",
    "filename": "6636875636366958.jpg",
    "src": "/gallery/6636875636366958.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-256",
    "filename": "6636875779700277.jpg",
    "src": "/gallery/6636875779700277.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-257",
    "filename": "6636875873033601.jpg",
    "src": "/gallery/6636875873033601.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-258",
    "filename": "6636875973033591.jpg",
    "src": "/gallery/6636875973033591.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-259",
    "filename": "6636876073033581.jpg",
    "src": "/gallery/6636876073033581.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-260",
    "filename": "6636876189700236.jpg",
    "src": "/gallery/6636876189700236.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Massives Adirondack-Gartenstuhl-Set mit Tisch",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-261",
    "filename": "7134045069983343.jpg",
    "src": "/gallery/7134045069983343.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-262",
    "filename": "7134045133316670.jpg",
    "src": "/gallery/7134045133316670.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-263",
    "filename": "7134045139983336.jpg",
    "src": "/gallery/7134045139983336.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-264",
    "filename": "7134045223316661.jpg",
    "src": "/gallery/7134045223316661.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-265",
    "filename": "7134045326649984.jpg",
    "src": "/gallery/7134045326649984.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-266",
    "filename": "7134045389983311.jpg",
    "src": "/gallery/7134045389983311.jpg",
    "width": 1366,
    "height": 2048,
    "ratio": 0.67,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-267",
    "filename": "7134045516649965.jpg",
    "src": "/gallery/7134045516649965.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-268",
    "filename": "7134045583316625.jpg",
    "src": "/gallery/7134045583316625.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-269",
    "filename": "7134045643316619.jpg",
    "src": "/gallery/7134045643316619.jpg",
    "width": 1366,
    "height": 2048,
    "ratio": 0.67,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-270",
    "filename": "7134045763316607.jpg",
    "src": "/gallery/7134045763316607.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-271",
    "filename": "7134045769983273.jpg",
    "src": "/gallery/7134045769983273.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-272",
    "filename": "7134045873316596.jpg",
    "src": "/gallery/7134045873316596.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-273",
    "filename": "7134045933316590.jpg",
    "src": "/gallery/7134045933316590.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-274",
    "filename": "7134046036649913.jpg",
    "src": "/gallery/7134046036649913.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-275",
    "filename": "7134046113316572.jpg",
    "src": "/gallery/7134046113316572.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-276",
    "filename": "7134046179983232.jpg",
    "src": "/gallery/7134046179983232.jpg",
    "width": 2048,
    "height": 1152,
    "ratio": 1.78,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-277",
    "filename": "7134046319983218.jpg",
    "src": "/gallery/7134046319983218.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-278",
    "filename": "7134046396649877.jpg",
    "src": "/gallery/7134046396649877.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-279",
    "filename": "7134046433316540.jpg",
    "src": "/gallery/7134046433316540.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-280",
    "filename": "7134046519983198.jpg",
    "src": "/gallery/7134046519983198.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "Ergonomischer Holz-Gartenstuhl im Detail",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-281",
    "filename": "7186663434721506.jpg",
    "src": "/gallery/7186663434721506.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #281",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-282",
    "filename": "7186663561388160.jpg",
    "src": "/gallery/7186663561388160.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #282",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-283",
    "filename": "7186663661388150.jpg",
    "src": "/gallery/7186663661388150.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #283",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-284",
    "filename": "7186663761388140.jpg",
    "src": "/gallery/7186663761388140.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #284",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-285",
    "filename": "7186663914721458.jpg",
    "src": "/gallery/7186663914721458.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #285",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-286",
    "filename": "7186663984721451.jpg",
    "src": "/gallery/7186663984721451.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #286",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-287",
    "filename": "7186664064721443.jpg",
    "src": "/gallery/7186664064721443.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #287",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-288",
    "filename": "7186664174721432.jpg",
    "src": "/gallery/7186664174721432.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #288",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-289",
    "filename": "7186664268054756.jpg",
    "src": "/gallery/7186664268054756.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "Handwerk & Werkstattdetail #289",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-290",
    "filename": "7300427790011736.jpg",
    "src": "/gallery/7300427790011736.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #290",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-291",
    "filename": "7300427953345053.jpg",
    "src": "/gallery/7300427953345053.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #291",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-292",
    "filename": "7300428133345035.jpg",
    "src": "/gallery/7300428133345035.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #292",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-293",
    "filename": "7300428313345017.jpg",
    "src": "/gallery/7300428313345017.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #293",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-294",
    "filename": "7300428443345004.jpg",
    "src": "/gallery/7300428443345004.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #294",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-295",
    "filename": "7300428666678315.jpg",
    "src": "/gallery/7300428666678315.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "Handwerk & Werkstattdetail #295",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-296",
    "filename": "7300428863344962.jpg",
    "src": "/gallery/7300428863344962.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #296",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-297",
    "filename": "7405083069546207.jpg",
    "src": "/gallery/7405083069546207.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-298",
    "filename": "7405083169546197.jpg",
    "src": "/gallery/7405083169546197.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-299",
    "filename": "7405083246212856.jpg",
    "src": "/gallery/7405083246212856.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-300",
    "filename": "7405083359546178.jpg",
    "src": "/gallery/7405083359546178.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-301",
    "filename": "7405083442879503.jpg",
    "src": "/gallery/7405083442879503.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-302",
    "filename": "7405083532879494.jpg",
    "src": "/gallery/7405083532879494.jpg",
    "width": 640,
    "height": 1370,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-303",
    "filename": "7405083652879482.jpg",
    "src": "/gallery/7405083652879482.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-304",
    "filename": "7405083756212805.jpg",
    "src": "/gallery/7405083756212805.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-305",
    "filename": "7405083869546127.jpg",
    "src": "/gallery/7405083869546127.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-306",
    "filename": "7405083999546114.jpg",
    "src": "/gallery/7405083999546114.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-307",
    "filename": "7405084069546107.jpg",
    "src": "/gallery/7405084069546107.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-308",
    "filename": "7405084212879426.jpg",
    "src": "/gallery/7405084212879426.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-309",
    "filename": "7405084352879412.jpg",
    "src": "/gallery/7405084352879412.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-310",
    "filename": "7405084496212731.jpg",
    "src": "/gallery/7405084496212731.jpg",
    "width": 640,
    "height": 1372,
    "ratio": 0.47,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-311",
    "filename": "7405084602879387.jpg",
    "src": "/gallery/7405084602879387.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-312",
    "filename": "7405084912879356.jpg",
    "src": "/gallery/7405084912879356.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Illuminierte Epoxidharzlampe",
    "category": "Epoxidharzlampen"
  },
  {
    "id": "img-313",
    "filename": "7414209805300200.jpg",
    "src": "/gallery/7414209805300200.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-314",
    "filename": "7414210071966840.jpg",
    "src": "/gallery/7414210071966840.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-315",
    "filename": "7414210245300156.jpg",
    "src": "/gallery/7414210245300156.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-316",
    "filename": "7414210425300138.jpg",
    "src": "/gallery/7414210425300138.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-317",
    "filename": "7414210578633456.jpg",
    "src": "/gallery/7414210578633456.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-318",
    "filename": "7414210738633440.jpg",
    "src": "/gallery/7414210738633440.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-319",
    "filename": "7414210885300092.jpg",
    "src": "/gallery/7414210885300092.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-320",
    "filename": "7414211075300073.jpg",
    "src": "/gallery/7414211075300073.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-321",
    "filename": "7414211288633385.jpg",
    "src": "/gallery/7414211288633385.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-322",
    "filename": "7414211655300015.jpg",
    "src": "/gallery/7414211655300015.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-323",
    "filename": "7414212035299977.jpg",
    "src": "/gallery/7414212035299977.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-324",
    "filename": "7414212455299935.jpg",
    "src": "/gallery/7414212455299935.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-325",
    "filename": "7414212721966575.jpg",
    "src": "/gallery/7414212721966575.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-326",
    "filename": "7414213071966540.jpg",
    "src": "/gallery/7414213071966540.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-327",
    "filename": "7414213325299848.jpg",
    "src": "/gallery/7414213325299848.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-328",
    "filename": "7414213738633140.jpg",
    "src": "/gallery/7414213738633140.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-329",
    "filename": "7414214028633111.jpg",
    "src": "/gallery/7414214028633111.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-330",
    "filename": "7414214371966410.jpg",
    "src": "/gallery/7414214371966410.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "Holzblockhaus-Futterhaus mit Schindeldach",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-331",
    "filename": "7456398874414626.jpg",
    "src": "/gallery/7456398874414626.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Handwerk & Werkstattdetail #331",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-332",
    "filename": "7456399294414584.jpg",
    "src": "/gallery/7456399294414584.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Handwerk & Werkstattdetail #332",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-333",
    "filename": "7456399504414563.jpg",
    "src": "/gallery/7456399504414563.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Handwerk & Werkstattdetail #333",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-334",
    "filename": "7456846181036562.jpg",
    "src": "/gallery/7456846181036562.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #334",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-335",
    "filename": "7456846317703215.jpg",
    "src": "/gallery/7456846317703215.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #335",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-336",
    "filename": "7456846434369870.jpg",
    "src": "/gallery/7456846434369870.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Handwerk & Werkstattdetail #336",
    "category": "Werkstatt & Entstehung"
  },
  {
    "id": "img-337",
    "filename": "7487192491335264.jpg",
    "src": "/gallery/7487192491335264.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-338",
    "filename": "7487192614668585.jpg",
    "src": "/gallery/7487192614668585.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-339",
    "filename": "7487192961335217.jpg",
    "src": "/gallery/7487192961335217.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-340",
    "filename": "7487193874668459.jpg",
    "src": "/gallery/7487193874668459.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-341",
    "filename": "7487194011335112.jpg",
    "src": "/gallery/7487194011335112.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-342",
    "filename": "7487194144668432.jpg",
    "src": "/gallery/7487194144668432.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-343",
    "filename": "7487194324668414.jpg",
    "src": "/gallery/7487194324668414.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Geschwungene Park- & Gartenbank aus Vollholz",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-344",
    "filename": "7732201920167652.jpg",
    "src": "/gallery/7732201920167652.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-345",
    "filename": "7732202073500970.jpg",
    "src": "/gallery/7732202073500970.jpg",
    "width": 640,
    "height": 1372,
    "ratio": 0.47,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-346",
    "filename": "7732202270167617.jpg",
    "src": "/gallery/7732202270167617.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-347",
    "filename": "7732202603500917.jpg",
    "src": "/gallery/7732202603500917.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-348",
    "filename": "7732202793500898.jpg",
    "src": "/gallery/7732202793500898.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-349",
    "filename": "7732202953500882.jpg",
    "src": "/gallery/7732202953500882.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-350",
    "filename": "7732203170167527.jpg",
    "src": "/gallery/7732203170167527.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-351",
    "filename": "7732203430167501.jpg",
    "src": "/gallery/7732203430167501.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-352",
    "filename": "7732203676834143.jpg",
    "src": "/gallery/7732203676834143.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-353",
    "filename": "7732203890167455.jpg",
    "src": "/gallery/7732203890167455.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "Garten-Pergola mit Außenbeleuchtung",
    "category": "Gartenmöbel & Holzbau"
  },
  {
    "id": "img-354",
    "filename": "7770974529623724.jpg",
    "src": "/gallery/7770974529623724.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-355",
    "filename": "7770974662957044.jpg",
    "src": "/gallery/7770974662957044.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-356",
    "filename": "7770974819623695.jpg",
    "src": "/gallery/7770974819623695.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-357",
    "filename": "7770975146290329.jpg",
    "src": "/gallery/7770975146290329.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-358",
    "filename": "7770975352956975.jpg",
    "src": "/gallery/7770975352956975.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-359",
    "filename": "7770975549623622.jpg",
    "src": "/gallery/7770975549623622.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-360",
    "filename": "7770975826290261.jpg",
    "src": "/gallery/7770975826290261.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-361",
    "filename": "7770976016290242.jpg",
    "src": "/gallery/7770976016290242.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-362",
    "filename": "7770976199623557.jpg",
    "src": "/gallery/7770976199623557.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Lichtenberg-Brandmalerei (Fraktale Lichtenberg-Figuren)",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-363",
    "filename": "8038276412893533.jpg",
    "src": "/gallery/8038276412893533.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-364",
    "filename": "8038276619560179.jpg",
    "src": "/gallery/8038276619560179.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-365",
    "filename": "8038276836226824.jpg",
    "src": "/gallery/8038276836226824.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-366",
    "filename": "8038276992893475.jpg",
    "src": "/gallery/8038276992893475.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-367",
    "filename": "8038277216226786.jpg",
    "src": "/gallery/8038277216226786.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-368",
    "filename": "8038277446226763.jpg",
    "src": "/gallery/8038277446226763.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-369",
    "filename": "8038277702893404.jpg",
    "src": "/gallery/8038277702893404.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "Künstlerische Wikinger-Axt auf gebranntem Holzsockel",
    "category": "Personalisierte Unikate"
  },
  {
    "id": "img-370",
    "filename": "Designer.png",
    "src": "/gallery/Designer.png",
    "width": 1536,
    "height": 1024,
    "ratio": 1.5,
    "title": "Erzgebirgische Lichterspitze »Bergmann & Engel«",
    "category": "Lichterspitzen & Tradition"
  }
];
