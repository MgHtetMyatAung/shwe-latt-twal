import { WeddingFormData } from "@/features/templates/wedding/validation";
import { create } from "zustand";

interface WeddingStore extends WeddingFormData {
  setWeddingField: <K extends keyof WeddingFormData>(
    key: K,
    value: WeddingFormData[K]
  ) => void;
  resetWeddingContent: () => void;
  syncContent: (data: WeddingFormData) => void;
}

export const useWeddingContentStore = create<WeddingStore>((set) => ({
  layoutStyle: "elegant",
  primaryColor: "pink",
  title: "Our Wedding Day",
  gregorianDate: "",
  receptionVenue: "ရန်ကုန် ဟိုတယ် (Yangon Hotel)",
  receptionTime: "",
  brideName: "မအိအိဇင်",
  brideParents: "ဦးကျော်မြင့်နှင့် ဒေါ်နီလာမိသားစု",
  groomName: "ကိုကောင်းမြတ်",
  groomParents: "ဦးကျော်မြင့်နှင့် ဒေါ်နီလာမိသားစု",
  invitationWording: "လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်",
  selectedAudioId: "",

  setWeddingField: (key, value) => set((state) => ({ ...state, [key]: value })),

  syncContent: (data) => set(data),

  resetWeddingContent: () =>
    set({
      layoutStyle: "elegant",
      primaryColor: "pink",
      title: "",
      gregorianDate: "",
      receptionVenue: "",
      receptionTime: "",
      brideName: "",
      brideParents: "",
      groomName: "",
      groomParents: "",
      invitationWording: "လေးစားစွာဖြင့် ဖိတ်ကြားအပ်ပါသည်",
      selectedAudioId: "",
    }),
}));
