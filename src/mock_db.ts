import type { Assignment } from "./shared/types/types";

export const assignmentsStore: Record<number, Assignment[]> = {
  1: [
    { id: 1, title: "Math Homework 1", classId: 1 },
    { id: 2, title: "Math Project", classId: 1 },
    { id: 3, title: "Math Quiz 1", classId: 1 }
  ],
  2: [
    { id: 1, title: "Science Lab Report", classId: 2 },
    { id: 2, title: "Physics Assignment", classId: 2 },
    { id: 3, title: "Chemistry Quiz", classId: 2 }
  ],
  3: [
    { id: 1, title: "History Essay", classId: 3 },
    { id: 2, title: "Geography Project", classId: 3 },
    { id: 3, title: "Civics Assignment", classId: 3 }
  ]
};