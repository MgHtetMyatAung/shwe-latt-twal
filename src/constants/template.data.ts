export const INVITATION_TYPES = [
  {
    id: 1,
    name: "Wedding",
    icon: "",
  },
  {
    id: 2,
    name: "Birthday",
    icon: "",
  },
  {
    id: 3,
    name: "Religious Ceremony",
    icon: "",
  },
];

export const WEDDING_TEMPLATES = [
  { id: "classic", name: "Classic", description: "Timeless elegance" },
  { id: "modern", name: "Modern", description: "Clean and contemporary" },
  { id: "floral", name: "Floral", description: "Romantic garden theme" },
  { id: "elegant", name: "Elegant", description: "Sophisticated luxury" },
] as const;

export const BIRTHDAY_TEMPLATES = [
  { id: "fun", name: "Fun", description: "Vibrant and playful" },
  { id: "colorful", name: "Colorful", description: "Bright and cheerful" },
  { id: "balloon", name: "Balloon", description: "Festive celebration" },
  { id: "cake", name: "Cake", description: "Sweet and classic" },
] as const;

export const COLORS = [
  { id: "rose", name: "Rose", value: "#e11d48" },
  { id: "gold", name: "Gold", value: "#d97706" },
  { id: "navy", name: "Navy", value: "#1e40af" },
  { id: "emerald", name: "Emerald", value: "#059669" },
  { id: "purple", name: "Purple", value: "#7c3aed" },
  { id: "blush", name: "Blush", value: "#f472b6" },
];
