// Automatisch generiert aus C:\Users\steph\Pictures\Website
// Stand: 2026-10-17T16:34:33.790Z

export interface WebsiteImage {
  id: string;
  filename: string;
  src: string;
  width: number;
  height: number;
  ratio: number;
  title: string;
  category: WebsiteCategory;
  subcategory?: string;
}

export const WEBSITE_CATEGORIES = [
  "Alle Werke",
  "Schwibbögen & Fensterbilder",
  "Epoxidharzprojekte",
  "Acrylglasbilder",
  "Schneide- & Servierbretter",
  "Outdoor",
  "Indoor",
  "Deko"
] as const;

export type WebsiteCategory = (typeof WEBSITE_CATEGORIES)[number];

export const RAW_CATEGORY_MAP: Record<string, WebsiteCategory> = {
  "Schwibbögen&Fensterbilder": "Schwibbögen & Fensterbilder",
  "Epoxidharzprojekte": "Epoxidharzprojekte",
  "Acrylglasbilder": "Acrylglasbilder",
  "Schneide- und Servierbretter": "Schneide- & Servierbretter",
  "Outdoor": "Outdoor",
  "Indoor": "Indoor",
  "Deko": "Deko"
};

export const WEBSITE_GALLERY: WebsiteImage[] = [
  {
    "id": "img-1",
    "filename": "1771530670027.png",
    "src": "/gallery/1771530670027.png",
    "width": 1024,
    "height": 1024,
    "ratio": 1,
    "title": "1771530670027",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-2",
    "filename": "1771674108188.png",
    "src": "/gallery/1771674108188.png",
    "width": 841,
    "height": 570,
    "ratio": 1.48,
    "title": "1771674108188",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-3",
    "filename": "1771674139623.png",
    "src": "/gallery/1771674139623.png",
    "width": 1160,
    "height": 704,
    "ratio": 1.65,
    "title": "1771674139623",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-4",
    "filename": "1771674267516.png",
    "src": "/gallery/1771674267516.png",
    "width": 903,
    "height": 647,
    "ratio": 1.4,
    "title": "1771674267516",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-5",
    "filename": "1771696120584.png",
    "src": "/gallery/1771696120584.png",
    "width": 1345,
    "height": 693,
    "ratio": 1.94,
    "title": "1771696120584",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-6",
    "filename": "1771696294301.png",
    "src": "/gallery/1771696294301.png",
    "width": 1366,
    "height": 704,
    "ratio": 1.94,
    "title": "1771696294301",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-7",
    "filename": "1771696314473.png",
    "src": "/gallery/1771696314473.png",
    "width": 1384,
    "height": 704,
    "ratio": 1.97,
    "title": "1771696314473",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-8",
    "filename": "1772643071657.png",
    "src": "/gallery/1772643071657.png",
    "width": 1182,
    "height": 704,
    "ratio": 1.68,
    "title": "1772643071657",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-9",
    "filename": "1773149834497.png",
    "src": "/gallery/1773149834497.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1773149834497",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-10",
    "filename": "1773480806639.png",
    "src": "/gallery/1773480806639.png",
    "width": 1452,
    "height": 641,
    "ratio": 2.27,
    "title": "1773480806639",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-11",
    "filename": "1773487261644.png",
    "src": "/gallery/1773487261644.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1773487261644",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-12",
    "filename": "1773492692549.png",
    "src": "/gallery/1773492692549.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1773492692549",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-13",
    "filename": "1773692187652.png",
    "src": "/gallery/1773692187652.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1773692187652",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-14",
    "filename": "1773692356377.png",
    "src": "/gallery/1773692356377.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1773692356377",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-15",
    "filename": "1774462524902.png",
    "src": "/gallery/1774462524902.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1774462524902",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-16",
    "filename": "1774462536815.png",
    "src": "/gallery/1774462536815.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1774462536815",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-17",
    "filename": "1774554770699.png",
    "src": "/gallery/1774554770699.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1774554770699",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-18",
    "filename": "1774804108280.png",
    "src": "/gallery/1774804108280.png",
    "width": 1508,
    "height": 704,
    "ratio": 2.14,
    "title": "1774804108280",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-19",
    "filename": "1774809490869.png",
    "src": "/gallery/1774809490869.png",
    "width": 704,
    "height": 898,
    "ratio": 0.78,
    "title": "1774809490869",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-20",
    "filename": "1775062660694.png",
    "src": "/gallery/1775062660694.png",
    "width": 1024,
    "height": 1024,
    "ratio": 1,
    "title": "1775062660694",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-21",
    "filename": "20260221_184105.jpg",
    "src": "/gallery/20260221_184105.jpg",
    "width": 3584,
    "height": 1868,
    "ratio": 1.92,
    "title": "20260221 184105",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-22",
    "filename": "20260221_184335.jpg",
    "src": "/gallery/20260221_184335.jpg",
    "width": 3741,
    "height": 1868,
    "ratio": 2,
    "title": "20260221 184335",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-23",
    "filename": "20260221_184628.jpg",
    "src": "/gallery/20260221_184628.jpg",
    "width": 3738,
    "height": 1868,
    "ratio": 2,
    "title": "20260221 184628",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-24",
    "filename": "20260304_174438.jpg",
    "src": "/gallery/20260304_174438.jpg",
    "width": 7612,
    "height": 16320,
    "ratio": 0.47,
    "title": "20260304 174438",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-25",
    "filename": "20260312_174419.jpg",
    "src": "/gallery/20260312_174419.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174419",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-26",
    "filename": "20260312_174610.jpg",
    "src": "/gallery/20260312_174610.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174610",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-27",
    "filename": "20260312_174612.jpg",
    "src": "/gallery/20260312_174612.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174612",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-28",
    "filename": "20260312_174941.jpg",
    "src": "/gallery/20260312_174941.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174941",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-29",
    "filename": "20260312_174947.jpg",
    "src": "/gallery/20260312_174947.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174947",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-30",
    "filename": "20260312_174959.jpg",
    "src": "/gallery/20260312_174959.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 174959",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-31",
    "filename": "20260312_175007.jpg",
    "src": "/gallery/20260312_175007.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260312 175007",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-32",
    "filename": "20260313_174822.jpg",
    "src": "/gallery/20260313_174822.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260313 174822",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-33",
    "filename": "20260314_102147.jpg",
    "src": "/gallery/20260314_102147.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260314 102147",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-34",
    "filename": "20260314_102149.jpg",
    "src": "/gallery/20260314_102149.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260314 102149",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-35",
    "filename": "20260314_102154.jpg",
    "src": "/gallery/20260314_102154.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260314 102154",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-36",
    "filename": "20260316_205552.jpg",
    "src": "/gallery/20260316_205552.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260316 205552",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-37",
    "filename": "20260316_205602.jpg",
    "src": "/gallery/20260316_205602.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260316 205602",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-38",
    "filename": "20260325_190808.jpg",
    "src": "/gallery/20260325_190808.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260325 190808",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-39",
    "filename": "20260325_190810.jpg",
    "src": "/gallery/20260325_190810.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260325 190810",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-40",
    "filename": "20260325_190853.jpg",
    "src": "/gallery/20260325_190853.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260325 190853",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-41",
    "filename": "20260326_204511.jpg",
    "src": "/gallery/20260326_204511.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260326 204511",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-42",
    "filename": "20260326_204613.jpg",
    "src": "/gallery/20260326_204613.jpg",
    "width": 16254,
    "height": 7611,
    "ratio": 2.14,
    "title": "20260326 204613",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-43",
    "filename": "20260329_185749.jpg",
    "src": "/gallery/20260329_185749.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260329 185749",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-44",
    "filename": "20260329_185751.jpg",
    "src": "/gallery/20260329_185751.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260329 185751",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-45",
    "filename": "20260329_203000.jpg",
    "src": "/gallery/20260329_203000.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260329 203000",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-46",
    "filename": "20260329_203004.jpg",
    "src": "/gallery/20260329_203004.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260329 203004",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-47",
    "filename": "20260330_171501.jpg",
    "src": "/gallery/20260330_171501.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260330 171501",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-48",
    "filename": "20260330_171541.jpg",
    "src": "/gallery/20260330_171541.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260330 171541",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-49",
    "filename": "20260331_191602.jpg",
    "src": "/gallery/20260331_191602.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260331 191602",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-50",
    "filename": "20260505_201742.jpg",
    "src": "/gallery/20260505_201742.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260505 201742",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-51",
    "filename": "20260506_154924.jpg",
    "src": "/gallery/20260506_154924.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260506 154924",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-52",
    "filename": "20260506_163549.jpg",
    "src": "/gallery/20260506_163549.jpg",
    "width": 1868,
    "height": 3648,
    "ratio": 0.51,
    "title": "20260506 163549",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-53",
    "filename": "20260511_195403.jpg",
    "src": "/gallery/20260511_195403.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260511 195403",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-54",
    "filename": "20260511_195408.jpg",
    "src": "/gallery/20260511_195408.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260511 195408",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-55",
    "filename": "20260511_195920.jpg",
    "src": "/gallery/20260511_195920.jpg",
    "width": 1844,
    "height": 3432,
    "ratio": 0.54,
    "title": "20260511 195920",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-56",
    "filename": "20260516_085749.jpg",
    "src": "/gallery/20260516_085749.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260516 085749",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-57",
    "filename": "20260521_164621.jpg",
    "src": "/gallery/20260521_164621.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260521 164621",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-58",
    "filename": "20260525_160853.jpg",
    "src": "/gallery/20260525_160853.jpg",
    "width": 3350,
    "height": 1868,
    "ratio": 1.79,
    "title": "20260525 160853",
    "category": "Acrylglasbilder"
  },
  {
    "id": "img-59",
    "filename": "1777914642254.png",
    "src": "/gallery/1777914642254.png",
    "width": 1511,
    "height": 704,
    "ratio": 2.15,
    "title": "1777914642254",
    "category": "Deko"
  },
  {
    "id": "img-60",
    "filename": "1779909798009.png",
    "src": "/gallery/1779909798009.png",
    "width": 1376,
    "height": 768,
    "ratio": 1.79,
    "title": "1779909798009",
    "category": "Deko"
  },
  {
    "id": "img-61",
    "filename": "20260504_190422.jpg",
    "src": "/gallery/20260504_190422.jpg",
    "width": 10871,
    "height": 7612,
    "ratio": 1.43,
    "title": "20260504 190422",
    "category": "Deko"
  },
  {
    "id": "img-62",
    "filename": "20260504_190426.jpg",
    "src": "/gallery/20260504_190426.jpg",
    "width": 8752,
    "height": 7612,
    "ratio": 1.15,
    "title": "20260504 190426",
    "category": "Deko"
  },
  {
    "id": "img-63",
    "filename": "20260504_190436.jpg",
    "src": "/gallery/20260504_190436.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260504 190436",
    "category": "Deko"
  },
  {
    "id": "img-64",
    "filename": "20260504_190450.jpg",
    "src": "/gallery/20260504_190450.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260504 190450",
    "category": "Deko"
  },
  {
    "id": "img-65",
    "filename": "20260504_190508.jpg",
    "src": "/gallery/20260504_190508.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260504 190508",
    "category": "Deko"
  },
  {
    "id": "img-66",
    "filename": "20260527_203403.jpg",
    "src": "/gallery/20260527_203403.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203403",
    "category": "Deko"
  },
  {
    "id": "img-67",
    "filename": "20260527_203408.jpg",
    "src": "/gallery/20260527_203408.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203408",
    "category": "Deko"
  },
  {
    "id": "img-68",
    "filename": "20260527_203412.jpg",
    "src": "/gallery/20260527_203412.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203412",
    "category": "Deko"
  },
  {
    "id": "img-69",
    "filename": "20260527_203419.jpg",
    "src": "/gallery/20260527_203419.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203419",
    "category": "Deko"
  },
  {
    "id": "img-70",
    "filename": "20260527_203424.jpg",
    "src": "/gallery/20260527_203424.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203424",
    "category": "Deko"
  },
  {
    "id": "img-71",
    "filename": "20260527_203432.jpg",
    "src": "/gallery/20260527_203432.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260527 203432",
    "category": "Deko"
  },
  {
    "id": "img-72",
    "filename": "20260611_181815.jpg",
    "src": "/gallery/20260611_181815.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260611 181815",
    "category": "Deko"
  },
  {
    "id": "img-73",
    "filename": "20260611_181824.jpg",
    "src": "/gallery/20260611_181824.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260611 181824",
    "category": "Deko"
  },
  {
    "id": "img-74",
    "filename": "20260611_181826.jpg",
    "src": "/gallery/20260611_181826.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260611 181826",
    "category": "Deko"
  },
  {
    "id": "img-75",
    "filename": "8038276412893533.jpg",
    "src": "/gallery/8038276412893533.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "8038276412893533",
    "category": "Deko"
  },
  {
    "id": "img-76",
    "filename": "8038276619560179.jpg",
    "src": "/gallery/8038276619560179.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "8038276619560179",
    "category": "Deko"
  },
  {
    "id": "img-77",
    "filename": "8038276836226824.jpg",
    "src": "/gallery/8038276836226824.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "8038276836226824",
    "category": "Deko"
  },
  {
    "id": "img-78",
    "filename": "8038276992893475.jpg",
    "src": "/gallery/8038276992893475.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "8038276992893475",
    "category": "Deko"
  },
  {
    "id": "img-79",
    "filename": "8038277216226786.jpg",
    "src": "/gallery/8038277216226786.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "8038277216226786",
    "category": "Deko"
  },
  {
    "id": "img-80",
    "filename": "8038277446226763.jpg",
    "src": "/gallery/8038277446226763.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "8038277446226763",
    "category": "Deko"
  },
  {
    "id": "img-81",
    "filename": "8038277702893404.jpg",
    "src": "/gallery/8038277702893404.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "8038277702893404",
    "category": "Deko"
  },
  {
    "id": "img-82",
    "filename": "6528717790516077.jpg",
    "src": "/gallery/6528717790516077.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528717790516077",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-83",
    "filename": "6528721020515754.jpg",
    "src": "/gallery/6528721020515754.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528721020515754",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-84",
    "filename": "6528721110515745.jpg",
    "src": "/gallery/6528721110515745.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721110515745",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-85",
    "filename": "6528721207182402.jpg",
    "src": "/gallery/6528721207182402.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721207182402",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-86",
    "filename": "6528721307182392.jpg",
    "src": "/gallery/6528721307182392.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721307182392",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-87",
    "filename": "6528721387182384.jpg",
    "src": "/gallery/6528721387182384.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721387182384",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-88",
    "filename": "6528721480515708.jpg",
    "src": "/gallery/6528721480515708.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721480515708",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-89",
    "filename": "6528721593849030.jpg",
    "src": "/gallery/6528721593849030.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721593849030",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-90",
    "filename": "6528721710515685.jpg",
    "src": "/gallery/6528721710515685.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721710515685",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-91",
    "filename": "6528721807182342.jpg",
    "src": "/gallery/6528721807182342.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528721807182342",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-92",
    "filename": "6528721950515661.jpg",
    "src": "/gallery/6528721950515661.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528721950515661",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-93",
    "filename": "6528722180515638.jpg",
    "src": "/gallery/6528722180515638.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528722180515638",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-94",
    "filename": "6528722283848961.jpg",
    "src": "/gallery/6528722283848961.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528722283848961",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-95",
    "filename": "6528722400515616.jpg",
    "src": "/gallery/6528722400515616.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528722400515616",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-96",
    "filename": "6528722503848939.jpg",
    "src": "/gallery/6528722503848939.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528722503848939",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-97",
    "filename": "6528722557182267.jpg",
    "src": "/gallery/6528722557182267.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528722557182267",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-98",
    "filename": "6528722653848924.jpg",
    "src": "/gallery/6528722653848924.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528722653848924",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-99",
    "filename": "6528722797182243.jpg",
    "src": "/gallery/6528722797182243.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528722797182243",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-100",
    "filename": "6528723060515550.jpg",
    "src": "/gallery/6528723060515550.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528723060515550",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-101",
    "filename": "6528723193848870.jpg",
    "src": "/gallery/6528723193848870.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528723193848870",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-102",
    "filename": "6528723920515464.jpg",
    "src": "/gallery/6528723920515464.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528723920515464",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-103",
    "filename": "6528724123848777.jpg",
    "src": "/gallery/6528724123848777.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528724123848777",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-104",
    "filename": "6528724260515430.jpg",
    "src": "/gallery/6528724260515430.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528724260515430",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-105",
    "filename": "6528724350515421.jpg",
    "src": "/gallery/6528724350515421.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528724350515421",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-106",
    "filename": "6528724490515407.jpg",
    "src": "/gallery/6528724490515407.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528724490515407",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-107",
    "filename": "6528724623848727.jpg",
    "src": "/gallery/6528724623848727.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528724623848727",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-108",
    "filename": "6528724730515383.jpg",
    "src": "/gallery/6528724730515383.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528724730515383",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-109",
    "filename": "6529633610424495.jpg",
    "src": "/gallery/6529633610424495.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529633610424495",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-110",
    "filename": "6529633697091153.jpg",
    "src": "/gallery/6529633697091153.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529633697091153",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-111",
    "filename": "6529633810424475.jpg",
    "src": "/gallery/6529633810424475.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529633810424475",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-112",
    "filename": "6529633967091126.jpg",
    "src": "/gallery/6529633967091126.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529633967091126",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-113",
    "filename": "6529634093757780.jpg",
    "src": "/gallery/6529634093757780.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529634093757780",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-114",
    "filename": "6529634233757766.jpg",
    "src": "/gallery/6529634233757766.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529634233757766",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-115",
    "filename": "6529634360424420.jpg",
    "src": "/gallery/6529634360424420.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529634360424420",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-116",
    "filename": "6529634840424372.jpg",
    "src": "/gallery/6529634840424372.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529634840424372",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-117",
    "filename": "6529634947091028.jpg",
    "src": "/gallery/6529634947091028.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529634947091028",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-118",
    "filename": "6529635073757682.jpg",
    "src": "/gallery/6529635073757682.jpg",
    "width": 1352,
    "height": 640,
    "ratio": 2.11,
    "title": "6529635073757682",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-119",
    "filename": "6529637347090788.jpg",
    "src": "/gallery/6529637347090788.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "6529637347090788",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-120",
    "filename": "6529637530424103.jpg",
    "src": "/gallery/6529637530424103.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "6529637530424103",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-121",
    "filename": "6529637687090754.jpg",
    "src": "/gallery/6529637687090754.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529637687090754",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-122",
    "filename": "6529637827090740.jpg",
    "src": "/gallery/6529637827090740.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "6529637827090740",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-123",
    "filename": "6529637933757396.jpg",
    "src": "/gallery/6529637933757396.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "6529637933757396",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-124",
    "filename": "6529638110424045.jpg",
    "src": "/gallery/6529638110424045.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638110424045",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-125",
    "filename": "6529638257090697.jpg",
    "src": "/gallery/6529638257090697.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638257090697",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-126",
    "filename": "6529638403757349.jpg",
    "src": "/gallery/6529638403757349.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638403757349",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-127",
    "filename": "6529638630423993.jpg",
    "src": "/gallery/6529638630423993.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638630423993",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-128",
    "filename": "6529638787090644.jpg",
    "src": "/gallery/6529638787090644.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638787090644",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-129",
    "filename": "6529638907090632.jpg",
    "src": "/gallery/6529638907090632.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529638907090632",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-130",
    "filename": "6529639030423953.jpg",
    "src": "/gallery/6529639030423953.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529639030423953",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-131",
    "filename": "6529639123757277.jpg",
    "src": "/gallery/6529639123757277.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "6529639123757277",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-132",
    "filename": "6529639267090596.jpg",
    "src": "/gallery/6529639267090596.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529639267090596",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-133",
    "filename": "6529639400423916.jpg",
    "src": "/gallery/6529639400423916.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "6529639400423916",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-134",
    "filename": "6529639537090569.jpg",
    "src": "/gallery/6529639537090569.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529639537090569",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-135",
    "filename": "6529639703757219.jpg",
    "src": "/gallery/6529639703757219.jpg",
    "width": 2048,
    "height": 971,
    "ratio": 2.11,
    "title": "6529639703757219",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-136",
    "filename": "6529640000423856.jpg",
    "src": "/gallery/6529640000423856.jpg",
    "width": 2048,
    "height": 970,
    "ratio": 2.11,
    "title": "6529640000423856",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-137",
    "filename": "7186663434721506.jpg",
    "src": "/gallery/7186663434721506.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186663434721506",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-138",
    "filename": "7186663561388160.jpg",
    "src": "/gallery/7186663561388160.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186663561388160",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-139",
    "filename": "7186663661388150.jpg",
    "src": "/gallery/7186663661388150.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186663661388150",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-140",
    "filename": "7186663761388140.jpg",
    "src": "/gallery/7186663761388140.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186663761388140",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-141",
    "filename": "7186663914721458.jpg",
    "src": "/gallery/7186663914721458.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7186663914721458",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-142",
    "filename": "7186663984721451.jpg",
    "src": "/gallery/7186663984721451.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186663984721451",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-143",
    "filename": "7186664064721443.jpg",
    "src": "/gallery/7186664064721443.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186664064721443",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-144",
    "filename": "7186664174721432.jpg",
    "src": "/gallery/7186664174721432.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186664174721432",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-145",
    "filename": "7186664268054756.jpg",
    "src": "/gallery/7186664268054756.jpg",
    "width": 1440,
    "height": 754,
    "ratio": 1.91,
    "title": "7186664268054756",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-146",
    "filename": "7405083069546207.jpg",
    "src": "/gallery/7405083069546207.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083069546207",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-147",
    "filename": "7405083169546197.jpg",
    "src": "/gallery/7405083169546197.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083169546197",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-148",
    "filename": "7405083246212856.jpg",
    "src": "/gallery/7405083246212856.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7405083246212856",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-149",
    "filename": "7405083359546178.jpg",
    "src": "/gallery/7405083359546178.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7405083359546178",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-150",
    "filename": "7405083442879503.jpg",
    "src": "/gallery/7405083442879503.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083442879503",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-151",
    "filename": "7405083532879494.jpg",
    "src": "/gallery/7405083532879494.jpg",
    "width": 640,
    "height": 1370,
    "ratio": 0.47,
    "title": "7405083532879494",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-152",
    "filename": "7405083652879482.jpg",
    "src": "/gallery/7405083652879482.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7405083652879482",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-153",
    "filename": "7405083756212805.jpg",
    "src": "/gallery/7405083756212805.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083756212805",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-154",
    "filename": "7405083869546127.jpg",
    "src": "/gallery/7405083869546127.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083869546127",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-155",
    "filename": "7405083999546114.jpg",
    "src": "/gallery/7405083999546114.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405083999546114",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-156",
    "filename": "7405084069546107.jpg",
    "src": "/gallery/7405084069546107.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405084069546107",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-157",
    "filename": "7405084212879426.jpg",
    "src": "/gallery/7405084212879426.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7405084212879426",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-158",
    "filename": "7405084352879412.jpg",
    "src": "/gallery/7405084352879412.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7405084352879412",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-159",
    "filename": "7405084496212731.jpg",
    "src": "/gallery/7405084496212731.jpg",
    "width": 640,
    "height": 1372,
    "ratio": 0.47,
    "title": "7405084496212731",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-160",
    "filename": "7405084602879387.jpg",
    "src": "/gallery/7405084602879387.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7405084602879387",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-161",
    "filename": "7405084912879356.jpg",
    "src": "/gallery/7405084912879356.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7405084912879356",
    "category": "Epoxidharzprojekte"
  },
  {
    "id": "img-162",
    "filename": "20251230_171039 - Kopie.jpg",
    "src": "/gallery/20251230_171039%20-%20Kopie.jpg",
    "width": 1635,
    "height": 2754,
    "ratio": 0.59,
    "title": "20251230 171039   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-163",
    "filename": "20251230_171045 - Kopie.jpg",
    "src": "/gallery/20251230_171045%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2973,
    "ratio": 0.63,
    "title": "20251230 171045   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-164",
    "filename": "20251230_171106 - Kopie.jpg",
    "src": "/gallery/20251230_171106%20-%20Kopie.jpg",
    "width": 1835,
    "height": 2889,
    "ratio": 0.64,
    "title": "20251230 171106   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-165",
    "filename": "20251230_171109 - Kopie.jpg",
    "src": "/gallery/20251230_171109%20-%20Kopie.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20251230 171109   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-166",
    "filename": "20251230_171341 - Kopie.jpg",
    "src": "/gallery/20251230_171341%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2410,
    "ratio": 0.78,
    "title": "20251230 171341   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-167",
    "filename": "20251230_171354.jpg",
    "src": "/gallery/20251230_171354.jpg",
    "width": 1868,
    "height": 2759,
    "ratio": 0.68,
    "title": "20251230 171354",
    "category": "Indoor"
  },
  {
    "id": "img-168",
    "filename": "20251230_171412.jpg",
    "src": "/gallery/20251230_171412.jpg",
    "width": 1868,
    "height": 3036,
    "ratio": 0.62,
    "title": "20251230 171412",
    "category": "Indoor"
  },
  {
    "id": "img-169",
    "filename": "20251230_171415 - Kopie.jpg",
    "src": "/gallery/20251230_171415%20-%20Kopie.jpg",
    "width": 1639,
    "height": 2882,
    "ratio": 0.57,
    "title": "20251230 171415   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-170",
    "filename": "20251230_171444 - Kopie.jpg",
    "src": "/gallery/20251230_171444%20-%20Kopie.jpg",
    "width": 1868,
    "height": 2833,
    "ratio": 0.66,
    "title": "20251230 171444   Kopie",
    "category": "Indoor"
  },
  {
    "id": "img-171",
    "filename": "20251230_171447.jpg",
    "src": "/gallery/20251230_171447.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20251230 171447",
    "category": "Indoor"
  },
  {
    "id": "img-172",
    "filename": "6528726000515256.jpg",
    "src": "/gallery/6528726000515256.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528726000515256",
    "category": "Indoor"
  },
  {
    "id": "img-173",
    "filename": "6528726117181911.jpg",
    "src": "/gallery/6528726117181911.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528726117181911",
    "category": "Indoor"
  },
  {
    "id": "img-174",
    "filename": "6528726207181902.jpg",
    "src": "/gallery/6528726207181902.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528726207181902",
    "category": "Indoor"
  },
  {
    "id": "img-175",
    "filename": "6528726310515225.jpg",
    "src": "/gallery/6528726310515225.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528726310515225",
    "category": "Indoor"
  },
  {
    "id": "img-176",
    "filename": "6528726407181882.jpg",
    "src": "/gallery/6528726407181882.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528726407181882",
    "category": "Indoor"
  },
  {
    "id": "img-177",
    "filename": "6528726513848538.jpg",
    "src": "/gallery/6528726513848538.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528726513848538",
    "category": "Indoor"
  },
  {
    "id": "img-178",
    "filename": "6529602813760908.jpg",
    "src": "/gallery/6529602813760908.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6529602813760908",
    "category": "Indoor"
  },
  {
    "id": "img-179",
    "filename": "6529602953760894.jpg",
    "src": "/gallery/6529602953760894.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6529602953760894",
    "category": "Indoor"
  },
  {
    "id": "img-180",
    "filename": "6529603063760883.jpg",
    "src": "/gallery/6529603063760883.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6529603063760883",
    "category": "Indoor"
  },
  {
    "id": "img-181",
    "filename": "6529634480424408.jpg",
    "src": "/gallery/6529634480424408.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529634480424408",
    "category": "Indoor"
  },
  {
    "id": "img-182",
    "filename": "6529634683757721.jpg",
    "src": "/gallery/6529634683757721.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529634683757721",
    "category": "Indoor"
  },
  {
    "id": "img-183",
    "filename": "6529635223757667.jpg",
    "src": "/gallery/6529635223757667.jpg",
    "width": 640,
    "height": 1352,
    "ratio": 0.47,
    "title": "6529635223757667",
    "category": "Indoor"
  },
  {
    "id": "img-184",
    "filename": "6529639843757205.jpg",
    "src": "/gallery/6529639843757205.jpg",
    "width": 970,
    "height": 2048,
    "ratio": 0.47,
    "title": "6529639843757205",
    "category": "Indoor"
  },
  {
    "id": "img-185",
    "filename": "6569889936398862.jpg",
    "src": "/gallery/6569889936398862.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569889936398862",
    "category": "Indoor"
  },
  {
    "id": "img-186",
    "filename": "6569890026398853.jpg",
    "src": "/gallery/6569890026398853.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890026398853",
    "category": "Indoor"
  },
  {
    "id": "img-187",
    "filename": "6569890153065507.jpg",
    "src": "/gallery/6569890153065507.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890153065507",
    "category": "Indoor"
  },
  {
    "id": "img-188",
    "filename": "6569890249732164.jpg",
    "src": "/gallery/6569890249732164.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890249732164",
    "category": "Indoor"
  },
  {
    "id": "img-189",
    "filename": "6569890319732157.jpg",
    "src": "/gallery/6569890319732157.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890319732157",
    "category": "Indoor"
  },
  {
    "id": "img-190",
    "filename": "6569890399732149.jpg",
    "src": "/gallery/6569890399732149.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890399732149",
    "category": "Indoor"
  },
  {
    "id": "img-191",
    "filename": "6569890573065465.jpg",
    "src": "/gallery/6569890573065465.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890573065465",
    "category": "Indoor"
  },
  {
    "id": "img-192",
    "filename": "6569890676398788.jpg",
    "src": "/gallery/6569890676398788.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890676398788",
    "category": "Indoor"
  },
  {
    "id": "img-193",
    "filename": "6569890803065442.jpg",
    "src": "/gallery/6569890803065442.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890803065442",
    "category": "Indoor"
  },
  {
    "id": "img-194",
    "filename": "6569890986398757.jpg",
    "src": "/gallery/6569890986398757.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6569890986398757",
    "category": "Indoor"
  },
  {
    "id": "img-195",
    "filename": "6572274559493733.jpg",
    "src": "/gallery/6572274559493733.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6572274559493733",
    "category": "Indoor"
  },
  {
    "id": "img-196",
    "filename": "6572274652827057.jpg",
    "src": "/gallery/6572274652827057.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6572274652827057",
    "category": "Indoor"
  },
  {
    "id": "img-197",
    "filename": "20250801_175421.jpg",
    "src": "/gallery/20250801_175421.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250801 175421",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-198",
    "filename": "20250804_174556.jpg",
    "src": "/gallery/20250804_174556.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250804 174556",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-199",
    "filename": "20250804_190134.jpg",
    "src": "/gallery/20250804_190134.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250804 190134",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-200",
    "filename": "20250804_190227.jpg",
    "src": "/gallery/20250804_190227.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250804 190227",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-201",
    "filename": "20250809_113411.jpg",
    "src": "/gallery/20250809_113411.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250809 113411",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-202",
    "filename": "20250809_113417.jpg",
    "src": "/gallery/20250809_113417.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250809 113417",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-203",
    "filename": "20250809_113636.jpg",
    "src": "/gallery/20250809_113636.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250809 113636",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-204",
    "filename": "20250825_150153.jpg",
    "src": "/gallery/20250825_150153.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250825 150153",
    "category": "Indoor",
    "subcategory": "Werbeschild"
  },
  {
    "id": "img-205",
    "filename": "20250320_202851.jpg",
    "src": "/gallery/20250320_202851.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250320 202851",
    "category": "Outdoor"
  },
  {
    "id": "img-206",
    "filename": "20250320_202854.jpg",
    "src": "/gallery/20250320_202854.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250320 202854",
    "category": "Outdoor"
  },
  {
    "id": "img-207",
    "filename": "20250320_202900.jpg",
    "src": "/gallery/20250320_202900.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250320 202900",
    "category": "Outdoor"
  },
  {
    "id": "img-208",
    "filename": "20250320_202903.jpg",
    "src": "/gallery/20250320_202903.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250320 202903",
    "category": "Outdoor"
  },
  {
    "id": "img-209",
    "filename": "20250320_202909.jpg",
    "src": "/gallery/20250320_202909.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250320 202909",
    "category": "Outdoor"
  },
  {
    "id": "img-210",
    "filename": "20250320_202914.jpg",
    "src": "/gallery/20250320_202914.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250320 202914",
    "category": "Outdoor"
  },
  {
    "id": "img-211",
    "filename": "20250320_203023.jpg",
    "src": "/gallery/20250320_203023.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250320 203023",
    "category": "Outdoor"
  },
  {
    "id": "img-212",
    "filename": "20250320_203044.jpg",
    "src": "/gallery/20250320_203044.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250320 203044",
    "category": "Outdoor"
  },
  {
    "id": "img-213",
    "filename": "20250320_203049.jpg",
    "src": "/gallery/20250320_203049.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250320 203049",
    "category": "Outdoor"
  },
  {
    "id": "img-214",
    "filename": "20250320_203324.jpg",
    "src": "/gallery/20250320_203324.jpg",
    "width": 7612,
    "height": 16320,
    "ratio": 0.47,
    "title": "20250320 203324",
    "category": "Outdoor"
  },
  {
    "id": "img-215",
    "filename": "20250320_203328.jpg",
    "src": "/gallery/20250320_203328.jpg",
    "width": 7612,
    "height": 16320,
    "ratio": 0.47,
    "title": "20250320 203328",
    "category": "Outdoor"
  },
  {
    "id": "img-216",
    "filename": "20250320_203338.jpg",
    "src": "/gallery/20250320_203338.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250320 203338",
    "category": "Outdoor"
  },
  {
    "id": "img-217",
    "filename": "20260718_203953.jpg",
    "src": "/gallery/20260718_203953.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260718 203953",
    "category": "Outdoor"
  },
  {
    "id": "img-218",
    "filename": "20260722_084657.jpg",
    "src": "/gallery/20260722_084657.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084657",
    "category": "Outdoor"
  },
  {
    "id": "img-219",
    "filename": "20260722_084659.jpg",
    "src": "/gallery/20260722_084659.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084659",
    "category": "Outdoor"
  },
  {
    "id": "img-220",
    "filename": "20260722_084701.jpg",
    "src": "/gallery/20260722_084701.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084701",
    "category": "Outdoor"
  },
  {
    "id": "img-221",
    "filename": "20260722_084703.jpg",
    "src": "/gallery/20260722_084703.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084703",
    "category": "Outdoor"
  },
  {
    "id": "img-222",
    "filename": "20260722_084705.jpg",
    "src": "/gallery/20260722_084705.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084705",
    "category": "Outdoor"
  },
  {
    "id": "img-223",
    "filename": "20260722_084712.jpg",
    "src": "/gallery/20260722_084712.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084712",
    "category": "Outdoor"
  },
  {
    "id": "img-224",
    "filename": "20260722_084714.jpg",
    "src": "/gallery/20260722_084714.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084714",
    "category": "Outdoor"
  },
  {
    "id": "img-225",
    "filename": "20260722_084716.jpg",
    "src": "/gallery/20260722_084716.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084716",
    "category": "Outdoor"
  },
  {
    "id": "img-226",
    "filename": "20260722_084718.jpg",
    "src": "/gallery/20260722_084718.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 084718",
    "category": "Outdoor"
  },
  {
    "id": "img-227",
    "filename": "20260722_165818.jpg",
    "src": "/gallery/20260722_165818.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260722 165818",
    "category": "Outdoor"
  },
  {
    "id": "img-228",
    "filename": "20260722_165826.jpg",
    "src": "/gallery/20260722_165826.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260722 165826",
    "category": "Outdoor"
  },
  {
    "id": "img-229",
    "filename": "20260722_165832.jpg",
    "src": "/gallery/20260722_165832.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 165832",
    "category": "Outdoor"
  },
  {
    "id": "img-230",
    "filename": "20260722_165835.jpg",
    "src": "/gallery/20260722_165835.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260722 165835",
    "category": "Outdoor"
  },
  {
    "id": "img-231",
    "filename": "6528717873849402.jpg",
    "src": "/gallery/6528717873849402.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528717873849402",
    "category": "Outdoor"
  },
  {
    "id": "img-232",
    "filename": "6528717977182725.jpg",
    "src": "/gallery/6528717977182725.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528717977182725",
    "category": "Outdoor"
  },
  {
    "id": "img-233",
    "filename": "6528718053849384.jpg",
    "src": "/gallery/6528718053849384.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718053849384",
    "category": "Outdoor"
  },
  {
    "id": "img-234",
    "filename": "6528718117182711.jpg",
    "src": "/gallery/6528718117182711.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718117182711",
    "category": "Outdoor"
  },
  {
    "id": "img-235",
    "filename": "6528718230516033.jpg",
    "src": "/gallery/6528718230516033.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718230516033",
    "category": "Outdoor"
  },
  {
    "id": "img-236",
    "filename": "6528718317182691.jpg",
    "src": "/gallery/6528718317182691.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718317182691",
    "category": "Outdoor"
  },
  {
    "id": "img-237",
    "filename": "6528718390516017.jpg",
    "src": "/gallery/6528718390516017.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718390516017",
    "category": "Outdoor"
  },
  {
    "id": "img-238",
    "filename": "6528718487182674.jpg",
    "src": "/gallery/6528718487182674.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718487182674",
    "category": "Outdoor"
  },
  {
    "id": "img-239",
    "filename": "6528718563849333.jpg",
    "src": "/gallery/6528718563849333.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718563849333",
    "category": "Outdoor"
  },
  {
    "id": "img-240",
    "filename": "6528718653849324.jpg",
    "src": "/gallery/6528718653849324.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718653849324",
    "category": "Outdoor"
  },
  {
    "id": "img-241",
    "filename": "6528718747182648.jpg",
    "src": "/gallery/6528718747182648.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718747182648",
    "category": "Outdoor"
  },
  {
    "id": "img-242",
    "filename": "6528718803849309.jpg",
    "src": "/gallery/6528718803849309.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528718803849309",
    "category": "Outdoor"
  },
  {
    "id": "img-243",
    "filename": "6528718877182635.jpg",
    "src": "/gallery/6528718877182635.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718877182635",
    "category": "Outdoor"
  },
  {
    "id": "img-244",
    "filename": "6528718977182625.jpg",
    "src": "/gallery/6528718977182625.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528718977182625",
    "category": "Outdoor"
  },
  {
    "id": "img-245",
    "filename": "6528719070515949.jpg",
    "src": "/gallery/6528719070515949.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719070515949",
    "category": "Outdoor"
  },
  {
    "id": "img-246",
    "filename": "6528719163849273.jpg",
    "src": "/gallery/6528719163849273.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719163849273",
    "category": "Outdoor"
  },
  {
    "id": "img-247",
    "filename": "6528719230515933.jpg",
    "src": "/gallery/6528719230515933.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719230515933",
    "category": "Outdoor"
  },
  {
    "id": "img-248",
    "filename": "6528719323849257.jpg",
    "src": "/gallery/6528719323849257.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719323849257",
    "category": "Outdoor"
  },
  {
    "id": "img-249",
    "filename": "6528719433849246.jpg",
    "src": "/gallery/6528719433849246.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719433849246",
    "category": "Outdoor"
  },
  {
    "id": "img-250",
    "filename": "6528719517182571.jpg",
    "src": "/gallery/6528719517182571.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719517182571",
    "category": "Outdoor"
  },
  {
    "id": "img-251",
    "filename": "6528719647182558.jpg",
    "src": "/gallery/6528719647182558.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719647182558",
    "category": "Outdoor"
  },
  {
    "id": "img-252",
    "filename": "6528719703849219.jpg",
    "src": "/gallery/6528719703849219.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719703849219",
    "category": "Outdoor"
  },
  {
    "id": "img-253",
    "filename": "6528719803849209.jpg",
    "src": "/gallery/6528719803849209.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719803849209",
    "category": "Outdoor"
  },
  {
    "id": "img-254",
    "filename": "6528719863849203.jpg",
    "src": "/gallery/6528719863849203.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528719863849203",
    "category": "Outdoor"
  },
  {
    "id": "img-255",
    "filename": "6528719980515858.jpg",
    "src": "/gallery/6528719980515858.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528719980515858",
    "category": "Outdoor"
  },
  {
    "id": "img-256",
    "filename": "6528720120515844.jpg",
    "src": "/gallery/6528720120515844.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720120515844",
    "category": "Outdoor"
  },
  {
    "id": "img-257",
    "filename": "6528720247182498.jpg",
    "src": "/gallery/6528720247182498.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720247182498",
    "category": "Outdoor"
  },
  {
    "id": "img-258",
    "filename": "6528720400515816.jpg",
    "src": "/gallery/6528720400515816.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720400515816",
    "category": "Outdoor"
  },
  {
    "id": "img-259",
    "filename": "6528720497182473.jpg",
    "src": "/gallery/6528720497182473.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720497182473",
    "category": "Outdoor"
  },
  {
    "id": "img-260",
    "filename": "6528720663849123.jpg",
    "src": "/gallery/6528720663849123.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720663849123",
    "category": "Outdoor"
  },
  {
    "id": "img-261",
    "filename": "6528720797182443.jpg",
    "src": "/gallery/6528720797182443.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720797182443",
    "category": "Outdoor"
  },
  {
    "id": "img-262",
    "filename": "6528720927182430.jpg",
    "src": "/gallery/6528720927182430.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528720927182430",
    "category": "Outdoor"
  },
  {
    "id": "img-263",
    "filename": "6528724833848706.jpg",
    "src": "/gallery/6528724833848706.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528724833848706",
    "category": "Outdoor"
  },
  {
    "id": "img-264",
    "filename": "6528724967182026.jpg",
    "src": "/gallery/6528724967182026.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528724967182026",
    "category": "Outdoor"
  },
  {
    "id": "img-265",
    "filename": "6528725070515349.jpg",
    "src": "/gallery/6528725070515349.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528725070515349",
    "category": "Outdoor"
  },
  {
    "id": "img-266",
    "filename": "6528725190515337.jpg",
    "src": "/gallery/6528725190515337.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725190515337",
    "category": "Outdoor"
  },
  {
    "id": "img-267",
    "filename": "6528725310515325.jpg",
    "src": "/gallery/6528725310515325.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725310515325",
    "category": "Outdoor"
  },
  {
    "id": "img-268",
    "filename": "6528725443848645.jpg",
    "src": "/gallery/6528725443848645.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6528725443848645",
    "category": "Outdoor"
  },
  {
    "id": "img-269",
    "filename": "6528725550515301.jpg",
    "src": "/gallery/6528725550515301.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725550515301",
    "category": "Outdoor"
  },
  {
    "id": "img-270",
    "filename": "6528725690515287.jpg",
    "src": "/gallery/6528725690515287.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725690515287",
    "category": "Outdoor"
  },
  {
    "id": "img-271",
    "filename": "6528725797181943.jpg",
    "src": "/gallery/6528725797181943.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725797181943",
    "category": "Outdoor"
  },
  {
    "id": "img-272",
    "filename": "6528725900515266.jpg",
    "src": "/gallery/6528725900515266.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6528725900515266",
    "category": "Outdoor"
  },
  {
    "id": "img-273",
    "filename": "6636873626367159.jpg",
    "src": "/gallery/6636873626367159.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6636873626367159",
    "category": "Outdoor"
  },
  {
    "id": "img-274",
    "filename": "6636873683033820.jpg",
    "src": "/gallery/6636873683033820.jpg",
    "width": 1152,
    "height": 2048,
    "ratio": 0.56,
    "title": "6636873683033820",
    "category": "Outdoor"
  },
  {
    "id": "img-275",
    "filename": "6636873736367148.jpg",
    "src": "/gallery/6636873736367148.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "6636873736367148",
    "category": "Outdoor"
  },
  {
    "id": "img-276",
    "filename": "6636873799700475.jpg",
    "src": "/gallery/6636873799700475.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6636873799700475",
    "category": "Outdoor"
  },
  {
    "id": "img-277",
    "filename": "6636873859700469.jpg",
    "src": "/gallery/6636873859700469.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6636873859700469",
    "category": "Outdoor"
  },
  {
    "id": "img-278",
    "filename": "6636873933033795.jpg",
    "src": "/gallery/6636873933033795.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "6636873933033795",
    "category": "Outdoor"
  },
  {
    "id": "img-279",
    "filename": "6636874039700451.jpg",
    "src": "/gallery/6636874039700451.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636874039700451",
    "category": "Outdoor"
  },
  {
    "id": "img-280",
    "filename": "6636874129700442.jpg",
    "src": "/gallery/6636874129700442.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874129700442",
    "category": "Outdoor"
  },
  {
    "id": "img-281",
    "filename": "6636874206367101.jpg",
    "src": "/gallery/6636874206367101.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874206367101",
    "category": "Outdoor"
  },
  {
    "id": "img-282",
    "filename": "6636874296367092.jpg",
    "src": "/gallery/6636874296367092.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874296367092",
    "category": "Outdoor"
  },
  {
    "id": "img-283",
    "filename": "6636874396367082.jpg",
    "src": "/gallery/6636874396367082.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874396367082",
    "category": "Outdoor"
  },
  {
    "id": "img-284",
    "filename": "6636874503033738.jpg",
    "src": "/gallery/6636874503033738.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874503033738",
    "category": "Outdoor"
  },
  {
    "id": "img-285",
    "filename": "6636874646367057.jpg",
    "src": "/gallery/6636874646367057.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636874646367057",
    "category": "Outdoor"
  },
  {
    "id": "img-286",
    "filename": "6636874743033714.jpg",
    "src": "/gallery/6636874743033714.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874743033714",
    "category": "Outdoor"
  },
  {
    "id": "img-287",
    "filename": "6636874893033699.jpg",
    "src": "/gallery/6636874893033699.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874893033699",
    "category": "Outdoor"
  },
  {
    "id": "img-288",
    "filename": "6636874983033690.jpg",
    "src": "/gallery/6636874983033690.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636874983033690",
    "category": "Outdoor"
  },
  {
    "id": "img-289",
    "filename": "6636875093033679.jpg",
    "src": "/gallery/6636875093033679.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636875093033679",
    "category": "Outdoor"
  },
  {
    "id": "img-290",
    "filename": "6636875186367003.jpg",
    "src": "/gallery/6636875186367003.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636875186367003",
    "category": "Outdoor"
  },
  {
    "id": "img-291",
    "filename": "6636875319700323.jpg",
    "src": "/gallery/6636875319700323.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636875319700323",
    "category": "Outdoor"
  },
  {
    "id": "img-292",
    "filename": "6636875483033640.jpg",
    "src": "/gallery/6636875483033640.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636875483033640",
    "category": "Outdoor"
  },
  {
    "id": "img-293",
    "filename": "6636875636366958.jpg",
    "src": "/gallery/6636875636366958.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636875636366958",
    "category": "Outdoor"
  },
  {
    "id": "img-294",
    "filename": "6636875779700277.jpg",
    "src": "/gallery/6636875779700277.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636875779700277",
    "category": "Outdoor"
  },
  {
    "id": "img-295",
    "filename": "6636875873033601.jpg",
    "src": "/gallery/6636875873033601.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636875873033601",
    "category": "Outdoor"
  },
  {
    "id": "img-296",
    "filename": "6636875973033591.jpg",
    "src": "/gallery/6636875973033591.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636875973033591",
    "category": "Outdoor"
  },
  {
    "id": "img-297",
    "filename": "6636876073033581.jpg",
    "src": "/gallery/6636876073033581.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "6636876073033581",
    "category": "Outdoor"
  },
  {
    "id": "img-298",
    "filename": "6636876189700236.jpg",
    "src": "/gallery/6636876189700236.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "6636876189700236",
    "category": "Outdoor"
  },
  {
    "id": "img-299",
    "filename": "7134045069983343.jpg",
    "src": "/gallery/7134045069983343.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045069983343",
    "category": "Outdoor"
  },
  {
    "id": "img-300",
    "filename": "7134045133316670.jpg",
    "src": "/gallery/7134045133316670.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045133316670",
    "category": "Outdoor"
  },
  {
    "id": "img-301",
    "filename": "7134045139983336.jpg",
    "src": "/gallery/7134045139983336.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045139983336",
    "category": "Outdoor"
  },
  {
    "id": "img-302",
    "filename": "7134045223316661.jpg",
    "src": "/gallery/7134045223316661.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045223316661",
    "category": "Outdoor"
  },
  {
    "id": "img-303",
    "filename": "7134045326649984.jpg",
    "src": "/gallery/7134045326649984.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045326649984",
    "category": "Outdoor"
  },
  {
    "id": "img-304",
    "filename": "7134045389983311.jpg",
    "src": "/gallery/7134045389983311.jpg",
    "width": 1366,
    "height": 2048,
    "ratio": 0.67,
    "title": "7134045389983311",
    "category": "Outdoor"
  },
  {
    "id": "img-305",
    "filename": "7134045516649965.jpg",
    "src": "/gallery/7134045516649965.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045516649965",
    "category": "Outdoor"
  },
  {
    "id": "img-306",
    "filename": "7134045583316625.jpg",
    "src": "/gallery/7134045583316625.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "7134045583316625",
    "category": "Outdoor"
  },
  {
    "id": "img-307",
    "filename": "7134045643316619.jpg",
    "src": "/gallery/7134045643316619.jpg",
    "width": 1366,
    "height": 2048,
    "ratio": 0.67,
    "title": "7134045643316619",
    "category": "Outdoor"
  },
  {
    "id": "img-308",
    "filename": "7134045763316607.jpg",
    "src": "/gallery/7134045763316607.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045763316607",
    "category": "Outdoor"
  },
  {
    "id": "img-309",
    "filename": "7134045769983273.jpg",
    "src": "/gallery/7134045769983273.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045769983273",
    "category": "Outdoor"
  },
  {
    "id": "img-310",
    "filename": "7134045873316596.jpg",
    "src": "/gallery/7134045873316596.jpg",
    "width": 2048,
    "height": 1536,
    "ratio": 1.33,
    "title": "7134045873316596",
    "category": "Outdoor"
  },
  {
    "id": "img-311",
    "filename": "7134045933316590.jpg",
    "src": "/gallery/7134045933316590.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134045933316590",
    "category": "Outdoor"
  },
  {
    "id": "img-312",
    "filename": "7134046036649913.jpg",
    "src": "/gallery/7134046036649913.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046036649913",
    "category": "Outdoor"
  },
  {
    "id": "img-313",
    "filename": "7134046113316572.jpg",
    "src": "/gallery/7134046113316572.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046113316572",
    "category": "Outdoor"
  },
  {
    "id": "img-314",
    "filename": "7134046179983232.jpg",
    "src": "/gallery/7134046179983232.jpg",
    "width": 2048,
    "height": 1152,
    "ratio": 1.78,
    "title": "7134046179983232",
    "category": "Outdoor"
  },
  {
    "id": "img-315",
    "filename": "7134046319983218.jpg",
    "src": "/gallery/7134046319983218.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046319983218",
    "category": "Outdoor"
  },
  {
    "id": "img-316",
    "filename": "7134046396649877.jpg",
    "src": "/gallery/7134046396649877.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046396649877",
    "category": "Outdoor"
  },
  {
    "id": "img-317",
    "filename": "7134046433316540.jpg",
    "src": "/gallery/7134046433316540.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046433316540",
    "category": "Outdoor"
  },
  {
    "id": "img-318",
    "filename": "7134046519983198.jpg",
    "src": "/gallery/7134046519983198.jpg",
    "width": 2048,
    "height": 1366,
    "ratio": 1.5,
    "title": "7134046519983198",
    "category": "Outdoor"
  },
  {
    "id": "img-319",
    "filename": "7300427790011736.jpg",
    "src": "/gallery/7300427790011736.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7300427790011736",
    "category": "Outdoor"
  },
  {
    "id": "img-320",
    "filename": "7300427953345053.jpg",
    "src": "/gallery/7300427953345053.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7300427953345053",
    "category": "Outdoor"
  },
  {
    "id": "img-321",
    "filename": "7300428133345035.jpg",
    "src": "/gallery/7300428133345035.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7300428133345035",
    "category": "Outdoor"
  },
  {
    "id": "img-322",
    "filename": "7300428313345017.jpg",
    "src": "/gallery/7300428313345017.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7300428313345017",
    "category": "Outdoor"
  },
  {
    "id": "img-323",
    "filename": "7300428443345004.jpg",
    "src": "/gallery/7300428443345004.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7300428443345004",
    "category": "Outdoor"
  },
  {
    "id": "img-324",
    "filename": "7300428666678315.jpg",
    "src": "/gallery/7300428666678315.jpg",
    "width": 1440,
    "height": 1440,
    "ratio": 1,
    "title": "7300428666678315",
    "category": "Outdoor"
  },
  {
    "id": "img-325",
    "filename": "7300428863344962.jpg",
    "src": "/gallery/7300428863344962.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7300428863344962",
    "category": "Outdoor"
  },
  {
    "id": "img-326",
    "filename": "7414209805300200.jpg",
    "src": "/gallery/7414209805300200.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414209805300200",
    "category": "Outdoor"
  },
  {
    "id": "img-327",
    "filename": "7414210071966840.jpg",
    "src": "/gallery/7414210071966840.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414210071966840",
    "category": "Outdoor"
  },
  {
    "id": "img-328",
    "filename": "7414210245300156.jpg",
    "src": "/gallery/7414210245300156.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414210245300156",
    "category": "Outdoor"
  },
  {
    "id": "img-329",
    "filename": "7414210425300138.jpg",
    "src": "/gallery/7414210425300138.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414210425300138",
    "category": "Outdoor"
  },
  {
    "id": "img-330",
    "filename": "7414210578633456.jpg",
    "src": "/gallery/7414210578633456.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414210578633456",
    "category": "Outdoor"
  },
  {
    "id": "img-331",
    "filename": "7414210738633440.jpg",
    "src": "/gallery/7414210738633440.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414210738633440",
    "category": "Outdoor"
  },
  {
    "id": "img-332",
    "filename": "7414210885300092.jpg",
    "src": "/gallery/7414210885300092.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414210885300092",
    "category": "Outdoor"
  },
  {
    "id": "img-333",
    "filename": "7414211075300073.jpg",
    "src": "/gallery/7414211075300073.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414211075300073",
    "category": "Outdoor"
  },
  {
    "id": "img-334",
    "filename": "7414211288633385.jpg",
    "src": "/gallery/7414211288633385.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414211288633385",
    "category": "Outdoor"
  },
  {
    "id": "img-335",
    "filename": "7414211655300015.jpg",
    "src": "/gallery/7414211655300015.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414211655300015",
    "category": "Outdoor"
  },
  {
    "id": "img-336",
    "filename": "7414212035299977.jpg",
    "src": "/gallery/7414212035299977.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414212035299977",
    "category": "Outdoor"
  },
  {
    "id": "img-337",
    "filename": "7414212455299935.jpg",
    "src": "/gallery/7414212455299935.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414212455299935",
    "category": "Outdoor"
  },
  {
    "id": "img-338",
    "filename": "7414212721966575.jpg",
    "src": "/gallery/7414212721966575.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414212721966575",
    "category": "Outdoor"
  },
  {
    "id": "img-339",
    "filename": "7414213071966540.jpg",
    "src": "/gallery/7414213071966540.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414213071966540",
    "category": "Outdoor"
  },
  {
    "id": "img-340",
    "filename": "7414213325299848.jpg",
    "src": "/gallery/7414213325299848.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7414213325299848",
    "category": "Outdoor"
  },
  {
    "id": "img-341",
    "filename": "7414213738633140.jpg",
    "src": "/gallery/7414213738633140.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414213738633140",
    "category": "Outdoor"
  },
  {
    "id": "img-342",
    "filename": "7414214028633111.jpg",
    "src": "/gallery/7414214028633111.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7414214028633111",
    "category": "Outdoor"
  },
  {
    "id": "img-343",
    "filename": "7414214371966410.jpg",
    "src": "/gallery/7414214371966410.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "7414214371966410",
    "category": "Outdoor"
  },
  {
    "id": "img-344",
    "filename": "7456398874414626.jpg",
    "src": "/gallery/7456398874414626.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7456398874414626",
    "category": "Outdoor"
  },
  {
    "id": "img-345",
    "filename": "7456399294414584.jpg",
    "src": "/gallery/7456399294414584.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7456399294414584",
    "category": "Outdoor"
  },
  {
    "id": "img-346",
    "filename": "7456399504414563.jpg",
    "src": "/gallery/7456399504414563.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7456399504414563",
    "category": "Outdoor"
  },
  {
    "id": "img-347",
    "filename": "7456846181036562.jpg",
    "src": "/gallery/7456846181036562.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7456846181036562",
    "category": "Outdoor"
  },
  {
    "id": "img-348",
    "filename": "7456846317703215.jpg",
    "src": "/gallery/7456846317703215.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7456846317703215",
    "category": "Outdoor"
  },
  {
    "id": "img-349",
    "filename": "7456846434369870.jpg",
    "src": "/gallery/7456846434369870.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7456846434369870",
    "category": "Outdoor"
  },
  {
    "id": "img-350",
    "filename": "7487192491335264.jpg",
    "src": "/gallery/7487192491335264.jpg",
    "width": 2048,
    "height": 957,
    "ratio": 2.14,
    "title": "7487192491335264",
    "category": "Outdoor"
  },
  {
    "id": "img-351",
    "filename": "7487192614668585.jpg",
    "src": "/gallery/7487192614668585.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7487192614668585",
    "category": "Outdoor"
  },
  {
    "id": "img-352",
    "filename": "7487192961335217.jpg",
    "src": "/gallery/7487192961335217.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7487192961335217",
    "category": "Outdoor"
  },
  {
    "id": "img-353",
    "filename": "7487193874668459.jpg",
    "src": "/gallery/7487193874668459.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7487193874668459",
    "category": "Outdoor"
  },
  {
    "id": "img-354",
    "filename": "7487194011335112.jpg",
    "src": "/gallery/7487194011335112.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7487194011335112",
    "category": "Outdoor"
  },
  {
    "id": "img-355",
    "filename": "7487194144668432.jpg",
    "src": "/gallery/7487194144668432.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7487194144668432",
    "category": "Outdoor"
  },
  {
    "id": "img-356",
    "filename": "7487194324668414.jpg",
    "src": "/gallery/7487194324668414.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7487194324668414",
    "category": "Outdoor"
  },
  {
    "id": "img-357",
    "filename": "7732201920167652.jpg",
    "src": "/gallery/7732201920167652.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "7732201920167652",
    "category": "Outdoor"
  },
  {
    "id": "img-358",
    "filename": "7732202073500970.jpg",
    "src": "/gallery/7732202073500970.jpg",
    "width": 640,
    "height": 1372,
    "ratio": 0.47,
    "title": "7732202073500970",
    "category": "Outdoor"
  },
  {
    "id": "img-359",
    "filename": "7732202270167617.jpg",
    "src": "/gallery/7732202270167617.jpg",
    "width": 1372,
    "height": 640,
    "ratio": 2.14,
    "title": "7732202270167617",
    "category": "Outdoor"
  },
  {
    "id": "img-360",
    "filename": "7732202603500917.jpg",
    "src": "/gallery/7732202603500917.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7732202603500917",
    "category": "Outdoor"
  },
  {
    "id": "img-361",
    "filename": "7732202793500898.jpg",
    "src": "/gallery/7732202793500898.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7732202793500898",
    "category": "Outdoor"
  },
  {
    "id": "img-362",
    "filename": "7732202953500882.jpg",
    "src": "/gallery/7732202953500882.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7732202953500882",
    "category": "Outdoor"
  },
  {
    "id": "img-363",
    "filename": "7732203170167527.jpg",
    "src": "/gallery/7732203170167527.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7732203170167527",
    "category": "Outdoor"
  },
  {
    "id": "img-364",
    "filename": "7732203430167501.jpg",
    "src": "/gallery/7732203430167501.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7732203430167501",
    "category": "Outdoor"
  },
  {
    "id": "img-365",
    "filename": "7732203676834143.jpg",
    "src": "/gallery/7732203676834143.jpg",
    "width": 955,
    "height": 2048,
    "ratio": 0.47,
    "title": "7732203676834143",
    "category": "Outdoor"
  },
  {
    "id": "img-366",
    "filename": "7732203890167455.jpg",
    "src": "/gallery/7732203890167455.jpg",
    "width": 2048,
    "height": 955,
    "ratio": 2.14,
    "title": "7732203890167455",
    "category": "Outdoor"
  },
  {
    "id": "img-367",
    "filename": "20250324_173430.jpg",
    "src": "/gallery/20250324_173430.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 173430",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-368",
    "filename": "20250324_173443.jpg",
    "src": "/gallery/20250324_173443.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 173443",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-369",
    "filename": "20250324_173451.jpg",
    "src": "/gallery/20250324_173451.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 173451",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-370",
    "filename": "20250324_192807.jpg",
    "src": "/gallery/20250324_192807.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250324 192807",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-371",
    "filename": "20250324_192819.jpg",
    "src": "/gallery/20250324_192819.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250324 192819",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-372",
    "filename": "20250324_192833.jpg",
    "src": "/gallery/20250324_192833.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 192833",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-373",
    "filename": "20250324_192836.jpg",
    "src": "/gallery/20250324_192836.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 192836",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-374",
    "filename": "20250324_192840.jpg",
    "src": "/gallery/20250324_192840.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250324 192840",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-375",
    "filename": "20250326_183858.jpg",
    "src": "/gallery/20250326_183858.jpg",
    "width": 14397,
    "height": 6715,
    "ratio": 2.14,
    "title": "20250326 183858",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-376",
    "filename": "20250331_191745.jpg",
    "src": "/gallery/20250331_191745.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250331 191745",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-377",
    "filename": "20250331_191757.jpg",
    "src": "/gallery/20250331_191757.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250331 191757",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-378",
    "filename": "20250331_191855.jpg",
    "src": "/gallery/20250331_191855.jpg",
    "width": 7612,
    "height": 16320,
    "ratio": 0.47,
    "title": "20250331 191855",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-379",
    "filename": "20250331_191923.jpg",
    "src": "/gallery/20250331_191923.jpg",
    "width": 1868,
    "height": 1687,
    "ratio": 1.11,
    "title": "20250331 191923",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-380",
    "filename": "20250408_193501.jpg",
    "src": "/gallery/20250408_193501.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250408 193501",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-381",
    "filename": "20250408_193501_1.jpg",
    "src": "/gallery/20250408_193501_1.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250408 193501 1",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-382",
    "filename": "20250408_193524.jpg",
    "src": "/gallery/20250408_193524.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250408 193524",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-383",
    "filename": "20250408_193541.jpg",
    "src": "/gallery/20250408_193541.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250408 193541",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-384",
    "filename": "20250409_163922.jpg",
    "src": "/gallery/20250409_163922.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250409 163922",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-385",
    "filename": "20250410_185145.jpg",
    "src": "/gallery/20250410_185145.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250410 185145",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-386",
    "filename": "20250412_112312.jpg",
    "src": "/gallery/20250412_112312.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250412 112312",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-387",
    "filename": "20250412_112321.jpg",
    "src": "/gallery/20250412_112321.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250412 112321",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-388",
    "filename": "20250412_112325.jpg",
    "src": "/gallery/20250412_112325.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250412 112325",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-389",
    "filename": "20250412_112329.jpg",
    "src": "/gallery/20250412_112329.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250412 112329",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-390",
    "filename": "20250414_120818.jpg",
    "src": "/gallery/20250414_120818.jpg",
    "width": 2995,
    "height": 881,
    "ratio": 3.4,
    "title": "20250414 120818",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-391",
    "filename": "20250414_174548.jpg",
    "src": "/gallery/20250414_174548.jpg",
    "width": 1469,
    "height": 3350,
    "ratio": 0.44,
    "title": "20250414 174548",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-392",
    "filename": "20250414_174558.jpg",
    "src": "/gallery/20250414_174558.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250414 174558",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-393",
    "filename": "20250414_174601.jpg",
    "src": "/gallery/20250414_174601.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250414 174601",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-394",
    "filename": "20250414_174709.jpg",
    "src": "/gallery/20250414_174709.jpg",
    "width": 1868,
    "height": 2763,
    "ratio": 0.68,
    "title": "20250414 174709",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-395",
    "filename": "20250416_182035.jpg",
    "src": "/gallery/20250416_182035.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20250416 182035",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-396",
    "filename": "20250416_182040.jpg",
    "src": "/gallery/20250416_182040.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20250416 182040",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-397",
    "filename": "20250510_163519.jpg",
    "src": "/gallery/20250510_163519.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250510 163519",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-398",
    "filename": "20250510_163536.jpg",
    "src": "/gallery/20250510_163536.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250510 163536",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-399",
    "filename": "20250510_163547.jpg",
    "src": "/gallery/20250510_163547.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250510 163547",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-400",
    "filename": "20250510_163553.jpg",
    "src": "/gallery/20250510_163553.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250510 163553",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-401",
    "filename": "20250524_165553.jpg",
    "src": "/gallery/20250524_165553.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250524 165553",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-402",
    "filename": "20250524_165702.jpg",
    "src": "/gallery/20250524_165702.jpg",
    "width": 13539,
    "height": 7040,
    "ratio": 1.92,
    "title": "20250524 165702",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-403",
    "filename": "20250524_173004.jpg",
    "src": "/gallery/20250524_173004.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250524 173004",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-404",
    "filename": "20250524_173006.jpg",
    "src": "/gallery/20250524_173006.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250524 173006",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-405",
    "filename": "20250524_173015.jpg",
    "src": "/gallery/20250524_173015.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20250524 173015",
    "category": "Outdoor",
    "subcategory": "Terrassenüberdachung"
  },
  {
    "id": "img-406",
    "filename": "20251229_182729.jpg",
    "src": "/gallery/20251229_182729.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251229 182729",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-407",
    "filename": "20251229_182928.jpg",
    "src": "/gallery/20251229_182928.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20251229 182928",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-408",
    "filename": "20251229_182937.jpg",
    "src": "/gallery/20251229_182937.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20251229 182937",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-409",
    "filename": "20251229_183027.jpg",
    "src": "/gallery/20251229_183027.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251229 183027",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-410",
    "filename": "20251229_185235.jpg",
    "src": "/gallery/20251229_185235.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251229 185235",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-411",
    "filename": "20251229_190756.jpg",
    "src": "/gallery/20251229_190756.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251229 190756",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-412",
    "filename": "20251229_190800.jpg",
    "src": "/gallery/20251229_190800.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251229 190800",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-413",
    "filename": "20260102_185437.jpg",
    "src": "/gallery/20260102_185437.jpg",
    "width": 2640,
    "height": 1868,
    "ratio": 1.41,
    "title": "20260102 185437",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-414",
    "filename": "20260102_185520.jpg",
    "src": "/gallery/20260102_185520.jpg",
    "width": 3525,
    "height": 1868,
    "ratio": 1.89,
    "title": "20260102 185520",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-415",
    "filename": "20260102_185524.jpg",
    "src": "/gallery/20260102_185524.jpg",
    "width": 1868,
    "height": 2768,
    "ratio": 0.67,
    "title": "20260102 185524",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-416",
    "filename": "20260103_153900.jpg",
    "src": "/gallery/20260103_153900.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260103 153900",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-417",
    "filename": "20260112_193404.jpg",
    "src": "/gallery/20260112_193404.jpg",
    "width": 3314,
    "height": 1868,
    "ratio": 1.77,
    "title": "20260112 193404",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-418",
    "filename": "20260112_193454.jpg",
    "src": "/gallery/20260112_193454.jpg",
    "width": 3094,
    "height": 1868,
    "ratio": 1.66,
    "title": "20260112 193454",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-419",
    "filename": "20260112_193536.jpg",
    "src": "/gallery/20260112_193536.jpg",
    "width": 3257,
    "height": 1868,
    "ratio": 1.74,
    "title": "20260112 193536",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-420",
    "filename": "20260112_193553.jpg",
    "src": "/gallery/20260112_193553.jpg",
    "width": 3200,
    "height": 1868,
    "ratio": 1.71,
    "title": "20260112 193553",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-421",
    "filename": "20260112_193610.jpg",
    "src": "/gallery/20260112_193610.jpg",
    "width": 3103,
    "height": 1868,
    "ratio": 1.66,
    "title": "20260112 193610",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-422",
    "filename": "20260112_193659.jpg",
    "src": "/gallery/20260112_193659.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260112 193659",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-423",
    "filename": "20260112_193822.jpg",
    "src": "/gallery/20260112_193822.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260112 193822",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-424",
    "filename": "20260112_193831.jpg",
    "src": "/gallery/20260112_193831.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260112 193831",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-425",
    "filename": "20260112_193940.jpg",
    "src": "/gallery/20260112_193940.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260112 193940",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-426",
    "filename": "20260114_202649.jpg",
    "src": "/gallery/20260114_202649.jpg",
    "width": 2834,
    "height": 1868,
    "ratio": 1.52,
    "title": "20260114 202649",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-427",
    "filename": "20260114_202739.jpg",
    "src": "/gallery/20260114_202739.jpg",
    "width": 2780,
    "height": 1868,
    "ratio": 1.49,
    "title": "20260114 202739",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-428",
    "filename": "20260114_202807.jpg",
    "src": "/gallery/20260114_202807.jpg",
    "width": 2885,
    "height": 1868,
    "ratio": 1.54,
    "title": "20260114 202807",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-429",
    "filename": "20260114_202813.jpg",
    "src": "/gallery/20260114_202813.jpg",
    "width": 3168,
    "height": 1868,
    "ratio": 1.7,
    "title": "20260114 202813",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-430",
    "filename": "20260114_202838.jpg",
    "src": "/gallery/20260114_202838.jpg",
    "width": 2656,
    "height": 1868,
    "ratio": 1.42,
    "title": "20260114 202838",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-431",
    "filename": "20260114_202857.jpg",
    "src": "/gallery/20260114_202857.jpg",
    "width": 2864,
    "height": 1868,
    "ratio": 1.53,
    "title": "20260114 202857",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-432",
    "filename": "20260114_203037.jpg",
    "src": "/gallery/20260114_203037.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260114 203037",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-433",
    "filename": "20260129_200018.jpg",
    "src": "/gallery/20260129_200018.jpg",
    "width": 3115,
    "height": 1690,
    "ratio": 1.84,
    "title": "20260129 200018",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-434",
    "filename": "20260129_200021.jpg",
    "src": "/gallery/20260129_200021.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260129 200021",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-435",
    "filename": "20260129_200023.jpg",
    "src": "/gallery/20260129_200023.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260129 200023",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-436",
    "filename": "20260129_200025.jpg",
    "src": "/gallery/20260129_200025.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260129 200025",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-437",
    "filename": "20260129_200028.jpg",
    "src": "/gallery/20260129_200028.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260129 200028",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-438",
    "filename": "20260129_200034.jpg",
    "src": "/gallery/20260129_200034.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260129 200034",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-439",
    "filename": "20260129_200039.jpg",
    "src": "/gallery/20260129_200039.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260129 200039",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-440",
    "filename": "20260129_200054.jpg",
    "src": "/gallery/20260129_200054.jpg",
    "width": 3161,
    "height": 1868,
    "ratio": 1.69,
    "title": "20260129 200054",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-441",
    "filename": "20260129_200101.jpg",
    "src": "/gallery/20260129_200101.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260129 200101",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-442",
    "filename": "20260129_200329.jpg",
    "src": "/gallery/20260129_200329.jpg",
    "width": 3092,
    "height": 1868,
    "ratio": 1.66,
    "title": "20260129 200329",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-443",
    "filename": "20260129_200334.jpg",
    "src": "/gallery/20260129_200334.jpg",
    "width": 3192,
    "height": 1815,
    "ratio": 1.76,
    "title": "20260129 200334",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-444",
    "filename": "20260725_112633.jpg",
    "src": "/gallery/20260725_112633.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260725 112633",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-445",
    "filename": "20260725_112645.jpg",
    "src": "/gallery/20260725_112645.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260725 112645",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-446",
    "filename": "20260725_112649.jpg",
    "src": "/gallery/20260725_112649.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260725 112649",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-447",
    "filename": "20260725_112652.jpg",
    "src": "/gallery/20260725_112652.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20260725 112652",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-448",
    "filename": "7770974529623724.jpg",
    "src": "/gallery/7770974529623724.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7770974529623724",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-449",
    "filename": "7770974662957044.jpg",
    "src": "/gallery/7770974662957044.jpg",
    "width": 957,
    "height": 2048,
    "ratio": 0.47,
    "title": "7770974662957044",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-450",
    "filename": "7770974819623695.jpg",
    "src": "/gallery/7770974819623695.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770974819623695",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-451",
    "filename": "7770975146290329.jpg",
    "src": "/gallery/7770975146290329.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770975146290329",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-452",
    "filename": "7770975352956975.jpg",
    "src": "/gallery/7770975352956975.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770975352956975",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-453",
    "filename": "7770975549623622.jpg",
    "src": "/gallery/7770975549623622.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770975549623622",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-454",
    "filename": "7770975826290261.jpg",
    "src": "/gallery/7770975826290261.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770975826290261",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-455",
    "filename": "7770976016290242.jpg",
    "src": "/gallery/7770976016290242.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770976016290242",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-456",
    "filename": "7770976199623557.jpg",
    "src": "/gallery/7770976199623557.jpg",
    "width": 1536,
    "height": 2048,
    "ratio": 0.75,
    "title": "7770976199623557",
    "category": "Schneide- & Servierbretter"
  },
  {
    "id": "img-457",
    "filename": "1771610067899.png",
    "src": "/gallery/1771610067899.png",
    "width": 1381,
    "height": 704,
    "ratio": 1.96,
    "title": "1771610067899",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-458",
    "filename": "1771614081212.png",
    "src": "/gallery/1771614081212.png",
    "width": 1344,
    "height": 666,
    "ratio": 2.02,
    "title": "1771614081212",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-459",
    "filename": "1774685651355.png",
    "src": "/gallery/1774685651355.png",
    "width": 1508,
    "height": 704,
    "ratio": 2.14,
    "title": "1774685651355",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-460",
    "filename": "1774685663453.png",
    "src": "/gallery/1774685663453.png",
    "width": 1508,
    "height": 704,
    "ratio": 2.14,
    "title": "1774685663453",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-461",
    "filename": "1775485307496.png",
    "src": "/gallery/1775485307496.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1775485307496",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-462",
    "filename": "1790267330679.png",
    "src": "/gallery/1790267330679.png",
    "width": 1507,
    "height": 704,
    "ratio": 2.14,
    "title": "1790267330679",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-463",
    "filename": "20251122_135500.jpg",
    "src": "/gallery/20251122_135500.jpg",
    "width": 1868,
    "height": 1105,
    "ratio": 1.69,
    "title": "20251122 135500",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-464",
    "filename": "20251122_210705.jpg",
    "src": "/gallery/20251122_210705.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251122 210705",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-465",
    "filename": "20251122_210718.jpg",
    "src": "/gallery/20251122_210718.jpg",
    "width": 3783,
    "height": 1558,
    "ratio": 2.43,
    "title": "20251122 210718",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-466",
    "filename": "20251201_205127.jpg",
    "src": "/gallery/20251201_205127.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251201 205127",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-467",
    "filename": "20251201_211759.jpg",
    "src": "/gallery/20251201_211759.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251201 211759",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-468",
    "filename": "20251201_212003.jpg",
    "src": "/gallery/20251201_212003.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251201 212003",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-469",
    "filename": "20251203_203525.jpg",
    "src": "/gallery/20251203_203525.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251203 203525",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-470",
    "filename": "20251203_203600.jpg",
    "src": "/gallery/20251203_203600.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251203 203600",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-471",
    "filename": "20251203_203609.jpg",
    "src": "/gallery/20251203_203609.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251203 203609",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-472",
    "filename": "20251204_183128.jpg",
    "src": "/gallery/20251204_183128.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251204 183128",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-473",
    "filename": "20251204_183151.jpg",
    "src": "/gallery/20251204_183151.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251204 183151",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-474",
    "filename": "20251205_060036.jpg",
    "src": "/gallery/20251205_060036.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251205 060036",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-475",
    "filename": "20251210_204524.jpg",
    "src": "/gallery/20251210_204524.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251210 204524",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-476",
    "filename": "20251210_204528.jpg",
    "src": "/gallery/20251210_204528.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251210 204528",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-477",
    "filename": "20251210_205030.jpg",
    "src": "/gallery/20251210_205030.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251210 205030",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-478",
    "filename": "20251210_205050.jpg",
    "src": "/gallery/20251210_205050.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251210 205050",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-479",
    "filename": "20251211_195436.jpg",
    "src": "/gallery/20251211_195436.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251211 195436",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-480",
    "filename": "20251215_202104.jpg",
    "src": "/gallery/20251215_202104.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251215 202104",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-481",
    "filename": "20251215_202128.jpg",
    "src": "/gallery/20251215_202128.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251215 202128",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-482",
    "filename": "20251216_062151.jpg",
    "src": "/gallery/20251216_062151.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251216 062151",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-483",
    "filename": "20251216_062206.jpg",
    "src": "/gallery/20251216_062206.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251216 062206",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-484",
    "filename": "20251216_200952.jpg",
    "src": "/gallery/20251216_200952.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20251216 200952",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-485",
    "filename": "20251216_200957.jpg",
    "src": "/gallery/20251216_200957.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20251216 200957",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-486",
    "filename": "20251216_201005.jpg",
    "src": "/gallery/20251216_201005.jpg",
    "width": 1868,
    "height": 3222,
    "ratio": 0.58,
    "title": "20251216 201005",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-487",
    "filename": "20251216_201018.jpg",
    "src": "/gallery/20251216_201018.jpg",
    "width": 1868,
    "height": 4000,
    "ratio": 0.47,
    "title": "20251216 201018",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-488",
    "filename": "20251218_195521.jpg",
    "src": "/gallery/20251218_195521.jpg",
    "width": 1868,
    "height": 2618,
    "ratio": 0.71,
    "title": "20251218 195521",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-489",
    "filename": "20251218_195549.jpg",
    "src": "/gallery/20251218_195549.jpg",
    "width": 1868,
    "height": 3046,
    "ratio": 0.61,
    "title": "20251218 195549",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-490",
    "filename": "20251218_195620.jpg",
    "src": "/gallery/20251218_195620.jpg",
    "width": 1868,
    "height": 2984,
    "ratio": 0.63,
    "title": "20251218 195620",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-491",
    "filename": "20251218_195635.jpg",
    "src": "/gallery/20251218_195635.jpg",
    "width": 1793,
    "height": 2645,
    "ratio": 0.68,
    "title": "20251218 195635",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-492",
    "filename": "20251218_204930.jpg",
    "src": "/gallery/20251218_204930.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251218 204930",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-493",
    "filename": "20251220_160625.jpg",
    "src": "/gallery/20251220_160625.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251220 160625",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-494",
    "filename": "20251220_160637.jpg",
    "src": "/gallery/20251220_160637.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251220 160637",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-495",
    "filename": "20251220_160827.jpg",
    "src": "/gallery/20251220_160827.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20251220 160827",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-496",
    "filename": "20260220_185033.jpg",
    "src": "/gallery/20260220_185033.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260220 185033",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-497",
    "filename": "20260220_185528.jpg",
    "src": "/gallery/20260220_185528.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260220 185528",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-498",
    "filename": "20260220_185603.jpg",
    "src": "/gallery/20260220_185603.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260220 185603",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-499",
    "filename": "20260225_193848.jpg",
    "src": "/gallery/20260225_193848.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260225 193848",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-500",
    "filename": "20260225_193858.jpg",
    "src": "/gallery/20260225_193858.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260225 193858",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-501",
    "filename": "20260225_200903.jpg",
    "src": "/gallery/20260225_200903.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260225 200903",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-502",
    "filename": "20260228_113037.jpg",
    "src": "/gallery/20260228_113037.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260228 113037",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-503",
    "filename": "20260228_113046.jpg",
    "src": "/gallery/20260228_113046.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260228 113046",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-504",
    "filename": "20260228_113430.jpg",
    "src": "/gallery/20260228_113430.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260228 113430",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-505",
    "filename": "20260304_192618.jpg",
    "src": "/gallery/20260304_192618.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260304 192618",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-506",
    "filename": "20260319_180038.jpg",
    "src": "/gallery/20260319_180038.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260319 180038",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-507",
    "filename": "20260319_180044.jpg",
    "src": "/gallery/20260319_180044.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260319 180044",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-508",
    "filename": "20260319_180101.jpg",
    "src": "/gallery/20260319_180101.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260319 180101",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-509",
    "filename": "20260319_192138.jpg",
    "src": "/gallery/20260319_192138.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260319 192138",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-510",
    "filename": "20260319_192149.jpg",
    "src": "/gallery/20260319_192149.jpg",
    "width": 3969,
    "height": 1463,
    "ratio": 2.71,
    "title": "20260319 192149",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-511",
    "filename": "20260325_193532.jpg",
    "src": "/gallery/20260325_193532.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260325 193532",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-512",
    "filename": "20260401_203245.jpg",
    "src": "/gallery/20260401_203245.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260401 203245",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-513",
    "filename": "20260401_203253.jpg",
    "src": "/gallery/20260401_203253.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260401 203253",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-514",
    "filename": "20260405_091805.jpg",
    "src": "/gallery/20260405_091805.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260405 091805",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-515",
    "filename": "20260406_160904.jpg",
    "src": "/gallery/20260406_160904.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260406 160904",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-516",
    "filename": "20260406_161200.jpg",
    "src": "/gallery/20260406_161200.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260406 161200",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-517",
    "filename": "20260406_163633.jpg",
    "src": "/gallery/20260406_163633.jpg",
    "width": 16320,
    "height": 7612,
    "ratio": 2.14,
    "title": "20260406 163633",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-518",
    "filename": "20260506_195542.jpg",
    "src": "/gallery/20260506_195542.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260506 195542",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-519",
    "filename": "20260506_200010.jpg",
    "src": "/gallery/20260506_200010.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260506 200010",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-520",
    "filename": "20260922_182809.jpg",
    "src": "/gallery/20260922_182809.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260922 182809",
    "category": "Schwibbögen & Fensterbilder"
  },
  {
    "id": "img-521",
    "filename": "20260924_181818.jpg",
    "src": "/gallery/20260924_181818.jpg",
    "width": 4000,
    "height": 1868,
    "ratio": 2.14,
    "title": "20260924 181818",
    "category": "Schwibbögen & Fensterbilder"
  }
];
