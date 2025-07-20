import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_TAG } from "@/lib/constants";
import { NewNoteData } from "@/types/note";

type NoteDraftStore = {
  draft: NewNoteData;
  setDraft: (note: NewNoteData) => void;
  clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: "",
  content: "",
  tag: DEFAULT_TAG,
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    { name: "note-draft", partialize: (state) => ({ draft: state.draft }) }
  )
);

