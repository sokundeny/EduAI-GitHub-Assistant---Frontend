import { create } from "zustand";

interface GlobalState {
  mainBarAction: string | null; // add state
  selectedClassId: number | null;
  selectedAssignmentId: number | null;
  setSelectedClassId: (id: number | null) => void;
  setSelectedAssignmentId: (id: number | null) => void;
  setMainBarAction: (action: string | null) => void; // add setter
}

export const useGlobalStore = create<GlobalState>((set) => ({
  mainBarAction: null, // initial value
  selectedClassId: null,
  selectedAssignmentId: null,
  setSelectedClassId: (id) => set({ selectedClassId: id }),
  setSelectedAssignmentId: (id) => set({ selectedAssignmentId: id }),
  setMainBarAction: (action) => set({ mainBarAction: action }), // implement setter
}));
