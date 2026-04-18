export const company = {
  name: "Golden Ink",
  address: "Gurruchaga 1831",
  city: "Palermo Soho",
  telephone: null,
  email: null,
  instagram: "goldenink.palermo",
  tiktok: "goldenink.ok",
  facebook: null,
  whatsapp: "5491176387106",
  googlemaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.2987339596168!2d-58.42748670423348!3d-34.58775099853659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5832d7d9acb%3A0xc48e49928d88609c!2sGolden%20Ink%20Tattoo%20and%20Piercing!5e0!3m2!1ses!2sar!4v1775536913997!5m2!1ses!2sar",
  openDays: [
    { day: "Lunes", hours: ["11:30 a 20:30hs"] },
    { day: "Martes", hours: ["11:30 a 20:30hs"] },
    { day: "Miércoles", hours: ["11:30 a 20:30hs"] },
    { day: "Jueves", hours: ["11:30 a 20:30hs"] },
    { day: "Viernes", hours: ["11:30 a 20:30hs"] },
  ],
  footer: "Arte en la piel, hecho a medida con dedicación y pasión.",
  description:
    "Somos un estudio dedicado al arte corporal con más de 10 años de experiencia. Cada diseño es una obra única, creada con pasión y precisión para reflejar tu personalidad.",
  highlights: [
    "Más de 10 años de experiencia",
    "Estudio certificado y seguro",
    "Materiales de primera calidad",
    "Artistas especializados",
    "Diseños personalizados",
  ],
};

export const navigation = [
  { id: "0", title: "Inicio", url: "/" },
  { id: "1", title: "Galería", url: "/galeria" },
  { id: "2", title: "Nosotros", url: "/nosotros" },
  { id: "3", title: "Contacto", url: "/contacto" },
];

export const hero = {
  title: "EL ARTE EN\nTU PIEL",
  subtitle:
    "Diseños únicos que cuentan tu historia. Tatuajes y piercings con los más altos estándares de calidad y seguridad.",
  primaryCta: {
    label: "Agenda tu cita",
    href: "/contacto",
  },
  secondaryCta: { label: "Ver galería", href: "/galeria" },
};

export const metadataCompany = {
  title: `${company.name} — Tattoo & Piercing`,
  description:
    "Estudio de tatuajes y piercings. Diseños únicos con los más altos estándares de calidad.",
};
