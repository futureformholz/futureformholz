export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  experience: string;
}

export interface MaterialItem {
  name: string;
  origin: string;
  character: string;
  imageUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Stephan Tautenhahn',
    role: 'Inhaber · Teamleiter Technische Gebäudeausrüstung (TGA) · Holzgestalter',
    bio: 'Als 46-jähriger Teamleiter für Technische Gebäudeausrüstung (TGA) verbindet Stephan technische Akribie mit echter Handwerksleidenschaft. Auf seiner selbst konstruierten Großformat-CNC-Fräse fertigt er kompromisslose Unikate, smarte Lichtmonumente von 1,20 m bis 1,80 m und maßgeschneiderte Holzkunst mit smarter LED-Integration (WLED, Home Assistant).',
    experience: 'Future Form Holz · Schneeberg OT Lindenau',
    imageUrl: '/logo.png',
  },
];

export const TIMBER_MATERIALS: MaterialItem[] = [
  {
    name: 'Birkenmultiplex & Edelfurniere',
    origin: 'Ausgewählte Qualitätsbestände',
    character: 'Extrem formstabil und verzugsfrei bei Temperatur- und Feuchtewechseln. Ideale Kantenqualität für filigrane CNC-Fräsmuster.',
    imageUrl: '/gallery/20260405_091706.jpg',
  },
  {
    name: 'Massive Eiche & Edelhölzer',
    origin: 'Regionale Hölzer mit charakteristischer Haptik',
    character: 'Schwere, standfeste Sockelaufbauten für Groß-Schwibbögen, massive Epoxidharzlampen und langlebige Außenmöbel.',
    imageUrl: '/gallery/20260525_160853.jpg',
  },
  {
    name: 'Präzisions-Acrylglas & Smarte LED-Systeme',
    origin: 'Optische Güte & WLED / Home Assistant',
    character: 'Kristallklare Lichtleitung und gravierte Konturen, kombiniert mit hochwertigen LED Stripes und flexibler Steuerung (Home Assistant, WLED, App & Sprache).',
    imageUrl: '/gallery/20260406_160904.jpg',
  },
];


