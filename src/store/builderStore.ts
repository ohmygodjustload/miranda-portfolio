import { create } from "zustand";
import type { Section } from "@/types";

interface BuilderState {
  sections: Section[];
  selectedSection: string | null;
  isDirty: boolean;

  setSections: (sections: Section[]) => void;
  selectSection: (id: string | null) => void;
  markDirty: () => void;
  markClean: () => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
  sections: [],
  selectedSection: null,
  isDirty: false,

  setSections: (sections) => set({ sections, isDirty: true }),
  selectSection: (id) => set({ selectedSection: id }),
  markDirty: () => set({ isDirty: true }),
  markClean: () => set({ isDirty: false }),
}));
