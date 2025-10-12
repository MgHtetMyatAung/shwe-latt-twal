interface WeddingInfoType {
  layoutStyle: "elegant" | "classic" | "floral";
  primaryColor: string;
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
