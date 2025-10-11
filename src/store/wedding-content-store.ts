import { create } from "zustand";

interface WeddingContent {
  // Base Design Fields
  layoutStyle: "elegance" | "classic" | "floral";
  primaryColor: string;

  // Core Wedding Details
  title: string;
  gregorianDate: Date | null;
  receptionVenue: string;
  receptionTime: string; // e.g., "6:00 PM"

  // Names
  brideName: string; // သတို့သမီး
  brideParents: string;
  groomName: string; // သတို့သား
  groomParents: string;

  // Custom Wording
  invitationWording: string;
}

interface WeddingStore extends WeddingContent {
  setWeddingField: <K extends keyof WeddingContent>(
    key: K,
    value: WeddingContent[K]
  ) => void;
  resetWeddingContent: () => void;
  syncContent: (data: WeddingContent) => void;
}

export const useWeddingContentStore = create<WeddingStore>((set) => ({
  layoutStyle: "elegance",
  primaryColor: "#B8860B", // Gold/Bronze for elegance
  title: "Our Wedding Day",
  gregorianDate: null,
  receptionVenue: "ရန်ကုန် ဟိုတယ် (Yangon Hotel)",
  receptionTime: "07:00 PM",
  brideName: "မအိအိဇင်",
  brideParents: "ဦးကျော်မြင့်နှင့် ဒေါ်နီလာမိသားစု",
  groomName: "ကိုကောင်းမြတ်",
  groomParents: "ဦးကျော်မြင့်နှင့် ဒေါ်နီလာမိသားစု",
  invitationWording: "လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်",

  setWeddingField: (key, value) => set((state) => ({ ...state, [key]: value })),

  syncContent: (data) => set(data),

  resetWeddingContent: () =>
    set({
      layoutStyle: "elegance",
      primaryColor: "#B8860B",
      title: "",
      gregorianDate: null,
      receptionVenue: "",
      receptionTime: "07:00 PM",
      brideName: "",
      brideParents: "",
      groomName: "",
      groomParents: "",
      invitationWording: "လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်",
    }),
}));
