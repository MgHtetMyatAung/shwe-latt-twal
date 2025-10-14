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
  { id: "pink", name: "Pink", value: "#f472b6", access: "normal" },
  { id: "emerald", name: "Emerald", value: "#059669", access: "normal" },
  { id: "rose", name: "Rose", value: "#e11d48", access: "premium" },
  { id: "orange", name: "orange", value: "#d97706", access: "premium" },
  { id: "navy", name: "Navy", value: "#1e40af", access: "premium" },
  { id: "purple", name: "Purple", value: "#7c3aed", access: "premium" },
  { id: "violet", name: "violet", value: "#9B26B6", access: "premium" },
  { id: "fuchsia", name: "fuchsia", value: "#FF00FF", access: "premium" },
];
