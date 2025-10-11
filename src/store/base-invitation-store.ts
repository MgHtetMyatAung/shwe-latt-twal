import { EventType } from "@/generated/prisma";
import { create } from "zustand"; // Import the Enum type from Prisma

interface BaseState {
  invitationId: string | null; // ID from the database (null for a new invite)
  userId: string | null; // User ID from Better Auth (for ownership)
  slug: string; // Short, unique URL identifier (e.g., 'my-shinbyu')

  eventType: EventType | null; // The type of ceremony (from Prisma Enum)
  isPublished: boolean; // Toggles the public viewing status
  isGuestListEnabled: boolean; // Toggles the Personalized Sharing feature

  setBaseMetadata: (data: Partial<BaseState>) => void;
  resetBaseState: () => void;
}

export const useBaseInvitationStore = create<BaseState>((set) => ({
  invitationId: null,
  userId: null,
  slug: "",
  eventType: null,
  isPublished: false,
  isGuestListEnabled: false,

  setBaseMetadata: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),

  resetBaseState: () =>
    set({
      invitationId: null,
      userId: null,
      slug: "",
      eventType: null,
      isPublished: false,
      isGuestListEnabled: false,
    }),
}));
