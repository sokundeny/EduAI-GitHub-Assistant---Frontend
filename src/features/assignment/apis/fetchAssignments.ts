import { assignmentsStore } from "@/mock_db";
import type { Assignment } from "@/shared/types/types";

export const fetchAssignments = (classId: number) =>
  new Promise<Assignment[]>(resolve =>
    setTimeout(() => {
      console.log("init id:" , classId);
      resolve(
        assignmentsStore[classId] || []
      );
    }, 1000)
  );