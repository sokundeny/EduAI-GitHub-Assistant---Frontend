// src/types/index.ts

export type Class = {
  id: number;
  name: string;
};

export type Assignment = {
  id: number;
  title: string;
  classId: number;
};

export type Challenge = {
  id: number;
  assignmentId: number;
  content: string;
};
