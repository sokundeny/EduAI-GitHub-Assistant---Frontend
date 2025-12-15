import { assignmentsStore } from "@/mock_db";
import type { Assignment } from "@/shared/types/types";

export const createAssignment = ({classId, title} : {classId: number, title: string}) =>
  new Promise<Assignment>(resolve => {
    const newAssignment: Assignment = {
      id: assignmentsStore[classId]?.length
        ? assignmentsStore[classId].length + 1
        : 1,
      title,
      classId
    };

    if (!assignmentsStore[classId]) {
      assignmentsStore[classId] = [];
    }

    assignmentsStore[classId].push(newAssignment);

    setTimeout(() => resolve(newAssignment), 200);
  });