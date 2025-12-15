// src/features/assignment/store/assignmentStore.ts
import { create } from "zustand";

interface AssignmentUIState {
  isCreateDialogOpen: boolean;
  setCreateDialogOpen: (open: boolean) => void;
}

export const useAssignmentUIStore = create<AssignmentUIState>((set) => ({
  isCreateDialogOpen: false,
  setCreateDialogOpen: (open) => set({ isCreateDialogOpen: open }),
}));
