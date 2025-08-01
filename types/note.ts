import type { Tag } from "@/lib/constants";

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: Tag;
}

export interface NewNoteData {
  title: string;
  content?: string;
  tag: Tag;
}

