import { z } from "zod";

// This schema matches the structure of your Zustand store (WeddingContent)
export const WeddingSchema = z.object({
  // Step 1: Core Details
  title: z.string().min(3, "Title must be at least 3 characters."),
  gregorianDate: z.string().min(4, "Date is required."),
  receptionVenue: z.string().min(5, "Venue details are required."),
  receptionTime: z.string().min(4, "Time is required (e.g., 7:00 PM)."),
  brideName: z.string().min(2, "Bride's name is required."),
  brideParents: z.string().min(5, "Bride's parents' names are required."),
  groomName: z.string().min(2, "Groom's name is required."),
  groomParents: z.string().min(5, "Groom's parents' names are required."),
  invitationWording: z.string().min(10, "Custom wording is usually longer."),

  // Step 2: Design
  layoutStyle: z.enum(["elegant", "classic", "floral"]),
  primaryColor: z.enum([
    "pink",
    "emerald",
    "rose",
    "orange",
    "navy",
    "purple",
    "violet",
    "fuchsia",
  ]),

  // Audio (From Zustand)
  selectedAudioId: z.string(),
});

// --- 2. Step Schemas (for RHF Validation) ---

export const Step1Schema = WeddingSchema.pick({
  title: true,
  gregorianDate: true,
  receptionVenue: true,
  receptionTime: true,
  brideName: true,
  brideParents: true,
  groomName: true,
  groomParents: true,
  invitationWording: true,
});

export const Step2Schema = WeddingSchema.pick({
  layoutStyle: true,
  primaryColor: true,
});

// --- 3. Infer TypeScript Type (Crucial for RHF and Zustand) ---
export type WeddingFormData = z.infer<typeof WeddingSchema>;
export type Step1FormData = z.infer<typeof Step1Schema>;
export type Step2FormData = z.infer<typeof Step2Schema>;
